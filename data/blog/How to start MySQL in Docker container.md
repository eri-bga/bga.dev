---
title: How to start MySQL in Docker
date: '2020-03-08'
tags: ['Docker', 'container', 'mysql container']
draft: false
summary: A docker container image is a lightweight standalone, executable package of software that includes everthing needed to run an application.
---

## What is Docker?

    Docker is software platform that allows you to build, test, and deploy applications quickly. Docker packages software into standarized units called containers that have everthing the software needs to run including libraries, system tools, code, and runtime. Docker enables you to separate your application from your infrastructure so you can deliver software quickly. With docker you can manage your infrastructure in the same way you manage your applications.

## Key Features of Docker

    Here are a few salient features of Docker that allow it to stand out of the crowd:

    - **Ease of Packaging**: Docker allows you to package applications as portable container images to function in any conducive environment consistently from AWS ECS to on-premise Kubernetes, Google GKE, Azure ACI, and so much more.

    - **Large images to choose from**: You can use Docker Trusted Content that includes pictures from the Docker Verified Publishers from the Docker Hub Repository along with Docker Official images for your specific business use case.

    - **Seamless Integrations**: With Docker, you can seamlessly integrate with your favorite tools across your development pipeline. Docker works well with all development tools that you leverage including CircleCI, VS Code, and GitHub among others.

    - **Personalized Developer Access**: Docker lets you personalize your developer access to images via roles-based access control. Thus, Docker allows you to extract insights into activity history with the help of Docker Hub Audit Logs.

    - **Ease of Deployment**: Docker lets you deploy your applications in different containers independently and in a vast array of languages as well. Thus, by leveraging Docker you can minimize the risk of conflict between libraries, languages, and frameworks.

## What is Docker container?

    A container is a runnable instance of an image. You can create, start, stop, move or delete a container using Docker API or CLI. Moreover, you can also connect a container to one or more networks, attack storage to it, or even create a new image based on its current state.

## So, what is MySQL Container?

    MySQL container is one of the instance images running on mysql image. So, how do you run mysql commands inside mysql container? The first thing you need to do is to have a running instance of MySQL Container. To have a running instance of MySQL Container, either you need to run the following command to pull the container or you have well setup docker compose to pull the images and create container such as the mysql container. Let's step by step.

    ### step 1: Create a new instance of MySQL Container
    Make sure you have pulled the image using the following command or run `docker compose up -d` if you have already a `docker-compose.yml`file.
    command: `sudo docker pull mysql/mysql-server:latest` to pull the latest image but I will use the `docker-compose up -d` to start the containers including several other containers as in:
    ![docker ps result](/static/images/dockerps.png)
    Then make sure that the container is running and run the following command to go to inside of the container.
    `sudo docker exec -it [container_name] bash` replace [container_name] with the name of the mysql container which in my case is `laravel-practice-mysql-1`. If the container is running, you will be logged in to the shell.

    ### step 2: Accessing mysql server
        command: `mysql -u root -p`, then you will prompted to enter a password, after you insert the correct password, you may see the following screen
        ![mysql server](/static/images/mysql-server.png)
    ### step 3: Running mysql commands
    Now you can run any mysql commands for example `SHOW DATABASES;` as below
    ![Show databases](/static/images/showdb.png)
