$(document).ready(function(){

  var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;

      // an array that will be populated with substring matches
      matches = [];

      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, 'i');

      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          // the typeahead jQuery plugin expects suggestions to a
          // JavaScript object, refer to typeahead docs for more info
          matches.push({ value: str });
        }
      });

      cb(matches);
    };
  };

  var cars = ["Affenpinscher", "Afghan Hound", "Airedale Terrier", "Akbash", "Akita", "Alaskan Malamute", "American Bulldog", "American Eskimo Dog", "American Hairless Terrier", "American Staffordshire Terrier", "American Water Spaniel", "Anatolian Shepherd", "Appenzell Mountain Dog", "Australian Cattle Dog (Blue Heeler)", "Australian Kelpie", "Australian Shepherd", "Australian Terrier", "Basenji", "Basset Hound", "Beagle", "Bearded Collie", "Beauceron", "Bedlington Terrier", "Belgian Shepherd Dog Sheepdog", "Belgian Shepherd Laekenois", "Belgian Shepherd Malinois", "Belgian Shepherd Tervuren", "Bernese Mountain Dog", "Bichon Frise", "Black and Tan Coonhound", "Black Labrador Retriever", "Black Mouth Cur", "Black Russian Terrier", "Bloodhound", "Blue Lacy", "Bluetick Coonhound", "Boerboel", "Bolognese", "Border Collie", "Border Terrier", "Borzoi", "Boston Terrier", "Bouvier des Flanders", "Boxer", "Boykin Spaniel", "Briard", "Brittany Spaniel", "Brussels Griffon", "Bull Terrier", "Bullmastiff", "Cairn Terrier", "Canaan Dog", "Cane Corso Mastiff", "Carolina Dog", "Catahoula Leopard Dog", "Cattle Dog", "Caucasian Sheepdog (Caucasian Ovtcharka)", "Cavalier King Charles Spaniel", "Chesapeake Bay Retriever", "Chihuahua", "Chinese Crested Dog", "Chinese Foo Dog", "Chinook", "Chocolate Labrador Retriever", "Chow Chow", "Cirneco dell'Etna", "Clumber Spaniel", "Cockapoo", "Cocker Spaniel", "Collie", "Coonhound", "Corgi", "Coton de Tulear", "Curly-Coated Retriever", "Dachshund", "Dalmatian", "Dandi Dinmont Terrier", "Doberman Pinscher", "Dogo Argentino", "Dogue de Bordeaux", "Dutch Shepherd", "English Bulldog", "English Cocker Spaniel", "English Coonhound", "English Pointer", "English Setter", "English Shepherd", "English Springer Spaniel", "English Toy Spaniel", "Entlebucher", "Eskimo Dog", "Feist", "Field Spaniel", "Fila Brasileiro", "Finnish Lapphund", "Finnish Spitz", "Flat-coated Retriever", "Fox Terrier", "Foxhound", "French Bulldog", "Galgo Spanish Greyhound", "German Pinscher", "German Shepherd Dog", "German Shorthaired Pointer", "German Spitz", "German Wirehaired Pointer", "Giant Schnauzer", "Glen of Imaal Terrier", "Golden Retriever", "Gordon Setter", "Great Dane", "Great Pyrenees", "Greater Swiss Mountain Dog", "Greyhound", "Harrier", "Havanese", "Hound", "Hovawart", "Husky", "Ibizan Hound", "Icelandic Sheepdog", "Illyrian Sheepdog", "Irish Setter", "Irish Terrier", "Irish Water Spaniel", "Irish Wolfhound", "Italian Greyhound", "Italian Spinone", "Jack Russell Terrier", "Jack Russell Terrier (Parson Russell Terrier)", "Japanese Chin", "Jindo", "Kai Dog", "Karelian Bear Dog", "Keeshond", "Kerry Blue Terrier", "Kishu", "Klee Kai", "Komondor", "Kuvasz", "Kyi Leo", "Labrador Retriever", "Lakeland Terrier", "Lancashire Heeler", "Leonberger", "Lhasa Apso", "Lowchen", "Maltese", "Manchester Terrier", "Maremma Sheepdog", "Mastiff", "McNab", "Miniature Pinscher", "Mountain Cur", "Mountain Dog", "Munsterlander", "Neapolitan Mastiff", "New Guinea Singing Dog", "Newfoundland Dog", "Norfolk Terrier", "Norwegian Buhund", "Norwegian Elkhound", "Norwegian Lundehund", "Norwich Terrier", "Nova Scotia Duck-Tolling Retriever", "Old English Sheepdog", "Otterhound", "Papillon", "Patterdale Terrier (Fell Terrier)", "Pekingese", "Peruvian Inca Orchid", "Petit Basset Griffon Vendeen", "Pharaoh Hound", "Pit Bull Terrier", "Plott Hound", "Podengo Portugueso", "Pointer", "Polish Lowland Sheepdog", "Pomeranian", "Poodle", "Portuguese Water Dog", "Presa Canario", "Pug", "Puli", "Pumi", "Rat Terrier", "Redbone Coonhound", "Retriever", "Rhodesian Ridgeback", "Rottweiler", "Saint Bernard St. Bernard", "Saluki", "Samoyed", "Sarplaninac", "Schipperke", "Schnauzer", "Scottish Deerhound", "Scottish Terrier Scottie", "Sealyham Terrier", "Setter", "Shar Pei", "Sheep Dog", "Shepherd", "Shetland Sheepdog Sheltie", "Shiba Inu", "Shih Tzu", "Siberian Husky", "Silky Terrier", "Skye Terrier", "Sloughi", "Smooth Fox Terrier", "South Russian Ovtcharka", "Spaniel", "Spitz", "Staffordshire Bull Terrier", "Standard Poodle", "Sussex Spaniel", "Swedish Vallhund", "Terrier", "Thai Ridgeback", "Tibetan Mastiff", "Tibetan Spaniel", "Tibetan Terrier", "Tosa Inu", "Toy Fox Terrier", "Treeing Walker Coonhound", "Vizsla", "Weimaraner", "Welsh Corgi", "Welsh Springer Spaniel", "Welsh Terrier", "West Highland White Terrier Westie", "Wheaten Terrier", "Whippet", "White German Shepherd", "Wire Fox Terrier", "Wire-haired Pointing Griffon", "Wirehaired Terrier", "Xoloitzcuintle (Mexican Hairless)", "Yellow Labrador Retriever", "Yorkshire Terrier Yorkie","Abyssinian", "American Curl", "American Shorthair", "American Wirehair", "Applehead Siamese", "Balinese", "Bengal", "Birman", "Bobtail", "Bombay", "British Shorthair", "Burmese", "Burmilla", "Calico", "Canadian Hairless", "Chartreux", "Chausie", "Chinchilla", "Cornish Rex", "Cymric", "Devon Rex", "Dilute Calico", "Dilute Tortoiseshell", "Domestic Long Hair", "Domestic Long Hair - brown", "Domestic Long Hair - buff", "Domestic Long Hair - buff and white", "Domestic Long Hair - gray and white", "Domestic Long Hair - orange", "Domestic Long Hair - orange and white", "Domestic Long Hair-black", "Domestic Long Hair-black and white", "Domestic Long Hair-gray", "Domestic Long Hair-white", "Domestic Medium Hair", "Domestic Medium Hair - brown", "Domestic Medium Hair - buff", "Domestic Medium Hair - buff and white", "Domestic Medium Hair - gray and white", "Domestic Medium Hair - orange and white", "Domestic Medium Hair-black", "Domestic Medium Hair-black and white", "Domestic Medium Hair-gray", "Domestic Medium Hair-orange", "Domestic Medium Hair-white", "Domestic Short Hair", "Domestic Short Hair - brown", "Domestic Short Hair - buff", "Domestic Short Hair - buff and white", "Domestic Short Hair - gray and white", "Domestic Short Hair - orange and white", "Domestic Short Hair-black", "Domestic Short Hair-black and white", "Domestic Short Hair-gray", "Domestic Short Hair-mitted", "Domestic Short Hair-orange", "Domestic Short Hair-white", "Egyptian Mau", "Exotic Shorthair", "Extra-Toes Cat (Hemingway Polydactyl)", "Havana", "Himalayan", "Japanese Bobtail", "Javanese", "Korat", "LaPerm", "Maine Coon", "Manx", "Munchkin", "Nebelung", "Norwegian Forest Cat", "Ocicat", "Oriental Long Hair", "Oriental Short Hair", "Oriental Tabby", "Persian", "Pixie-Bob", "Ragamuffin", "Ragdoll", "Russian Blue", "Scottish Fold", "Selkirk Rex", "Siamese", "Siberian", "Silver", "Singapura", "Snowshoe", "Somali", "Sphynx (hairless cat)", "Tabby", "Tabby - black", "Tabby - Brown", "Tabby - buff", "Tabby - Grey", "Tabby - Orange", "Tabby - white", "Tiger", "Tonkinese", "Torbie", "Tortoiseshell", "Turkish Angora", "Turkish Van", "Tuxedo"]

  $('.typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'breed',
    displayKey: 'value',
    source: substringMatcher(cars)
  });

});
