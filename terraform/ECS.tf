module "ecs_cluster" {
  source  = "infrablocks/ecs-cluster/aws"
  version = "3.4.0"

  region     = "us-east-1"
  vpc_id     = aws_default_vpc.default.id
  subnet_ids = [aws_default_subnet.default_us-east-1a.id, aws_default_subnet.default_us-east-1b.id]

  component             = "here"
  deployment_identifier = "listen"

  cluster_name                         = "cluster"
  cluster_instance_ssh_public_key_path = "./terraform.pub"
  cluster_instance_type                = "t2.micro"

  cluster_minimum_size     = 0
  cluster_maximum_size     = 2
  cluster_desired_capacity = 2
  security_groups          = [aws_security_group.here-listen-sg.id]
}


# That element variable yeah? thats
# because to get that endpoint it comes with a port unfortunatly ;/



#TASK DEFINITION FOR users 
resource "aws_ecs_task_definition" "here-listen-users-td" {
  family = "here-listen-users-td"

  container_definitions = <<DEFINITION
[
  {
    "cpu": 0,
    "environment": [{
      "name": "DATABASE_HOST",
      "value": "${element(split(":", aws_db_instance.here-listen-db.endpoint), 0)}"
    },
    {"name":"MYSQL_ROOT_PASSWORD",
    "value":"${var.mysql-root-password}"
    },
    {"name":"MYSQL_USER",
    "value":"${var.mysql-user}"
    }
    ],


    "portMappings": [
        {
          "hostPort": 0,
          "protocol": "tcp",
          "containerPort": 5000
        }
      ],




    "essential": true,
    "image": "${var.aws-account-id}.dkr.ecr.${var.aws-region}.amazonaws.com/here-listen-users:prod",
    "memory": null,
    "memoryReservation": 128,
    "name": "users"
  }
]
DEFINITION
}




#TASK DEFINITION FOR CLIENT
resource "aws_ecs_task_definition" "here-listen-client-td" {
  family = "here-listen-client-td"

  container_definitions = <<DEFINITION
[
  {
    "cpu": 0,
    "environment": [{
      "name": "SECRET",
      "value": "KEY"
    },
    {"name":"KEY1",
    "value":"VALUE1"
    }
    ],


    "portMappings": [
        {
          "hostPort": 0,
          "protocol": "tcp",
          "containerPort": 80
        }
      ],




    "essential": true,
    "image": "${var.aws-account-id}.dkr.ecr.${var.aws-region}.amazonaws.com/here-listen-client:prod",
    "memory": null,
    "memoryReservation": 128,
    "name": "client"
  }
]
DEFINITION
}



# FOR USERS SERVICE
resource "aws_ecs_service" "here-listen-users-service" {
  name            = "here-listen-users-service"
  cluster         = "here-listen-cluster"
  task_definition = aws_ecs_task_definition.here-listen-users-td.arn
  desired_count   = 1



  load_balancer {
    target_group_arn = aws_lb_target_group.users.arn
    container_name   = "users"
    container_port   = 5000
  }


}


# FOR CLIENT SERVICE


resource "aws_ecs_service" "here-listen-client-service" {
  name            = "here-listen-client-service"
  cluster         = "here-listen-cluster"
  task_definition = aws_ecs_task_definition.here-listen-client-td.arn
  desired_count   = 1


  load_balancer {
    target_group_arn = aws_lb_target_group.client.arn
    container_name   = "client"
    container_port   = 80
  }


}



