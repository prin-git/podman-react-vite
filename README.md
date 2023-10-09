### Prerequisites
# Following need to be intalled in machine
- bash
- WSL
- Ubuntu
- Docker
- PIP 
- podman compose

### step 1 :
- podman app open
###  Step 2 :
- open bash 
### Step3:
go to directory DockerViteReact
then type 
$ cd bin 

 ### Step4 type following commands in bash
##### To start dev conatiner
- $ chmod u+x diploy.sh
- $ ./diploy.sh dev up 
##### To stop devconatiner
 $ ./diploy.sh dev down 

### Step 5
##### To start prod conatiner
- Open another bash terminal and choose directory
DockerViteReact/bin
type the command
- $ ./diploy.sh prod up 
##### To stop prod conatiner
 $ ./diploy.sh prod down 

### step5

##### To see running conatiners
on CMD 
write the command 
>podman ps    

##### To see running images
on CMD 
write the command 
>podman images



