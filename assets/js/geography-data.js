const DATA = [
  {
    part: "A", partTitle: "Physical Geography (World)",
    sections: [
      {
        id: 1, title: "Universe & Earth Origin", tag: "P", freq: 0,
        subs: [
          { id: "2.1", title: "Earth's Interior", tag: "P+M", topics: [
            { n: "2.1.1", t: "Crust, Mantle, Core structure", d: "Composition, density, discontinuities (Moho, Gutenberg, Lehmann)" },
            { n: "2.1.2", t: "Direct & Indirect sources", d: "Seismic waves, mining, volcanic eruptions, gravity, magnetic field" },
            { n: "2.1.3", t: "Earthquake waves (P, S, L)", d: "Shadow zones, seismograph", questions: [
              { id: "prelims_2023_q57", year: 2023, type: "P", q: "Consider the following statements: 1. In seismograph, P waves are recorded earlier than S waves. 2. In P waves, particles vibrate in direction of wave propagation; in S waves, particles vibrate at right angles to wave propagation. Which is/are correct? (a) 1 only (b) 2 only (c) Both 1 and 2 (d) Neither 1 nor 2", marks: 0 }
            ] },
          ]},
        ],
        topics: [
          { n: "1.1", t: "Origin of Universe", d: "Big Bang theory, expanding universe, galaxy formation", questions: [
            { id: "prelims_2022_q_geo1", year: 2022, type: "P", q: "In the northern hemisphere, the longest day of the year normally occurs in the: (a) First half of the month of June (b) Second half of the month of June (c) First half of the month of July (d) Second half of the month of July", marks: 0 }
          ] },
          { n: "1.2", t: "Solar System", d: "Planet formation, Kuiper Belt, asteroid belt, comets, dwarf planets", questions: [
            { id: "prelims_2012_q_geo2", year: 2012, type: "P", q: "A person stood alone in a desert on a dark night and wanted to reach his village 5 km east. He located the polestar. The most convenient way to reach his village is to walk in the: (a) Direction facing the polestar (b) Direction opposite to the polestar (c) Direction keeping the polestar to his left (d) Direction keeping the polestar to his right", marks: 0 },
            { id: "prelims_2012_q_geo3", year: 2012, type: "P", q: "Electrically charged particles from space traveling at speeds of several hundred km/sec can severely harm living beings if they reach the surface of the Earth. What prevents them from reaching the surface? (a) The Earth\'s magnetic field diverts them towards its poles (b) Ozone layer reflects them back to outer space (c) Moisture in the upper layers of the atmosphere (d) None of the above", marks: 0 },
            { id: "prelims_2013_q_geo4", year: 2013, type: "P", q: "Variations in the length of daytime and night time from season to season are due to: (a) The earth\'s rotation on its axis (b) The earth\'s revolution around the sun in an elliptical manner (c) Latitudinal position of the place (d) Revolution of the earth on a tilted axis", marks: 0 }
          ] },
          { n: "1.3", t: "Moon", d: "Origin theories, phases, eclipses, tidal lock" },
          { n: "1.4", t: "Earth's Origin & Age", d: "Nebular hypothesis, geological time scale, origin of life", questions: [
            { id: "prelims_2019_q_geo5", year: 2019, type: "P", q: "On 21st June, the Sun: (a) Does not set below the horizon at the Arctic Circle (b) Does not set below the horizon at Antarctic Circle (c) Shines vertically overhead at noon on the Equator (d) Shines vertically overhead at the Tropic of Capricorn", marks: 0 }
          ] },
          { n: "1.5", t: "Earth's Motions", d: "Rotation, revolution, effects (day-night, seasons), axis inclination", questions: [
            { id: "prelims_2011_q_geo90", year: 2011, type: "P", q: "In the northern hemisphere, the longest day of the year normally occurs in the: (a) First half of the month of June (b) Second half of the month of June (c) First half of the month of July (d) Second half of the month of July", marks: 0 }
          ] },
          { n: "1.6", t: "Latitude & Longitude", d: "Important parallels, meridians, time zones, IST, IDL", questions: [
            { id: "prelims_2024_q75", year: 2024, type: "P", q: "On June 21 every year, which of the following latitude(s) experience(s) a sunlight of more than 12 hours? 1. Equator 2. Tropic of Cancer 3. Tropic of Capricorn 4. Arctic Circle (a) 1 only (b) 2 only (c) 3 and 4 (d) 2 and 4", marks: 0 },
            { id: "prelims_2025_q96", year: 2025, type: "P", q: "Consider the following countries: 1. United Kingdom 2. Denmark 3. New Zealand 4. Australia 5. Brazil — How many of the above countries have more than four time zones? (a) All the five (b) Only four (c) Only three (d) Only two", marks: 0 },
            { id: "prelims_2025_q97", year: 2025, type: "P", q: "Consider the following statements: 1. Anadyr in Siberia and Nome in Alaska are a few kilometers from each other, but when people are waking up and getting set for breakfast in these cities, it would be different days. 2. When it is Monday in Anadyr, it is Tuesday in Nome. Which is/are correct? (a) I only (b) II only (c) Both I and II (d) Neither I nor II", marks: 0 }
          ] },
          { n: "1.7", t: "Earth's Magnetic Field", d: "Magnetic poles, declination, inclination", questions: [
            { id: "prelims_2012_q_geo3", year: 2012, type: "P", q: "Electrically charged particles from space traveling at speeds of several hundred km/sec can severely harm living beings if they reach the surface of the Earth. What prevents them from reaching the surface? (a) The Earth\'s magnetic field diverts them towards its poles (b) Ozone layer reflects them back to outer space (c) Moisture in the upper layers of the atmosphere (d) None of the above", marks: 0 }
          ] },
        ]
      },
      {
        id: 2, title: "Geomorphology", tag: "P+M", freq: 2,
        subs: [
          { id: "2.2", title: "Minerals & Rocks", tag: "P", topics: [
            { n: "2.2.1", t: "Mineral properties", d: "Crystal form, hardness, cleavage, luster, color" },
            { n: "2.2.2", t: "Major minerals", d: "Feldspar, quartz, pyroxene, amphibole, mica, olivine" },
            { n: "2.2.3", t: "Igneous rocks", d: "Intrusive vs extrusive, granite, basalt, obsidian" },
            { n: "2.2.4", t: "Sedimentary rocks", d: "Mechanically, organically, chemically formed" },
            { n: "2.2.5", t: "Metamorphic rocks", d: "Foliated vs non-foliated, marble, slate, gneiss" },
            { n: "2.2.6", t: "Rock cycle", d: "Transformation between rock types", questions: [
              { id: "q021", year: 0, type: "M", q: "Describe the characteristics and types of primary rocks.", marks: 10 }
            ] },
          ]},
          { id: "2.3", title: "Geomorphic Processes", tag: "P+M", topics: [
            { n: "2.3.1", t: "Endogenic forces", d: "Diastrophism (orogenic, epeirogenic), sudden forces", questions: [
              { id: "q006", year: 0, type: "M", q: "Discuss how the changes in shape and sizes of continents and ocean basins of the planet take place due to tectonic movements of the crustal masses.", marks: 15 }
            ] },
            { n: "2.3.2", t: "Exogenic forces", d: "Weathering, erosion, deposition" },
            { n: "2.3.3", t: "Weathering types", d: "Chemical, Physical, Biological", questions: [
              { id: "prelims_2024_q57", year: 2024, type: "P", q: "Consider the following statements: Statement-I: Rainfall is one of the reasons for the weathering of rocks. Statement-II: Rain water contains carbon dioxide in solution. Statement-III: Rain water contains atmospheric oxygen. Which is correct? (a) Both II and III correct and both explain I (b) Both II and III correct but only one explains I (c) Only one of II and III is correct (d) Neither II nor III is correct", marks: 0 }
            ] },
            { n: "2.3.4", t: "Mass movements", d: "Creep, flow, slide, fall" },
            { n: "2.3.5", t: "Soil erosion", d: "Causes; association with deforestation", questions: [
              { id: "prelims_2014_q_geo40", year: 2014, type: "P", q: "In India, the problem of soil erosion is associated with which of the following? 1. Terrace cultivation 2. Deforestation 3. Tropical climate (a) 1 and 2 only (b) 2 only (c) 1 and 3 only (d) 1, 2 and 3", marks: 0 },
              { id: "prelims_2013_q_geo37", year: 2013, type: "P", q: "Contour bunding is a method of soil conservation used in: (a) Desert margins, liable to strong wind action (b) Low flat plains, close to stream courses, liable to flooding (c) Scrublands, liable to spread of weed growth (d) None of the above", marks: 0 }
            ] },
          ]},
          { id: "2.4", title: "Plate Tectonics & Continental Drift", tag: "P+M", freq: 2, recent: true, topics: [
            { n: "2.4.1", t: "Continental Drift Theory", d: "Wegener, Pangea, Gondwanaland, evidence", questions: [
              { id: "prelims_2025_q45", year: 2025, type: "P", q: "Which of the following are evidences of the phenomenon of continental drift? 1. The belt of ancient rocks from Brazil coast matches with those from Western Africa. 2. The gold deposits of Ghana are derived from the Brazil plateau when the two continents lay side by side. 3. The Gondwana system of sediments from India is known to have its counterparts in six different landmasses of the Southern Hemisphere. (a) I and III only (b) I and II only (c) I, II and III (d) II and III only", marks: 0 },
              { id: "q105", year: 0, type: "M", q: "What do you understand by the theory of continental drift? Discuss the prominent evidences in its support.", marks: 5 }
            ] },
            { n: "2.4.2", t: "Sea Floor Spreading", d: "Mid-oceanic ridges, Harry Hess, paleomagnetic evidence" },
            { n: "2.4.3", t: "Plate Tectonics Theory", d: "Lithospheric plates, convection currents" },
            { n: "2.4.4", t: "Plate Boundaries", d: "Divergent, Convergent, Transform — landforms at each" },
            { n: "2.4.5", t: "Indian Plate movement", d: "Collision with Eurasian plate, Himalayan formation" },
            { n: "2.4.6", t: "Mantle Plumes & Hotspots", d: "Definition, role in plate tectonics", questions: [
              { id: "q056", year: 0, type: "M", q: "Define mantle plume and explain its role in plate tectonics.", marks: 10 }
            ] },
            { n: "2.4.7", t: "Isostasy", d: "Concept, equilibrium of crustal masses" },
          ]},
          { id: "2.5", title: "Earthquakes", tag: "P+M", freq: 2, topics: [
            { n: "2.5.1", t: "Causes & types", d: "Tectonic, volcanic, collapse" },
            { n: "2.5.2", t: "Seismic waves behavior", d: "P, S, surface waves; shadow zones" },
            { n: "2.5.3", t: "Measurement", d: "Richter, Mercalli scales" },
            { n: "2.5.4", t: "Global distribution", d: "Circum-Pacific, Mid-Atlantic, Alpine-Himalayan", questions: [
              { id: "q038", year: 0, type: "M", q: "Discuss the geophysical characteristics of Circum-Pacific Zone.", marks: 10 }
            ] },
            { n: "2.5.5", t: "Indian seismic zones", d: "Zone classification, vulnerability mapping" },
            { n: "2.5.6", t: "Earthquake preparedness", d: "Mitigation, early warning" },
          ]},
          { id: "2.6", title: "Volcanism", tag: "P+M", freq: 2, recent: true, topics: [
            { n: "2.6.1", t: "Causes of volcanism", d: "Plate boundaries, hotspots" },
            { n: "2.6.2", t: "Volcanic products", d: "Pyroclastic debris, ash, dust, gases", questions: [
              { id: "prelims_2024_q53", year: 2024, type: "P", q: "Consider the following: 1. Pyroclastic debris 2. Ash and dust 3. Nitrogen compounds 4. Sulphur compounds — How many of the above are products of volcanic eruptions? (a) Only one (b) Only two (c) Only three (d) All four", marks: 0 }
            ] },
            { n: "2.6.3", t: "Volcano types", d: "Shield, composite, caldera, flood basalt, cinder cone" },
            { n: "2.6.4", t: "Intrusive landforms", d: "Batholiths, laccoliths, sills, dykes, lopolith" },
            { n: "2.6.5", t: "Global distribution", d: "Ring of Fire, Mid-Atlantic Ridge" },
            { n: "2.6.6", t: "2021 global eruptions", d: "La Palma, etc.", questions: [
              { id: "prelims_2019_q_geo85", year: 2019, type: "P", q: "Consider the following: 1. The Barren Island volcano is an active volcano located in Indian territory. 2. Barren Island lies about 140 km east of Great Nicobar. 3. The last time the Barren Island volcano erupted was in 1991 and it has remained inactive since. Which is/are correct? (a) 1 only (b) 2 and 3 (c) 3 only (d) 1 and 3", marks: 0 },
              { id: "q032", year: 0, type: "M", q: "Mention the global occurrence of volcanic eruptions in 2021 and their impact on regional environment.", marks: 10 }
            ] },
          ]},
          { id: "2.7", title: "Landforms by Agents", tag: "P+M", topics: [
            { n: "2.7.1", t: "Running Water — Erosional", d: "Valleys, gorges, canyons, potholes, meanders", questions: [
              { id: "prelims_2022_q_geo60", year: 2022, type: "P", q: "Gandikota canyon of South India was created by which one of the following rivers? (a) Cauvery (b) Manjira (c) Pennar (d) Tungabhadra", marks: 0 }
            ] },
            { n: "2.7.2", t: "Running Water — Depositional", d: "Alluvial fans, deltas, flood plains, oxbow lakes", questions: [
              { id: "q100", year: 0, type: "M", q: "There is no formation of deltas by rivers of the Western Ghats. Why?", marks: 5 }
            ] },
            { n: "2.7.3", t: "Wind — Erosional", d: "Deflation hollows, mushroom rocks, pediments, playas" },
            { n: "2.7.4", t: "Wind — Depositional", d: "Barchans, seif dunes, parabolic dunes, loess" },
            { n: "2.7.5", t: "Glacial — Erosional", d: "Cirques, horns, aretes, glacial troughs, fjords", questions: [
              { id: "q016", year: 0, type: "M", q: "How are the fjords formed? Why do they constitute some of the most picturesque areas of the world?", marks: 10 }
            ] },
            { n: "2.7.6", t: "Glacial — Depositional", d: "Moraines, eskers, drumlins, outwash plains" },
            { n: "2.7.7", t: "Karst/Groundwater", d: "Sinkholes, caves, stalactites, stalagmites" },
            { n: "2.7.8", t: "Coastal — Erosional", d: "Cliffs, wave-cut platforms, caves, stacks, arches" },
            { n: "2.7.9", t: "Coastal — Depositional", d: "Beaches, bars, spits, tombolo, barrier islands" },
          ]},
          { id: "2.8", title: "Fold Mountains & Global Relief", tag: "P+M", topics: [
            { n: "2.8.1", t: "Young fold mountains", d: "Himalayas evidence (gorges, U-turns)", questions: [
              { id: "prelims_2012_q_geo66", year: 2012, type: "P", q: "When you travel in Himalayas, you will see: 1. Deep gorges 2. U-turn river courses 3. Parallel mountain ranges 4. Steep gradients causing landsliding. Which can be said to be evidence for Himalayas being young fold mountains? (a) 1 and 2 only (b) 1, 2 and 4 only (c) 3 and 4 only (d) 1, 2, 3 and 4", marks: 0 }
            ] },
            { n: "2.8.2", t: "Global fold mountain distribution", d: "Margins of continents, association with EQ/volcanoes", questions: [
              { id: "q086", year: 0, type: "M", q: "Why are the world\'s fold mountain systems located along the margins of continents? Bring out the association between the global distribution of fold mountains and the earthquakes and volcanoes.", marks: 10 },
              { id: "q087", year: 0, type: "M", q: "Explain the formation of thousands of islands in Indonesian and Philippines archipelagos.", marks: 10 }
            ] },
            { n: "2.8.3", t: "Mountain types", d: "Fold vs block mountains", questions: [
              { id: "prelims_2024_q60", year: 2024, type: "P", q: "Consider the following: Region-Mountain Range-Type: Central Asia-Vosges-Fold mountain, Europe-Alps-Block mountain, North America-Appalachians-Fold mountain, South America-Andes-Fold mountain — In how many rows is the information correctly matched? (a) Only one (b) Only two (c) Only three (d) All four", marks: 0 }
            ] },
          ]},
        ],
        topics: []
      },
      {
        id: 3, title: "Climatology", tag: "P+M", freq: 3,
        subs: [
          { id: "3.1", title: "Atmosphere Structure & Composition", tag: "P", topics: [
            { n: "3.1.1", t: "Atmospheric composition", d: "Gases, water vapor, dust particles" },
            { n: "3.1.2", t: "Atmospheric layers", d: "Troposphere, stratosphere, mesosphere, thermosphere, exosphere", questions: [
              { id: "prelims_2024_q52", year: 2024, type: "P", q: "Consider the following statements: Statement-I: Thickness of the troposphere at the equator is much greater as compared to poles. Statement-II: At the equator, heat is transported to great heights by strong convectional currents. Which is correct? (a) Both correct and II explains I (b) Both correct but II does not explain I (c) I correct, II incorrect (d) I incorrect, II correct", marks: 0 },
              { id: "prelims_2011_q_geo9", year: 2011, type: "P", q: "The jet aircraft fly very easily and smoothly in the lower stratosphere. What could be the explanation? 1. There are no clouds or water vapour in the lower stratosphere. 2. There are no vertical winds in the lower stratosphere. Which is/are correct? (a) 1 only (b) 2 only (c) Both 1 and 2 (d) Neither 1 nor 2", marks: 0 },
              { id: "q028", year: 0, type: "M", q: "Troposphere is a very significant atmospheric layer that determines weather processes. How?", marks: 15 }
            ] },
            { n: "3.1.3", t: "Temperature with altitude", d: "Lapse rate, inversion", questions: [
              { id: "prelims_2024_q72", year: 2024, type: "P", q: "With reference to water vapour, which of the following statements is/are correct? 1. It is a gas, the amount of which decreases with altitude. 2. Its percentage is maximum at the poles. (a) 1 only (b) 2 only (c) Both 1 and 2 (d) Neither 1 nor 2", marks: 0 },
              { id: "prelims_2012_q_geo11", year: 2012, type: "P", q: "Normally, the temperature decreases with the increase in height from the Earth\'s surface, because: 1. The atmosphere can be heated upwards only from the Earth\'s surface 2. There is more moisture in the upper atmosphere 3. The air is less dense in the upper atmosphere (a) 1 only (b) 2 and 3 only (c) 1 and 3 only (d) 1, 2 and 3", marks: 0 },
              { id: "q102", year: 0, type: "M", q: "What do you understand by the phenomenon of temperature inversion in meteorology? How does it affect weather and the habitants of the place?", marks: 5 }
            ] },
            { n: "3.1.4", t: "Atmospheric gases & radiation", d: "Gases trap radiation", questions: [
              { id: "prelims_2025_q49", year: 2025, type: "P", q: "Consider the following statements: 1. Without the atmosphere, temperature would be well below freezing point everywhere on the Earth\'s surface. 2. Heat absorbed and trapped by the atmosphere maintains our planet\'s average temperature. 3. Atmosphere\'s gases, like carbon dioxide, are particularly good at absorbing and trapping radiation. Which are correct? (a) I and III only (b) I and II only (c) I, II and III (d) II and III only", marks: 0 }
            ] },
          ]},
          { id: "3.2", title: "Insolation & Heat Budget", tag: "P+M", topics: [
            { n: "3.2.1", t: "Solar radiation", d: "Aphelion, perihelion, solar constant" },
            { n: "3.2.2", t: "Factors affecting insolation", d: "Rotation, tilt angle, day length, transparency" },
            { n: "3.2.3", t: "Heating mechanisms", d: "Conduction, convection, advection, radiation" },
            { n: "3.2.4", t: "Heat budget", d: "Terrestrial radiation, albedo, greenhouse effect", questions: [
              { id: "prelims_2024_q51", year: 2024, type: "P", q: "Consider the following statements: Statement-I: The atmosphere is heated more by incoming solar radiation than by terrestrial radiation. Statement-II: Carbon dioxide and other greenhouse gases in the atmosphere are good absorbers of long wave radiation. Which is correct? (a) Both correct and II explains I (b) Both correct but II does not explain I (c) I correct, II incorrect (d) I incorrect, II correct", marks: 0 }
            ] },
            { n: "3.2.5", t: "Temperature distribution", d: "Global patterns, continentality effect", questions: [
              { id: "prelims_2013_q_geo14", year: 2013, type: "P", q: "The annual range of temperature in the interior of the continents is high as compared to coastal areas. What is/are the reason/reasons? 1. Thermal difference between land and water 2. Variation in altitude 3. Presence of strong winds in the interior 4. Heavy rains in the interior (a) 1 only (b) 1 and 2 only (c) 2 and 3 only (d) 1, 2, 3 and 4", marks: 0 },
              { id: "prelims_2023_q56", year: 2023, type: "P", q: "Statement-I: Temperature contrast between continents and oceans is greater during summer than in winter. Statement-II: Specific heat of water is more than that of land surface. Which is correct? (a) Both correct, II explains I (b) Both correct, II doesn\'t explain I (c) I correct, II incorrect (d) I incorrect, II correct", marks: 0 }
            ] },
            { n: "3.2.6", t: "Isotherms", d: "Jan & Jul patterns, deviation over land/ocean", questions: [
              { id: "prelims_2024_q54", year: 2024, type: "P", q: "Which of the following is/are correct inference/inferences from isothermal maps in the month of January? 1. The isotherms deviate to the north over the ocean and to the south over the continent. 2. The presence of cold ocean currents, Gulf Stream and North Atlantic Drift make the North Atlantic Ocean colder and the isotherms bend towards the north. (a) 1 only (b) 2 only (c) Both 1 and 2 (d) Neither 1 nor 2", marks: 0 },
              { id: "prelims_2025_q47", year: 2025, type: "P", q: "Statement-I: In January, in the Northern Hemisphere, the isotherms bend equatorward while crossing the landmasses, and poleward while crossing the oceans. Statement-II: In January, the air over the oceans is warmer than that over the landmasses in the Northern Hemisphere. Which is correct? (a) Both correct and II explains I (b) Both correct but II does not explain I (c) I correct but II is not correct (d) I is not correct but II is correct", marks: 0 }
            ] },
            { n: "3.2.7", t: "Temperature inversion", d: "Types, causes, effects", questions: [
              { id: "q103", year: 0, type: "M", q: "Bring out the causes for the formation of heat islands in the urban habitat of the world.", marks: 5 }
            ] },
          ]},
          { id: "3.3", title: "Atmospheric Pressure & Winds", tag: "P+M", freq: 2, topics: [
            { n: "3.3.1", t: "Pressure belts", d: "Equatorial low, subtropical high, sub-polar low, polar high" },
            { n: "3.3.2", t: "Pressure gradient force", d: "Coriolis force, friction, geostrophic winds", questions: [
              { id: "prelims_2024_q74", year: 2024, type: "P", q: "With reference to Coriolis force, which of the following statements is/are correct? 1. It increases with increase in wind velocity. 2. It is maximum at the poles and is absent at the equator. (a) 1 only (b) 2 only (c) Both 1 and 2 (d) Neither 1 nor 2", marks: 0 }
            ] },
            { n: "3.3.3", t: "Planetary winds", d: "Trade winds, Westerlies, Polar easterlies", questions: [
              { id: "prelims_2011_q_geo7", year: 2011, type: "P", q: "Westerlies in the southern hemisphere are stronger and persistent than in northern hemisphere. Why? 1. Southern hemisphere has less landmass as compared to northern hemisphere. 2. Coriolis force is higher in southern hemisphere. Which is/are correct? (a) 1 only (b) 2 only (c) Both 1 and 2 (d) Neither 1 nor 2", marks: 0 },
              { id: "prelims_2015_q_geo19", year: 2015, type: "P", q: "Consider the following statements: 1. The winds which blow between 30°N and 60°S latitudes throughout the year are known as westerlies. 2. The moist air masses that cause winter rains in North-Western region of India are part of westerlies. Which is/are correct? (a) 1 only (b) 2 only (c) Both 1 and 2 (d) Neither 1 nor 2", marks: 0 }
            ] },
            { n: "3.3.4", t: "Hadley, Ferrel, Polar cells", d: "General atmospheric circulation model" },
            { n: "3.3.5", t: "Seasonal winds", d: "Monsoon mechanism", questions: [
              { id: "q017", year: 0, type: "M", q: "Why is the South-West Monsoon called Purvaiya (easterly) in Bhojpur Region? How has this directional seasonal wind system influenced the cultural ethos of the region?", marks: 10 }
            ] },
            { n: "3.3.6", t: "Local winds", d: "Land-sea breeze, Chinook, Foehn, Mistral, Sirocco" },
            { n: "3.3.7", t: "Jet streams", d: "Subtropical jet, polar jet, role in monsoon", questions: [
              { id: "q020", year: 0, type: "M", q: "From being net food importer in 1960s, India has emerged as a net food exporter to the world. Provide reasons.", marks: 15 }
            ] },
          ]},
          { id: "3.4", title: "Moisture, Clouds & Precipitation", tag: "P", topics: [
            { n: "3.4.1", t: "Humidity", d: "Absolute, relative, specific; dew point" },
            { n: "3.4.2", t: "Evaporation & condensation", d: "Dew, frost, fog, mist", questions: [
              { id: "prelims_2019_q_geo21", year: 2019, type: "P", q: "Why are dewdrops not formed on a cloudy night? (a) Clouds absorb the radiation released from the Earth\'s surface (b) Clouds reflect back the Earth\'s radiation (c) The Earth\'s surface would have low temperatures on cloudy nights (d) Clouds deflect the blowing wind to ground level", marks: 0 }
            ] },
            { n: "3.4.3", t: "Cloud types", d: "Cirrus, cumulus, stratus, nimbus; altitude classes", questions: [
              { id: "prelims_2022_q_geo6", year: 2022, type: "P", q: "Consider the following statements: 1. High clouds primarily reflect solar radiation and cool the surface of the Earth. 2. Low clouds have a high absorption of infrared radiation emanating from the Earth\'s surface and thus cause a warming effect. Which is/are correct? (a) 1 only (b) 2 only (c) Both 1 and 2 (d) Neither 1 nor 2", marks: 0 }
            ] },
            { n: "3.4.4", t: "Precipitation types", d: "Convectional, orographic, cyclonic/frontal", questions: [
              { id: "q010", year: 0, type: "M", q: "What is the phenomenon of cloudbursts? Explain.", marks: 10 }
            ] },
            { n: "3.4.5", t: "Precipitation forms", d: "Rainfall, snowfall, sleet, hail", questions: [
              { id: "prelims_2013_q_geo16", year: 2013, type: "P", q: "During a thunderstorm, the thunder in the skies is produced by the: 1. Meeting of cumulonimbus clouds in the sky 2. Lightning that separates the nimbus clouds 3. Violent upward movement of air and water particles (a) 1 only (b) 2 and 3 (c) 1 and 3 (d) None of the above produces the thunder", marks: 0 }
            ] },
          ]},
          { id: "3.5", title: "Air Masses, Fronts & Cyclones", tag: "P+M", freq: 2, topics: [
            { n: "3.5.1", t: "Air mass classification", d: "Maritime/continental; tropical/polar/arctic" },
            { n: "3.5.2", t: "Fronts", d: "Warm, cold, occluded, stationary" },
            { n: "3.5.3", t: "Temperate cyclones", d: "Formation, characteristics, associated weather" },
            { n: "3.5.4", t: "Tropical cyclones", d: "Formation conditions, SST role", questions: [
              { id: "q008", year: 0, type: "M", q: "What is sea surface temperature rise? How does it affect the formation of tropical cyclones?", marks: 10 }
            ] },
            { n: "3.5.5", t: "Cyclone distribution", d: "Absent in S. Atlantic/SE Pacific", questions: [
              { id: "prelims_2015_q_geo18", year: 2015, type: "P", q: "In the South Atlantic and South-Eastern Pacific regions in tropical latitudes, cyclone does not originate. What is the reason? (a) Sea surface temperatures are low (b) Inter-tropical Convergence Zone seldom occurs (c) Coriolis force is too weak (d) Absence of land in those regions", marks: 0 },
              { id: "q088", year: 0, type: "M", q: "Tropical cyclones are largely confined to South China Sea, Bay of Bengal and Gulf of Mexico. Why?", marks: 10 }
            ] },
            { n: "3.5.6", t: "Thunderstorms & tornadoes", d: "Formation, characteristics", questions: [
              { id: "q013", year: 0, type: "M", q: "What is a twister? Why is the majority of twisters observed in areas around the Gulf of Mexico?", marks: 15 }
            ] },
            { n: "3.5.7", t: "IMD color-coded warnings", d: "Cyclone-prone area warning system", questions: [
              { id: "q022", year: 0, type: "M", q: "Discuss the meaning of color-coded weather warnings for cyclone prone areas given by Indian Meteorological Department.", marks: 10 },
              { id: "q104", year: 0, type: "M", q: "The recent cyclone on east coast of India was called Phailin. How are the tropical cyclones named across the world? Elaborate.", marks: 5 }
            ] },
          ]},
          { id: "3.6", title: "Climate Types (Koppen)", tag: "P", recent: true, topics: [
            { n: "3.6.1", t: "Equatorial climate (Af)", d: "Hot wet, daily convectional rain", questions: [
              { id: "prelims_2015_q_geo20", year: 2015, type: "P", q: "Each day is more or less the same, the morning is clear and bright with a sea breeze; as the Sun climbs high in the sky, heat mounts up, dark clouds form, then rain comes with thunder and lightning. But the rain is soon over. Which region is described? (a) Savannah (b) Equatorial (c) Monsoon (d) Mediterranean", marks: 0 },
              { id: "prelims_2013_q_geo13", year: 2013, type: "P", q: "Which of the following is/are unique characteristic/characteristics of equatorial forests? 1. Presence of tall, closely set trees with crowns forming a continuous canopy 2. Coexistence of a large number of species 3. Presence of numerous varieties of epiphytes (a) 1 only (b) 2 and 3 only (c) 1 and 3 only (d) 1, 2 and 3", marks: 0 }
            ] },
            { n: "3.6.2", t: "Tropical Monsoon (Am)", d: "Seasonal reversal of winds", questions: [
              { id: "prelims_2014_q_geo17", year: 2014, type: "P", q: "The seasonal reversal of winds is the typical characteristic of: (a) Equatorial climate (b) Mediterranean climate (c) Monsoon climate (d) All of the above climates", marks: 0 }
            ] },
            { n: "3.6.3", t: "Savanna (Aw)", d: "Definite dry and wet season", questions: [
              { id: "prelims_2012_q_geo12", year: 2012, type: "P", q: "Which one of the following is the characteristic climate of the Tropical Savannah Region? (a) Rainfall throughout the year (b) Rainfall in winter only (c) An extremely short dry season (d) A definite dry and wet season", marks: 0 }
            ] },
            { n: "3.6.4", t: "Hot desert (BWh)", d: "Extreme temperature range, scanty rainfall", questions: [
              { id: "prelims_2011_q_geo8", year: 2011, type: "P", q: "What could be the main reason/reasons for the formation of the African and Eurasian desert belt? 1. It is located in the sub-tropical high-pressure cells. 2. It is under the influence of warm ocean currents. Which is/are correct? (a) 1 only (b) 2 only (c) Both 1 and 2 (d) Neither 1 nor 2", marks: 0 },
              { id: "q095", year: 0, type: "M", q: "Major hot deserts in northern hemisphere are located between 20-30 deg N latitudes and on the western side of the continents. Why?", marks: 10 }
            ] },
            { n: "3.6.5", t: "Mediterranean (Cs)", d: "Winter rainfall, summer drought" },
            { n: "3.6.6", t: "Marine West Coast (Cfb)", d: "Low temp range, year-round rain", questions: [
              { id: "prelims_2024_q73", year: 2024, type: "P", q: "Consider the following description: 1. Annual and daily range of temperatures is low. 2. Precipitation occurs throughout the year. 3. Precipitation varies between 50 cm - 250 cm. What is this type of climate? (a) Equatorial climate (b) China type climate (c) Humid subtropical climate (d) Marine West coast climate", marks: 0 }
            ] },
            { n: "3.6.7", t: "Central Asian Steppe (BSk)", d: "Extreme climate, nomadic herders", questions: [
              { id: "prelims_2013_q_geo15", year: 2013, type: "P", q: "Climate is extreme, rainfall is scanty and the people used to be nomadic herders. The above statement best describes which of the following regions? (a) African Savannah (b) Central Asian Steppe (c) North American Prairie (d) Siberian Tundra", marks: 0 }
            ] },
            { n: "3.6.8", t: "British type climate", d: "Oceanic temperate" },
            { n: "3.6.9", t: "Siberian/Laurentian", d: "Continental, sub-arctic" },
            { n: "3.6.10", t: "Polar/Tundra", d: "Extreme cold, permafrost" },
          ]},
          { id: "3.7", title: "El Nino, La Nina & Climate Phenomena", tag: "P+M", freq: 2, topics: [
            { n: "3.7.1", t: "El Nino", d: "Mechanism, effects on monsoon", questions: [
              { id: "prelims_2011_q_geo26", year: 2011, type: "P", q: "La Nina is suspected to have caused recent floods in Australia. How is La Nina different from El Nino? 1. La Nina is characterized by unusually cold ocean temperature in equatorial Indian Ocean whereas El Nino by warm temperature in equatorial Pacific. 2. El Nino has adverse effects on SW monsoon of India, but La Nina has no effect. Which is/are correct? (a) 1 only (b) 2 only (c) Both 1 and 2 (d) Neither 1 nor 2", marks: 0 },
              { id: "q085", year: 0, type: "M", q: "Most of the unusual climatic happenings are explained as an outcome of the El-Nino effect. Do you agree?", marks: 10 }
            ] },
            { n: "3.7.2", t: "La Nina", d: "Differences from El Nino" },
            { n: "3.7.3", t: "ENSO cycle", d: "Walker Circulation, Southern Oscillation Index" },
            { n: "3.7.4", t: "Indian Ocean Dipole (IOD)", d: "Influence on El Nino's monsoon impact", questions: [
              { id: "prelims_2017_q_geo31", year: 2017, type: "P", q: "With reference to Indian Ocean Dipole (IOD): 1. IOD is characterised by a difference in SST between tropical Western Indian Ocean and tropical Eastern Pacific Ocean. 2. An IOD phenomenon can influence an El Nino\'s impact on the monsoon. Which is/are correct? (a) 1 only (b) 2 only (c) Both 1 and 2 (d) Neither 1 nor 2", marks: 0 }
            ] },
            { n: "3.7.5", t: "Trade winds & ocean temps", d: "Western oceans warmer mechanism", questions: [
              { id: "prelims_2021_q_geo23", year: 2021, type: "P", q: "Consider the following statements: 1. In the tropical zone, the western sections of the oceans are warmer than the eastern sections owing to the influence of trade winds. 2. In the temperate zone, westerlies make the eastern sections of oceans warmer than the western sections. Which is/are correct? (a) 1 only (b) 2 only (c) Both 1 and 2 (d) Neither 1 nor 2", marks: 0 }
            ] },
            { n: "3.7.6", t: "Urban Heat Islands", d: "Concept, effects" },
          ]},
          { id: "3.8", title: "Climate Change & Global Warming", tag: "M", freq: 2, topics: [
            { n: "3.8.1", t: "Himalayan glacier shrinkage", d: "Symptoms of climate change in India", questions: [
              { id: "q089", year: 0, type: "M", q: "Bring out the relationship between the shrinking Himalayan glaciers and the symptoms of climate change in the Indian sub-continent.", marks: 10 }
            ] },
            { n: "3.8.2", t: "Cryosphere & global climate", d: "How cryosphere affects climate", questions: [
              { id: "q065", year: 0, type: "M", q: "How does the cryosphere affect global climate?", marks: 10 },
              { id: "q035", year: 0, type: "M", q: "How do the melting of the Arctic ice and glaciers of the Antarctic differently affect the weather patterns and human activities on the Earth? Explain.", marks: 15 }
            ] },
            { n: "3.8.3", t: "SST rise & cyclone formation", d: "Sea surface temperature mechanism" },
            { n: "3.8.4", t: "Climate change & food security", d: "Tropical countries impact", questions: [
              { id: "q014", year: 0, type: "M", q: "Discuss the consequences of climate change on the food security in tropical countries.", marks: 10 }
            ] },
            { n: "3.8.5", t: "Global warming & coral reefs", d: "Impact on coral life system", questions: [
              { id: "q046", year: 0, type: "M", q: "Assess the impact of global warming on the coral life system with examples.", marks: 10 }
            ] },
            { n: "3.8.6", t: "Monsoon behavior changes", d: "Human-landscape interaction", questions: [
              { id: "q082", year: 0, type: "M", q: "How far do you agree that the behaviour of the Indian monsoon has been changing due to humanizing landscape? Discuss.", marks: 12 }
            ] },
            { n: "3.8.7", t: "Forest-climate change nexus", d: "Forest resources status & climate", questions: [
              { id: "q045", year: 0, type: "M", q: "Examine the status of forest resources of India and its resultant impact on climate change.", marks: 15 }
            ] },
            { n: "3.8.8", t: "Earth's rotation & polar ice", d: "Rotation shift from melting ice", questions: [
              { id: "prelims_2025_q13", year: 2025, type: "P", q: "Consider the following statements: Statement-I: Scientific studies suggest that a shift is taking place in the Earth\'s rotation and axis. Statement-II: Solar flares and associated coronal mass ejections bombarded the Earth\'s outermost atmosphere with tremendous amount of energy. Statement-III: As the Earth\'s polar ice melts, the water tends to move towards the equator. Which is correct? (a) Both II and III correct and both explain I (b) Both II and III correct but only one explains I (c) Only one of II and III is correct and it explains I (d) Neither II nor III is correct", marks: 0 }
            ] },
          ]},
        ],
        topics: []
      },
      {
        id: 4, title: "Oceanography", tag: "P+M", freq: 1,
        subs: [
          { id: "4.1", title: "Ocean Floor Relief", tag: "P", topics: [
            { n: "4.1.1", t: "Continental shelf", d: "Depth, width, economic significance" },
            { n: "4.1.2", t: "Continental slope", d: "Characteristics, submarine canyons" },
            { n: "4.1.3", t: "Deep sea/Abyssal plain", d: "Features, flatness" },
            { n: "4.1.4", t: "Oceanic trenches", d: "Mariana, formation at convergent boundaries" },
            { n: "4.1.5", t: "Mid-oceanic ridges", d: "Formation, sea floor spreading evidence" },
            { n: "4.1.6", t: "Seamounts, guyots, volcanic islands", d: "Formation, distribution" },
          ]},
          { id: "4.2", title: "Ocean Temperature & Salinity", tag: "P", recent: true, topics: [
            { n: "4.2.1", t: "Temperature distribution", d: "Vertical, horizontal; factors" },
            { n: "4.2.2", t: "Thermocline", d: "Concept, depth variations" },
            { n: "4.2.3", t: "Salinity distribution", d: "Factors: evaporation, precipitation, river influx" },
            { n: "4.2.4", t: "High salinity water bodies", d: "Red Sea — no rivers, low precipitation", questions: [
              { id: "prelims_2024_q29", year: 2024, type: "P", q: "Consider the following statements: 1. The Red Sea receives very little precipitation in any form. 2. No water enters the Red Sea from rivers. Which is/are correct? (a) 1 only (b) 2 only (c) Both 1 and 2 (d) Neither 1 nor 2", marks: 0 }
            ] },
          ]},
          { id: "4.3", title: "Ocean Currents", tag: "P+M", freq: 2, topics: [
            { n: "4.3.1", t: "Causes of currents", d: "Solar heating, wind, gravity, Coriolis force" },
            { n: "4.3.2", t: "Factors influencing", d: "Rotation, pressure, wind, density", questions: [
              { id: "prelims_2012_q_geo27", year: 2012, type: "P", q: "Consider the following factors: 1. Rotation of the Earth 2. Air pressure and wind 3. Density of ocean water 4. Revolution of the Earth — Which influence ocean currents? (a) 1 and 2 only (b) 1, 2 and 3 (c) 1 and 4 (d) 2, 3 and 4", marks: 0 }
            ] },
            { n: "4.3.3", t: "Warm vs cold currents", d: "Gulf Stream, Labrador, Kuroshio, etc." },
            { n: "4.3.4", t: "Equatorial counter current", d: "Eastward flow due to convergence", questions: [
              { id: "prelims_2015_q_geo29", year: 2015, type: "P", q: "What explains the eastward flow of the equatorial counter current? (a) The Earth\'s rotation on its axis (b) Convergence of the two equatorial currents (c) Difference in salinity of water (d) Occurrence of the belt of calm near the equator", marks: 0 }
            ] },
            { n: "4.3.5", t: "Effect on climate", d: "Tropical vs temperate zone temperatures", questions: [
              { id: "q025", year: 0, type: "M", q: "What are the forces that influence ocean currents? Describe their role in fishing industry of the world.", marks: 15 },
              { id: "q078", year: 0, type: "M", q: "Explain the factors responsible for the origin of ocean currents. How do they influence regional climates, fishing and navigation?", marks: 12 }
            ] },
            { n: "4.3.6", t: "Fishing grounds", d: "Where warm & cold currents meet", questions: [
              { id: "prelims_2013_q_geo28", year: 2013, type: "P", q: "The most important fishing grounds of the world are found in the regions where: (a) Warm and cold atmospheric currents meet (b) Rivers drain out large amounts of freshwater into the sea (c) Warm and cold oceanic currents meet (d) Continental shelf is undulating", marks: 0 }
            ] },
            { n: "4.3.7", t: "Ocean current mapping", d: "Major currents in Atlantic, Pacific, Indian", questions: [
              { id: "q053", year: 0, type: "M", q: "How do ocean currents and water masses differ in their impacts on marine life and coastal environment? Give suitable example.", marks: 15 },
              { id: "prelims_2020_q_geo33", year: 2020, type: "P", q: "With reference to Ocean Mean Temperature (OMT): 1. OMT is measured up to a depth of 26°C isotherm which is 129 metres in the south-western Indian Ocean during January-March. 2. OMT collected during January-March can be used in assessing monsoon rainfall. Which is/are correct? (a) 1 only (b) 2 only (c) Both 1 and 2 (d) Neither 1 nor 2", marks: 0 }
            ] },
          ]},
          { id: "4.4", title: "Waves & Tides", tag: "P", topics: [
            { n: "4.4.1", t: "Wave characteristics", d: "Crest, trough, wavelength, amplitude, period" },
            { n: "4.4.2", t: "Tidal forces", d: "Sun + Moon + centrifugal force", questions: [
              { id: "prelims_2015_q_geo30", year: 2015, type: "P", q: "Tides occur in the oceans and seas due to which? 1. Gravitational force of the Sun 2. Gravitational force of the Moon 3. Centrifugal force of the Earth (a) 1 only (b) 2 and 3 only (c) 1 and 3 only (d) 1, 2 and 3", marks: 0 }
            ] },
            { n: "4.4.3", t: "Tidal types", d: "Semi-diurnal, diurnal, mixed" },
            { n: "4.4.4", t: "Spring & neap tides", d: "Formation, timing" },
            { n: "4.4.5", t: "Tidal phenomena", d: "Chandipur sea water recession", questions: [
              { id: "prelims_2017_q_geo81", year: 2017, type: "P", q: "At one place in India, if you stand on the seashore, the sea water recedes from the shoreline a few km and comes back, twice a day, and you can walk on the seafloor. This is seen at: (a) Bhavnagar (b) Bheemunipatnam (c) Chandipur (d) Nagapattinam", marks: 0 }
            ] },
          ]},
          { id: "4.5", title: "Coral Reefs & Marine Deposits", tag: "P+M", topics: [
            { n: "4.5.1", t: "Coral reef types", d: "Fringing, barrier, atoll" },
            { n: "4.5.2", t: "Conditions for growth", d: "Temperature, salinity, depth, light" },
            { n: "4.5.3", t: "Great Barrier Reef", d: "Location, significance" },
            { n: "4.5.4", t: "Global warming & coral", d: "Impact assessment", questions: [
              { id: "prelims_2018_q_geo32", year: 2018, type: "P", q: "Consider the following statements: 1. Most of the world\'s coral reefs are in tropical waters. 2. More than one-third are in territories of Australia, Indonesia and Philippines. 3. Coral reefs host far more animal phyla than tropical rainforests. Which is/are correct? (a) 1 and 2 only (b) 3 only (c) 1 and 3 only (d) 1, 2 and 3", marks: 0 },
              { id: "prelims_2012_q_geo25", year: 2012, type: "P", q: "The acidification of oceans is increasing. Why is this a cause of concern? 1. Growth and survival of calcareous phytoplankton adversely affected 2. Growth and survival of coral reefs adversely affected 3. Survival of animals with phytoplanktonic larvae adversely affected 4. Cloud seeding and formation adversely affected (a) 1, 2 and 3 only (b) 2 only (c) 1 and 3 only (d) 1, 2, 3 and 4", marks: 0 },
              { id: "prelims_2015_q_geo79", year: 2015, type: "P", q: "Consider the following States: 1. Arunachal Pradesh 2. Himachal Pradesh 3. Mizoram — In which do Tropical Wet Evergreen Forests occur? (a) 1 only (b) 2 and 3 only (c) 1 and 3 only (d) 1, 2 and 3", marks: 0 }
            ] },
            { n: "4.5.5", t: "Ocean deposits", d: "Terrigenous, volcanic, biotic", questions: [
              { id: "q057", year: 0, type: "M", q: "What are the consequences of spreading of Dead Zones on marine ecosystem?", marks: 10 }
            ] },
          ]},
        ],
        topics: []
      },
      {
        id: 5, title: "Biogeography", tag: "P+M", freq: 1,
        subs: [
          { id: "5.1", title: "Soils", tag: "P+M", topics: [
            { n: "5.1.1", t: "Soil formation", d: "Factors: parent rock, climate, topography, organisms, time" },
            { n: "5.1.2", t: "Soil profile & horizons", d: "O, A, B, C, R horizons" },
            { n: "5.1.3", t: "Soil classification", d: "Global classification systems" },
            { n: "5.1.4", t: "Indian soil types", d: "Alluvial, black, red, laterite, desert, forest, saline", questions: [
              { id: "prelims_2013_q_geo34", year: 2013, type: "P", q: "Which regarding laterite soils of India are correct? 1. Generally red in colour 2. Rich in nitrogen and potash 3. Well-developed in Rajasthan and UP 4. Tapioca and cashew nuts grow well on these soils (a) 1, 2 and 3 (b) 2, 3 and 4 (c) 1 and 4 (d) 2 and 3 only", marks: 0 },
              { id: "prelims_2021_q_geo43", year: 2021, type: "P", q: "The black cotton soil of India has been formed due to the weathering of: (a) Brown forest soil (b) Fissure volcanic rock (c) Granite and schist (d) Shale and limestone", marks: 0 }
            ] },
            { n: "5.1.5", t: "Soil characteristics", d: "Nitrogen, mineral content, permeability", questions: [
              { id: "prelims_2013_q_geo38", year: 2013, type: "P", q: "Which of the following adds nitrogen to the soil? 1. Excretion of urea by animals 2. Burning of coal by man 3. Death of vegetation (a) 1 only (b) 2 and 3 only (c) 1 and 3 only (d) 1, 2 and 3", marks: 0 },
              { id: "prelims_2025_q48", year: 2025, type: "P", q: "Statement-I: Chalk is known as a very permeable rock whereas clay is known as quite an impermeable rock. Statement-II: Chalk is porous and hence can absorb water. Statement-III: Clay is not at all porous. Which is correct? (a) Both II and III correct and both explain I (b) Both II and III correct but only one explains I (c) Only one of II and III is correct and that explains I (d) Neither II nor III is correct", marks: 0 }
            ] },
            { n: "5.1.6", t: "Tropical rainforest soils", d: "Nutrient content challenges", questions: [
              { id: "prelims_2023_q55", year: 2023, type: "P", q: "Statement-I: Soil in tropical rain forests is rich in nutrients. Statement-II: High temperature and moisture of tropical rain forests cause dead organic matter to decompose quickly. Which is correct? (a) Both correct, II explains I (b) Both correct, II doesn\'t explain I (c) I correct, II incorrect (d) I incorrect, II correct", marks: 0 }
            ] },
            { n: "5.1.7", t: "Soil erosion", d: "Sheet, rill, gully; deforestation link" },
            { n: "5.1.8", t: "Soil conservation", d: "Contour ploughing, terracing, shelter belts" },
          ]},
          { id: "5.2", title: "Natural Vegetation", tag: "P+M", topics: [
            { n: "5.2.1", t: "Vegetation diversity in India", d: "Factors responsible" },
            { n: "5.2.2", t: "Tropical rainforests", d: "Characteristics, distribution", questions: [
              { id: "prelims_2021_q_geo24", year: 2021, type: "P", q: "Leaf litter decomposes faster than in any other biome and as a result the soil surface is often almost bare. The vegetation is largely composed of plant forms that reach up into the canopy by climbing or growing as epiphytes. This is most likely a description of: (a) Coniferous forest (b) Dry deciduous forest (c) Mangrove forest (d) Tropical rainforest", marks: 0 }
            ] },
            { n: "5.2.3", t: "Tropical moist deciduous", d: "Teak as dominant species", questions: [
              { id: "prelims_2015_q_geo76", year: 2015, type: "P", q: "In India, in which type of forests is teak a dominant tree species? (a) Tropical moist deciduous forest (b) Tropical rainforest (c) Tropical thorn scrub forest (d) Temperate forest with Grasslands", marks: 0 }
            ] },
            { n: "5.2.4", t: "Tropical dry deciduous", d: "Characteristics", questions: [
              { id: "prelims_2023_q44", year: 2023, type: "P", q: "Consider the following trees: 1. Jackfruit (Artocarpus heterophyllus) 2. Mahua (Madhuca indica) 3. Teak (Tectona grandis). How many are deciduous trees? (a) Only one (b) Only two (c) All three (d) None", marks: 0 }
            ] },
            { n: "5.2.5", t: "Tropical thorn forests", d: "Semi-arid regions" },
            { n: "5.2.6", t: "Montane/Alpine vegetation", d: "Altitudinal zonation" },
            { n: "5.2.7", t: "Mangrove forests", d: "Tsunami protection, Bhitarkanika", questions: [
              { id: "prelims_2011_q_geo10", year: 2011, type: "P", q: "The 2004 Tsunami made people realize that mangroves can serve as a reliable safety hedge against coastal calamities. How do mangroves function as a safety hedge? (a) The mangrove swamps separate the human settlements from the sea by a wide zone (b) The mangroves provide both food and medicines after any natural disaster (c) The mangrove trees are tall with dense canopies and serve as shelter during a cyclone (d) The mangrove trees do not get uprooted by storms and tides because of their extensive roots", marks: 0 }
            ] },
            { n: "5.2.8", t: "Combination forests", d: "A&N Islands — mangrove + evergreen + deciduous", questions: [
              { id: "prelims_2015_q_geo80", year: 2015, type: "P", q: "Which region of India has a combination of mangrove forest, evergreen forest and deciduous forest? (a) North Coastal Andhra Pradesh (b) South-West Bengal (c) Southern Saurashtra (d) Andaman and Nicobar Islands", marks: 0 }
            ] },
            { n: "5.2.9", t: "Living root bridges", d: "Meghalaya forests — bio-engineering", questions: [
              { id: "prelims_2015_q_geo78", year: 2015, type: "P", q: "In a particular region in India, the local people train the roots of living trees into robust bridges across streams. These unique living root bridges are found in: (a) Meghalaya (b) Himachal Pradesh (c) Jharkhand (d) Tamil Nadu", marks: 0 }
            ] },
            { n: "5.2.10", t: "Deforestation", d: "Causes, rates, climate impact" },
            { n: "5.2.11", t: "Conservation strategies", d: "Reforestation, social forestry, agro-forestry" },
            { n: "5.2.12", t: "Wildlife sanctuaries", d: "Significance in rainforest regions" },
          ]},
        ],
        topics: []
      },
    ]
  },
  {
    part: "B", partTitle: "Indian Geography",
    sections: [
      {
        id: 6, title: "Physiography of India", tag: "P", freq: 2,
        subs: [
          { id: "6.1", title: "The Himalayas", tag: "P+M", topics: [
            { n: "6.1.1", t: "Greater/Inner Himalayas", d: "Highest peaks, characteristics", questions: [
              { id: "prelims_2022_q_geo61", year: 2022, type: "P", q: "Consider the following pairs: Peak-Mountains: 1. Namcha Barwa-Garhwal Himalaya 2. Nanda Devi-Kumaon Himalaya 3. Nokrek-Sikkim Himalaya — Which are correctly matched? (a) 1 and 2 (b) 2 only (c) 1 and 3 (d) 3 only", marks: 0 }
            ] },
            { n: "6.1.2", t: "Middle/Lesser Himalayas", d: "Pir Panjal, Dhaula Dhar, Mahabharat ranges" },
            { n: "6.1.3", t: "Outer/Shiwalik Himalayas", d: "Dun valleys, foothill characteristics" },
            { n: "6.1.4", t: "Trans-Himalayas", d: "Karakoram, Ladakh, Zaskar ranges" },
            { n: "6.1.5", t: "Regional divisions", d: "Kashmir, Kumaon, Nepal, Assam Himalayas" },
            { n: "6.1.6", t: "Purvanchal Hills", d: "Patkai, Naga, Mizo, Manipur hills" },
            { n: "6.1.7", t: "Himalayan passes", d: "Important passes and their locations" },
            { n: "6.1.8", t: "Landslide vulnerability", d: "Himalayas vs W. Ghats frequency", questions: [
              { id: "q101", year: 0, type: "M", q: "Bring out the causes for more frequent occurrence of landslides in the Himalayas than in the Western Ghats.", marks: 5 },
              { id: "q029", year: 0, type: "M", q: "Differentiate the causes of landslides in the Himalayan region and Western Ghats.", marks: 10 },
              { id: "q071", year: 0, type: "M", q: "The Himalayas are highly prone to landslides. Discuss the causes and suggest suitable measures of mitigation.", marks: 12 }
            ] },
            { n: "6.1.9", t: "Glacier retreat", d: "Impact on water resources", questions: [
              { id: "q040", year: 0, type: "M", q: "How will the melting of Himalayan glaciers have a far-reaching impact on the water resources of India?", marks: 10 }
            ] },
          ]},
          { id: "6.2", title: "Northern Plains", tag: "P", topics: [
            { n: "6.2.1", t: "Formation", d: "Alluvial deposits of Himalayan rivers" },
            { n: "6.2.2", t: "Sub-divisions", d: "Bhabar, Tarai, Bhangar, Khadar" },
            { n: "6.2.3", t: "Characteristics", d: "Fertile soils, river systems, population density" },
          ]},
          { id: "6.3", title: "Peninsular Plateau", tag: "P", topics: [
            { n: "6.3.1", t: "Deccan Plateau", d: "Central highlands, Deccan trap", questions: [
              { id: "q023", year: 0, type: "M", q: "Discuss the natural resource potentials of Deccan Trap.", marks: 10 }
            ] },
            { n: "6.3.2", t: "Western Ghats", d: "Continuous range, higher elevation" },
            { n: "6.3.3", t: "Eastern Ghats", d: "Discontinuous, rivers rising from it", questions: [
              { id: "prelims_2021_q_geo89", year: 2021, type: "P", q: "With reference to India, Didwana, Kuchaman, Sargol and Khatu are the names of: (a) Glaciers (b) Mangrove areas (c) Ramsar sites (d) Saline lakes", marks: 0 }
            ] },
            { n: "6.3.4", t: "Important hills", d: "Cardamom, Kaimur, Mahadeo, Mikir Hills", questions: [
              { id: "prelims_2014_q_geo97", year: 2014, type: "P", q: "Which pair of islands is separated from each other by the Ten Degree Channel? (a) Andaman and Nicobar (b) Nicobar and Sumatra (c) Maldives and Lakshadweep (d) Sumatra and Java", marks: 0 },
              { id: "prelims_2023_q50", year: 2023, type: "P", q: "Consider the following statements: 1. Amarkantak Hills are at confluence of Vindhya and Sahyadri Ranges. 2. Biligirirangan Hills constitute easternmost part of Satpura Range. 3. Seshachalam Hills constitute southernmost part of Western Ghats. How many are correct? (a) Only one (b) Only two (c) All three (d) None", marks: 0 }
            ] },
            { n: "6.3.5", t: "Malwa, Chotanagpur Plateaus", d: "Characteristics, mineral wealth" },
          ]},
          { id: "6.4", title: "Coastal Plains & Islands", tag: "P", topics: [
            { n: "6.4.1", t: "Western coastal plain", d: "Konkan, Malabar, characteristics" },
            { n: "6.4.2", t: "Eastern coastal plain", d: "Coromandel, Northern Circars, deltas" },
            { n: "6.4.3", t: "Andaman & Nicobar Islands", d: "Volcanic origin, Nicobar closest to Sumatra", questions: [
              { id: "prelims_2017_q_geo108", year: 2017, type: "P", q: "Which island of India is the nearest to Equator and is closest to Sumatra? (a) Great Nicobar (b) Car Nicobar (c) Little Andaman (d) Indira Point", marks: 0 }
            ] },
            { n: "6.4.4", t: "Lakshadweep Islands", d: "Coral origin, characteristics" },
            { n: "6.4.5", t: "River confluence & coastal features", d: "Bhitarkanika — river confluence", questions: [
              { id: "prelims_2011_q_geo91", year: 2011, type: "P", q: "Among the following States, which one has the most suitable climatic conditions for the cultivation of a large variety of orchids with minimum cost of production? (a) Andhra Pradesh (b) Arunachal Pradesh (c) Madhya Pradesh (d) Uttar Pradesh", marks: 0 }
            ] },
          ]},
          { id: "6.5", title: "Thar Desert & Rann of Kutch", tag: "P", recent: true, topics: [
            { n: "6.5.1", t: "Thar Desert", d: "Formation, characteristics" },
            { n: "6.5.2", t: "Rann of Kutch", d: "Repeated sea-level falls creating marshland", questions: [
              { id: "prelims_2023_q42", year: 2023, type: "P", q: "Consider the following statements: 1. Jhelum River passes through Wular Lake. 2. Krishna River directly feeds Kolleru Lake. 3. Meandering of Gandak River formed Kanwar Lake. How many statements are correct? (a) Only one (b) Only two (c) All three (d) None", marks: 0 },
              { id: "prelims_2023_q46", year: 2023, type: "P", q: "Which one of the following is the best example of repeated falls in sea level, giving rise to present-day extensive marshland? (a) Bhitarkanika Mangroves (b) Marakkanam Salt Pans (c) Naupada Swamp (d) Rann of Kutch", marks: 0 }
            ] },
            { n: "6.5.3", t: "Saline lakes", d: "Didwana, Kuchaman, Sargol, Khatu", questions: [
              { id: "prelims_2021_q_geo88", year: 2021, type: "P", q: "With reference to the Indus River system, which one joins the Indus directly? (a) Chenab (b) Jhelum (c) Ravi (d) Sutlej", marks: 0 }
            ] },
          ]},
        ],
        topics: []
      },
      {
        id: 7, title: "Drainage System of India", tag: "P", freq: 2,
        subs: [
          { id: "7.1", title: "Himalayan Rivers", tag: "P", topics: [
            { n: "7.1.1", t: "Indus River System", d: "Jhelum through Wular Lake, Sutlej joins Indus directly", questions: [
              { id: "prelims_2021_q_geo87", year: 2021, type: "P", q: "Which of the following Protected Areas are located in Cauvery basin? 1. Nagarhole National Park 2. Papikonda National Park 3. Sathyamangalam Tiger Reserve 4. Wayanad Wildlife Sanctuary (a) 1 and 2 only (b) 3 and 4 only (c) 1, 3 and 4 only (d) 1, 2, 3 and 4", marks: 0 }
            ] },
            { n: "7.1.2", t: "Ganga River System", d: "Origin, major tributaries, delta", questions: [
              { id: "prelims_2024_q56", year: 2024, type: "P", q: "With reference to the Himalayan rivers joining the Ganga downstream of Prayagraj from West to East, which one of the following sequences is correct? (a) Ghaghara - Gomati - Gandak - Kosi (b) Gomati - Ghaghara - Gandak - Kosi (c) Ghaghara - Gomati - Kosi - Gandak (d) Gomati - Ghaghara - Kosi - Gandak", marks: 0 },
              { id: "q007", year: 0, type: "M", q: "Discuss the distribution and density of population in the Ganga River Basin with special reference to land, soil and water resources.", marks: 15 },
              { id: "q011", year: 0, type: "M", q: "The groundwater potential of the gangetic valley is on a serious decline. How may it affect the food security of India?", marks: 15 }
            ] },
            { n: "7.1.3", t: "Brahmaputra System", d: "U-turn due to syntaxial bending; tributaries", questions: [
              { id: "prelims_2011_q_geo64", year: 2011, type: "P", q: "The Brahmaputra, Irrawaddy and Mekong rivers originate in Tibet and flow through narrow and parallel mountain ranges. Brahmaputra makes a U-turn to flow into India. This is due to: (a) Uplift of folded Himalayan series (b) Syntaxial bending of geologically young Himalayas (c) Geo-Tectonic disturbance in tertiary folded mountain chains (d) Both (a) and (b)", marks: 0 },
              { id: "prelims_2016_q_geo105", year: 2016, type: "P", q: "Turkey is located between: (a) Black Sea and Caspian Sea (b) Black Sea and Mediterranean Sea (c) Gulf of Suez and Mediterranean Sea (d) Gulf of Aqaba and Dead Sea", marks: 0 }
            ] },
            { n: "7.1.4", t: "Himalayan river characteristics", d: "Antecedent, consequent, perennial nature", questions: [
              { id: "prelims_2014_q_geo96", year: 2014, type: "P", q: "Consider pairs: NH-Cities: 1. NH4-Chennai-Hyderabad 2. NH6-Mumbai-Kolkata 3. NH15-Ahmedabad-Jodhpur — Which are correctly matched? (a) 1 and 2 only (b) 3 only (c) 1, 2 and 3 (d) None", marks: 0 }
            ] },
          ]},
          { id: "7.2", title: "Peninsular Rivers", tag: "P", freq: 2, topics: [
            { n: "7.2.1", t: "West-flowing rivers", d: "Narmada — rift valley; Tapi — fault trough", questions: [
              { id: "prelims_2013_q_geo71", year: 2013, type: "P", q: "The Narmada River flows to the west, while most other large peninsular rivers flow to the east. Why? 1. It occupies a linear rift valley 2. It flows between the Vindhyas and the Satpuras 3. The land slopes to the west from Central India (a) 1 only (b) 2 and 3 (c) 1 and 3 (d) None", marks: 0 }
            ] },
            { n: "7.2.2", t: "Godavari system", d: "Tributaries — Indravati, Pranahita", questions: [
              { id: "prelims_2015_q_geo77", year: 2015, type: "P", q: "Consider the following rivers: 1. Vamsadhara 2. Indravati 3. Pranahita 4. Pennar — Which are tributaries of Godavari? (a) 1, 2 and 3 (b) 2, 3 and 4 (c) 1, 2 and 4 (d) 2 and 3 only", marks: 0 }
            ] },
            { n: "7.2.3", t: "Krishna system", d: "Origin, course, tributaries" },
            { n: "7.2.4", t: "Cauvery system", d: "Inter-state water dispute relevance" },
            { n: "7.2.5", t: "East-flowing rivers", d: "Mahanadi, Brahmani, Subarnarekha, Nagavali, Vamsadhara" },
            { n: "7.2.6", t: "Rivers from Eastern Ghats", d: "Nagavali, Vamsadhara" },
            { n: "7.2.7", t: "Pennar River", d: "Created Gandikota canyon" },
          ]},
          { id: "7.3", title: "Lakes of India", tag: "P", recent: true, topics: [
            { n: "7.3.1", t: "Natural vs artificial lakes", d: "Kodaikanal = artificial", questions: [
              { id: "prelims_2018_q_geo83", year: 2018, type: "P", q: "Which one of the following is an artificial lake? (a) Kodaikanal (Tamil Nadu) (b) Kolleru (Andhra Pradesh) (c) Nainital (Uttarakhand) (d) Renuka (Himachal Pradesh)", marks: 0 }
            ] },
            { n: "7.3.2", t: "River-lake associations", d: "Jhelum-Wular, Kanwar Lake-Burhi Gandak", questions: [
              { id: "prelims_2023_q42", year: 2023, type: "P", q: "Consider the following statements: 1. Jhelum River passes through Wular Lake. 2. Krishna River directly feeds Kolleru Lake. 3. Meandering of Gandak River formed Kanwar Lake. How many statements are correct? (a) Only one (b) Only two (c) All three (d) None", marks: 0 }
            ] },
            { n: "7.3.3", t: "Saline lakes", d: "Rajasthan's inland saline lakes", questions: [
              { id: "prelims_2021_q_geo88", year: 2021, type: "P", q: "With reference to the Indus River system, which one joins the Indus directly? (a) Chenab (b) Jhelum (c) Ravi (d) Sutlej", marks: 0 }
            ] },
          ]},
        ],
        topics: []
      },
      {
        id: 8, title: "Climate of India", tag: "P", freq: 1,
        subs: [],
        topics: [
          { n: "8.1", t: "Southwest Monsoon", d: "Mechanism, distribution, variations" },
          { n: "8.2", t: "Northeast Monsoon", d: "Winter rainfall in southern coast" },
          { n: "8.3", t: "Seasonal distribution", d: "Summer, rainy, winter seasons" },
          { n: "8.4", t: "Rainfall patterns", d: "Spatial variations, orographic effect" },
          { n: "8.5", t: "Cyclones in India", d: "Bay of Bengal, Arabian Sea patterns" },
        ]
      },
      {
        id: 9, title: "Biogeography of India", tag: "P", freq: 1,
        subs: [],
        topics: [
          { n: "9.1", t: "Biomes", d: "Tropical, temperate, alpine zones" },
          { n: "9.2", t: "Wildlife diversity", d: "Fauna distribution, endemism" },
          { n: "9.3", t: "Biodiversity hotspots", d: "Western Ghats, Northeast India" },
          { n: "9.4", t: "Conservation areas", d: "National parks, sanctuaries, biosphere reserves" },
        ]
      },
      {
        id: 10, title: "Minerals & Energy Resources", tag: "P+M", freq: 2,
        subs: [],
        topics: [
          { n: "10.1", t: "Coal deposits", d: "Major coalfields, characteristics", questions: [
            { id: "prelims_2013_q_geo49", year: 2013, type: "P", q: "Which are characteristics of Indian coal? 1. High ash content 2. Low sulphur content 3. Low ash fusion temperature (a) 1 and 2 only (b) 2 only (c) 1 and 3 only (d) 1, 2 and 3", marks: 0 },
            { id: "prelims_2013_q_geo35", year: 2013, type: "P", q: "Consider the following: 1. Natural gas occurs in the Gondwana beds. 2. Mica occurs in abundance in Kodarma. 3. Dharwars are famous for petroleum. Which is/are correct? (a) 1 and 2 (b) 2 only (c) 2 and 3 (d) None", marks: 0 }
          ] },
          { n: "10.2", t: "Metallic minerals", d: "Iron, copper, bauxite, manganese", questions: [
            { id: "prelims_2020_q_geo42", year: 2020, type: "P", q: "Consider the following minerals: 1. Bentonite 2. Chromite 3. Kyanite 4. Sillimanite — Which are officially designated as major minerals in India? (a) 1 and 2 only (b) 4 only (c) 1 and 3 only (d) 2, 3 and 4 only", marks: 0 }
          ] },
          { n: "10.3", t: "Non-metallic minerals", d: "Mica, asbestos, limestone", questions: [
            { id: "prelims_2023_q47", year: 2023, type: "P", q: "Ilmenite and rutile, abundantly available in certain coastal tracts of India, are rich sources of which one of the following? (a) Aluminium (b) Copper (c) Iron (d) Titanium", marks: 0 },
            { id: "prelims_2023_q48", year: 2023, type: "P", q: "About three-fourths of the world\'s cobalt, a metal required for manufacture of batteries for electric motor vehicles, is produced by: (a) Argentina (b) Botswana (c) Democratic Republic of the Congo (d) Kazakhstan", marks: 0 },
            { id: "prelims_2022_q_geo45", year: 2022, type: "P", q: "With reference to India: 1. Monazite is a source of rare earths. 2. Monazite contains thorium. 3. Monazite occurs naturally in the entire Indian coastal sands. 4. Only government bodies can process or export monazite. Which are correct? (a) 1, 2 and 3 only (b) 1, 2 and 4 only (c) 3 and 4 only (d) 1, 2, 3 and 4", marks: 0 }
          ] },
          { n: "10.4", t: "Oil & natural gas", d: "Major oil fields, production regions" },
          { n: "10.5", t: "Renewable energy", d: "Solar, wind, hydel, geothermal potential" },
          { n: "10.6", t: "Mining governance", d: "Government controls, environmental impact", questions: [
            { id: "prelims_2018_q_geo55", year: 2018, type: "P", q: "Consider the following: 1. In India, State Governments do not have the power to auction non-coal mines. 2. Andhra Pradesh and Jharkhand do not have gold mines. 3. Rajasthan has iron ore mines. Which is/are correct? (a) 1 and 2 (b) 2 only (c) 1 and 3 (d) 3 only", marks: 0 }
          ] },
          { n: "10.7", t: "Resource distribution", d: "Gondwana mining & low GDP contribution", questions: [
            { id: "q030", year: 0, type: "M", q: "Despite India being one of the countries of the Gondwanaland, its mining industry contributes much less to its GDP in percentage. Discuss.", marks: 10 }
          ] },
        ]
      },
      {
        id: 11, title: "Global Minerals & Energy", tag: "P", freq: 1,
        subs: [],
        topics: [
          { n: "11.1", t: "Major mineral producers", d: "Global distribution patterns", questions: [
            { id: "prelims_2025_q99", year: 2025, type: "P", q: "Consider the following pairs: Country-Resource-rich in: I. Botswana-Diamond II. Chile-Lithium III. Indonesia-Nickel — In how many rows is the information correctly matched? (a) Only one (b) Only two (c) All the three (d) None", marks: 0 }
          ] },
          { n: "11.2", t: "Energy crisis resources", d: "Global energy distribution & scarcity", questions: [
            { id: "q093", year: 0, type: "M", q: "Critically evaluate the various resources of the oceans which can be harnessed to meet the resource crisis in the world.", marks: 10 },
            { id: "q084", year: 0, type: "M", q: "What are the economic significances of discovery of oil in Arctic Sea and its possible environmental consequences?", marks: 12 }
          ] },
          { n: "11.3", t: "Offshore reserves", d: "Oil reserves distribution", questions: [
            { id: "q005", year: 0, type: "M", q: "Give a geographical explanation of the distribution of off-shore oil reserves of the world. How are they different from the on-shore occurrences of oil reserves?", marks: 15 }
          ] },
          { n: "11.4", t: "Oil pipelines", d: "SUMED pipeline Red Sea to Mediterranean", questions: [
            { id: "prelims_2024_q28", year: 2024, type: "P", q: "Consider the following statements: Statement-I: Sumed pipeline is a strategic route for Persian Gulf oil and natural gas shipments to Europe. Statement-II: Sumed pipeline connects the Red Sea with the Mediterranean Sea. Which one of the following is correct? (a) Both correct and II explains I (b) Both correct but II does not explain I (c) I correct, II incorrect (d) I incorrect, II correct", marks: 0 }
          ] },
          { n: "11.5", t: "Atomic energy", d: "Raw material distribution", questions: [
            { id: "q096", year: 0, type: "M", q: "With growing scarcity of fossil fuels, the atomic energy is gaining more and more significance in India. Discuss the availability of raw material required for atomic energy in India and in the world.", marks: 10 }
          ] },
          { n: "11.6", t: "Alternative energy", d: "Solar, wind potential globally", questions: [
            { id: "q003", year: 0, type: "M", q: "Explain briefly the ecological and economic benefits of solar energy generation in India with suitable examples.", marks: 10 },
            { id: "q024", year: 0, type: "M", q: "Examine the potential of wind energy in India and explain the reasons for their limited spatial spread.", marks: 10 }
          ] },
        ]
      },
      {
        id: 12, title: "Population Geography", tag: "P", freq: 1,
        subs: [],
        topics: [
          { n: "12.1", t: "Population distribution", d: "Global patterns, density variations" },
          { n: "12.2", t: "Population growth", d: "Birth rates, death rates, natural increase", questions: [
            { id: "prelims_2024_q17", year: 2024, type: "P", q: "Consider the following countries: 1. Italy 2. Japan 3. Nigeria 4. South Korea 5. South Africa — Which of the above countries are frequently mentioned in the media for their low birth rates, or ageing population or declining population? (a) 1, 2 and 4 (b) 1, 3 and 5 (c) 2 and 4 only (d) 3 and 5 only", marks: 0 }
          ] },
          { n: "12.3", t: "Migration patterns", d: "Internal, international migration flows", questions: [
            { id: "q009", year: 0, type: "M", q: "Why do large cities tend to attract more migrants than smaller towns? Discuss in the light of conditions in developing countries.", marks: 10 }
          ] },
          { n: "12.4", t: "Demographic transitions", d: "Stages of population change" },
          { n: "12.5", t: "Population policies", d: "Government interventions" },
        ]
      },
      {
        id: 13, title: "Agriculture & Horticulture", tag: "P+M", freq: 2,
        subs: [
          { id: "13.1", title: "Crop production", tag: "P", topics: [
            { n: "13.1.1", t: "Paddy cultivation", d: "Lower Gangetic plain, water requirements", questions: [
              { id: "prelims_2011_q_geo46", year: 2011, type: "P", q: "The lower Gangetic plain is characterized by a humid climate with high temperature throughout the year. Which pair of crops is most suitable? (a) Paddy and cotton (b) Wheat and Jute (c) Paddy and Jute (d) Wheat and cotton", marks: 0 }
            ] },
            { n: "13.1.2", t: "Cotton production", d: "Subtropical, frost-free regions", questions: [
              { id: "prelims_2020_q_geo58", year: 2020, type: "P", q: "The crop is subtropical in nature. A hard frost is injurious to it. It requires at least 210 frost-free days and 50 to 100 cm of rainfall. A light well-drained soil is ideally suited. Which crop? (a) Cotton (b) Jute (c) Sugarcane (d) Tea", marks: 0 }
            ] },
            { n: "13.1.3", t: "Sugarcane cultivation", d: "Water requirements, processing", questions: [
              { id: "prelims_2021_q_geo59", year: 2021, type: "P", q: "Among the following, which one is the least water-efficient crop? (a) Sugarcane (b) Sunflower (c) Pearl millet (d) Red gram", marks: 0 }
            ] },
            { n: "13.1.4", t: "Pulses cultivation", d: "Advantages, production areas", questions: [
              { id: "q064", year: 0, type: "M", q: "Mention the advantages of the cultivation of pulses because of which 2016 was declared as the International Year of Pulses by UN.", marks: 10 }
            ] },
            { n: "13.1.5", t: "Cocoa production", d: "Global producers — Cote d'Ivoire, Ghana", questions: [
              { id: "prelims_2024_q55", year: 2024, type: "P", q: "Which of the following countries are well known as the two largest cocoa producers in the world? (a) Algeria and Morocco (b) Botswana and Namibia (c) Cote d\'Ivoire and Ghana (d) Madagascar and Mozambique", marks: 0 }
            ] },
          ]},
          { id: "13.2", title: "Farming systems", tag: "P", topics: [
            { n: "13.2.1", t: "Mixed farming", d: "Animals + crops integration", questions: [
              { id: "prelims_2012_q_geo47", year: 2012, type: "P", q: "Which of the following is the chief characteristic of mixed farming? (a) Cultivation of both cash crops and food crops (b) Cultivation of two or more crops in the same field (c) Rearing of animals and cultivation of crops together (d) None of the above", marks: 0 }
            ] },
            { n: "13.2.2", t: "Rainfed agriculture", d: "Groundnut, sesamum, millets", questions: [
              { id: "prelims_2012_q_geo48", year: 2012, type: "P", q: "Consider the following crops: 1. Groundnut 2. Sesamum 3. Pearl millet — Which are predominantly rainfed? (a) 1 and 2 only (b) 2 and 3 only (c) 3 only (d) 1, 2 and 3", marks: 0 }
            ] },
            { n: "13.2.3", t: "Kharif crops", d: "Rice highest area in kharif", questions: [
              { id: "prelims_2013_q_geo50", year: 2013, type: "P", q: "Consider the following crops: 1. Cotton 2. Groundnut 3. Rice 4. Wheat — Which are Kharif crops? (a) 1 and 4 only (b) 2 and 3 only (c) 1, 2 and 3 only (d) 2, 3 and 4 only", marks: 0 },
              { id: "prelims_2019_q_geo56", year: 2019, type: "P", q: "With reference to Kharif crops in the last five years: 1. Area under rice cultivation is the highest. 2. Area under jowar is more than oilseeds. 3. Area of cotton cultivation is more than sugarcane. 4. Area under sugarcane cultivation has steadily decreased. Which is/are correct? (a) 1 and 3 only (b) 2, 3 and 4 only (c) 2 and 4 only (d) 1, 2, 3 and 4", marks: 0 }
            ] },
          ]},
          { id: "13.3", title: "Regional agriculture", tag: "P", topics: [
            { n: "13.3.1", t: "Gujarat agriculture", d: "Arid, cotton, cash crops", questions: [
              { id: "prelims_2011_q_geo65", year: 2011, type: "P", q: "A state with: 1. Northern part is arid and semi-arid 2. Central part produces cotton 3. Cash crops predominant over food crops. Which state? (a) Andhra Pradesh (b) Gujarat (c) Karnataka (d) Tamil Nadu", marks: 0 }
            ] },
            { n: "13.3.2", t: "Arunachal Pradesh", d: "Orchids cultivation", questions: [
              { id: "prelims_2011_q_geo63", year: 2011, type: "P", q: "Among the following States, which one has the most suitable climatic conditions for cultivation of a large variety of orchids with minimum cost of production? (a) Andhra Pradesh (b) Arunachal Pradesh (c) Madhya Pradesh (d) Uttar Pradesh", marks: 0 }
            ] },
            { n: "13.3.3", t: "India vs China agriculture", d: "Comparative analysis", questions: [
              { id: "prelims_2023_q45", year: 2023, type: "P", q: "Consider the following statements: 1. India has more arable area than China. 2. Proportion of irrigated area is more in India than China. 3. Average productivity per hectare in Indian agriculture is higher than China. How many are correct? (a) Only one (b) Only two (c) All three (d) None", marks: 0 }
            ] },
            { n: "13.3.4", t: "Green Revolution", d: "Geographic bypass — eastern region", questions: [
              { id: "q091", year: 0, type: "M", q: "Why did the Green Revolution in India virtually by-pass the eastern region despite fertile soil and good availability of water?", marks: 10 }
            ] },
          ]},
        ],
        topics: []
      },
      {
        id: 14, title: "Industries & Manufacturing", tag: "P+M", freq: 2,
        subs: [
          { id: "14.1", title: "Industrial location", tag: "P+M", topics: [
            { n: "14.1.1", t: "Iron & steel industry", d: "Location factors, spatial pattern", questions: [
              { id: "q041", year: 0, type: "M", q: "Account for the present location of iron and steel industries away from the source of raw material, by giving examples.", marks: 10 },
              { id: "q092", year: 0, type: "M", q: "Account for the change in the spatial pattern of the Iron and Steel industry in the world.", marks: 10 }
            ] },
            { n: "14.1.2", t: "Textile industry", d: "Cotton, jute, silk — decentralized", questions: [
              { id: "q098", year: 0, type: "M", q: "Analyze the factors for the highly decentralized cotton textile industry in India.", marks: 5 }
            ] },
            { n: "14.1.3", t: "Petroleum refineries", d: "Location determinants", questions: [
              { id: "q067", year: 0, type: "M", q: "Petroleum refineries are not necessarily located nearer to crude oil producing areas, particularly in developing countries. Explain its implications.", marks: 15 }
            ] },
            { n: "14.1.4", t: "Sugar mills", d: "Southern states trend expansion", questions: [
              { id: "q099", year: 0, type: "M", q: "Do you agree that there is a growing trend of opening new sugar mills in southern States of India? Discuss with justification.", marks: 5 }
            ] },
            { n: "14.1.5", t: "Agro-based food processing", d: "NW India advantages", questions: [
              { id: "q049", year: 0, type: "M", q: "Discuss the factors for localisation of agro-based food processing industries of North-West India.", marks: 10 }
            ] },
            { n: "14.1.6", t: "IT industry", d: "Socio-economic implications", questions: [
              { id: "q037", year: 0, type: "M", q: "What are the main socio-economic implications arising out of the development of IT industries in major cities of India?", marks: 15 }
            ] },
            { n: "14.1.7", t: "Industrial corridors", d: "Significance for development", questions: [
              { id: "q060", year: 0, type: "M", q: "What is the significance of Industrial Corridors in India? Identifying industrial corridors, explain their main characteristics.", marks: 15 }
            ] },
            { n: "14.1.8", t: "Regional manufacturing", d: "Resource-based industrial location", questions: [
              { id: "q048", year: 0, type: "M", q: "Can the strategy of regional resource-based manufacturing help in promoting employment in India?", marks: 10 }
            ] },
          ]},
          { id: "14.2", title: "Indian Industries", tag: "P", topics: [
            { n: "14.2.1", t: "Thermal power", d: "Maximum water consumer in industry", questions: [
              { id: "prelims_2013_q_geo51", year: 2013, type: "P", q: "Which one among the following industries is the maximum consumer of water in India? (a) Engineering (b) Paper and pulp (c) Textiles (d) Thermal power", marks: 0 }
            ] },
            { n: "14.2.2", t: "Coking coal", d: "Import requirements for steel", questions: [
              { id: "prelims_2015_q_geo54", year: 2015, type: "P", q: "In India, the steel production industry requires the import of: (a) Saltpetre (b) Rock phosphate (c) Coking coal (d) All of the above", marks: 0 }
            ] },
            { n: "14.2.3", t: "Cement, fertilizer", d: "Location, distribution patterns" },
            { n: "14.2.4", t: "Industrial regions", d: "India and global industrial belts" },
          ]},
        ],
        topics: []
      },
      {
        id: 15, title: "Transport & Trade", tag: "P+M", freq: 1,
        subs: [],
        topics: [
          { n: "15.1", t: "Road transport", d: "National highways, expressways, golden quadrilateral" },
          { n: "15.2", t: "Railway network", d: "Major routes, developments" },
          { n: "15.3", t: "Water transport", d: "Inland waterways; prospects", questions: [
            { id: "q076", year: 0, type: "M", q: "Enumerate the problems and prospects of inland water transport in India.", marks: 12 }
          ] },
          { n: "15.4", t: "Air transport", d: "Major routes, hubs" },
          { n: "15.5", t: "Pipeline transport", d: "Oil, gas pipelines in India" },
          { n: "15.6", t: "International trade", d: "Volume, direction, balance of trade", questions: [
            { id: "q094", year: 0, type: "M", q: "How does India see its place in the economic space of rising natural resources rich Africa?", marks: 10 }
          ] },
          { n: "15.7", t: "Port types", d: "Industrial, commercial, naval, entrepot", questions: [
            { id: "prelims_2023_q43", year: 2023, type: "P", q: "Consider the following pairs — Port: Well known as — 1. Kamarajar Port: First major port in India registered as a company 2. Mundra Port: Largest privately owned port in India 3. Visakhapatnam: Largest container port in India. How many pairs are correctly matched? (a) Only one (b) Only two (c) All three (d) None", marks: 0 }
          ] },
          { n: "15.8", t: "Connectivity initiatives", d: "E-W corridor, trilateral highway", questions: [
            { id: "prelims_2023_q51", year: 2023, type: "P", q: "With reference to India\'s connectivity projects: 1. East-West Corridor connects Dibrugarh and Surat. 2. Trilateral Highway connects Moreh in Manipur and Chiang Mai in Thailand. 3. BCIM Corridor connects Varanasi and Kunming. How many are correct? (a) Only one (b) Only two (c) All three (d) None", marks: 0 }
          ] },
          { n: "15.9", t: "WTO & trade blocs", d: "Regional groupings, implications" },
        ]
      },
      {
        id: 16, title: "Settlements & Urbanization", tag: "P+M", freq: 0,
        subs: [],
        topics: [
          { n: "16.1", t: "Rural settlement patterns", d: "Compact, dispersed, nucleated; location factors" },
          { n: "16.2", t: "Urban classification", d: "Town, city, conurbation, megalopolis, million city" },
          { n: "16.3", t: "Urbanization trends in India", d: "Growth patterns, challenges" },
          { n: "16.4", t: "Rural-urban migration", d: "Push-pull factors, impact" },
          { n: "16.5", t: "Urban problems", d: "Slums, waste, water supply, sanitation, transport", questions: [
            { id: "q031", year: 0, type: "M", q: "What are the environmental implications of the reclamation of water bodies into urban land use? Explain with examples.", marks: 10 },
            { id: "q043", year: 0, type: "M", q: "Account for the huge flooding of million cities in India including the smart ones like Hyderabad and Pune. Suggest lasting remedial measures.", marks: 15 },
            { id: "q074", year: 0, type: "M", q: "Major cities of India are becoming more vulnerable to flood conditions. Discuss.", marks: 12 },
            { id: "q079", year: 0, type: "M", q: "Mumbai, Delhi and Kolkata are the three Mega cities but air pollution is much more serious in Delhi. Why is this so?", marks: 12 }
          ] },
          { n: "16.6", t: "Smart cities", d: "Concept, mission", questions: [
            { id: "q083", year: 0, type: "M", q: "Smart cities in India cannot sustain without smart villages. Discuss in the backdrop of rural urban integration.", marks: 12 }
          ] },
          { n: "16.7", t: "Urban mass transport", d: "Economic development", questions: [
            { id: "q052", year: 0, type: "M", q: "How is efficient and affordable urban mass transport key to the rapid economic development of India?", marks: 15 }
          ] },
        ]
      },
    ]
  },
  {
    part: "C", partTitle: "Natural Resources & Management",
    sections: [
      {
        id: 17, title: "Water Resources", tag: "P+M", freq: 2,
        subs: [],
        topics: [
          { n: "17.1", t: "Freshwater crisis", d: "Global water scarcity patterns", questions: [
            { id: "q015", year: 0, type: "M", q: "Why is the world today confronted with a crisis of availability of and access to freshwater resources?", marks: 10 }
          ] },
          { n: "17.2", t: "Water stress in India", d: "Regional variations and causes", questions: [
            { id: "q050", year: 0, type: "M", q: "What is water stress? How and why does it differ regionally in India?", marks: 15 },
            { id: "q080", year: 0, type: "M", q: "India is well endowed with fresh water resources. Critically examine why it still suffers from water scarcity.", marks: 12 }
          ] },
          { n: "17.3", t: "Groundwater management", d: "Water harvesting, urban applications", questions: [
            { id: "q058", year: 0, type: "M", q: "The ideal solution of depleting ground water resources in India is water harvesting system. How can it be made effective in urban areas?", marks: 15 }
          ] },
          { n: "17.4", t: "Rivers interlinking", d: "Solutions for droughts, floods, navigation", questions: [
            { id: "q042", year: 0, type: "M", q: "The interlinking of rivers can provide viable solutions to the multi-dimensional inter-related problems of droughts, floods and interrupted navigation. Critically examine.", marks: 15 }
          ] },
          { n: "17.5", t: "Floods and irrigation", d: "Converting floods to resource", questions: [
            { id: "q068", year: 0, type: "M", q: "In what way can floods be converted into a sustainable source of irrigation and all-weather inland navigation in India?", marks: 15 }
          ] },
          { n: "17.6", t: "Indus Water Treaty", d: "International water sharing", questions: [
            { id: "q075", year: 0, type: "M", q: "Present an account of the Indus Water Treaty and examine its ecological, economic and political implications in the context of changing bilateral relations.", marks: 12 }
          ] },
          { n: "17.7", t: "Micro-watersheds", d: "Drought areas management", questions: [
            { id: "q077", year: 0, type: "M", q: "In what way micro-watershed development projects help in water conservation in drought-prone and semi-arid regions of India?", marks: 12 }
          ] },
          { n: "17.8", t: "Coastline potential", d: "Resources and hazard preparedness", questions: [
            { id: "q018", year: 0, type: "M", q: "Comment on the resource potentials of the long coastline of India and highlight the status of natural hazard preparedness in these areas.", marks: 15 }
          ] },
        ]
      },
      {
        id: 18, title: "Land & Forest Resources", tag: "P+M", freq: 2,
        subs: [],
        topics: [
          { n: "18.1", t: "Land resources", d: "Land use patterns, degradation", questions: [
            { id: "q072", year: 0, type: "M", q: "The effective management of land and water resources will drastically reduce the human miseries. Explain.", marks: 12 }
          ] },
          { n: "18.2", t: "Forest conservation", d: "Biodiversity and climate impact", questions: [
            { id: "q019", year: 0, type: "M", q: "Identify and discuss the factors responsible for diversity of natural vegetation in India. Assess the significance of wildlife sanctuaries in rain forest regions of India.", marks: 15 }
          ] },
          { n: "18.3", t: "Mangrove ecosystems", d: "Coastal ecology and depletion", questions: [
            { id: "q047", year: 0, type: "M", q: "Discuss the causes of depletion of mangroves and explain their importance in maintaining coastal ecology.", marks: 10 }
          ] },
          { n: "18.4", t: "Mountain ecosystem restoration", d: "Conservation and development", questions: [
            { id: "q051", year: 0, type: "M", q: "How can the mountain ecosystem be restored from the negative impact of development initiatives and tourism?", marks: 15 }
          ] },
          { n: "18.5", t: "Tea gardens", d: "Shivaliks limitations for cultivation", questions: [
            { id: "q090", year: 0, type: "M", q: "Whereas the British planters had developed tea gardens all along the Shivaliks and Lesser Himalayas from Assam to Himachal Pradesh, in effect they did not succeed beyond the Darjeeling area. Explain.", marks: 10 }
          ] },
          { n: "18.6", t: "Rubber production", d: "Global producing countries", questions: [
            { id: "q026", year: 0, type: "M", q: "Describing the distribution of rubber producing countries, indicate the major environmental issues faced by them.", marks: 15 }
          ] },
        ]
      },
      {
        id: 19, title: "World Geography & Geopolitics", tag: "P", freq: 2,
        subs: [],
        topics: [
          { n: "19.1", t: "Major natural regions", d: "Tropical rainforest, desert, savanna, tundra, steppe" },
          { n: "19.2", t: "Continental features", d: "Africa, Asia, Americas, Europe, Australia", questions: [
            { id: "prelims_2013_q_geo100", year: 2013, type: "P", q: "Consider pairs: Hills-Region: 1. Cardamom Hills-Coromandel Coast 2. Kaimur Hills-Konkan Coast 3. Mahadeo Hills-Central India 4. Mikir Hills-North-East India — Which are correctly matched? (a) 1 and 2 (b) 2 and 3 (c) 3 and 4 (d) 2 and 4", marks: 0 }
          ] },
          { n: "19.3", t: "World water bodies", d: "Lakes and water features", questions: [
            { id: "prelims_2025_q43", year: 2025, type: "P", q: "Consider the following water bodies: 1. Lake Tanganyika 2. Lake Tonle Sap 3. Patos Lagoon — Through how many of them does the equator pass? (a) Only one (b) Only two (c) All the three (d) None", marks: 0 }
          ] },
          { n: "19.4", t: "Mountain ranges", d: "Global mountain systems", questions: [
            { id: "prelims_2025_q42", year: 2025, type: "P", q: "Consider the following countries: 1. Bolivia 2. Brazil 3. Colombia 4. Ecuador 5. Paraguay 6. Venezuela — Andes mountains pass through how many of the above countries? (a) Only two (b) Only three (c) Only four (d) Only five", marks: 0 }
          ] },
          { n: "19.5", t: "Straits & passes", d: "Bosporus, Malacca, Hormuz" },
          { n: "19.6", t: "Country locations", d: "Geographic positioning and features", questions: [
            { id: "prelims_2014_q_geo98", year: 2014, type: "P", q: "Consider: 1. Dampa Tiger Reserve-Mizoram 2. Gumti Wildlife Sanctuary-Sikkim 3. Saramati Peak-Nagaland — Which are correctly matched? (a) 1 only (b) 2 and 3 only (c) 1 and 3 only (d) 1, 2 and 3", marks: 0 }
          ] },
          { n: "19.7", t: "Border geography", d: "Longest borders and boundaries", questions: [
            { id: "prelims_2024_q9", year: 2024, type: "P", q: "The longest border between any two countries in the world is between: (a) Canada and the United States of America (b) Chile and Argentina (c) China and India (d) Kazakhstan and Russian Federation", marks: 0 },
            { id: "prelims_2023_q53", year: 2023, type: "P", q: "Consider the following countries: 1. Bulgaria 2. Czech Republic 3. Hungary 4. Latvia 5. Lithuania 6. Romania — How many share a land border with Ukraine? (a) Only two (b) Only three (c) Only four (d) Only five", marks: 0 },
            { id: "q033", year: 0, type: "M", q: "Why is India considered as a sub-continent? Elaborate your answer.", marks: 10 }
          ] },
          { n: "19.8", t: "North Sea geography", d: "Countries and features", questions: [
            { id: "prelims_2024_q58", year: 2024, type: "P", q: "Consider the following countries: 1. Finland 2. Germany 3. Norway 4. Russia — How many of the above countries have a border with the North Sea? (a) Only one (b) Only two (c) Only three (d) All four", marks: 0 }
          ] },
          { n: "19.9", t: "Island geography", d: "Regional islands and features", questions: [
            { id: "prelims_2025_q100", year: 2025, type: "P", q: "Consider the following pairs: Region-Country: I. Mallorca-Italy II. Normandy-Spain III. Sardinia-France — In how many rows is the information correctly matched? (a) Only one (b) Only two (c) All the three (d) None", marks: 0 }
          ] },
          { n: "19.10", t: "Geopolitical zones", d: "South China Sea significance", questions: [
            { id: "q073", year: 0, type: "M", q: "South China Sea has assumed great geopolitical significance in the present context. Comment.", marks: 12 }
          ] },
          { n: "19.11", t: "Straits & international trade", d: "Impact of straits on commerce", questions: [
            { id: "q027", year: 0, type: "M", q: "Mention the significance of straits and isthmus in international trade.", marks: 15 }
          ] },
        ]
      },
      {
        id: 20, title: "Map-Based Questions & Siachen", tag: "P", freq: 2,
        subs: [],
        topics: [
          { n: "20.1", t: "Indian rivers & cities", d: "Longitude matching and locations" },
          { n: "20.2", t: "Hill ranges & regions", d: "Geographic associations" },
          { n: "20.3", t: "States by characteristics", d: "Latitude, forest cover, features", questions: [
            { id: "prelims_2012_q_geo68", year: 2012, type: "P", q: "A State with: 1. Same latitude as northern Rajasthan 2. Over 80% area under forest cover 3. Over 12% forest as Protected Area Network. Which state? (a) Arunachal Pradesh (b) Assam (c) Himachal Pradesh (d) Uttarakhand", marks: 0 }
          ] },
          { n: "20.4", t: "Geographical features", d: "River confluences and coastal areas" },
          { n: "20.5", t: "Glaciers & Siachen", d: "Siachen location and geography", questions: [
            { id: "prelims_2020_q_geo86", year: 2020, type: "P", q: "What is common to the places known as Aliyar, Isapur and Kangsabati? (a) Recently discovered uranium deposits (b) Tropical rain forests (c) Underground cave systems (d) Water reservoirs", marks: 0 }
          ] },
          { n: "20.6", t: "Island geography", d: "Andaman & Nicobar, Lakshadweep" },
          { n: "20.7", t: "Regional resources", d: "Mining locations and distribution" },
          { n: "20.8", t: "Aspirational districts", d: "Transformation and development", questions: [
            { id: "q061", year: 0, type: "M", q: "Mention core strategies for the transformation of aspirational districts in India and explain the nature of convergence, collaboration and competition for its success.", marks: 15 }
          ] },
        ]
      },
    ]
  },
  {
    part: "D", partTitle: "Geophysical Phenomena & Changes",
    sections: [
      {
        id: 21, title: "Geophysical Phenomena", tag: "M", freq: 3,
        subs: [],
        topics: [
          { n: "21.1", t: "Earthquakes", d: "Causes, distribution, Indian vulnerability" },
          { n: "21.2", t: "Tsunamis", d: "Formation, consequences", questions: [
            { id: "q004", year: 0, type: "M", q: "What are Tsunamis? How and where are they formed? What are their consequences? Explain with examples.", marks: 10 }
          ] },
          { n: "21.3", t: "Volcanic activity", d: "Global eruptions, regional impact", questions: [
            { id: "q032", year: 0, type: "M", q: "Mention the global occurrence of volcanic eruptions in 2021 and their impact on regional environment.", marks: 10 }
          ] },
          { n: "21.4", t: "Cyclones", d: "Formation, confinement, warnings" },
          { n: "21.5", t: "Landslides", d: "Himalayas vs W. Ghats frequency" },
          { n: "21.6", t: "Floods", d: "Urban flooding, resource conversion" },
          { n: "21.7", t: "Circum-Pacific Zone", d: "Geophysical characteristics" },
          { n: "21.8", t: "Navigation systems", d: "IRNSS technology and applications", questions: [
            { id: "q054", year: 0, type: "M", q: "Why is Indian Regional Navigational Satellite System (IRNSS) needed? How does it help in navigation?", marks: 10 }
          ] },
          { n: "21.9", t: "Space missions", d: "Juno Mission and Earth origin", questions: [
            { id: "q062", year: 0, type: "M", q: "How does the Juno Mission of NASA help to understand the origin and evolution of the Earth?", marks: 10 }
          ] },
        ]
      },
      {
        id: 22, title: "Changes in Geographical Features", tag: "M", freq: 2,
        subs: [],
        topics: [
          { n: "22.1", t: "Himalayan glacier retreat", d: "Impact on water resources" },
          { n: "22.2", t: "Cryosphere melting", d: "Global climate effects" },
          { n: "22.3", t: "Coral reef degradation", d: "Global warming impact" },
          { n: "22.4", t: "Land degradation", d: "Causes, sustainable management", questions: [
            { id: "q039", year: 0, type: "M", q: "The process of desertification does not have climatic boundaries. Justify with examples.", marks: 10 }
          ] },
          { n: "22.5", t: "Monsoon variability", d: "El Nino impact, long-term changes", questions: [
            { id: "q069", year: 0, type: "M", q: "What characteristics can be assigned to monsoon climate that succeeds in feeding more than 50 percent of the world population residing in Monsoon Asia?", marks: 15 },
            { id: "q070", year: 0, type: "M", q: "Discuss the concept of air mass and explain its role in macro-climatic changes.", marks: 12 }
          ] },
          { n: "22.6", t: "Wetlands loss", d: "Ramsar sites, conservation" },
          { n: "22.7", t: "Sea level changes", d: "Impact on island nations", questions: [
            { id: "q001", year: 0, type: "M", q: "How are climate change and the sea level rise affecting the very existence of many island nations? Discuss with examples.", marks: 10 }
          ] },
          { n: "22.8", t: "Flora & fauna changes", d: "Climate-driven biodiversity shifts" },
          { n: "22.9", t: "Desertification patterns", d: "Spread, causes, mitigation" },
          { n: "22.10", t: "Coastal erosion", d: "Processes and human impact" },
          { n: "22.11", t: "Coal mining", d: "Development vs environment", questions: [
            { id: "q063", year: 0, type: "M", q: "In spite of adverse environmental impact, coal mining is still inevitable for development. Discuss.", marks: 10 }
          ] },
          { n: "22.12", t: "Shale oil & gas", d: "India's potential and impact", questions: [
            { id: "q097", year: 0, type: "M", q: "It is said that India has substantial reserves of shale oil and gas, which can feed the needs of the country for quarter century. However, tapping of the resource does not appear to be high on the agenda. Discuss critically the availability and issues involved.", marks: 10 }
          ] },
          { n: "22.13", t: "Pisciculture", d: "Blue revolution achievements", questions: [
            { id: "q059", year: 0, type: "M", q: "Defining blue revolution, explain the problems and strategies for pisciculture development in India.", marks: 15 }
          ] },
          { n: "22.14", t: "Non-farm primary activities", d: "Physiographic determinants", questions: [
            { id: "q002", year: 0, type: "M", q: "What are non-farm primary activities? How are these activities related to physiographic features in India? Discuss with suitable examples.", marks: 10 }
          ] },
          { n: "22.15", t: "Tourism", d: "Ecological carrying capacity", questions: [
            { id: "q081", year: 0, type: "M", q: "The states of Jammu and Kashmir, Himachal Pradesh and Uttarakhand are reaching the limits of ecological carrying capacity due to tourism. Critically evaluate.", marks: 12 }
          ] },
        ]
      },
    ]
  },
];
