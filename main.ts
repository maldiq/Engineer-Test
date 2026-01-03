class Technician {
    private _name: string;
    private _averageRepairTime: number; // 1 minute ~ 1 second
    public isBusy: boolean = false;

    constructor(name: string, averageRepairTime: number) {
        this._name = name;
        this._averageRepairTime = averageRepairTime;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get name() {
        return this._name;
    }

    public set averageRepairTime(averageRepairTime: number) {
        this._averageRepairTime = averageRepairTime;
    }

    public get averageRepairTime() {
        return this._averageRepairTime;
    }

    public async repairing(customer: Customer) {
        // add logic to simulate technician repairing process

        // you can use:
        // return new Promise<Customer>((resolve) => {
        //   setTimeout(() => {
        //     resolve(customer);
        //   }, this._averageRepairTime * 1000)
        // });

        // or your own logic
        this.isBusy = true;

        console.log(
            `>> Technician ${this.name} is repairing ${customer.name}'s phone. ` +
                `Customer phone is ${customer.phoneSeries} series <<`
        );

        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(
                    `    REPAIRING DONE: ${this.name} FIXED ${customer.name}'s phone!`
                );
                this.isBusy = false;
                resolve(customer);
            }, this._averageRepairTime * 1000);
        });
    }

    // you can add your own method here
}

class Customer {
    private _name: string;
    private _phoneSeries: string;
    // you can add your own attribute

    constructor(name: string, phoneSeries: string) {
        this._name = name;
        this._phoneSeries = phoneSeries;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get name() {
        return this._name;
    }

    public set phoneSeries(phoneSeries: string) {
        this._phoneSeries = phoneSeries;
    }

    public get phoneSeries() {
        return this._phoneSeries;
    }

    // you can add your own method here
}

class ServiceCenter {
    private _name: string;
    private _address: string;
    private _technicians: Technician[];
    private _customers: Customer[];
    // you can add your own attribute
    private serviceLog: any[] = [];

    constructor(
        name: string,
        address: string,
        technicians: Technician[],
        customers: Customer[]
    ) {
        this._name = name;
        this._address = address;
        this._technicians = technicians;
        this._customers = customers;
    }

    public get name() {
        return this._name;
    }

    public async startOperating() {
        // add your logic on here
        // eg: process and print transition

        const queue = [...this._customers];

        const process = async (technician: Technician) => {
            while (queue.length > 0) {
                if (!technician.isBusy) {
                    const customer = queue.shift();
                    if (!customer) return;

                    console.log(
                        `${technician.name} available, call another customer...`
                    );

                    await technician.repairing(customer);

                    this.serviceLog.push({
                        technician: technician.name,
                        customer: customer.name,
                        phoneSeries: customer.phoneSeries,
                        repairTime: technician.averageRepairTime,
                    });
                }
                // const customer = queue.shift();
                // if (customer) {
                //     await technician.repairing(customer);
                // }
            }
        };

        // you can add your own method here
        await Promise.all(
            this._technicians.map((technician) => process(technician))
        );

        console.log("\nService Center Log for today:");
        console.table(this.serviceLog);
    }
}

// ====================================================================================
// MAIN
// ====================================================================================

// Define Technician
const dalton = new Technician("Dalton", 10); // 10 seconds
const wapol = new Technician("Wapol", 20); // 20 seconds
const technicians = [dalton, wapol];

const phoneSeriesList = [
    "Leopard",
    "Lion",
    "Jaguar",
    "Jaguar",
    "Jaguar",
    "Leopard",
    "Jaguar",
    "Lion",
    "Jaguar",
    "Leopard",
];

// Define Customer
// Generate 10 customers
const customers = new Array(10).fill(null).map((_, index) => {
    const customer = new Customer(`Customer ${index}`, phoneSeriesList[index]);
    return customer;
});

// Define Service Center
const serviceCenter: ServiceCenter = new ServiceCenter(
    "First Service Center",
    "Long Ring Long Land Street",
    technicians,
    customers
);
console.log("Customer on queue: ");
console.table(customers);
console.log("\n");

// Begin Operating
console.log(`${serviceCenter.name} start operating today: `);
serviceCenter.startOperating().catch((err) => console.log(err));
