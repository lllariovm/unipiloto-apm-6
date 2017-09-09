import {Customer} from "../models/customer";
import {LineItem} from "../models/line-item";
import {Product} from "../models/product";
import {SalesInvoice} from "../models/sales-invoice";

export class InMemoryDbService implements InMemoryDbService {
	createDb() {
		let PRODUCTS: Array<Product> = [
		    {
		        id: 1,
		        name: "Samsung galaxy 8"
		    },
		    {
		        id: 2,
		        name: "Samsung galaxy 10"
		    },
		    {
		        id: 3,
		        name: "Samsung galaxy 20"
		    }
		];

		let CUSTOMERS: Array<Customer> = [
		    {
		        id: 1,
		        name: "Alejandro Romero"
		    },
		    {
		        id: 2,
		        name: "Pedro Chin"
		    },
		    {
		        id: 3,
		        name: "Jaime Meluq"
		    }
		];

		let _PRODUCTS: Product[] = PRODUCTS;

		let LINE_ITEMS: Array<LineItem> = [
		    {
		        id: 1,
		        productId: _PRODUCTS[0].id,
		        purchasePrice: 250000
		    },
		    {
		        id: 2,
		        productId: _PRODUCTS[1].id,
		        purchasePrice: 255000
		    },
		    {
		        id: 3,
		        productId: _PRODUCTS[2].id,
		        purchasePrice: 120000
		    }
		];
		
		let _CUSTOMERS: Customer[] = CUSTOMERS;

		let SALES_INVOICES: Array<SalesInvoice> = [
		    {
		        id: 1,
		        customer: _CUSTOMERS[0],
		        lineItems: [
		            {
		                id: 1,
		                productId: _PRODUCTS[0].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 2,
		                productId: _PRODUCTS[1].id,
		                purchasePrice: 250000
		            }
		        ],
		        invoiceAmount: 10000,
		        tax: 16
		    },
		    {
		        id: 2,
		        customer: _CUSTOMERS[0],
		        lineItems: [
		            {
		                id: 1,
		                productId: _PRODUCTS[0].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 2,
		                productId: _PRODUCTS[1].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 3,
		                productId: _PRODUCTS[2].id,
		                purchasePrice: 120000
		            }
		        ],
		        invoiceAmount: 3434334,
		        tax: 16
		    },
		    {
		        id: 20,
		        customer: _CUSTOMERS[0],
		        lineItems: [
		            {
		                id: 1,
		                productId: _PRODUCTS[0].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 3,
		                productId: _PRODUCTS[2].id,
		                purchasePrice: 120000
		            }
		        ],
		        invoiceAmount:121213,
		        tax: 16
		    },
		    {
		        id: 19,
		        customer: _CUSTOMERS[0],
		        lineItems: [
		            {
		                id: 1,
		                productId: _PRODUCTS[0].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 2,
		                productId: _PRODUCTS[1].id,
		                purchasePrice: 250000
		            }
		        ],
		        invoiceAmount: 10000,
		        tax: 16
		    },
		    {
		        id: 22,
		        customer: _CUSTOMERS[0],
		        lineItems: [
		            {
		                id: 1,
		                productId: _PRODUCTS[0].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 2,
		                productId: _PRODUCTS[1].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 3,
		                productId: _PRODUCTS[2].id,
		                purchasePrice: 120000
		            }
		        ],
		        invoiceAmount: 3434334,
		        tax: 16
		    },
		    {
		        id: 200,
		        customer: _CUSTOMERS[1],
		        lineItems: [
		            {
		                id: 1,
		                productId: _PRODUCTS[0].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 3,
		                productId: _PRODUCTS[2].id,
		                purchasePrice: 120000
		            }
		        ],
		        invoiceAmount:121213,
		        tax: 16
		    },
		    {
		        id: 17,
		        customer: _CUSTOMERS[2],
		        lineItems: [
		            {
		                id: 1,
		                productId: _PRODUCTS[0].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 2,
		                productId: _PRODUCTS[1].id,
		                purchasePrice: 250000
		            }
		        ],
		        invoiceAmount: 10000,
		        tax: 16
		    },
		    {
		        id: 29,
		        customer: _CUSTOMERS[0],
		        lineItems: [
		            {
		                id: 1,
		                productId: _PRODUCTS[0].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 2,
		                productId: _PRODUCTS[1].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 3,
		                productId: _PRODUCTS[2].id,
		                purchasePrice: 120000
		            }
		        ],
		        invoiceAmount: 3434334,
		        tax: 16
		    },
		    {
		        id: 20,
		        customer: _CUSTOMERS[1],
		        lineItems: [
		            {
		                id: 1,
		                productId: _PRODUCTS[0].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 3,
		                productId: _PRODUCTS[2].id,
		                purchasePrice: 120000
		            }
		        ],
		        invoiceAmount:121213,
		        tax: 16
		    },
		    {
		        id: 41,
		        customer: _CUSTOMERS[1],
		        lineItems: [
		            {
		                id: 1,
		                productId: _PRODUCTS[0].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 2,
		                productId: _PRODUCTS[1].id,
		                purchasePrice: 250000
		            }
		        ],
		        invoiceAmount: 10000,
		        tax: 16
		    },
		    {
		        id: 62,
		        customer: _CUSTOMERS[2],
		        lineItems: [
		            {
		                id: 1,
		                productId: _PRODUCTS[0].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 2,
		                productId: _PRODUCTS[1].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 3,
		                productId: _PRODUCTS[2].id,
		                purchasePrice: 120000
		            }
		        ],
		        invoiceAmount: 3434334,
		        tax: 16
		    },
		    {
		        id: 220,
		        customer: _CUSTOMERS[0],
		        lineItems: [
		            {
		                id: 1,
		                productId: _PRODUCTS[0].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 3,
		                productId: _PRODUCTS[2].id,
		                purchasePrice: 120000
		            }
		        ],
		        invoiceAmount:121213,
		        tax: 16
		    },
		    {
		        id: 123,
		        customer: _CUSTOMERS[1],
		        lineItems: [
		            {
		                id: 1,
		                productId: _PRODUCTS[0].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 2,
		                productId: _PRODUCTS[1].id,
		                purchasePrice: 250000
		            }
		        ],
		        invoiceAmount: 10000,
		        tax: 16
		    },
		    {
		        id: 223,
		        customer: _CUSTOMERS[0],
		        lineItems: [
		            {
		                id: 1,
		                productId: _PRODUCTS[0].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 2,
		                productId: _PRODUCTS[1].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 3,
		                productId: _PRODUCTS[2].id,
		                purchasePrice: 120000
		            }
		        ],
		        invoiceAmount: 3434334,
		        tax: 16
		    },
		    {
		        id: 2016,
		        customer: _CUSTOMERS[2],
		        lineItems: [
		            {
		                id: 1,
		                productId: _PRODUCTS[0].id,
		                purchasePrice: 250000
		            },
		            {
		                id: 3,
		                productId: _PRODUCTS[2].id,
		                purchasePrice: 120000
		            }
		        ],
		        invoiceAmount:121213,
		        tax: 16
		    }
		];
		return {PRODUCTS, CUSTOMERS, LINE_ITEMS, SALES_INVOICES};
	}
}