variable "environment" {
  type = string
  description = "The current environment"
}

variable "user_id" {
  type = number
  description = "The user ID for the containers"
}

variable "user_name" {
  type = string
  description = "The user name for the containers"
}

variable "restapi_port" {
  type        = number
  default     = 3000
  description = "The port for the RestAPI server."
}