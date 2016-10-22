## table list

- IOT Auth/Validation/Mqtt/APNS/GCM
- Smart CAM APP(support)
- osx app
- others

## IOT Auth/Validation/Mqtt/APNS/GCM

![img](../demoList/_orbweb/IOT_flow2.png)

IPCam / App can pass message or Auth by sys

### ios

#### ORBApiKit framework

- Auth
	- account manager
	- facebook provider
- Mqtt
	- mqtt manager
- Phone
	- phone info manager
	- APNS Notification
- IOT
	- regi manager
	- share manager
- document fromat
- flow
- universal framework script
- archive, deploy script

#### app

- sdk demo app
- sdk debug app

### restfulapi with phalcon

- description : multi company / user / phone / IOT device
- feature
	- restful api
	- log and debug manager
	- mail with AWS
	- security variable token 
- flow chart
- database design
- use postman to integrate env test
- scirpt
	- export doc
	- deploy / upload 
	- database migration

### mqtt broker (perl)

- emqttd build
- cus plugin
- document format

### beanstalkd

- Create beanstalkd env and deploy to independent server
- Use
	- beanstalkd
	- beanstalk_console
	- beanstalkd-cli
- MQTT send topic to beanstalkd, and then send tasks to Notification Provider Server 

### Notification Provider Server(PHP)

- Dispatch task and send it to APNS / GCM
- Promise push notification 100% delivery. 

## gotomythins

A IOT platform have Live video, smart light...

### deploy use

- gcloud
- kubernetes

## Smart CAM APP

- [smart cam app(only support)](https://itunes.apple.com/us/app/orbweb.me-personal-cloud/id658709524?mt=8)


## osx app

### socket tunnel manager

- osx app : websocket

<video width="400" src='../demoList/_orbweb/orbweb_osx_app.mov' controls></video>

## orbweb.me

- xmpp build
	- nodejs plugins
- python maintain
- docker
- aws beanstalk

## others

- jenkins debug
- aws beanstalk deploy
- orbweb.me backend maintain(Python)
- docker
- kuberbetes
- gcloud
- gotomythings