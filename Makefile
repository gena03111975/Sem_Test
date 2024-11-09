export CI=true

test:
	npm test -s

prepare:
	npm test -s -- -u
deploy:
	surge

start:
	npm start