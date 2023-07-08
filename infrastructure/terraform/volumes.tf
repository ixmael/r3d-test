# resource "docker_volume" "caldav_volume" {
#  name = "${local.project_name}_${var.environment}_caldav"
#  driver_opts = {
#    type   = "none"
#    device = "${var.host_path_caldav}"
#    o      = "bind"
#  }
#}
