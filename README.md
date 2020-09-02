# nodejs-sql-knex

sudo docker run -d -p 5432:5432 --name knextest -e POSTGRES_PASSWORD=mypassword postgres 
    *(user: postgres / password: definido em POSTGRES_PASSWORD)
sudo docker start <nomeDB>

Command line docker postgres:
    *sudo docker exec -it knextest bash
    *\q 
