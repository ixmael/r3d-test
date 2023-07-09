resource "docker_container" "l2-restapi" {
  name  = "${local.project_name}_${var.environment}_l2_restapi"
  image = docker_image.l2-restapi.latest

  attach   = false
  must_run = true
  logs     = true
  restart  = "unless-stopped"

  env = [
    "ENVIRONMENT=${var.environment}"
  ]

  ports {
    internal = 3000
    external = 3000
  }
}
