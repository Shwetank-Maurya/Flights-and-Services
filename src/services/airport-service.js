const CrudService = require('./crud-service');
const { AirportRespository } = require('../repository/index');

class AirportService extends CrudService {
    constructor(){
        const airportRepository = new AirportRespository();
        super(airportRepository);
    }
}

module.exports = AirportService;