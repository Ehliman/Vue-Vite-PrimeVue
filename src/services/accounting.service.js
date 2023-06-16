import api from './api';

export default class AccountingService {
    getAllOpenOrders() {
        return api.post('accounting/orders/openorders');
    }
    getOpenOrder(OrderNumber) {
        return api.post('accounting/orders/openorder', OrderNumber);
    }

}