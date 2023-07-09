resource "docker_image" "l2-restapi" {
  name = "${local.project_name}_${var.environment}_l2_restapi"

  build {
    path       = abspath(path.cwd)
    dockerfile = "./infrastructure/docker/restapi.Dockerfile"

    tag = [
      "${var.environment}"
    ]
    label = {
      author : "ixmael"
    }
  }
}
