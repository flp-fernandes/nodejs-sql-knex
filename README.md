# nodejs-sql-knex

- install docker
    https://docs.docker.com/engine/install/ubuntu/#installation-methods
- download Postgres image
    sudo docker pull postgres
- create container:
        sudo docker run -d -p 5432:5432 --name knextest -e POSTGRES_PASSWORD=mypassword postgres 
            *(user: postgres / password: defined in POSTGRES_PASSWORD variable)
- start container
    sudo docker start <nomeDB>

Command line docker postgres:
    *sudo docker exec -it knextest bash
    *\q 
