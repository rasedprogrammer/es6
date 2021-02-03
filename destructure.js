const identify = { name: "Rased", job: "Service Man", address: "Dhaka, Bangladesh", friend: "Naeem" };
// const name = identify.name;
const { name, address, job } = identify;
// console.log(name, address, job);

const arrayCall = ["friend1", "friend2", "friend3", "friend4"];
const { firstName, ...restName } = arrayCall;

const totalName = {
    name: "Rased",
    details: {
        address: "Badda, Dhaka",
        office: "Mohakhali"
    }

}

const { office } = totalName.details;
console.log(office);