resource "docker_image" "restapi" {
  name = "${local.project_name}_${var.environment}_restapi"

  build {
    path       = abspath(path.cwd)
    dockerfile = "./infrastructure/docker/restapi.Dockerfile"

    tag = [
      "${var.environment}"
    ]

    build_arg = {
      "USER" : "${var.user_name}"
      "UID" : "${var.user_id}"
      "ENVIRONMENT" : "${var.environment}"
      "APPDIR" : "${local.restapi_image_appdir}"
      "RESTAPI_PORT" : "${local.restapi_image_port}"
    }

    label = {
      author : "ixmael"
    }
  }
}
