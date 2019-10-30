crud nodejs express mysql sequelize

you´ll need to modifie
src/config/database.js to your mysql server host, user etc,
then you need do install sequelize-cli,
type npx sequelize db:create to create our db,
then type npx sequelize db:migrate to creater the tables.
use insomnia or postman to test routes.

thanks
