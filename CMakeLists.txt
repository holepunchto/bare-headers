cmake_minimum_required(VERSION 3.31)

find_package(cmake-fetch REQUIRED PATHS node_modules/cmake-fetch)

project(bare_headers)

fetch_package("github:holepunchto/bare@1.18.0")

install(
  DIRECTORY $<REMOVE_DUPLICATES:$<TARGET_PROPERTY:bare,INTERFACE_INCLUDE_DIRECTORIES>>
  DESTINATION .
)
