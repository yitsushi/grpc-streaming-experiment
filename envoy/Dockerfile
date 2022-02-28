from envoyproxy/envoy:v1.20.2

copy envoy.yaml /etc/envoy/envoy.yaml
run chmod go+r /etc/envoy/envoy.yaml
cmd ["envoy", "-c", "/etc/envoy/envoy.yaml"]
