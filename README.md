## Description

Learn step-by-step how to set up Nest Queue with Bull Queue and Redis, and gain insights into the seamless functioning of this powerful combination.
For each step I've created a separate branch.

## Clone Repo

```bash
$ git clone git@github.com:Lakshya-Saini/Nest-Bull-Queue.git
```

## Running the app

```bash
# create docker image
$ docker build -t nest-app .

# run image in container
$ docker run -p 3000:3000 -d nest-app
```

## What is NestJS Queue ?
```
Nest provides a package @nestjs/bull which a wrapper on top of bull.

Bull is a popular, high performance, node.js based queue system implementation.
Now Bull is built on top of Redis and uses it to persist job data.
So, in order to use bull, we need to have redis installed on our system.
```

## How Bull Queue Works ?
```
Bull Queue works on the producer-consumer pattern. 

Producer adds job to the queue with specified payload and optional config.
The job is serialized and stored in Redis database, making it available for processing.

Jobs are processed by worker processes.
These workers can run on the same server or be distributed across multiple servers.

When a worker starts, it connects to the Redis server and begins listening for jobs on the specified queue.

When a job becomes available, the worker dequeues it, processes the job's payload, and executes the specified processing logic.
```

## Steps
```
1. Register Bull config and add redis connection.
2. Register Queue
3. Producer - Add job to the queue.
4. Consumer - Create worker processes to process jobs.
5. Add event listeners
```
