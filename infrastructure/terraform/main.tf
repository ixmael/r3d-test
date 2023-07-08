resource "docker_container" "restapi" {
  name  = "${local.project_name}_${var.environment}_restapi"
  image = docker_image.restapi.latest

  attach   = false
  must_run = true
  logs     = true
  restart  = "unless-stopped"

  env = [
    "ENVIRONMENT=${var.environment}"
  ]

  ports {
    internal = 3000
    external = var.restapi_port
  }
}
