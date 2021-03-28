const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 5,
    name: "Rakshit Nayak",
    job: "ECE ENGINEER",
    image:
      "data:image/jpeg;base64,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",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

export default reviews;
