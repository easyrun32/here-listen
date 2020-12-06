#APPLICATION LOAD BALANCER

resource "aws_lb" "here-listen-alb" {
  name               = "here-listen-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.here-listen-sg.id, aws_default_security_group.default.id]
  subnets            = [aws_default_subnet.default_us-east-1a.id, aws_default_subnet.default_us-east-1b.id]

  enable_deletion_protection = false
}






//LISTENER for HTTPS
resource "aws_lb_listener" "listener_https" {
  load_balancer_arn = aws_lb.here-listen-alb.arn
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = "arn:aws:acm:us-east-1:642815940637:certificate/c78aa002-1f17-45bd-8735-053bc0ac9b50"
  // GO TO CLIENT
   default_action {
    type = "forward"

    target_group_arn = aws_lb_target_group.client.arn
  }

}



//LISTENER for HTTP
//REDIRECT ALL HTTP TO HTTPS ^ UP THERE
resource "aws_lb_listener" "listener_http" {
  load_balancer_arn = aws_lb.here-listen-alb.arn
  port              = "80"
  protocol          = "HTTP"
  # default_action {
  #   type = "forward"

  #   target_group_arn = aws_lb_target_group.client.arn
  # }
  default_action {
    type = "redirect"

    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
}

//Target Group
resource "aws_lb_target_group" "client" {
  name     = "here-listen-client-tg"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_default_vpc.default.id
}

//Target Group
resource "aws_lb_target_group" "users" {

  name     = "here-listen-users-tg"
  port     = 5000
  protocol = "HTTP"
  vpc_id   = aws_default_vpc.default.id
  health_check {
    path = "/test"
  }
}


//RULES
resource "aws_lb_listener_rule" "static" {
  //was this before
  # listener_arn = aws_lb_listener.listener_http.arn
  listener_arn = aws_lb_listener.listener_https.arn
  priority     = 100

  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.users.arn
  }

  condition {
    path_pattern {
      values = ["/test", "/pingdb", "/user/login", "/user/register"]
    }
  }

}











