const countries = [
    {
        name: 'Afghanistan',
        hints: [
          'This country was one of the founding members of the Non-Aligned Movement in 1961, despite being heavily influenced by both the United States and the Soviet Union during the Cold War.',
          'It is a landlocked country that has historically been known as the "Graveyard of Empires" due to its resistance to foreign occupation.',
          'The Durand Line, established in 1893, serves as the border between this country and Pakistan, though it remains a source of tension.',
          'The country\'s economy is heavily reliant on agriculture, particularly the production of opium poppy, which supplies the majority of the world\'s heroin.',
          'The capital of this country is Kabul.'
        ]
      },
      {
        name: 'Albania',
        hints: [
          'This country, though located in Europe, was once one of the most isolated and staunchly atheist states during the 20th century.',
          'It is the only European country that has more bunkers per capita than any other nation, built under the communist regime.',
          'The country is home to the ancient city of Butrint, a UNESCO World Heritage Site.',
          'Skanderbeg, a national hero, is remembered for leading a rebellion against the Ottoman Empire in the 15th century.',
          'The capital of this country is Tirana.'
        ]
      },
      {
        name: 'Algeria',
        hints: [
          'This country was the birthplace of the National Liberation Front (FLN), a key player in a brutal war of independence from France.',
          'It is the largest country by land area in Africa and the 10th largest in the world.',
          'The country has a significant portion of its territory covered by the Sahara Desert.',
          'It gained independence in 1962 after a war that lasted eight years, marking the end of French colonization in Africa.',
          'The capital of this country is Algiers.'
        ]
      },
      {
        name: 'Andorra',
        hints: [
          'This microstate is one of only two countries in the world whose official language is Catalan.',
          'It is a co-principality, with two princes: one from Spain and one from France.',
          'This country has no airport or railways and is located in the Pyrenees mountains.',
          'The economy is largely driven by tourism, banking, and duty-free shopping.',
          'The capital of this country is Andorra la Vella.'
        ]
      },
      {
        name: 'Angola',
        hints: [
          'This country, located on the west coast of Southern Africa, was a Portuguese colony until 1975.',
          'It is one of the most oil-rich countries in Africa but also one of the most corrupt.',
          'The civil war in this country lasted from 1975 to 2002, one of the longest conflicts in Africa.',
          'The Kwanza River is the longest river entirely within this country.',
          'The capital of this country is Luanda.'
        ]
      },
      {
        name: 'Antigua and Barbuda',
        hints: [
          'The country\'s Black Pineapple is a rare variety that has become an important part of its agricultural sector, contributing to both local culture and economy despite its small size.',
          'It is part of the Commonwealth and recognizes the British monarch as the head of state.',
          'The country consists of two major islands and several smaller ones, with the name derived from two of the larger islands.',
          'This country is known for its 365 beaches, one for every day of the year.',
          'The capital of this country is St. John\'s.'
        ]
      },
      {
        name: 'Argentina',
        hints: [
          'The country was the site of the “Dirty War” (1976-1983), during which the government engaged in widespread human rights abuses, including the forced disappearance of thousands of suspected dissidents.',
          'It is one of the world\'s leading producers of soybeans and beef.',
          'The country was the home of Eva Perón, a famous First Lady who became a symbol of social justice.',
          'This country experienced one of the largest debt defaults in history in 2001.',
          'The capital of this country is Buenos Aires.'
        ]
      },
      {
        name: 'Armenia',
        hints: [
          'This country was the first in the world to adopt Christianity as a state religion in 301 AD.',
          'It is a landlocked country located in the South Caucasus region of Eurasia.',
          'The country has a significant diaspora, with more Armenians living abroad than in the country itself.',
          'The conflict over Nagorno-Karabakh has been a major issue between this country and its neighbor Azerbaijan.',
          'The capital of this country is Yerevan.'
        ]
      },
      {
        name: 'Australia',
        hints: [
          'This country is the located on the only continent without an active volcano.',
          'It is home to the world\'s oldest continuous culture, that of the Indigenous Australians.',
          'The Great Barrier Reef, located off this country\'s coast, is the largest coral reef system in the world.',
          'This country is known for its unique marsupials, such as the kangaroo and the koala.',
          'The capital of this country is Canberra.'
        ]
      },
      {
        name: 'Austria',
        hints: [
          'This country was once the center of the Habsburg Monarchy and a major player in European politics.',
          'It is home to the OPEC headquarters, despite not being a major oil producer.',
          'The country remained officially neutral during the Cold War and is still known for its neutrality.',
          'Vienna, the capital, has consistently ranked as one of the world\'s most livable cities.',
          'The capital of this country is Vienna.'
        ]
      },
      {
        name: 'Azerbaijan',
        hints: [
          'This country is part of the Commonwealth of Independent States (CIS) but maintains a strained relationship with Russia.',
          'It is one of the few countries with a majority Muslim population that has strong secular traditions.',
          'The country is rich in oil and natural gas, especially around the Caspian Sea.',
          'This country has been in a prolonged conflict with Armenia over the Nagorno-Karabakh region.',
          'The capital of this country is Baku.'
        ]
      },
      {
        name: 'Bahamas',
        hints: [
          'This country gained independence from the United Kingdom in 1973 and is a member of the Commonwealth.',
          'It is an archipelago of over 700 islands, though only about 30 are inhabited.',
          'This country is a major financial center, known for its offshore banking industry.',
          'Tourism is the backbone of this country\'s economy, with millions of visitors each year.',
          'The capital of this country is Nassau.'
        ]
      },
      {
        name: 'Bahrain',
        hints: [
          'This country was the first in the Gulf region to discover oil in 1932.',
          'It is an archipelago with 33 islands, located in the Persian Gulf.',
          'The country has a majority Shia population but is ruled by a Sunni monarchy.',
          'The economy is heavily dependent on oil and gas, but the country has been diversifying into banking and finance.',
          'The capital of this country is Manama.'
        ]
      },
      {
        name: 'Bangladesh',
        hints: [
          'This country was formerly known as East Pakistan before gaining independence in 1971 after a brutal war.',
          'It is one of the most densely populated countries in the world, with over 160 million people.',
          'The country is famous for its textile industry, which is one of the largest in the world.',
          'The Ganges Delta, located in this country, is the largest river delta in the world.',
          'The capital of this country is Dhaka.'
        ]
      },
      {
        name: 'Barbados',
        hints: [
          'This country became a republic in 2021, removing Queen Elizabeth II as its head of state.',
          'It is one of the most developed countries in the Caribbean, with a high Human Development Index.',
          'This country is famous for its production of rum, which has been produced there since the 17th century.',
          'Tourism and offshore banking are major contributors to the economy.',
          'The capital of this country is Bridgetown.'
        ]
      },
      {
        name: 'Belarus',
        hints: [
          'This country is known as "Europe\'s last dictatorship" due to its authoritarian government.',
          'It was a founding member of the Soviet Union and is still closely aligned with Russia.',
          'The country is landlocked and bordered by five countries: Russia, Ukraine, Poland, Lithuania, and Latvia.',
          'Minsk, the capital, was almost completely destroyed during World War II and was rebuilt in a Soviet style.',
          'The capital of this country is Minsk.'
        ]
      },
      {
        name: 'Belgium',
        hints: [
          'This country is home to the headquarters of the European Union and NATO.',
          'It has three official languages: Dutch, French, and German, reflecting its complex cultural identity.',
          'The country was one of the first in the world to legalize same-sex marriage in 2003.',
          'The Battle of Waterloo, which marked the end of the Napoleonic Wars, took place in this country.',
          'The capital of this country is Brussels.'
        ]
      },
      {
        name: 'Belize',
        hints: [
          'This country is the only one in Central America where English is the official language.',
          'It was formerly known as British Honduras before gaining independence in 1981.',
          'The country is home to the Belize Barrier Reef, the second-largest coral reef system in the world.',
          'This country has the lowest population density in Central America.',
          'The capital of this country is Belmopan.'
        ]
      },
      {
        name: 'Benin',
        hints: [
          'This country was once part of the Kingdom of Dahomey, a powerful West African state known for its female warriors.',
          'It is one of the countries that forms the "Slave Coast," a term used during the Atlantic slave trade era.',
          'The country became a Marxist-Leninist state after gaining independence from France in 1960 but transitioned to a multiparty democracy in 1991.',
          'Voodoo is recognized as an official religion in this country, and it plays a significant role in its culture.',
          'The capital of this country is Porto-Novo, though the seat of government is in Cotonou.'
        ]
      },
      {
        name: 'Bhutan',
        hints: [
          'This country measures its success not by GDP but by Gross National Happiness (GNH), a concept enshrined in its constitution.',
          'It was the last country in the world to introduce television and the internet, doing so in 1999.',
          'The country is located in the Eastern Himalayas and is known for its strict conservation policies, making it the only carbon-negative country in the world.',
          'The dominant religion is Vajrayana Buddhism, which influences much of its culture and lifestyle.',
          'The capital of this country is Thimphu.'
        ]
      },
      {
        name: 'Bolivia',
        hints: [
          'This country has two capitals: Sucre is the constitutional capital, while La Paz is the seat of government and executive capital.',
          'It is named after Simón Bolívar, the South American independence leader.',
          'The country is home to the Salar de Uyuni, the world\'s largest salt flat.',
          'It has a significant indigenous population, with over 60% of its people identifying as indigenous.',
          'The capital of this country is Sucre (constitutional) and La Paz (seat of government).'
        ]
      },
      {
        name: 'Bosnia and Herzegovina',
        hints: [
          'This country was part of Yugoslavia until its dissolution in the 1990s, leading to a brutal war and the Dayton Agreement in 1995.',
          'It is one of the few countries in the world that has three presidents, representing the Bosniak, Croat, and Serb ethnic groups.',
          'The country is known for the medieval bridge in Mostar, which was destroyed during the Bosnian War and later rebuilt.',
          'This country\'s terrain is mountainous, with a small portion of its territory along the Adriatic coast.',
          'The capital of this country is Sarajevo.'
        ]
      },
      {
        name: 'Botswana',
        hints: [
          'This country has one of the most stable and continuous democracies in Africa since its independence from Britain in 1966.',
          'It is one of the world\'s largest producers of diamonds, which are a major part of its economy.',
          'The country is home to the Okavango Delta, one of the most biodiverse places in Africa and a UNESCO World Heritage Site.',
          'It has one of the highest Human Development Index (HDI) ratings in Africa.',
          'The capital of this country is Gaborone.'
        ]
      },
      {
        name: 'Brazil',
        hints: [
          'This country was the last in the Americas to abolish slavery, doing so in 1888.',
          'It is the largest country in South America, covering nearly half the continent\'s landmass.',
          'The country is home to the Amazon Rainforest, the largest tropical rainforest in the world.',
          'It is the only Portuguese-speaking country in the Americas.',
          'The capital of this country is Brasília.'
        ]
      },
      {
        name: 'Brunei',
        hints: [
          'This country is one of the wealthiest in the world due to its extensive oil and natural gas reserves.',
          'It is an absolute monarchy, with the Sultan serving as both the head of state and head of government.',
          'The country is located on the island of Borneo, sharing borders with Malaysia and the South China Sea.',
          'Sharia law was fully implemented in 2014, making it one of the few countries to do so in Southeast Asia.',
          'The capital of this country is Bandar Seri Begawan.'
        ]
      },
      {
        name: 'Bulgaria',
        hints: [
          'This country is one of the oldest in Europe, having been established in 681 AD.',
          'It was a member of the Eastern Bloc and the Warsaw Pact during the Cold War.',
          'The country is known for its production of rose oil, which is used in perfumes around the world.',
          'It has a diverse geography, ranging from the Black Sea coast to mountainous regions like the Balkan and Rhodope Mountains.',
          'The capital of this country is Sofia.'
        ]
      },
      {
        name: 'Burkina Faso',
        hints: [
          'This country was formerly known as Upper Volta before it changed its name in 1984 under the revolutionary leader Thomas Sankara.',
          'It is one of the world\'s poorest countries, with a largely agrarian economy.',
          'The country is landlocked and located in West Africa, bordered by six other countries.',
          'The country has a rich tradition of music and dance, with the balafon, a wooden xylophone, being a prominent instrument.',
          'The capital of this country is Ouagadougou.'
        ]
      },
      {
        name: 'Burundi',
        hints: [
          'This country is one of the smallest in Africa by land area but has one of the highest population densities on the continent.',
          'It has experienced recurring ethnic conflict between the Hutu and Tutsi populations, similar to its neighbor Rwanda.',
          'The country\'s economy is heavily reliant on agriculture, particularly coffee and tea exports.',
          'It is a landlocked country bordered by Rwanda, Tanzania, and the Democratic Republic of the Congo.',
          'The capital of this country is Gitega, though Bujumbura is the largest city.'
        ]
      },
      {
        name: 'Cabo Verde',
        hints: [
          'This country is an archipelago off the coast of West Africa, consisting of 10 volcanic islands.',
          'It was a former Portuguese colony and gained independence in 1975.',
          'The country is known for its Creole Portuguese-African culture, particularly its morna music, which was popularized by Cesária Évora.',
          'Due to its location, the country has a history of being a significant center for the transatlantic slave trade.',
          'The capital of this country is Praia.'
        ]
      },
      {
        name: 'Cambodia',
        hints: [
          'This country was the site of one of the worst genocides of the 20th century under the Khmer Rouge regime from 1975 to 1979.',
          'It is home to Angkor Wat, the largest religious monument in the world, originally built as a Hindu temple before becoming a Buddhist site.',
          'The country\'s official language is Khmer, and Buddhism is the dominant religion.',
          'The Mekong River runs through this country, playing a vital role in its agriculture.',
          'The capital of this country is Phnom Penh.'
        ]
      },
      {
        name: 'Cameroon',
        hints: [
          'This country is known as "Africa in miniature" due to its diverse geography and cultural variety.',
          'It was a German colony before being divided between France and the United Kingdom after World War I.',
          'The country has a bilingual population, with both French and English as official languages, leading to a significant linguistic divide.',
          'The country\'s national football team, the Indomitable Lions, has won the Africa Cup of Nations multiple times.',
          'The capital of this country is Yaoundé.'
        ]
      },
      {
        name: 'Canada',
        hints: [
          'This country has the longest coastline of any country in the world, stretching over 202,080 kilometers.',
          'It is a member of the Commonwealth, recognizing the British monarch as its head of state.',
          'The country has two official languages: English and French, with the province of Quebec being predominantly French-speaking.',
          'The country\'s economy is heavily reliant on natural resources, particularly oil, natural gas, and minerals.',
          'The capital of this country is Ottawa.'
        ]
      },
      {
        name: 'Central African Republic',
        hints: [
          'This country has been one of the most unstable in Africa, with numerous coups and ongoing conflict since its independence in 1960.',
          'It is one of the least developed countries in the world, with a significant portion of the population living below the poverty line.',
          'The country is rich in natural resources, including diamonds, gold, and uranium, but these have often fueled conflict.',
          'The country is landlocked and located in Central Africa, bordered by six other countries.',
          'The capital of this country is Bangui.'
        ]
      },
      {
        name: 'Chad',
        hints: [
          'This country is named after Lake Chad, which has been shrinking dramatically over the past few decades.',
          'It is a landlocked country in Central Africa with a largely desert landscape in the north and savannah in the south.',
          'The country has been plagued by internal conflict and instability since gaining independence from France in 1960.',
          'The economy is heavily reliant on oil exports, which began in the early 2000s.',
          'The capital of this country is N\'Djamena.'
        ]
      },
      {
        name: 'Chile',
        hints: [
          'This country is one of the longest north-south oriented countries in the world, stretching over 4,300 kilometers along the western edge of South America.',
          'It was the site of one of the world\'s most infamous military dictatorships under General Augusto Pinochet from 1973 to 1990.',
          'The country has a diverse climate, ranging from the Atacama Desert in the north, one of the driest places on Earth, to the temperate rainforests in the south.',
          'The Andes Mountains run along the eastern border of this country, forming a natural barrier with Argentina.',
          'The capital of this country is Santiago.'
        ]
      },
      {
        name: 'China',
        hints: [
          'This country is the world\'s most populous, with over 1.4 billion people.',
          'It has one of the oldest continuous civilizations, with a history spanning over 4,000 years.',
          'The country\'s economic reforms since 1978 have transformed it into the world’s second-largest economy by nominal GDP.',
          'It is governed by the Communist Party, with Beijing as the seat of the central government.',
          'The capital of this country is Beijing.'
        ]
      },
      {
        name: 'Colombia',
        hints: [
          'This country is the only one in South America with coastlines on both the Pacific Ocean and the Caribbean Sea.',
          'It has been historically known for its production of coffee, which is considered some of the best in the world.',
          'The country endured a lengthy internal conflict with guerrilla groups like the FARC, which has significantly shaped its modern history.',
          'It is one of the world\'s most biodiverse countries, with rainforests, mountains, and coastlines.',
          'The capital of this country is Bogotá.'
        ]
      },
      {
        name: 'Comoros',
        hints: [
          'This country is one of the smallest in Africa, both in land area and population.',
          'It is an island nation located in the Indian Ocean, between the eastern coast of Africa and Madagascar.',
          'The country has a history of political instability, with more than 20 coups or attempted coups since gaining independence from France in 1975.',
          'Islam is the dominant religion in this country, and it is one of the few countries in Africa where the majority of the population is Muslim.',
          'The capital of this country is Moroni.'
        ]
      },
      {
        name: 'Democratic Republic of the Congo',
        hints: [
          'This country is the second-largest in Africa by land area and has one of the richest deposits of minerals, including cobalt and coltan, which are crucial for electronics.',
          'It was formerly known as Zaire until 1997, when it was renamed after the overthrow of Mobutu Sese Seko.',
          'The Congo River, the second-longest river in Africa, flows through this country, providing crucial transportation routes.',
          'Despite its wealth of natural resources, the country has been plagued by decades of conflict and is considered one of the world\'s most unstable nations.',
          'The capital of this country is Kinshasa.'
        ]
      },
      {
        name: 'Congo, Republic of the',
        hints: [
          'This country is often confused with its larger neighbor to the southeast, which shares a similar name.',
          'It was formerly a French colony and gained independence in 1960.',
          'The country\'s economy is heavily reliant on oil production, which accounts for the majority of its GDP.',
          'This country is known for its dense rainforests, which cover most of its territory and are part of the Congo Basin.',
          'The capital of this country is Brazzaville.'
        ]
      },
      {
        name: 'Costa Rica',
        hints: [
          'This country is known for having abolished its military in 1949, making it one of the few countries in the world without a standing army.',
          'It is one of the most biodiverse countries in the world, with a significant portion of its land area designated as national parks and protected areas.',
          'The country\'s economy relies heavily on ecotourism, agriculture (especially coffee and bananas), and technology.',
          'It is located in Central America, bordered by Nicaragua to the north and Panama to the south.',
          'The capital of this country is San José.'
        ]
      },
      {
        name: 'Croatia',
        hints: [
          'This country declared independence from Yugoslavia in 1991, leading to a war that lasted until 1995.',
          'It is known for its stunning Adriatic coastline, which includes over 1,000 islands.',
          'The country has a rich cultural heritage, including the historic city of Dubrovnik, which is a UNESCO World Heritage Site.',
          'It joined the European Union in 2013 but has yet to adopt the Euro as its currency.',
          'The capital of this country is Zagreb.'
        ]
      },
      {
        name: 'Cuba',
        hints: [
          'This country underwent a socialist revolution in 1959, led by Fidel Castro, which resulted in the establishment of a one-party communist state.',
          'It has been subject to a U.S. economic embargo since the early 1960s, which remains in place to this day.',
          'The country is known for its contributions to music, particularly genres like son, salsa, and rumba.',
          'It is the largest island in the Caribbean, located just south of the United States and the Bahamas.',
          'The capital of this country is Havana.'
        ]
      },
      {
        name: 'Cyprus',
        hints: [
          'This country has been divided since 1974, with the northern part being a self-declared republic recognized only by Turkey.',
          'It is a member of the European Union, but EU law is suspended in the northern part of the island due to the ongoing division.',
          'The country is located in the Eastern Mediterranean, south of Turkey and west of Syria and Lebanon.',
          'Greek and Turkish are the official languages, reflecting the country\'s ethnolinguistic divisions.',
          'The capital of this country is Nicosia, which is the last divided capital in Europe.'
        ]
      },
      {
        name: 'Czech Republic',
        hints: [
          'This country was part of another until its peaceful split in 1993, known as the "Velvet Divorce."',
          'It is famous for its well-preserved medieval architecture, particularly in its capital city.',
          'The country is one of the world\'s largest beer consumers per capita, and beer is considered a significant part of its culture.',
          'It is a landlocked country in Central Europe, bordered by Germany, Austria, Slovakia, and Poland.',
          'The capital of this country is Prague.'
        ]
      },
      {
        name: 'Denmark',
        hints: [
          'This country was the first to abolish the death penalty for all crimes in 1978, reflecting its progressive legal reforms and commitment to human rights.',
          'It is one of the oldest monarchies in the world, with a history dating back over a thousand years.',
          'The country is a founding member of NATO and has a strong maritime tradition, with control over the strategic Danish Straits.',
          'Greenland and the Faroe Islands are autonomous territories under this country\'s sovereignty.',
          'The capital of this country is Copenhagen.'
        ]
      },
      {
        name: 'Djibouti',
        hints: [
          'This country is strategically located at the entrance to the Red Sea, making it a key military and trade hub.',
          'It is one of the smallest countries in Africa by both land area and population, yet hosts military bases from several major powers, including the United States, France, and China.',
          'The country gained independence from France in 1977, making it one of the last African nations to achieve independence.',
          'It is bordered by Eritrea, Ethiopia, and Somalia, with a coastline on the Gulf of Aden.',
          'The capital of this country is Djibouti City.'
        ]
      },
      {
        name: 'Dominica',
        hints: [
          'This country is often referred to as the "Nature Isle of the Caribbean" due to its lush, mountainous terrain and abundant natural hot springs.',
          'It was the last Caribbean island to be colonized by Europeans, partly because of the fierce resistance by the native Carib people.',
          'The country is a member of the Commonwealth and gained independence from the United Kingdom in 1978.',
          'It is one of the few places where the Carib (Kalinago) people still live, with a designated territory on the island.',
          'The capital of this country is Roseau.'
        ]
      },
      {
        name: 'Dominican Republic',
        hints: [
          'This country shares the island of Hispaniola with Haiti, making it one of two nations that occupy the same island.',
          'It was the site of the first permanent European settlement in the Americas, founded by Christopher Columbus\'s brother, Bartholomew, in 1496.',
          'The country\'s economy is the largest in the Caribbean and Central American region, with tourism playing a significant role.',
          'The national sport is baseball, and the country has produced many Major League Baseball players.',
          'The capital of this country is Santo Domingo.'
        ]
      },
      {
        name: 'Ecuador',
        hints: [
          'This was the first country in the world to recognize the rights of nature in its constitution, adopted in 2008.',
          'This country is named after the equator, which runs through its northern region.',
          'The country is home to the Galápagos Islands, which played a crucial role in Charles Darwin\'s theory of evolution by natural selection.',
          'The economy is heavily reliant on oil exports, though it also has significant agricultural exports, such as bananas and flowers.',
          'The capital of this country is Quito.'
        ]
      },
      {
        name: 'Egypt',
        hints: [
          'This country is home to one of the world\'s oldest civilizations, with a history that dates back over 5,000 years.',
          'The Suez Canal, located in this country, is one of the most important waterways in the world, connecting the Mediterranean Sea to the Red Sea.',
          'The country experienced a major political upheaval during the Arab Spring in 2011, leading to the overthrow of long-time president Hosni Mubarak.',
          'It is predominantly desert, with the majority of the population living near the Nile River, which is the longest river in the world.',
          'The capital of this country is Cairo.'
        ]
      },
      {
        name: 'El Salvador',
        hints: [
          'This country is the smallest and most densely populated in Central America.',
          'It was involved in a brutal civil war from 1980 to 1992, which resulted in significant human rights abuses and displacement.',
          'The country uses the U.S. dollar as its official currency, having adopted it in 2001.',
          'It is known as the "Land of Volcanoes" due to its many active volcanoes, some of which are part of a volcanic arc.',
          'The capital of this country is San Salvador.'
        ]
      },
      {
        name: 'Equatorial Guinea',
        hints: [
          'This country is the only African nation where Spanish is the official language, a legacy of its colonial past under Spain.',
          'It is one of the richest countries in Africa in terms of GDP per capita, thanks to its oil reserves, but wealth distribution is highly unequal.',
          'The country consists of a mainland region (Río Muni) and several islands, including Bioko Island, where the capital is located.',
          'It gained independence from Spain in 1968, making it one of the last African countries to do so.',
          'The capital of this country is Malabo, located on Bioko Island.'
        ]
      },
      {
        name: 'Eritrea',
        hints: [
          'This country gained independence from Ethiopia in 1993 after a 30-year war, making it one of the youngest nations in Africa.',
          'It is often referred to as the "North Korea of Africa" due to its highly militarized and secretive government.',
          'The country is located in the Horn of Africa, bordered by Sudan, Ethiopia, and Djibouti, with a coastline along the Red Sea.',
          'It has a unique form of compulsory national service that often extends indefinitely, which has been criticized for being akin to forced labor.',
          'The capital of this country is Asmara.'
        ]
      },
      {
        name: 'Estonia',
        hints: [
          'This country is one of the most digitally advanced in the world, known for its e-government services and digital citizenship program.',
          'It was occupied by the Soviet Union during World War II and only regained independence in 1991 with the dissolution of the USSR.',
          'The country is part of the Baltic States, along with Latvia and Lithuania, and is located on the eastern coast of the Baltic Sea.',
          'It is known for its well-preserved medieval architecture, particularly in its capital, which is a UNESCO World Heritage Site.',
          'The capital of this country is Tallinn.'
        ]
      },
      {
        name: 'Swaziland',
        hints: [
          'This country is one of the last absolute monarchies in the world, with the king holding significant power over the government.',
          'It was known as Swaziland until 2018, when it officially changed its name to reflect its Swazi heritage.',
          'The country is landlocked, bordered by South Africa and Mozambique, and is one of the smallest in Africa by both land area and population.',
          'HIV/AIDS has had a devastating impact on the country, giving it one of the highest prevalence rates in the world.',
          'The capital of this country is Mbabane, though the traditional royal capital is Lobamba.'
        ]
      },
      {
        name: 'Ethiopia',
        hints: [
          'This country is one of the few in Africa that was never colonized, though it was briefly occupied by Italy from 1936 to 1941.',
          'It is often considered the birthplace of coffee, with the Coffea arabica plant being native to its highlands.',
          'The country uses the ancient Ge\'ez script, and its calendar is about seven years behind the Gregorian calendar used in most of the world.',
          'The country is located in the Horn of Africa and is the second-most populous nation on the continent.',
          'The capital of this country is Addis Ababa, which also serves as the headquarters of the African Union.'
        ]
      },
      {
        name: 'Fiji',
        hints: [
          'This country is an archipelago of more than 300 islands, only about a third of which are inhabited.',
          'It has a significant Indian population, descended from indentured laborers brought by the British to work on sugarcane plantations.',
          'The country has experienced multiple coups since its independence from the United Kingdom in 1970, with political instability being a recurring issue.',
          'Tourism is a major industry, particularly for visitors from Australia, New Zealand, and the United States.',
          'The capital of this country is Suva, located on the island of Viti Levu.'
        ]
      },
      {
        name: 'Finland',
        hints: [
          'This country has one of the highest per capita coffee consumption rates in the world.',
          'It was part of the Swedish Empire until 1809, after which it became an autonomous Grand Duchy under the Russian Empire until its independence in 1917.',
          'The country is known for its vast forests and thousands of lakes, earning it the nickname "Land of a Thousand Lakes."',
          'It is one of the most developed countries in the world, with a high standard of living and a comprehensive welfare state.',
          'The capital of this country is Helsinki.'
        ]
      },
      {
        name: 'France',
        hints: [
          'This country is one of the five permanent members of the United Nations Security Council and has one of the world\'s largest economies.',
          'It has a long history of secularism, with the concept of laïcité being a core principle in its society and government.',
          'The country has the largest land area in the European Union and is known for its diverse landscapes, including the Alps, Mediterranean coast, and Atlantic beaches.',
          'The French Revolution of 1789 had a profound impact on world history, influencing the spread of republican ideals and the concept of human rights.',
          'The capital of this country is Paris, often referred to as the "City of Light."'
        ]
      },
      {
        name: 'Gabon',
        hints: [
          'This country has one of the highest urbanization rates in Africa, with the majority of its population living in cities.',
          'It is one of Africa\'s wealthiest countries per capita, largely due to its oil reserves, but has significant income inequality.',
          'The country is known for its extensive rainforests, which cover about 85% of its land area and are home to a rich diversity of wildlife.',
          'It was a French colony until it gained independence in 1960, and French remains the official language.',
          'The capital of this country is Libreville.'
        ]
      },
      {
        name: 'Gambia',
        hints: [
          'This country is the smallest on the African mainland, both in terms of area and population.',
          'It is almost entirely surrounded by Senegal, except for a short coastline on the Atlantic Ocean.',
          'The country was the site of a major British abolitionist colony, which played a role in the Atlantic slave trade\'s suppression.',
          'The economy relies heavily on agriculture, particularly peanut farming, and tourism.',
          'The capital of this country is Banjul.'
        ]
      },
      {
        name: 'Georgia',
        hints: [
          'This country is located at the intersection of Europe and Asia, in the Caucasus region.',
          'It was one of the first countries to officially adopt Christianity as its state religion, in the early 4th century.',
          'The country experienced a brief war with Russia in 2008, which resulted in the occupation of Abkhazia and South Ossetia, regions that are still disputed.',
          'The country is known for its ancient wine-making tradition, with evidence of viticulture dating back over 8,000 years.',
          'The capital of this country is Tbilisi.'
        ]
      },
      {
        name: 'Germany',
        hints: [
          'This country is Europe\'s largest economy and one of the world\'s leading industrial nations.',
          'It was divided into East and West during the Cold War, with the Berlin Wall symbolizing this division until its fall in 1989.',
          'The country is a founding member of the European Union and plays a central role in EU politics and economics.',
          'It is known for its automotive industry, with brands like Volkswagen, BMW, and Mercedes-Benz being internationally recognized.',
          'The capital of this country is Berlin.'
        ]
      },
      {
        name: 'Ghana',
        hints: [
          'This country was the first African nation to gain independence from colonial rule in 1957, under the leadership of Kwame Nkrumah.',
          'It was known as the Gold Coast during the colonial period, a name derived from its rich gold resources.',
          'The country has a diverse economy, with gold, cocoa, and oil being major export commodities.',
          'It is located on the Gulf of Guinea, with a coastline along the Atlantic Ocean.',
          'The capital of this country is Accra.'
        ]
      },
      {
        name: 'Greece',
        hints: [
          'This country was the the first country to transition from a military dictatorship back to democracy in 1974 following a seven-year period of military rule.',
          'It has thousands of islands, with Crete being the largest and most populous.',
          'The country underwent a financial crisis starting in 2009, which led to severe austerity measures and significant political and social upheaval.',
          'The economy relies heavily on tourism, particularly to its historic sites and islands.',
          'The capital of this country is Athens.'
        ]
      },
      {
        name: 'Greenland',
        hints: [
          'This territory is the worl\'s largest island that is not a continent, with about 80% of its surface covered in ice.',
          'It is an autonomous territory within the Kingdom of Denmark but has its own government and controls most domestic matters.',
          'The country\'s population is predominantly Inuit, and traditional practices such as hunting and fishing remain vital to their way of life.',
          'Climate change is significantly impacting this territory, leading to increased attention on its melting ice sheets and potential resources.',
          'The capital of this territory is Nuuk.'
        ]
      },
      {
        name: 'Grenada',
        hints: [
          'This country is often called the "Island of Spice" due to its significant production of nutmeg and mace.',
          'It gained international attention in 1983 when the United States led an invasion following a coup that resulted in the death of its Prime Minister.',
          'Tourism is a major industry, with visitors attracted to its beaches, waterfalls, and the annual Carnival celebration.',
          'The country is part of the Lesser Antilles in the Caribbean Sea, comprising the main island and several smaller islands.',
          'The capital of this country is St. George\'s.'
        ]
      },
      {
        name: 'Guatemala',
        hints: [
          'This country has the highest population in Central America and is known for its significant indigenous population, primarily of Mayan descent.',
          'It has a history of civil war that lasted from 1960 to 1996, resulting in widespread human rights abuses and economic disruption.',
          'The country is rich in biodiversity, with extensive rainforests, volcanoes, and ancient Mayan ruins, including the famous site of Tikal.',
          'Agriculture, particularly coffee, sugar, and bananas, plays a crucial role in its economy.',
          'The capital of this country is Guatemala City.'
        ]
      },
      {
        name: 'Guinea',
        hints: [
          'This country is one of the world\'s largest producers of bauxite, the primary ore for aluminum, yet it remains one of the poorest nations in terms of GDP per capita.',
          'It was a French colony until it gained independence in 1958, becoming the first French African colony to do so.',
          'The country has experienced several military coups and political instability since independence.',
          'It is located in West Africa, bordered by Guinea-Bissau, Senegal, Mali, Côte d\'Ivoire, Liberia, and Sierra Leone.',
          'The capital of this country is Conakry.'
        ]
      },
      {
        name: 'Guinea-Bissau',
        hints: [
          'This country is one of the world\'s poorest and most fragile states, with a history of political instability and military coups.',
          'It was a Portuguese colony until it gained independence in 1973, following a long and bloody war of independence.',
          'The country is part of the lusophone world, with Portuguese as its official language, though Creole is widely spoken.',
          'It is known for its archipelago of Bijagós, a UNESCO Biosphere Reserve.',
          'The capital of this country is Bissau.'
        ]
      },
      {
        name: 'Guyana',
        hints: [
          'This country is the only English-speaking nation in South America and has strong cultural ties to the Caribbean.',
          'It gained independence from the United Kingdom in 1966 and has a history of ethnic tension between its Indian and African-descended populations.',
          'The country\'s economy has traditionally been based on sugar, rice, and bauxite, but recent oil discoveries have the potential to transform its economy.',
          'It is known for its vast rainforests, rivers, and waterfalls, including Kaieteur Falls, one of the world\'s tallest single-drop waterfalls.',
          'The capital of this country is Georgetown.'
        ]
      },
      {
        name: 'Haiti',
        hints: [
          'This country was the first independent nation in Latin America and the Caribbean, and the first post-colonial independent black-led nation in the world, after a successful slave revolt in 1804.',
          'It shares the island of Hispaniola with the Dominican Republic and has a history of political instability, poverty, and natural disasters.',
          'The country has a rich cultural heritage, particularly in art, music, and religion, with Vodou being a significant aspect of its culture.',
          'It has experienced significant deforestation and environmental degradation, contributing to its vulnerability to natural disasters.',
          'The capital of this country is Port-au-Prince.'
        ]
      },
      {
        name: 'Honduras',
        hints: [
          'This country is known for its high levels of violence, particularly due to gang activity, making it one of the most dangerous countries in the world outside of a war zone.',
          'It is one of the poorest countries in Central America, with a large portion of the population living in poverty.',
          'The country\'s economy relies heavily on agriculture, particularly coffee, bananas, and palm oil.',
          'It has a diverse landscape, including mountains, rainforests, and a coastline along both the Caribbean Sea and the Pacific Ocean.',
          'The capital of this country is Tegucigalpa.'
        ]
      },
      {
        name: 'Hungary',
        hints: [
          'This country is a landlocked nation in Central Europe, known for its history of being part of the Austro-Hungarian Empire.',
          'It was one of the first countries to undergo a democratic transition after the fall of communism in Eastern Europe in 1989.',
          'The country is known for its rich cultural heritage, particularly in music, literature, and cuisine, with paprika being a famous ingredient.',
          'It is home to the largest thermal water cave system in the world, and has a long tradition of thermal baths.',
          'The capital of this country is Budapest, which is actually two cities, Buda and Pest, divided by the Danube River.'
        ]
      },
      {
        name: 'Iceland',
        hints: [
          'This country is one of the most geologically active places on Earth, with frequent volcanic eruptions and geothermal activity.',
          'It has the smallest population of any NATO member and has no standing army, though it maintains a coast guard and air defense system.',
          'The country\'s economy is heavily reliant on fishing and tourism, with its natural landscapes attracting visitors from around the world.',
          'It was one of the last places on Earth to be settled by humans, with Norse settlers arriving in the 9th century.',
          'The capital of this country is Reykjavik, the northernmost capital of a sovereign state.'
        ]
      },
      {
        name: 'India',
        hints: [
          'This country is the world\'s largest democracy by population and has a multi-tiered federal structure with 28 states and 8 union territories.',
          'It has a rich history as the birthplace of major religions, including Hinduism, Buddhism, Jainism, and Sikhism.',
          'The country\'s economy is one of the fastest-growing in the world, with significant contributions from information technology and services.',
          'It gained independence from British rule in 1947, and its independence movement was led by Mahatma Gandhi, who advocated non-violent resistance.',
          'The capital of this country is New Delhi.'
        ]
      },
      {
        name: 'Indonesia',
        hints: [
          'This country is the world\'s largest archipelago, consisting of over 17,000 islands, of which about 6,000 are inhabited.',
          'It is the most populous Muslim-majority country in the world, with a diverse range of ethnic groups and languages.',
          'The country\'s economy is the largest in Southeast Asia, with significant contributions from natural resources, manufacturing, and services.',
          'It was a Dutch colony for over 300 years until it gained independence in 1945, following a period of Japanese occupation during World War II.',
          'The capital of this country is Jakarta.'
        ]
      },
      {
        name: 'Iran',
        hints: [
          'This country has one of the oldest continuous civilizations in the world, dating back to the 6th century BCE.',
          'It is a theocratic republic, with a political system that blends elements of democracy and religious leadership, headed by a Supreme Leader.',
          'The country is a major player in the Middle East, with significant influence due to its oil reserves and its involvement in regional conflicts.',
          'The 1979 revolution in this country led to the overthrow of the monarchy and the establishment of an Islamic Republic.',
          'The capital of this country is Tehran.'
        ]
      },
      {
        name: 'Iraq',
        hints: [
          'This country is home to the ancient Mesopotamian civilization, often referred to as the "cradle of civilization," where writing and the first cities developed.',
          'It has been involved in numerous conflicts in recent history, including the Iran-Iraq War in the 1980s and the U.S.-led invasion in 2003.',
          'The country is rich in oil, and its economy is heavily dependent on petroleum exports.',
          'The Tigris and Euphrates rivers, two of the most historically significant rivers in the world, flow through this country.',
          'The capital of this country is Baghdad.'
        ]
      },
      {
        name: 'Ireland',
        hints: [
          'This country is known for its significant cultural impact, particularly in literature, music, and dance, with figures like James Joyce and U2 being globally recognized.',
          'It gained independence from the United Kingdom in 1922, following a war of independence and a subsequent civil war.',
          'The country has a complex history with Northern Ireland, which remains part of the United Kingdom, leading to a prolonged conflict known as "The Troubles."',
          'It is a member of the European Union, and its economy has seen rapid growth, particularly in the technology and pharmaceutical sectors.',
          'The capital of this country is Dublin.'
        ]
      },
      {
        name: 'Israel',
        hints: [
          'This country makes decisions using a proportional representation system, which means that multiple parties often form coalition governments.',
          'It is the only country with a Jewish majority population and has significant religious sites for Judaism, Christianity, and Islam.',
          'The country is known for its advanced technology sector, particularly in cybersecurity and defense industries.',
          'It has a parliamentary system of government, and its capital, though not widely recognized internationally, is Jerusalem.',
          'The city of Tel Aviv is also a major economic and cultural center in this country.'
        ]
      },
      {
        name: 'Italy',
        hints: [
          'This country was the center of the Roman Empire, which profoundly influenced Western civilization in areas such as law, government, and architecture.',
          'It was unified as a single state in 1861, after centuries of division into various kingdoms, duchies, and republics.',
          'The country is known for its rich cultural heritage, including art, music, and cuisine, with famous contributions such as the Renaissance and opera.',
          'It is a founding member of both the European Union and NATO, playing a key role in European and global politics.',
          'The capital of this country is Rome, also home to the Vatican City, the seat of the Roman Catholic Church.'
        ]
      },
      {
        name: 'Ivory Coast',
        hints: [
          'This country is one of the world\'s largest producers of cocoa beans, which are crucial for the global chocolate industry.',
          'It gained independence from France in 1960 and experienced relative stability until a civil war broke out in 2002.',
          'The country\'s economy is one of the largest in West Africa, with agriculture, particularly cocoa and coffee, being key sectors.',
          'It is located on the Gulf of Guinea, with a coastline that attracts significant tourism.',
          'The capital of this country is Yamoussoukro, but the largest city and economic hub is Abidjan.'
        ]
      },
      {
        name: 'Jamaica',
        hints: [
          'This country is known for its strong cultural influence, particularly in music, as the birthplace of reggae, ska, and dancehall.',
          'It gained independence from the United Kingdom in 1962, becoming a member of the Commonwealth.',
          'The country\'s economy relies heavily on tourism, remittances, and agriculture, with bauxite mining also being significant.',
          'It has a history of social and political activism, including the Rastafarian movement, which has had a global impact.',
          'The capital of this country is Kingston.'
        ]
      },
      {
        name: 'Japan',
        hints: [
          'This country\'s Article 9 of the constitution, adopted in 1947, renounces war and prohibits the maintenance of military forces, which has significantly shaped its post-WWII foreign and defense policy.',
          'It is the only nation to have suffered atomic bombings, which occurred during World War II.',
          'The country has one of the world\'s largest economies, with significant contributions from technology, automobiles, and electronics.',
          'It has a unique cultural heritage, blending traditional practices such as tea ceremonies and sumo wrestling with cutting-edge technology.',
          'The capital of this country is Tokyo, one of the most populous cities in the world.'
        ]
      },
      {
        name: 'Jordan',
        hints: [
          'This country is home to the ancient city of Petra, one of the New Seven Wonders of the World and a UNESCO World Heritage Site.',
          'It has a constitutional monarchy, with the Hashemite family ruling since its independence from Britain in 1946.',
          'The country is located in a geopolitically sensitive area, bordered by Israel, Syria, Iraq, and Saudi Arabia.',
          'The economy relies on services, tourism, and remittances, with limited natural resources compared to its neighbors.',
          'The capital of this country is Amman.'
        ]
      },
      {
        name: 'Kazakhstan',
        hints: [
          'This country is the largest landlocked country in the world and the ninth-largest country overall by area.',
          'It was the last of the Soviet republics to declare independence following the dissolution of the Soviet Union in 1991.',
          'The country is rich in natural resources, particularly oil, gas, and minerals, making it one of the wealthiest economies in Central Asia.',
          'It is home to the Baikonur Cosmodrome, the world\'s first and largest space launch facility, which is still used by Russia today.',
          'The capital of this country is Astana, renamed from Nur-Sultan in 2022, and was previously known as Akmolinsk, Tselinograd, and Akmola.'
        ]
      },
      {
        name: 'Kenya',
        hints: [
          'This country is known for its diverse landscapes, including savannas, the Great Rift Valley, mountains, and coastal areas along the Indian Ocean.',
          'It gained independence from the United Kingdom in 1963 and has since been one of the most politically and economically stable countries in East Africa.',
          'The country is famous for its wildlife, particularly in national parks like Maasai Mara, and it is a popular destination for safaris.',
          'Agriculture is a key sector of the economy, with tea and coffee being major exports.',
          'The capital of this country is Nairobi, which is also the largest city in East Africa.'
        ]
      },
      {
        name: 'Kiribati',
        hints: [
          'This country is one of the world\'s most vulnerable nations to climate change, with many of its islands at risk of being submerged due to rising sea levels.',
          'It consists of 32 atolls and one raised coral island, spread over a vast area of the central Pacific Ocean.',
          'The country was formerly part of the British colony of the Gilbert and Ellice Islands until it gained independence in 1979.',
          'It is one of the few countries that straddles both the Equator and the International Date Line, making it the first country to experience a new day.',
          'The capital of this country is Tarawa, located on an atoll of the same name.'
        ]
      },
      {
        name: 'Kosovo',
        hints: [
          'This country unilaterally declared independence from Serbia in 2008, but its status is still disputed by several countries, including Serbia and Russia.',
          'It is Europe\'s youngest country, both in terms of its recent independence and the age of its population.',
          'The country has a significant Albanian majority, with smaller communities of Serbs and other ethnic groups.',
          'It has been recognized by over 100 UN member states, but it is not yet a member of the United Nations.',
          'The capital of this country is Pristina.'
        ]
      },
      {
        name: 'Kuwait',
        hints: [
          'This country has the sixth-largest oil reserves in the world, which contribute to it having one of the highest per capita incomes globally.',
          'It gained independence from the United Kingdom in 1961 and was later invaded by Iraq in 1990, leading to the Gulf War.',
          'The country has a constitutional monarchy with a relatively open political system compared to its Gulf neighbors, including an elected parliament.',
          'It is located in the northeastern corner of the Arabian Peninsula, bordered by Iraq and Saudi Arabia.',
          'The capital of this country is Kuwait City.'
        ]
      },
      {
        name: 'Kyrgyzstan',
        hints: [
          'This country is known for its mountainous terrain, with over 90% of its territory covered by mountains, including the Tien Shan range.',
          'It was part of the Soviet Union until it gained independence in 1991, and has since experienced significant political instability.',
          'The country is a member of the Eurasian Economic Union and the Collective Security Treaty Organization, reflecting its close ties with Russia.',
          'It is home to Issyk-Kul, one of the largest alpine lakes in the world and a major tourist destination.',
          'The capital of this country is Bishkek.'
        ]
      },
      {
        name: 'Laos',
        hints: [
          'This country is the only landlocked nation in Southeast Asia and is known for its rugged terrain, including mountains, forests, and the Mekong River.',
          'It was heavily bombed by the United States during the Vietnam War, making it the most bombed country per capita in history.',
          'The country has a one-party socialist republic government led by the Lao People\'s Revolutionary Party since 1975.',
          'It is a member of ASEAN and has a primarily agrarian economy, with rice being the dominant crop.',
          'The capital of this country is Vientiane.'
        ]
      },
      {
        name: 'Latvia',
        hints: [
          'This country is one of the three Baltic states and has a significant coastline along the Baltic Sea.',
          'It regained independence from the Soviet Union in 1991 and is now a member of the European Union and NATO.',
          'The country has a diverse population, with a significant Russian-speaking minority.',
          'It is known for its well-preserved medieval architecture, particularly in its capital city\'s Old Town, which is a UNESCO World Heritage Site.',
          'The capital of this country is Riga.'
        ]
      },
      {
        name: 'Lebanon',
        hints: [
          'This country has a unique confessionalist political system, where power is shared among different religious groups, including Christians, Sunnis, and Shias.',
          'It has a history of civil conflict, including a 15-year civil war that ended in 1990 and more recent tensions related to regional conflicts.',
          'The country is located on the eastern shore of the Mediterranean Sea, and is known for its cultural and religious diversity.',
          'It is home to the ancient cities of Byblos and Baalbek, which are among the oldest continuously inhabited cities in the world.',
          'The capital of this country is Beirut.'
        ]
      },
      {
        name: 'Lesotho',
        hints: [
          'This country is an enclaved nation, meaning it is completely surrounded by another country, in this case, South Africa.',
          'It is known as the "Kingdom in the Sky" due to its high altitude, with most of the country lying above 1,000 meters (3,281 feet) above sea level.',
          'The country relies heavily on remittances from its citizens working in South Africa, as well as on agriculture and textile manufacturing.',
          'It gained independence from the United Kingdom in 1966 and has since experienced periods of political instability.',
          'The capital of this country is Maseru.'
        ]
      },
      {
        name: 'Liberia',
        hints: [
          'This country was founded by freed American slaves in the early 19th century, and its capital is named after U.S. President James Monroe.',
          'It was one of the few African countries to remain independent during the Scramble for Africa and was not colonized by a European power.',
          'The country has a history of political instability, including a brutal civil war from 1989 to 2003.',
          'It is rich in natural resources such as iron ore, rubber, and timber, though its economy remains underdeveloped.',
          'The capital of this country is Monrovia.'
        ]
      },
      {
        name: 'Libya',
        hints: [
          'This country has a vast desert interior, and is known for its significant oil reserves.',
          'It was under Italian colonial rule from 1911 until World War II and subsequently became independent in 1951.',
          'The country was ruled by Muammar Gaddafi from 1969 until his ousting in 2011 during the Arab Spring, which led to ongoing political instability.',
          'It is located in North Africa, bordered by Tunisia, Algeria, Niger, Chad, Sudan, and Egypt.',
          'The capital of this country is Tripoli.'
        ]
      },
      {
        name: 'Liechtenstein',
        hints: [
          'This country is one of the world\'s smallest, with an area of just over 160 square kilometers (62 square miles), and is entirely landlocked.',
          'It is a member of the European Economic Area but is not a member of the European Union, relying on Switzerland for most of its foreign affairs.',
          'The country has a strong financial sector and is known for its banking secrecy and low taxes.',
          'It is a constitutional monarchy with a reigning prince and a parliamentary system.',
          'The capital of this country is Vaduz.'
        ]
      },
      {
        name: 'Lithuania',
        hints: [
          'This country is one of the three Baltic states and was the first of them to declare independence from the Soviet Union in 1990.',
          'It has a significant cultural heritage, including a rich tradition of folk art, music, and literature.',
          'The country was a major center of the medieval Grand Duchy of Lithuania, which once extended into parts of modern-day Belarus, Ukraine, and Poland.',
          'It is a member of the European Union, NATO, and the eurozone, having adopted the euro as its currency in 2015.',
          'The capital of this country is Vilnius.'
        ]
      },
      {
        name: 'Luxembourg',
        hints: [
          'This country is one of the world\'s wealthiest countries per capita, known for its financial services sector and high standard of living.',
          'It is one of the founding members of the European Union, NATO, and the United Nations, reflecting its central role in European and international affairs.',
          'The country is a grand duchy with a hereditary monarchy and is the last remaining sovereign grand duchy in the world.',
          'It has three official languages: Luxembourgish, French, and German, reflecting its cultural and linguistic diversity.',
          'The capital of this country is Luxembourg City.'
        ]
      },
      {
        name: 'Madagascar',
        hints: [
          'This country is the fourth largest island in the world and is located off the southeastern coast of Africa.',
          'It is known for its unique biodiversity, with over 90% of its wildlife found nowhere else on Earth, including lemurs and baobab trees.',
          'The island was a French colony until gaining independence in 1960, and its official languages include Malagasy and French.',
          'The country\'s economy is largely based on agriculture, particularly vanilla, cloves, and coffee, and faces significant challenges related to deforestation and poverty.',
          'The capital of this country is Antananarivo.'
        ]
      },
      {
        name: 'Malawi',
        hints: [
          'This country is known as the “Warm Heart of Africa” due to its friendly people and scenic landscapes.',
          'It is one of the world\'s poorest countries, with a largely agrarian economy dependent on subsistence farming and cash crops like tobacco and tea.',
          'The country is home to Lake Malawi, one of the largest and deepest freshwater lakes in the world, which is a key resource for its fisheries and biodiversity.',
          'It gained independence from the United Kingdom in 1964 and has experienced periods of political instability and economic hardship.',
          'The capital of this country is Lilongwe.'
        ]
      },
      {
        name: 'Malaysia',
        hints: [
          'This country consists of two distinct regions: Peninsular Malaysia and East Malaysia, which are separated by the South China Sea.',
          'It has a diverse population including Malays, Chinese, Indians, and indigenous groups, with Islam being the official religion and Bahasa Malaysia the official language.',
          'The country\'s economy is one of the most open in the world, with significant contributions from electronics, palm oil, and tourism.',
          'It is known for its unique blend of cultural influences, reflected in its cuisine, festivals, and architecture.',
          'The capital of this country is Kuala Lumpur.'
        ]
      },
      {
        name: 'Malta',
        hints: [
          'This country is an island nation in the Mediterranean Sea and has a strategic location that has historically made it a key naval base.',
          'It gained independence from the United Kingdom in 1964 and became a republic in 1974, joining the European Union in 2004.',
          'The country has a rich history with significant historical sites from the Knights of St. John, including the walled city of Valletta, a UNESCO World Heritage Site.',
          'The official languages are Maltese and English, with Maltese being a unique Semitic language derived from late medieval Arabic.',
          'The capital of this country is Valletta.'
        ]
      },
      {
        name: 'Marshall Islands',
        hints: [
          'This country is located in the central Pacific Ocean and consists of 29 atolls and 5 individual islands.',
          'It is known for its role in the Cold War as a site for U.S. nuclear testing, with numerous tests conducted in the Bikini and Enewetak Atolls.',
          'The country is a Compact of Free Association with the United States, receiving financial assistance and defense support in exchange for certain strategic privileges.',
          'It has a high level of emigration to the United States and other countries due to limited economic opportunities and climate change impacts.',
          'The capital of this country is Majuro.'
        ]
      },
      {
        name: 'Mauritania',
        hints: [
          'This country is characterized by its vast desert landscapes, including a significant portion of the Sahara Desert.',
          'It gained independence from France in 1960 and has a history of military coups and political instability since then.',
          'The country\'s economy relies heavily on mining, particularly iron ore, and it also has significant offshore oil and gas reserves.',
          'It has a majority Muslim population and follows Islamic law, with Arabic as its official language and French used in administrative functions.',
          'The capital of this country is Nouakchott.'
        ]
      },
      {
        name: 'Mauritius',
        hints: [
          'This island nation is located in the Indian Ocean, known for its diverse culture, beautiful beaches, and as a major tourism destination.',
          'It gained independence from the United Kingdom in 1968 and has since become a stable democracy with a strong economy based on tourism, textiles, and sugar.',
          'The country has a rich cultural heritage with influences from Africa, India, China, and Europe, reflected in its languages, cuisine, and festivals.',
          'The island is also known for its environmental conservation efforts, including the protection of its endemic flora and fauna.',
          'The capital of this country is Port Louis.'
        ]
      },
      {
        name: 'Mexico',
        hints: [
          'This country is known for its rich history that includes the Aztec and Maya civilizations, as well as Spanish colonial influence.',
          'It is the 13th-largest country in the world by area and has a diverse landscape that includes deserts, mountains, and tropical rainforests.',
          'The country\'s economy is one of the largest in Latin America, with major industries including manufacturing, oil, and tourism.',
          'It is a member of several international organizations, including the United Nations, G20, and NAFTA (now USMCA).',
          'The capital of this country is Mexico City, one of the largest cities in the world.'
        ]
      },
      {
        name: 'Micronesia',
        hints: [
          'This country is composed of over 600 islands in the western Pacific Ocean, with its islands spread over a vast area.',
          'It has a Compact of Free Association with the United States, which provides financial assistance and defense support in exchange for certain strategic privileges.',
          'The country consists of four states: Yap, Chuuk, Pohnpei, and Kosrae, each with its own local government and unique cultural practices.',
          'It gained independence from the Trust Territory of the Pacific Islands in 1986, with a special relationship with the U.S. continuing thereafter.',
          'The capital of this country is Palikir, located on the island of Pohnpei.'
        ]
      },
      {
        name: 'Moldova',
        hints: [
          'A narrow region in this country declared independence in 1990, though it is not internationally recognized and remains a frozen conflict zone.',
          'It has a history of being part of various empires, including the Ottoman Empire and the Russian Empire, before gaining independence from the Soviet Union in 1991.',
          'The country has a predominantly agricultural economy, with wine production being a significant industry and cultural aspect.',
          'It is one of the poorest countries in Europe, facing challenges related to political corruption and economic development.',
          'The capital of this country is Chișinău.'
        ]
      },
      {
        name: 'Monaco',
        hints: [
          'This country is the second-smallest in the world by area, after Vatican City, and is located on the French Riviera in Western Europe.',
          'It is a constitutional monarchy with a hereditary prince, and is known for its high standard of living and status as a tax haven.',
          'The country\'s economy is heavily based on tourism, gambling, and banking, with the famous Monte Carlo Casino being a major attraction.',
          'It has no personal income tax and is known for hosting the annual Monaco Grand Prix, a prestigious Formula One race.',
          'The capital of this country is Monaco City, also known as Monaco-Ville.'
        ]
      },
      {
        name: 'Mongolia',
        hints: [
          'This country is the largest landlocked country in the world and has a vast landscape that includes steppes, deserts, and mountains.',
          'It was the center of the Mongol Empire under Genghis Khan in the 13th century, which became one of the largest empires in history.',
          'It transitioned from a socialist state to a democratic republic in 1990 following the collapse of the Soviet Union.',
          'The country\'s economy relies heavily on mining, particularly coal, copper, and gold, and is also known for its traditional nomadic culture.',
          'The capital of this country is Ulaanbaatar.'
        ]
      },
      {
        name: 'Montenegro',
        hints: [
          'This country declared its independence from Serbia in 2006, following a referendum that led to the dissolution of the State Union of Serbia and Montenegro.',
          'It is located on the Adriatic Sea and is known for its stunning coastline, mountainous terrain, and historic towns.',
          'The country has a diverse economy with tourism, shipping, and real estate being significant sectors.',
          'It is a candidate country for European Union membership and has adopted the euro as its currency despite not being an EU member.',
          'The capital of this country is Podgorica.'
        ]
      },
      {
        name: 'Morocco',
        hints: [
          'This country is located in North Africa and has a diverse geography that includes coastal plains, mountain ranges, and desert areas.',
          'It is known for its rich cultural heritage, with influences from Berber, Arab, and French cultures, and is famous for its historical cities like Marrakech and Fes.',
          'The country has a constitutional monarchy with a King who holds significant executive powers and is considered the "Commander of the Faithful."',
          'It is a major exporter of phosphates, which are crucial for fertilizers, and also has a growing tourism industry.',
          'The capital of this country is Rabat.'
        ]
      },
      {
        name: 'Myanmar',
        hints: [
          'This country, formerly known as Burma, is located in Southeast Asia and has a complex ethnic and cultural composition, with over 100 ethnic groups.',
          'It has experienced significant political turmoil, including military rule from 1962 to 2011, and ongoing conflicts with ethnic armed groups.',
          'The country has a rich history influenced by Indian, Chinese, and Thai cultures, with significant Buddhist traditions and ancient temples like Bagan.',
          'Its economy is based on agriculture, particularly rice, as well as natural resources such as oil and gas.',
          'The capital of this country is Naypyidaw, while the largest city and commercial hub is Yangon.'
        ]
      },
      {
        name: 'Namibia',
        hints: [
          'This country is known for its vast deserts, including the Namib Desert, which is considered one of the oldest deserts in the world.',
          'It gained independence from South Africa in 1990 and has a history of being a German colony prior to South African administration.',
          'The country is famous for its unique wildlife and conservation efforts, including the Etosha National Park, which is a major safari destination.',
          'It has a relatively small population compared to its large land area, leading to one of the lowest population densities in the world.',
          'The capital of this country is Windhoek.'
        ]
      },
      {
        name: 'Nauru',
        hints: [
          'This country is the third smallest country by land area and the second smallest by population, located in the central Pacific Ocean.',
          'It gained independence from Australia, New Zealand, and the United Kingdom in 1968 and was once one of the richest countries per capita due to phosphate mining.',
          'The country has faced economic challenges since the depletion of its phosphate reserves, leading to reliance on foreign aid and offshore processing centers.',
          'It is a member of the Commonwealth of Nations and has no formal armed forces, relying on Australia for defense.',
          'The capital of this country is Yaren, which is also a district rather than a city.'
        ]
      },
      {
        name: 'Niger',
        hints: [
          'This country is named after a river, though the river itself does not flow through the majority of its territory.',
          'It is one of the largest countries in Africa and is predominantly covered by the Sahara Desert, which makes up about 80% of its land area.',
          'The country gained independence from France in 1960 and has faced numerous challenges including political instability and environmental issues.',
          'It has a predominantly agricultural economy, with millet and livestock being major components, and is also known for its uranium mining industry.',
          'The capital of this country is Niamey.'
        ]
      },
      {
        name: 'Nigeria',
        hints: [
          'This country is the most populous in Africa and has a diverse culture with over 250 ethnic groups, including the Hausa, Yoruba, and Igbo.',
          'It gained independence from the United Kingdom in 1960 and has since become a major economic player in Africa due to its oil and gas industry.',
          'The country has a history of military coups and political instability, with recent efforts focused on democratic governance and economic reform.',
          'It is known for its vibrant music and film industry, particularly Nollywood, which is one of the world\'s largest film industries by volume.',
          'The capital of this country is Abuja, while Lagos is its largest city and commercial hub.'
        ]
      },
      {
        name: 'North Korea',
        hints: [
          'This country operates under a highly centralized and authoritarian regime with extensive control over all aspects of life, including a unique cult of personality surrounding its leaders.',
          'It was established in 1948 following the end of World War II and the subsequent division of Korea into North and South Korea, with the Korean War occurring soon after.',
          'The country has a centrally planned economy, with a focus on heavy industry and military development, and faces significant economic challenges and international sanctions.',
          'It has a highly controlled media environment and limited access to information from outside the country, with a strong emphasis on state propaganda.',
          'The capital of this country is Pyongyang.'
        ]
      },
      {
        name: 'North Macedonia',
        hints: [
          'This country was previously known as the Former Yugoslav Republic of Macedonia (FYROM) before changing its name to North Macedonia in 2019 following a dispute with Greece.',
          'It is located in the central Balkan Peninsula and has a diverse landscape that includes mountains, lakes, and rivers.',
          'The country gained independence from Yugoslavia in 1991 and has since pursued membership in the European Union and NATO.',
          'It has a rich cultural heritage with influences from Greek, Roman, and Ottoman periods, reflected in its historic sites and traditions.',
          'The capital of this country is Skopje.'
        ]
      },
      {
        name: 'Norway',
        hints: [
          'This country is known for its stunning fjords, mountainous terrain, and extensive coastline along the North Atlantic Ocean.',
          'It is one of the world\'s wealthiest countries, largely due to its significant oil and natural gas reserves, and has a high standard of living.',
          'The country is a member of the European Free Trade Association but is not a member of the European Union, relying on various bilateral agreements with the EU.',
          'It has a strong tradition of social welfare and is known for its high levels of education, health care, and quality of life.',
          'The capital of this country is Oslo.'
        ]
      },
      {
        name: 'Oman',
        hints: [
          'This country is located on the southeastern coast of the Arabian Peninsula and is known for its rich maritime history and trade routes.',
          'It has a stable and relatively open economy compared to its Gulf neighbors, with oil and gas being significant contributors along with tourism and trade.',
          'The country is an absolute monarchy with Sultan Qaboos bin Said ruling from 1970 until his death in 2020, succeeded by Sultan Haitham bin Tariq.',
          'It has a rich cultural heritage with influences from Persian, Indian, and African cultures, and is known for its historical forts and traditional architecture.',
          'The capital of this country is Muscat.'
        ]
      },
      {
        name: 'Pakistan',
        hints: [
          'This country was created in 1947 as a result of the partition of British India, with its establishment as a homeland for Muslims in the region.',
          'It has a diverse landscape including mountains, deserts, and plains, with the Karakoram range and K2, the second-highest peak in the world, located in its northern regions.',
          'The country has a mixed economy with major industries including textiles, agriculture, and remittances from overseas workers.',
          'It has experienced significant political and social challenges, including periods of military rule, political instability, and regional conflicts.',
          'The capital of this country is Islamabad, while Karachi is its largest city and economic hub.'
        ]
      },
      {
        name: 'Palau',
        hints: [
          'This country consists of over 300 islands in the western Pacific Ocean and is part of the Micronesia region.',
          'It gained independence from the United States in 1994, after being a Trust Territory of the Pacific Islands under U.S. administration.',
          'The country is known for its pristine marine environments and biodiversity, with the Palau National Marine Sanctuary being one of the largest in the world.',
          'It has a compact of free association with the United States, similar to other Pacific Island nations, receiving financial aid and defense support in exchange for certain strategic agreements.',
          'The capital of this country is Ngerulmud.'
        ]
      },
      {
        name: 'Panama',
        hints: [
          'This country is famous for the Panama Canal, an artificial waterway that connects the Atlantic and Pacific Oceans, and is crucial for global maritime trade.',
          'It gained independence from Colombia in 1903 with significant support from the United States, which subsequently managed the canal until 1999.',
          'The country\'s economy is heavily reliant on banking, logistics, and tourism, with the canal being a major source of revenue and international significance.',
          'It has a diverse population with influences from indigenous peoples, Afro-Caribbean communities, and various immigrant groups.',
          'The capital of this country is Panama City.'
        ]
      },
      {
        name: 'Papua New Guinea',
        hints: [
          'This country occupies the eastern half of the island of New Guinea and is known for its incredible biodiversity and numerous indigenous cultures.',
          'It gained independence from Australia in 1975 and is characterized by a complex mosaic of languages and ethnic groups, with over 800 languages spoken.',
          'The country has a largely rural population with traditional practices remaining strong, though its economy is increasingly based on mining and agriculture.',
          'It is located in Oceania, north of Australia, and has a tropical climate with significant rainfall throughout the year.',
          'The capital of this country is Port Moresby.'
        ]
      },
      {
        name: 'Paraguay',
        hints: [
          'This landlocked country in South America is bordered by Argentina, Brazil, and Bolivia and is known for its significant Guarani influence on its culture and language.',
          'It gained independence from Spain in 1811 and has a history of political and economic instability, including a lengthy dictatorship under Alfredo Stroessner from 1954 to 1989.',
          'The country\'s economy is largely agricultural, with soybeans, beef, and hydroelectric power being major components.',
          'It is one of the world\'s largest producers of hydroelectric power, with the Itaipú Dam being one of the largest in terms of electricity generation.',
          'The capital of this country is Asunción.'
        ]
      },
      {
        name: 'Peru',
        hints: [
          'This country is home to the ancient Inca Empire and the iconic Machu Picchu, a major archaeological site and UNESCO World Heritage Site.',
          'It has a diverse geography that includes the Amazon Rainforest, the Andes Mountains, and the coastal desert, contributing to its rich biodiversity.',
          'The country has a mixed economy with significant contributions from mining, agriculture, and tourism, and is a major exporter of copper and gold.',
          'It gained independence from Spain in 1821 and has experienced periods of political instability and economic challenges, particularly during the late 20th century.',
          'The capital of this country is Lima.'
        ]
      },
      {
        name: 'Philippines',
        hints: [
          'This country consists of over 7,000 islands in Southeast Asia and has a rich cultural heritage influenced by Malay, Spanish, and American cultures.',
          'It gained independence from the United States in 1946, after being a Spanish colony for over 300 years and then a U.S. territory.',
          'The country is known for its vibrant culture, including popular festivals, diverse cuisine, and a strong emphasis on family and community life.',
          'It has a mixed economy with major industries including electronics, agriculture, and services, and is one of the largest producers of coconut products in the world.',
          'The capital of this country is Manila.'
        ]
      },
      {
        name: 'Poland',
        hints: [
          'This country has a history of significant geopolitical shifts, including partitions by Prussia, Austria, and Russia in the late 18th century and reestablishment in 1918.',
          'It experienced a Communist regime from the end of World War II until 1989, with the Solidarity movement playing a key role in its transition to democracy.',
          'The country has a diverse economy with strong sectors in manufacturing, agriculture, and services, and is known for its historic cities such as Warsaw and Kraków.',
          'It is a member of the European Union and NATO and has a significant role in regional and international affairs.',
          'The capital of this country is Warsaw.'
        ]
      },
      {
        name: 'Portugal',
        hints: [
          'This country is located on the Iberian Peninsula in Southwestern Europe and has a long history of exploration and maritime discovery, including the Age of Discoveries.',
          'It gained independence from Spain in the 12th century and has a rich cultural heritage with influences from Moorish, Roman, and Celtic traditions.',
          'The country is known for its wine industry, particularly Port and Madeira wines, and has a diverse economy with significant contributions from tourism and agriculture.',
          'It experienced a dictatorship under António de Oliveira Salazar from 1932 to 1968 before transitioning to democracy with the Carnation Revolution in 1974.',
          'The capital of this country is Lisbon.'
        ]
      },
      {
        name: 'Qatar',
        hints: [
          'This country is located on a small peninsula in the Persian Gulf and is known for its significant oil and natural gas reserves, which drive its wealth.',
          'It has rapidly transformed from a small, sparsely populated desert nation into a global financial and cultural hub with major investments in infrastructure and education.',
          'The country is an absolute monarchy with the Emir holding substantial power, and it has a high standard of living and one of the highest per capita incomes in the world.',
          'It hosted the FIFA World Cup in 2022, making it the first Middle Eastern country to host the event.',
          'The capital of this country is Doha.'
        ]
      },
      {
        name: 'Romania',
        hints: [
          'This country\'s revolution was a pivotal event that led to the overthrow of a communist regime, marking one of the bloodiest uprisings in Eastern Europe during the collapse of Soviet influence.',
          'It gained independence from the Ottoman Empire in 1877 and has a diverse geography that includes the Carpathian Mountains and the Danube River.',
          'The country experienced a Communist regime under Nicolae Ceaușescu from 1965 until the 1989 Revolution, which led to its transition to democracy.',
          'It has a mixed economy with significant sectors in industry, agriculture, and services, and is known for its historic sites such as castles and fortresses, including Bran Castle, associated with the Dracula legend.',
          'The capital of this country is Bucharest.'
        ]
      },
      {
        name: 'Russia',
        hints: [
          'The 2014 annexation of Crimea by this country resulted in international condemnation and sanctions, significantly altering the geopolitical landscape.',
          'This country is the largest in the world by land area, spanning over 17 million square kilometers and spanning Eastern Europe and northern Asia.',
          'It was the core of the Soviet Union, which was established after the Russian Revolution of 1917 and dissolved in 1991, leading to Russia\'s emergence as an independent state.',
          'It has a complex political structure with a strong central government led by President Vladimir Putin and significant influence in regional and global affairs.',
          'The capital of this country is Moscow.'
        ]
      },
      {
        name: 'Rwanda',
        hints: [
          'This country is known for its role in the 1994 genocide, during which an estimated 800,000 people were killed in a period of 100 days.',
          'It is one of the most densely populated countries in Africa and is characterized by its mountainous terrain, often referred to as the "Land of a Thousand Hills".',
          'The country has made significant strides in post-genocide recovery and development, focusing on reconciliation, economic growth, and environmental conservation.',
          'It has a predominantly agricultural economy with tea and coffee being major exports, and is known for its successful efforts in wildlife conservation, particularly for mountain gorillas.',
          'The capital of this country is Kigali.'
        ]
      },
      {
        name: 'Saint Kitts and Nevis',
        hints: [
          'This country is the smallest in both area and population in the Western Hemisphere, consisting of two volcanic islands in the Caribbean Sea.',
          'It gained independence from the United Kingdom in 1983 and has a parliamentary democracy with a head of state who is a ceremonial monarch.',
          'The economy relies heavily on tourism, agriculture (especially sugar production), and offshore banking, with the country also offering citizenship by investment programs.',
          'It is known for its lush landscapes, historical sites, and beautiful beaches, attracting a significant number of tourists each year.',
          'The capital of this country is Basseterre.'
        ]
      },
      {
        name: 'Saint Lucia',
        hints: [
          'This Caribbean island nation was named after Saint Lucy of Syracuse and has a history of colonial rule by both the French and the British.',
          'It gained independence from the United Kingdom in 1979 and has a parliamentary democracy with a ceremonial head of state and an executive prime minister.',
          'The country\'s economy is based on tourism, agriculture (especially bananas and cocoa), and services, with tourism being a significant contributor to its GDP.',
          'It is famous for its natural beauty, including the Pitons, two volcanic spires that are a UNESCO World Heritage Site and iconic landmarks.',
          'The capital of this country is Castries.'
        ]
      },
      {
        name: 'Saint Vincent and the Grenadines',
        hints: [
          'The country is known for its active volcanic region, including the Soufrière Hills volcano, which erupted in 1979 and 2021, impacting local communities and economies.',
          'It gained independence from the United Kingdom in 1979 and has a parliamentary democracy with a ceremonial head of state and a prime minister.',
          'The country\'s economy relies on agriculture (particularly bananas), tourism, and services, with the Grenadines being a popular destination for luxury tourism.',
          'This country consists of the island of Saint Vincent and a chain of smaller islands known as the Grenadines, located in the Caribbean Sea.',
          'The capital of this country is Kingstown.'
        ]
      },
      {
        name: 'Samoa',
        hints: [
          'This Polynesian island nation is located in the central South Pacific Ocean and is known for its traditional culture and natural beauty.',
          'It gained independence from New Zealand in 1962 and has a parliamentary system with a ceremonial head of state and a prime minister.',
          'The country is known for its traditional Polynesian lifestyle, including fa\'a Samoa (the Samoan way), and has a strong emphasis on communal living and family.',
          'Its economy relies on agriculture, tourism, and remittances from Samoans living abroad, with key exports including coconut products and agricultural goods.',
          'The capital of this country is Apia.'
        ]
      },
      {
        name: 'San Marino',
        hints: [
          'This country is one of the world\'s smallest and oldest republics, founded in the early 4th century AD, and is entirely surrounded by Italy.',
          'It has a unique political system with a two-chamber parliament and a rotating head of state position held by two Captains Regent elected every six months.',
          'The country\'s economy is based on finance, tourism, and industry, with significant sectors including banking and manufacturing of ceramics and textiles.',
          'It has a well-preserved medieval historic center that is a UNESCO World Heritage Site, known for its historic architecture and fortifications.',
          'The capital of this country is the City of San Marino.'
        ]
      },
      {
        name: 'Sao Tome and Principe',
        hints: [
          'This country consists of two volcanic islands located in the Gulf of Guinea, off the west coast of Central Africa, and is known for its rich biodiversity.',
          'It gained independence from Portugal in 1975 and has a relatively small population with a primarily agricultural-based economy, focusing on cocoa and coffee production.',
          'The country is one of the least developed in Africa, with economic challenges including reliance on agriculture and vulnerability to environmental changes.',
          'It is known for its historical colonial architecture, unique natural landscapes, and marine life, including important bird species and endemic flora.',
          'The capital of this country is São Tomé.'
        ]
      },
      {
        name: 'Saudi Arabia',
        hints: [
          'This country is the largest in the Middle East and is known for its significant oil reserves, which have driven its economic development and global influence.',
          'It was founded in 1932 by Abdulaziz Ibn Saud and is an absolute monarchy with the King holding extensive political and religious power as the Custodian of the Two Holy Mosques.',
          'The country\'s economy is heavily dependent on oil exports, and it is a leading member of the Organization of the Petroleum Exporting Countries (OPEC).',
          'It has a strict interpretation of Islamic law and is known for its significant religious sites, including Mecca and Medina, which are central to the Islamic faith.',
          'The capital of this country is Riyadh.'
        ]
      },
      {
        name: 'Senegal',
        hints: [
          'This West African country is known for its vibrant cultural heritage, including traditional music, dance, and art, and has a history of being a major center for trade and civilization.',
          'It gained independence from France in 1960 and has a stable democratic political system with a significant role in regional diplomacy and peacekeeping.',
          'The country\'s economy is diverse, with major sectors including agriculture (especially peanuts), fishing, and tourism, with Dakar being a major economic and cultural hub.',
          'It is home to the island of Gorée, a UNESCO World Heritage Site known for its historical significance in the Atlantic slave trade.',
          'The capital of this country is Dakar.'
        ]
      },
      {
        name: 'Serbia',
        hints: [
          'This country is located in Southeast Europe and has a history of political and territorial changes, including the dissolution of Yugoslavia in the 1990s.',
          'It is landlocked and has a diverse landscape that includes plains, mountains, and rivers, with the Danube River being a major geographical feature.',
          'The country\'s economy is transitioning from a state-controlled system to a market economy, with significant sectors including manufacturing, agriculture, and services.',
          'It has a rich cultural heritage influenced by Orthodox Christianity, Ottoman, and Austro-Hungarian traditions, and is known for its historic cities and cultural festivals.',
          'The capital of this country is Belgrade.'
        ]
      },
      {
        name: 'Seychelles',
        hints: [
          'This country is an archipelago of 115 islands located in the Indian Ocean, known for its stunning beaches, coral reefs, and unique biodiversity.',
          'It gained independence from the United Kingdom in 1976 and has a mixed economy with tourism, fisheries, and agriculture being key sectors.',
          'The country has a relatively small population with a high standard of living, supported by its thriving tourism industry and investment in conservation.',
          'It is famous for its unique flora and fauna, including the giant Aldabra tortoises and rare Coco de Mer palms.',
          'The capital of this country is Victoria.'
        ]
      },
      {
        name: 'Sierra Leone',
        hints: [
          'This country in West Africa is known for its mineral resources, including diamonds, which have played a significant role in its history and economy.',
          'It gained independence from the United Kingdom in 1961 and experienced a devastating civil war from 1991 to 2002, which had profound social and economic impacts.',
          'The country has a diverse landscape that includes tropical rainforests, savannahs, and a coastline along the Atlantic Ocean.',
          'It has a primarily agricultural economy, with rice being a staple crop, and faces ongoing challenges related to development and post-conflict recovery.',
          'The capital of this country is Freetown.'
        ]
      },
      {
        name: 'Singapore',
        hints: [
          'This city-state is a global financial hub with a highly developed economy and a significant international trade port, known for its impressive skyline and strict regulations.',
          'It gained independence from Malaysia in 1965 and has since become one of the world\'s leading financial centers and a major hub for trade and logistics.',
          'The country is known for its efficient public transport system, cleanliness, and high standard of living, with a strong emphasis on education and innovation.',
          'It has a diverse cultural landscape with influences from Chinese, Malay, Indian, and Western traditions, reflected in its cuisine, festivals, and architecture.',
          'The capital of this country is Singapore.'
        ]
      },
      {
        name: 'Slovakia',
        hints: [
          'This country is located in Central Europe and was part of Czechoslovakia until it peacefully separated and became an independent nation in 1993.',
          'It is a landlocked country with a diverse geography that includes mountains, plains, and numerous rivers, with the Tatra Mountains being a notable feature.',
          'The economy is diverse, with key sectors including manufacturing (particularly automotive), services, and agriculture, and it is known for its high level of education and skilled workforce.',
          'It has a rich cultural heritage with influences from Hungarian, Austrian, and Czech traditions, and is known for its historic towns and castles.',
          'The capital of this country is Bratislava.'
        ]
      },
      {
        name: 'Slovenia',
        hints: [
          'This country is located in Southern Central Europe, known for its beautiful landscapes that include lakes, mountains, and a small but picturesque coastline along the Adriatic Sea.',
          'It gained independence from Yugoslavia in 1991 and has since developed a strong economy with a focus on high-tech industries, manufacturing, and tourism.',
          'It has a diverse cultural heritage with influences from German, Italian, and Slavic traditions, reflected in its cuisine, architecture, and festivals.',
          'The country is a member of the European Union and NATO, and has a high standard of living with strong emphasis on environmental protection and sustainability.',
          'The capital of this country is Ljubljana.'
        ]
      },
      {
        name: 'Solomon Islands',
        hints: [
          'This country is an archipelago of over 900 islands in the South Pacific Ocean, known for its rich cultural heritage and diverse marine life.',
          'It gained independence from the United Kingdom in 1978 and has an economy based on agriculture, fishing, and tourism, with logging also being a significant industry.',
          'The country has faced challenges related to political instability and ethnic tensions, but has made strides in improving governance and development.',
          'It is known for its beautiful coral reefs, World War II history, and vibrant traditional cultures and practices.',
          'The capital of this country is Honiara.'
        ]
      },
      {
        name: 'Somalia',
        hints: [
          'This country is located in the Horn of Africa and has a long coastline along the Indian Ocean, with a complex history of clan-based and political conflicts.',
          'It has experienced significant challenges related to civil war, political instability, and humanitarian crises since the collapse of its central government in the early 1990s.',
          'The economy is predominantly based on agriculture and pastoralism, with remittances from the Somali diaspora also playing a crucial role.',
          'The country has a rich cultural heritage with influences from Arab, African, and Persian traditions, and is known for its historic cities and maritime history.',
          'The capital of this country is Mogadishu.'
        ]
      },
      {
        name: 'South Africa',
        hints: [
          'This country is known for its diverse culture, natural beauty, and complex history, including the legacy of apartheid and its transition to democracy in 1994.',
          'It is the most industrialized country in Africa, with a strong economy based on mining, manufacturing, agriculture, and services, and is known for its significant mineral resources.',
          'The country has a diverse landscape that includes savannahs, mountains, and coastlines, with major landmarks such as Table Mountain and Kruger National Park.',
          'It has a rich cultural heritage with influences from various ethnic groups, including Zulu, Xhosa, Afrikaans, and English-speaking communities.',
          'The capital of this country is Pretoria (administrative), while Cape Town and Bloemfontein are also major cities.'
        ]
      },
      {
        name: 'South Sudan',
        hints: [
          'This country is the world\'s youngest nation, gaining independence from Sudan in 2011 after a long and complex history of conflict and negotiations.',
          'It has faced significant challenges related to political instability, internal conflict, and humanitarian crises since its independence.',
          'The economy is heavily reliant on oil exports, which constitute the majority of its revenue, while agriculture also plays a key role in subsistence and local trade.',
          'The country has a diverse ethnic composition with various communities and languages, and is known for its rich cultural traditions and traditional practices.',
          'The capital of this country is Juba.'
        ]
      },
      {
        name: 'Spain',
        hints: [
          'This country is located in Southwestern Europe and is known for its rich history of exploration, including the Age of Discovery with figures such as Christopher Columbus.',
          'It has a diverse cultural heritage with regional identities and languages, including Catalan, Basque, and Galician, in addition to Spanish.',
          'The country experienced a long period of dictatorship under Francisco Franco from 1939 to 1975 before transitioning to a democratic monarchy.',
          'It has a strong economy with significant sectors in tourism, agriculture, and manufacturing, and is known for its cultural contributions such as art, architecture, and cuisine.',
          'The capital of this country is Madrid.'
        ]
      },
      {
        name: 'Sri Lanka',
        hints: [
          'This island nation in South Asia was formerly known as Ceylon and has a diverse cultural heritage influenced by Buddhism, Hinduism, and colonial history.',
          'It gained independence from the United Kingdom in 1948 and experienced a prolonged civil war that lasted from 1983 to 2009, significantly affecting its development.',
          'The economy is based on agriculture, tourism, and textiles, with tea being a major export product and a significant contributor to the national economy.',
          'The country is known for its rich biodiversity, including unique wildlife such as leopards and elephants, as well as its scenic landscapes and historical sites.',
          'The capital of this country is Colombo, while Sri Jayawardenepura Kotte is the official legislative capital.'
        ]
      },
      {
        name: 'Sudan',
        hints: [
          'This country in Northeast Africa has a history of political instability and conflict, including a prolonged civil war and the Darfur conflict.',
          'It gained independence from Egypt and the United Kingdom in 1956 and has experienced multiple changes in government and military regimes since then.',
          'The economy relies heavily on oil and agriculture, with significant challenges related to economic sanctions, conflict, and internal displacement.',
          'The country is known for its ancient Nubian civilization, including historical sites such as the pyramids of Meroë and the city of Khartoum where the Blue and White Nile rivers converge.',
          'The capital of this country is Khartoum.'
        ]
      },
      {
        name: 'Suriname',
        hints: [
          'This country in South America is the smallest in the continent and is known for its diverse ethnic composition, including descendants of Indigenous peoples, Africans, and Asians.',
          'It gained independence from the Netherlands in 1975 and has a mixed economy with key sectors including mining, agriculture, and services.',
          'The country is characterized by its rainforest environment and rich biodiversity, with significant natural resources including bauxite, gold, and oil.',
          'It has a multicultural society with a blend of various traditions, languages, and religions, reflecting its colonial history and diverse population.',
          'The capital of this country is Paramaribo.'
        ]
      },
      {
        name: 'Sweden',
        hints: [
          'This Nordic country is known for its unique political neutrality and was the first country to officially adopt a policy of neutrality during the Napoleonic Wars, influencing its role in international conflicts.',
          'This country has a high standard of living, progressive social policies, and strong welfare state, including universal healthcare and education.',
          'The country\'s economy is diverse, with significant contributions from technology, manufacturing, and services, and is known for its innovative companies and strong export sector.',
          'It has a rich cultural heritage, including contributions to art, literature, and music, and is known for its distinctive architecture and environmental sustainability.',
          'The capital of this country is Stockholm.'
        ]
      },
      {
        name: 'Switzerland',
        hints: [
          'This country is renowned for its policy of neutrality and has not been involved in any wars since the early 19th century, maintaining a strong tradition of diplomatic mediation.',
          'It has a highly developed economy with a focus on banking, finance, and high-tech industries, and is known for its strong banking sector and multinational corporations.',
          'It is characterized by its mountainous terrain, with the Alps covering a significant portion of its land area and contributing to its tourism industry.',
          'The country has four official languages: German, French, Italian, and Romansh, reflecting its multicultural and multilingual society.',
          'The capital of this country is Bern.'
        ]
      },
      {
        name: 'Syria',
        hints: [
          'This country in the Middle East has a rich history as one of the cradles of civilization, with ancient cities such as Damascus and Aleppo being significant cultural and historical centers.',
          'It has been embroiled in a complex and ongoing civil war since 2011, which has had devastating impacts on its population and infrastructure.',
          'The economy relies on oil, agriculture, and industry, though it has been heavily affected by the ongoing conflict, sanctions, and economic challenges.',
          'It is known for its archaeological sites and ancient ruins, including the historic city of Palmyra and the Umayyad Mosque in Damascus.',
          'The capital of this country is Damascus.'
        ]
      },
      {
        name: 'Taiwan',
        hints: [
          'This island nation in East Asia is officially known as the Republic of China (ROC) and has a complex political status with significant international and regional implications.',
          'It has a highly developed economy, known for its advanced technology sector, particularly in electronics and semiconductor manufacturing.',
          'The country operates as a separate entity from the People\'s Republic of China (PRC), despite the PRC\'s claim over this country and its policy of One China.',
          'It has a vibrant democratic system with regular elections and a strong emphasis on civil liberties and human rights.',
          'The capital of this country is Taipei.'
        ]
      },
      {
        name: 'Tajikistan',
        hints: [
          'This country in Central Asia is known for its mountainous terrain, including the Pamir Mountains, which are often referred to as the "Roof of the World".',
          'It gained independence from the Soviet Union in 1991 and has experienced political instability and conflict, including a civil war in the 1990s.',
          'The economy is primarily based on agriculture, with significant contributions from aluminum production, and remittances from Tajik workers abroad.',
          'The country has a rich cultural heritage influenced by Persian and Turkic traditions, and is known for its historical Silk Road sites and mountainous landscapes.',
          'The capital of this country is Dushanbe.'
        ]
      },
      {
        name: 'Tanzania',
        hints: [
          'This country in East Africa is known for its diverse landscapes, including the Serengeti National Park, Mount Kilimanjaro, and the Zanzibar archipelago.',
          'It gained independence from the United Kingdom in 1961 and has a mixed economy with agriculture, tourism, and mining being significant sectors.',
          'The country is known for its rich cultural heritage, with numerous ethnic groups and languages, and has made strides in conservation efforts for its wildlife and natural resources.',
          'It has a history of socialist policies under President Julius Nyerere, who promoted self-reliance and agricultural development during his tenure.',
          'The capital of this country is Dodoma, while Dar es Salaam remains the principal commercial city.'
        ]
      },
      {
        name: 'Thailand',
        hints: [
          'This country in Southeast Asia is known for its vibrant culture, including traditional dance, cuisine, and festivals, and has a long history of monarchy and Buddhist traditions.',
          'It has experienced significant political changes and turmoil in recent decades, including coups and periods of military rule, while maintaining a constitutional monarchy.',
          'The economy is diverse, with major sectors including tourism, agriculture, and manufacturing, and it is known for its significant export industries, including electronics and textiles.',
          'It is famous for its beautiful beaches, historical temples, and cultural landmarks such as the Grand Palace in Bangkok and the ancient city of Ayutthaya.',
          'The capital of this country is Bangkok.'
        ]
      },
      {
        name: 'Timor-Leste',
        hints: [
          'This Southeast Asian country, also known as East Timor, gained independence from Indonesia in 2002, making it one of the newest sovereign states in the world.',
          'It has a history of Portuguese colonial rule followed by a violent struggle for independence, including a significant period of conflict during the 1990s.',
          'The economy is heavily dependent on oil and gas exports, with significant international aid and assistance playing a role in its development and recovery.',
          'The country is known for its rich cultural heritage, including traditional music, dance, and festivals, and has a diverse landscape with mountains and coastal areas.',
          'The capital of this country is Dili.'
        ]
      },
      {
        name: 'Togo',
        hints: [
          'This West African country has a narrow strip of coastline along the Gulf of Guinea, making it one of the smallest countries in Africa by area.',
          'It gained independence from France in 1960 and has experienced political instability, including a long period of authoritarian rule under President Gnassingbé Eyadéma.',
          'The economy is based on agriculture, including crops such as cotton and cocoa, as well as phosphate mining, which is a significant export product.',
          'It is known for its cultural diversity, with various ethnic groups and languages, and has a history of traditional practices and festivals.',
          'The capital of this country is Lomé.'
        ]
      },
      {
        name: 'Tonga',
        hints: [
          'This Polynesian kingdom is one of the last remaining absolute monarchies in the world, with a monarchy that has been in place for over a century.',
          'It is known for its traditional culture, including elaborate ceremonies, dance, and music, and has a relatively small population spread across its islands.',
          'The economy relies on agriculture, remittances from Tongans abroad, and tourism, with significant exports including squash and vanilla.',
          'It is famous for its natural beauty, including pristine beaches, coral reefs, and volcanic landscapes, and is often considered a destination for eco-tourism.',
          'The capital of this country is Nuku\'alofa.'
        ]
      },
      {
        name: 'Trinidad and Tobago',
        hints: [
          'This twin-island nation in the Caribbean is known for its vibrant cultural heritage, including its famous Carnival celebration and contributions to music genres such as calypso and steelpan.',
          'It gained independence from the United Kingdom in 1962 and has a diverse economy with major sectors including petroleum, natural gas, and tourism.',
          'The country is known for its significant oil and gas reserves, which play a major role in its economy and have contributed to its high standard of living.',
          'It has a rich biodiversity, including numerous bird species and tropical ecosystems, and is recognized for its conservation efforts and environmental tourism.',
          'The capital of this country is Port of Spain.'
        ]
      },
      {
        name: 'Tunisia',
        hints: [
          'This North African country is known for its historical sites, including the ancient city of Carthage, which was a major center of trade and civilization in the ancient Mediterranean world.',
          'It gained independence from France in 1956 and has a history of political reform, including the Arab Spring uprising in 2011 that led to significant changes in its government.',
          'The economy is diverse, with key sectors including agriculture, manufacturing, and tourism, and the country is known for its production of olive oil and textiles.',
          'It has a Mediterranean coastline with beautiful beaches and historical architecture, including well-preserved Roman ruins and Islamic monuments.',
          'The capital of this country is Tunis.'
        ]
      },
      {
        name: 'Turkey',
        hints: [
          'This transcontinental country straddles Europe and Asia and is known for its rich cultural heritage that includes a blend of Ottoman, Byzantine, and Persian influences.',
          'It has a diverse economy with key sectors including industry, agriculture, and tourism, and is a major producer of textiles, electronics, and automotive parts.',
          'It is known for its historical sites such as Istanbul (formerly Constantinople), the ancient city of Troy, and the rock formations of Cappadocia.',
          'The country has a significant strategic location, controlling key maritime routes such as the Bosporus Strait, which connects the Black Sea to the Mediterranean.',
          'The capital of this country is Ankara, while Istanbul is its largest city and a major cultural and economic center.'
        ]
      },
      {
        name: 'Tuvalu',
        hints: [
          'This small island nation in the Pacific Ocean is one of the smallest and least populous countries in the world, with a total land area of just over 26 square kilometers.',
          'It is known for its low-lying atolls and islands, which are particularly vulnerable to the impacts of climate change and rising sea levels.',
          'The economy is based on subsistence agriculture, fishing, and remittances from Tuvaluans living abroad, with limited industrial development.',
          'It is famous for its unique cultural traditions and beautiful marine environments, including coral reefs and clear lagoons that attract eco-tourism.',
          'The capital of this country is Funafuti.'
        ]
      },
      {
        name: 'Uganda',
        hints: [
          'This East African country is known for its diverse landscapes, including the Albertine Rift, which is part of the Great Rift Valley and includes Lake Victoria, the largest lake in Africa.',
          'It gained independence from the United Kingdom in 1962 and has experienced periods of political instability, including the rule of Idi Amin in the 1970s.',
          'The economy is based on agriculture, with key crops including coffee, tea, and bananas, and the country is known for its efforts in wildlife conservation, particularly for mountain gorillas.',
          'It has a rich cultural heritage with over 50 ethnic groups, each with its own language and traditions, and is known for its vibrant music and dance traditions.',
          'The capital of this country is Kampala.'
        ]
      },
      {
        name: 'Ukraine',
        hints: [
          'This country in Eastern Europe has experienced significant political and social upheaval in recent years, including the annexation of Crimea by Russia in 2014 and ongoing conflict in the eastern regions.',
          'It is the largest country entirely in Europe by area and has a diverse landscape that includes fertile plains, mountain ranges, and a long coastline along the Black Sea.',
          'The economy is based on agriculture, industry, and services, with significant sectors including grain production, steel manufacturing, and IT services.',
          'It has a rich cultural heritage with influences from Slavic, European, and Ottoman traditions, and is known for its historical cities, literature, and folk music.',
          'The capital of this country is Kyiv.'
        ]
      },
      {
        name: 'United Arab Emirates',
        hints: [
          'The country was formed in 1971 as a federation of seven emirates, with its governance structure including both federal and emirate-level authorities, reflecting its unique political and administrative system.',
          'The country and has since become a major financial and tourism hub, with prominent cities such as Dubai and Abu Dhabi being key centers of commerce and culture.',
          'The country has a diverse economy with significant contributions from real estate, tourism, and finance, and is known for its modern infrastructure and high standard of living.',
          'This country is famous for its architectural landmarks, including the Burj Khalifa, the tallest building in the world, and the Palm Jumeirah, an artificial archipelago.',
          'The capital of this country is Abu Dhabi.'
        ]
      },
      {
        name: 'United Kingdom',
        hints: [
          'This country\'s 2016 referendum to leave the European Union has had significant political and economic implications for the country and the EU.',
          'It was the first country to industrialize in the 18th century, which greatly influenced its economy and global influence during the Industrial Revolution.',
          'It has a constitutional monarchy with a parliamentary system, and its historical landmarks include the Tower of London, Westminster Abbey, and Buckingham Palace.',
          'The country is known for its diverse cultural heritage, including contributions to literature, music, and arts, with figures such as William Shakespeare and The Beatles being internationally renowned.',
          'The capital of this country is London.'
        ]
      },
      {
        name: 'United States',
        hints: [
          'This country is known for its diverse culture, economy, and geography, with significant influences from various other cultures and traditions.',
          'It is a federal republic with a system of checks and balances between the executive, legislative, and judicial branches of government.',
          'The 1803 Supreme Court case Marbury v. Madison established the principle of judicial review, which allows the Court to strike down laws that violate the Constitution.',
          'The country has a mixed economy with significant contributions from industries such as technology, finance, healthcare, and entertainment.',
          'The capital of this country is Washington, D.C.'
        ]
      },
      {
        name: 'Uruguay',
        hints: [
          'This South American country is known for its progressive social policies, including the legalization of same-sex marriage and the regulation of the cannabis market.',
          'It gained independence from Brazil in 1828 and has since developed a stable economy with key sectors including agriculture, tourism, and finance.',
          'It has a relatively high standard of living and is known for its strong social welfare systems, including comprehensive healthcare and education services.',
          'The country is famous for its cultural events, including the annual Carnaval de Montevideo and its contributions to South American football (soccer).',
          'The capital of this country is Montevideo.'
        ]
      },
      {
        name: 'Uzbekistan',
        hints: [
          'This Central Asian country was part of the Soviet Union until its independence in 1991 and has a rich history as a major center of the Silk Road trade routes.',
          'It has a diverse landscape that includes deserts, mountains, and fertile valleys, and is known for its historical cities such as Samarkand and Bukhara.',
          'The economy is based on natural resources, including cotton production, natural gas, and minerals, with significant contributions from agriculture and industry.',
          'It has a rich cultural heritage with influences from Persian, Turkic, and Russian traditions, reflected in its architecture, cuisine, and festivals.',
          'The capital of this country is Tashkent.'
        ]
      },
      {
        name: 'Vanuatu',
        hints: [
          'This Pacific island nation is known for its diverse cultural heritage, with over 100 indigenous languages spoken and a rich tradition of art, dance, and rituals.',
          'It gained independence from France and the United Kingdom in 1980 and has an economy based on agriculture, tourism, and offshore financial services.',
          'The country is vulnerable to natural disasters, including cyclones and volcanic eruptions, and has a focus on sustainable development and environmental protection.',
          'It is famous for its beautiful beaches, coral reefs, and tropical forests, making it a popular destination for eco-tourism and adventure travel.',
          'The capital of this country is Port Vila.'
        ]
      },
      {
        name: 'Vatican City',
        hints: [
          'This independent city-state is the smallest country in the world by both area and population and serves as the spiritual and administrative center of the Roman Catholic Church.',
          'It is an enclave within Rome, Italy, and is governed by the Pope, who is both the head of state and the leader of the Catholic Church.',
          'It is known for its significant cultural and religious landmarks, including St. Peter\'s Basilica, the Sistine Chapel, and the Vatican Museums.',
          'It has a unique status in international law and diplomacy, with special agreements and treaties with other countries and international organizations.',
          'The capital of this country is Vatican City.'
        ]
      },
      {
        name: 'Venezuela',
        hints: [
          'This South American country has experienced significant political and economic turmoil in recent years, with hyperinflation and widespread shortages affecting daily life.',
          'It is known for its vast oil reserves, which have been a major driver of its economy and have had significant impacts on its political and social stability.',
          'The country has a diverse geography that includes the Andes mountains, Amazon rainforest, and extensive Caribbean coastline, contributing to its rich biodiversity.',
          'It has a rich cultural heritage with influences from indigenous, African, and Spanish traditions, and is known for its vibrant music, dance, and festivals.',
          'The capital of this country is Caracas.'
        ]
      },
      {
        name: 'Vietnam',
        hints: [
          'This Southeast Asian country has a complex history of colonialism and conflict, including the Vietnam War, which had a profound impact on its development and international relations.',
          'It is known for its rapid economic growth in recent decades, transitioning from a centrally planned economy to a socialist-oriented market economy with significant improvements in living standards.',
          'It has a diverse landscape that includes mountains, forests, and coastline along the South China Sea, and is famous for its rich cultural heritage and cuisine.',
          'The country is known for its historical sites, including the ancient town of Hoi An, the historic city of Hanoi, and the ruins of My Son, a former Hindu temple complex.',
          'The capital of this country is Hanoi.'
        ]
      },
      {
        name: 'Yemen',
        hints: [
          'This country in the Arabian Peninsula has been embroiled in a complex and ongoing civil war since 2014, which has had severe humanitarian and economic impacts.',
          'It has a history of ancient civilizations, including the Sabaean Kingdom, and is known for its historical architecture, including the old city of Sana\'a and the mud-brick skyscrapers of Shibam.',
          'The economy is primarily based on oil and gas exports, but has been heavily affected by conflict and instability, with significant challenges related to poverty and infrastructure.',
          'It has a rich cultural heritage with influences from Islamic, Arab, and African traditions, and is known for its traditional music, dance, and cuisine.',
          'The capital of this country is Sana\'a.'
        ]
      },
      {
        name: 'Zambia',
        hints: [
          'This landlocked country in Southern Africa is known for its diverse landscapes, including savannahs, forests, and the Victoria Falls, one of the largest and most famous waterfalls in the world.',
          'It gained independence from the United Kingdom in 1964 and has a history of political stability compared to some of its neighbors, though it faces challenges related to economic development and poverty.',
          'The economy is based on mining, particularly copper production, as well as agriculture and tourism, with significant contributions from wildlife conservation and national parks.',
          'It is known for its cultural diversity, with over 70 ethnic groups and languages, and has a rich tradition of music, dance, and art.',
          'The capital of this country is Lusaka.'
        ]
      },
      {
        name: 'Zimbabwe',
        hints: [
          'This landlocked country in Southern Africa has experienced significant economic and political challenges, including hyperinflation and political instability, in recent decades.',
          'It is known for its rich natural resources, including gold, platinum, and diamonds, as well as its diverse wildlife and national parks, including Hwange National Park and Mana Pools.',
          'It has a complex history of colonial rule and liberation struggles, with independence from the United Kingdom achieved in 1980 and subsequent periods of political turmoil and reform.',
          'The country is famous for its archaeological sites, including the Great Zimbabwe ruins, which are the largest ancient stone ruins in sub-Saharan Africa and a UNESCO World Heritage site.',
          'The capital of this country is Harare.'
        ]
      }      
  ];
  
  export default countries;
  