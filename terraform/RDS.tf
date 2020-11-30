# RDS SETUP terraform goes here.
resource "aws_db_instance" "here-listen-db" {
  allocated_storage = 10
  storage_type      = "gp2"
  engine            = "mysql"
  engine_version    = "5.7.21"
  instance_class    = "db.t2.micro"
  /*
  identifier - (Optional, Forces new resource) The name 
  of the RDS instance, if omitted, Terraform will assign a
   random, unique identifier. Required if restore_to_point_in_time 
   is specified.
  */
  identifier = "here-listen-db"
  # KEEP THIS FOR DEVELOPMENT BY DEFAULT IT IS FALSE
  publicly_accessible = true

  /*
  name - (Optional) The name of the database to create when the
   DB instance is created. If this parameter is not specified, 
   no database is created in the DB instance. Note that this does
    not apply for Oracle or SQL Server engines. See the AWS 
    documentation for more details on what applies for those engines.
  */
  name                       = "users_prod"
  username                   = "admin"
  password                   = "${var.mysql-root-password}"
  parameter_group_name       = "default.mysql5.7"
  availability_zone          = "us-east-1a"
  skip_final_snapshot        = true
  max_allocated_storage      = 0
  auto_minor_version_upgrade = false
  vpc_security_group_ids     = [aws_security_group.here-listen-sg.id]
  #deletion_protection  is false
}
