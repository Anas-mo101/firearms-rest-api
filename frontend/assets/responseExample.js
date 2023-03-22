

const examples = [
`[
    {
        "id": 1,
        "name": "Heckler & Koch HK SL8",
        "classification": "Semi-Automatic Rifle",
        "service_year": "1998",
        "origins": "Germany",
        "operators": "Australia; Germany; United Kingdom; United States",
        "manufactuers": "Heckler & Koch - Germany",
        "overall_length": "980 mm",
        "roles": "Sights",
        "empty_weight": "4.00 kg",
        "barrel_length": "20.08 in",
        "sights": "Iron Front and Rear; Optics Supported.",
        "caliber": "5.56x45mm NATO; .233 Remington",
        "rounds": "10-round detachable box magazine",
        "variants": "",
        "action": "Gas-Operated; Semi-Automatic; Short Stroke Piston" 
    },
    {
        "id": 2,
        "name": "Mk II  (Mills Grenade / Mills Bomb)",
        "classification": "Infantry Hand Grenade",
        "service_year": "1915",
        "origins": "United Kingdom",
        "operators": "",
        "manufactuers": "",
        "overall_length": "",
        "roles": "Fire Support",
        "empty_weight": "0.77 kg",
        "barrel_length": "3.74 in",
        "sights": "",
        "caliber": "Not Applicable",
        "rounds": "Single Use",
        "variants": "",
        "action": "Manually-Actuated; Thrown"
    },
]`,
`{
    "id": 1,
    "name": "Heckler & Koch HK SL8",
    "classification": "Semi-Automatic Rifle",
    "service_year": "1998",
    "origins": "Germany",
    "operators": "Australia; Germany; United Kingdom; United States",
    "manufactuers": "Heckler & Koch - Germany",
    "overall_length": "980 mm",
    "roles": "Sights",
    "empty_weight": "4.00 kg",
    "barrel_length": "20.08 in",
    "sights": "Iron Front and Rear; Optics Supported.",
    "caliber": "5.56x45mm NATO; .233 Remington",
    "rounds": "10-round detachable box magazine",
    "variants": "",
    "action": "Gas-Operated; Semi-Automatic; Short Stroke Piston" 
}`,
`[
    {
        "id": 1,
        "name": "Semi-Automatic Rifle",
    },
    {
        "id": 2,
        "name": "Infantry Hand Grenade",
    },
]`,
`{
    "id": 1,
    "name": "Semi-Automatic Rifle",
}
`,
`
var myHeaders = new Headers();
myHeaders.append("x-api-key", "XXXXX");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
};

fetch("/api/v1/xxx", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
`
];

export const responseExample = (index) => examples[index];
