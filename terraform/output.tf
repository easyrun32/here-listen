output "Application-loadbalancer" {
  value       = aws_lb.here-listen-alb.dns_name
  description = "Alb DNS name"
}


resource "local_file" "env" {
  content  = "ALB_DNS=http://${aws_lb.here-listen-alb.dns_name}"
  filename = "../.env"
}
