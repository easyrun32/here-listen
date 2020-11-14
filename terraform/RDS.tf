# RDS SETUP terraform goes here.
resource "aws_db_instance" "here-listen-db" {
  allocated_storage          = 10
  storage_type               = "gp2"
  engine                     = "mysql"
  engine_version             = "5.7.21"
  instance_class             = "db.t2.micro"
  identifier                 = "here-listen-db"
  name                       = "db"
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
