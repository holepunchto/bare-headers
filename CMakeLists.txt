cmake_minimum_required(VERSION 3.25)

find_package(cmake-fetch REQUIRED PATHS node_modules/cmake-fetch)

project(bare_headers)

fetch_package("github:holepunchto/bare")

install(
  DIRECTORY $<TARGET_PROPERTY:bare,INTERFACE_INCLUDE_DIRECTORIES>
  DESTINATION .
)
