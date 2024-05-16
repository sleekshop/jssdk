import axios, {AxiosInstance} from "axios";
import Aggregation from "./routes/aggregation";
import Applications from "./routes/applications";
import Cart from "./routes/cart";
import Categories from "./routes/categories";
import Coupons from "./routes/coupons";
import Orders from "./routes/orders";
import Payment from "./routes/payment";
import Search from "./routes/search";
import Server from "./routes/server";
import Sessions from "./routes/sessions";
import ShopObjects from "./routes/shopobjects";
import User from "./routes/user";
import Warehouse from "./routes/warehouse";
import Webhooks from "./routes/webhooks";

/*
 * ----------------------------------------------------------------
 *                      SLEEKSHOP API CLIENT
 * ----------------------------------------------------------------
 */

export default class Sleekshop {

    instance: AxiosInstance;

    constructor(
        public endpoint: string,
        public licence_username: string,
        public licence_password: string,
        public licence_secret_key: string,
        public default_language: string = "de_DE",
    ) {
        if (!endpoint) throw new Error("endpoint is required.");
        if (!licence_username) throw new Error("licence_username is required.");
        if (!licence_password) throw new Error("licence_password is required.");
        if (!licence_secret_key) throw new Error("licence_secret_key is required.");

        this.instance = axios.create({
            baseURL: this.endpoint,
            timeout: 60000,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        this.aggregation = new Aggregation(this);
        this.applications = new Applications(this);
        this.cart = new Cart(this);
        this.categories = new Categories(this);
        this.coupons = new Coupons(this);
        this.orders = new Orders(this);
        this.payment = new Payment(this);
        this.search = new Search(this);
        this.server = new Server(this);
        this.sessions = new Sessions(this);
        this.shopObjects = new ShopObjects(this);
        this.user = new User(this);
        this.warehouse = new Warehouse(this);
        this.webhooks = new Webhooks(this);
    }

    public aggregation: Aggregation;
    public applications: Applications;
    public cart: Cart;
    public categories: Categories;
    public coupons: Coupons;
    public orders: Orders;
    public payment: Payment;
    public search: Search;
    public server: Server;
    public sessions: Sessions;
    public shopObjects: ShopObjects;
    public user: User;
    public warehouse: Warehouse;
    public webhooks: Webhooks;

}
