PWD=$(shell pwd)
cmd:
	docker run --rm -v ${PWD}:/app -w /app \
		-e PORT=9091 -p 9091:9091 node npm ${CMD}
run:
	$(MAKE) cmd CMD="start"
install:
	$(MAKE) cmd CMD="install -S ${PACKAGE}"
