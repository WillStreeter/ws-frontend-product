# Frontend Trial Project 

## Wip  A front-end data-grid for garments

### Steps for Building

#### Dependencies
   1) I am using Docker for macs.
       ( The easist way  is to use docker with the set of Make commands I have established )




### Steps with Docker

    // build the images
     ~$: make build-dev
    // create the container
     ~$: make up

     [Go to link: http://localhost:5555/#/] =(http://localhost:5555/#/)

     //after viewing you can close the docker
     ~$: make down


 ### Still to do

     -> enhance Search it is a little clunky.
     -> make responsive
     -> do validation for input...
     -> enable Uber edit from the grid Control bar

     -> While docker is easiest for me, I know it is not for others so I need to to fix build script to accurately
        create a build on the client without docker. Currently the Docker copies volumes into relevant areas of the
        container for style processing and a few other development concerns.

     -> enabling hosting  with GitHub Pages, so current version will work

