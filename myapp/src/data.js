const data = [
    {
     "chapter": "01",
     "itc_hscode": "0101",
     "description": "LIVE HORSES, ASSES, MULES AND HINNIES"
    },
    {
     "chapter": "01",
     "itc_hscode": "0102",
     "description": "LIVE BOVINE ANIMALS"
    },
    {
     "chapter": "01",
     "itc_hscode": "0103",
     "description": "LIVE SWINE"
    },
    {
     "chapter": "01",
     "itc_hscode": "0104",
     "description": "LIVE SHEEP AND GOATS"
    },
    {
     "chapter": "01",
     "itc_hscode": "0105",
     "description": "TURKEYS AND GUINEA FOWLS"
    },
    {
     "chapter": "01",
     "itc_hscode": "0106",
     "description": "OTHER LIVE ANIMALS"
    },
    {
     "chapter": "02",
     "itc_hscode": "0201",
     "description": "MEAT OF BOVINE ANIMALS, FRESH AND CHILLED"
    },
    {
     "chapter": "02",
     "itc_hscode": "0202",
     "description": "MEAT OF BOVINE ANIMALS, FROZEN"
    },
    {
     "chapter": "02",
     "itc_hscode": "0203",
     "description": "MEAT OF SWINE, FRESH, CHILLED OR FROZEN"
    },
    {
     "chapter": "02",
     "itc_hscode": "0204",
     "description": "MEAT OF SHEEP OR GOATS, FRESH, CHILLED OR FROZEN"
    },
    {
     "chapter": "02",
     "itc_hscode": "0205",
     "description": "MEAT OF HORSES, ASSES, MULES OR HINNIES, FRESH, CHILLED OR FROZEN"
    },
    {
     "chapter": "02",
     "itc_hscode": "0206",
     "description": "EDBL OFFAL OF BOVINE ANMLS,SWINE,SHEEP, GOAT,HORSE,ASS,MULE\/HINNI,FRSH,CHLD\/FRZN"
    },
    {
     "chapter": "02",
     "itc_hscode": "0207",
     "description": "MEAT AND EDINLE OFFAL OF THE POULTRY OF HEADING NO.01.05, FRESH CHILLED OR FROZEN"
    },
    {
     "chapter": "02",
     "itc_hscode": "0208",
     "description": "OTHER MEAT AND EDIBLE MEAT OFFAL, FRESH, CHILLED OR FROZEN"
    },
    {
     "chapter": "02",
     "itc_hscode": "0209",
     "description": "PIG FAT FREE OF LEAN MEAT & PLTRY FAT(NOT RNDERD)FRSH,CHLD,FRZN,SLTED IN BRINE ETC"
    },
    {
     "chapter": "03",
     "itc_hscode": "0301",
     "description": "LIVE FISH"
    },
    {
     "chapter": "03",
     "itc_hscode": "0302",
     "description": "FISH FRESH OR CHILLED EXCLUDING FISH FILLETS & OTHR FISH MEAT OF HEDNG NO 0304"
    },
    {
     "chapter": "03",
     "itc_hscode": "0303",
     "description": "FISH FROZEN EXCLUDING FISH FILLETS & OTHER FISH MEAT OF HEADING NO 0304"
    },
    {
     "chapter": "03",
     "itc_hscode": "0304",
     "description": "FISH FILLETS AND OTHER FISH MEAT (WHETHER OR NOT MINCED), FRESH, CHILLED OR FROZEN"
    },
    {
     "chapter": "03",
     "itc_hscode": "0305",
     "description": "SMOKINGPROCESS;FISH MEAL FIT FOR CONSUMPTION"
    },
    {
     "chapter": "03",
     "itc_hscode": "0306",
     "description": "BOILING,W\/N CHLD,FRZN,DRD,SLTD\/IN BRINE"
    },
    {
     "chapter": "03",
     "itc_hscode": "0307",
     "description": "EXCLCRSTCNS&MOLUSCS LIVE,FRSH,CHLD,FRZN,ETC."
    },
    {
     "chapter": "04",
     "itc_hscode": "0401",
     "description": "MATTER"
    },
    {
     "chapter": "04",
     "itc_hscode": "0402",
     "description": "MLK & CRM CNCNTD\/CONTNG SUGR\/SWETNG MATR"
    },
    {
     "chapter": "04",
     "itc_hscode": "0403",
     "description": "BUTTR MLK,CRDLD MLK & CRM,YOGRT,KPHIR & OTHR FRMNTD ACDFD MLK & CRM"
    },
    {
     "chapter": "04",
     "itc_hscode": "0404",
     "description": "MATTR"
    },
    {
     "chapter": "04",
     "itc_hscode": "0405",
     "description": "BUTTER AND OTHER FATS AND OILS DERIVED FROM MILK; DAIRY SPREADS"
    },
    {
     "chapter": "04",
     "itc_hscode": "0406",
     "description": "CHEESE AND CURD"
    },
    {
     "chapter": "04",
     "itc_hscode": "0407",
     "description": "BIRDS[ EGGS, IN SHELL, FRESH, PRESERVED OR COOKED"
    },
    {
     "chapter": "04",
     "itc_hscode": "0408",
     "description": "IN WATER, MOULDED, FROZEN OR OTHER"
    },
    {
     "chapter": "04",
     "itc_hscode": "0409",
     "description": "NATURAL HONEY"
    },
    {
     "chapter": "04",
     "itc_hscode": "0410",
     "description": "EDIBLE PRODUCTS OF ANIMAL ORIGIN, NOT ELSEWHERE SPECIFIED OR INCLUDED"
    },
    {
     "chapter": "05",
     "itc_hscode": "0504",
     "description": "GUTS‐BLADDERS & STOMACHES OF ANIMALS (OTHR THAN FISH),WHOLE & PIECES THEREOF"
    },
    {
     "chapter": "05",
     "itc_hscode": "0506",
     "description": "THEREOF"
    },
    {
     "chapter": "05",
     "itc_hscode": "0507",
     "description": "HOOVS,NAILS,CLAWS & BEAKS;THR PWDR & WASTE"
    },
    {
     "chapter": "05",
     "itc_hscode": "0508",
     "description": "SHELLS OF MOLLUSCS, CRUSTACEANS OR ECHINOD"
    },
    {
     "chapter": "05",
     "itc_hscode": "0510",
     "description": "PARMACTCLSFRSH,CHLD,PRSRVD OR OTHRWS PRVSNLY PRSRVD"
    },
    {
     "chapter": "05",
     "itc_hscode": "0511",
     "description": "ANML PRDCTS NES\/INCL;DEAD ANMLS OF CHPTR 1 OR 3 UNFIT FOR HUMAN CONSUMPTION"
    },
    {
     "chapter": "06",
     "itc_hscode": "0601",
     "description": "IN FLOWER; CHICORY PLANTS AND ROOTS"
    },
    {
     "chapter": "06",
     "itc_hscode": "0602",
     "description": "OTHER LIVE PLANTS (INCLUDING THEIR ROOTS), CUTTINGS AND SLIPS; MUSHROOM SPAWN"
    },
    {
     "chapter": "06",
     "itc_hscode": "0603",
     "description": "PURPOSES, FRESH, DRIED, DYED, BLEACHED"
    },
    {
     "chapter": "06",
     "itc_hscode": "0604",
     "description": "DRIED DYED,BLECHD,IMPRGNTD\/OTHRWSE PRPRD"
    },
    {
     "chapter": "07",
     "itc_hscode": "0701",
     "description": "POTATOES, FRESH OR CHILLED"
    },
    {
     "chapter": "07",
     "itc_hscode": "0702",
     "description": "TOMATOES, FRESH OR CHILLED"
    },
    {
     "chapter": "07",
     "itc_hscode": "0703",
     "description": "ONIONS, SHALLOTS, GARLIC, LEEKS AND OTHER ALLIACEOUS VEGETABLES, FRESH OR CHILLED"
    },
    {
     "chapter": "07",
     "itc_hscode": "0706",
     "description": "FRESH OR CHILLED"
    },
    {
     "chapter": "07",
     "itc_hscode": "0707",
     "description": "CUCUMBERS OR GHERKINS, FRESH OR CHILLED"
    },
    {
     "chapter": "07",
     "itc_hscode": "0708",
     "description": "LEGUMINOUS VEGETABLES, SHELLED OR UNSHELLED, FRESH OR CHILLED"
    },
    {
     "chapter": "07",
     "itc_hscode": "0709",
     "description": "OTHER VEGETABLES, FRESH OR CHILLED"
    },
    {
     "chapter": "07",
     "itc_hscode": "0710",
     "description": "VEG COOKED OR NOT BY STMNG\/BOILNG,FRZN"
    },
    {
     "chapter": "07",
     "itc_hscode": "0711",
     "description": "VEGTABLS PROVISIONALLY PRESERVED BUT UNSUITABLE FOR INSTANT CONSUMPTION"
    },
    {
     "chapter": "07",
     "itc_hscode": "0712",
     "description": "PREPARED"
    },
    {
     "chapter": "07",
     "itc_hscode": "0713",
     "description": "DRID LEGUMINOUS VEG SHLD W\/N SKINNED\/SPLIT"
    },
    {
     "chapter": "07",
     "itc_hscode": "0714",
     "description": "ROOTS AND TUBERS WITH HIGH STARCH"
    },
    {
     "chapter": "08",
     "itc_hscode": "0801",
     "description": "PEELED"
    },
    {
     "chapter": "08",
     "itc_hscode": "0802",
     "description": "OTHER NUTS, FRESH OR DRIED, WHETHER OR NOT SHELLED OR PEELED"
    },
    {
     "chapter": "08",
     "itc_hscode": "0803",
     "description": "BANANAS, INCLUDING PLAINTAINS, FRESH OR DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "0805",
     "description": "CITRUS FRUIT, FRESH OR DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "0806",
     "description": "GRAPES, FRESH OR DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "0807",
     "description": "MELONS (INCLUDING WATERMELONS) AND PAPAWS (PAPAYAS), FRESH"
    },
    {
     "chapter": "08",
     "itc_hscode": "0808",
     "description": "APPLES, PEARS AND QUINCES, FRESH"
    },
    {
     "chapter": "08",
     "itc_hscode": "0809",
     "description": "APRICOTS, CHERRIES, PEACHES (INCLUDING NECTARINES), PLUMS AND SOLES, FRESH"
    },
    {
     "chapter": "08",
     "itc_hscode": "0810",
     "description": "OTHER FRUIT, FRESH"
    },
    {
     "chapter": "08",
     "itc_hscode": "0811",
     "description": "WHETHER OR NOT CONTAINING ADDED SUGAR"
    },
    {
     "chapter": "08",
     "itc_hscode": "0812",
     "description": "CONSMPTION"
    },
    {
     "chapter": "08",
     "itc_hscode": "0813",
     "description": "OF THIS CHAPTER"
    },
    {
     "chapter": "08",
     "itc_hscode": "0814",
     "description": "PROVISIONALLY PRESERVED IN BRINE"
    },
    {
     "chapter": "09",
     "itc_hscode": "0901",
     "description": "SUBSTITUTES CONTAINING COFFEE"
    },
    {
     "chapter": "09",
     "itc_hscode": "0902",
     "description": "TEA"
    },
    {
     "chapter": "09",
     "itc_hscode": "0903",
     "description": "MATE"
    },
    {
     "chapter": "09",
     "itc_hscode": "0904",
     "description": "CAPSICUM OR OF THE GENUS PIMENTA PEPPER :"
    },
    {
     "chapter": "09",
     "itc_hscode": "0905",
     "description": "VANILLA"
    },
    {
     "chapter": "09",
     "itc_hscode": "0906",
     "description": "CINNAMON AND CINNAMON‐TREE FLOWERS NEITHER CRUSHED NOR GROUND:"
    },
    {
     "chapter": "09",
     "itc_hscode": "0907",
     "description": "CLOVES (WHOLE FRUIT, CLOVES AND STEMS) CLOVES (WHOLE FRUIT, CLOVES AND STEMS):"
    },
    {
     "chapter": "09",
     "itc_hscode": "0908",
     "description": "NUTMEG, MACE AND CARDAMOMS"
    },
    {
     "chapter": "09",
     "itc_hscode": "0909",
     "description": "SEEDS OF ANISE, BADIAN, FENNEL, CORIANDER, CUMIN OR CARAWAY; JUNIPER BERRIES"
    },
    {
     "chapter": "09",
     "itc_hscode": "0910",
     "description": "GINGER, SAFFRON, TURMERIC (CURCUMA), THYME, BAY LEAVES, CURRY AND OTHER SPICES"
    },
    {
     "chapter": "10",
     "itc_hscode": "1001",
     "description": "WHEAT AND MESLIN"
    },
    {
     "chapter": "10",
     "itc_hscode": "1002",
     "description": "RYE"
    },
    {
     "chapter": "10",
     "itc_hscode": "1003",
     "description": "BARLEY"
    },
    {
     "chapter": "10",
     "itc_hscode": "1004",
     "description": "OATS"
    },
    {
     "chapter": "10",
     "itc_hscode": "1005",
     "description": "MAIZE (CORN)"
    },
    {
     "chapter": "10",
     "itc_hscode": "1006",
     "description": "RICE"
    },
    {
     "chapter": "10",
     "itc_hscode": "1007",
     "description": "GRAIN SORGHUM"
    },
    {
     "chapter": "10",
     "itc_hscode": "1008",
     "description": "BUCKWHEAT, MILLET AND CANARY SEED; OTHER CEREALS"
    },
    {
     "chapter": "11",
     "itc_hscode": "1101",
     "description": "WHEAT OR MESLIN FLOUR"
    },
    {
     "chapter": "11",
     "itc_hscode": "1102",
     "description": "CEREAL FLOURS OTHER THAN THAT OF WHEAT OR MESLIN"
    },
    {
     "chapter": "11",
     "itc_hscode": "1103",
     "description": "CEREAL GROATS, MEAL AND PELLETS GROATS AND MEAL :"
    },
    {
     "chapter": "11",
     "itc_hscode": "1104",
     "description": "KIBBLED), EXCEPT RICE OF HEADING 1006"
    },
    {
     "chapter": "11",
     "itc_hscode": "1105",
     "description": "FLOUR, MEAL, POWDER, FLAKES, GRANULES AND PELLETS OF POTATOES"
    },
    {
     "chapter": "11",
     "itc_hscode": "1106",
     "description": "SAGO OR OF ROOTS OR TUBERS ‐ HEADING 0714"
    },
    {
     "chapter": "11",
     "itc_hscode": "1107",
     "description": "MALT WHETHER OR NOT ROASTED"
    },
    {
     "chapter": "11",
     "itc_hscode": "1108",
     "description": "STARCHES; INULIN STARCHES :"
    },
    {
     "chapter": "11",
     "itc_hscode": "1109",
     "description": "WHEAT GLUTEN, WHETHER OR NOT DRIED"
    },
    {
     "chapter": "12",
     "itc_hscode": "1201",
     "description": "SOYA BEANS, WHETHER OR NOT BROKEN"
    },
    {
     "chapter": "12",
     "itc_hscode": "1203",
     "description": "COPRA"
    },
    {
     "chapter": "12",
     "itc_hscode": "1204",
     "description": "LINSEED, WHETHER OR NOT BROKEN"
    },
    {
     "chapter": "12",
     "itc_hscode": "1205",
     "description": "RAPE OR COLZA SEEDS, WHETHER OR NOT BROKEN"
    },
    {
     "chapter": "12",
     "itc_hscode": "1206",
     "description": "SUNFLOWER SEEDS, WHETHER OR NOT BROKEN"
    },
    {
     "chapter": "12",
     "itc_hscode": "1207",
     "description": "OTHER OIL SEEDS AND OLEAGINOUS FRUITS, WHETHER OR NOT BROKEN"
    },
    {
     "chapter": "12",
     "itc_hscode": "1209",
     "description": "SEEDS, FRUIT AND SPORES, OF A KIND USED FOR SOWING"
    },
    {
     "chapter": "12",
     "itc_hscode": "1210",
     "description": "PELLETS; LUPULIN"
    },
    {
     "chapter": "12",
     "itc_hscode": "1211",
     "description": "PURPOSES FRSH\/DRID W\/N CUT CRSHD OR POWDRD"
    },
    {
     "chapter": "12",
     "itc_hscode": "1212",
     "description": "FROZEN OR DRIED"
    },
    {
     "chapter": "12",
     "itc_hscode": "1213",
     "description": "THE FORM OF PELLETS"
    },
    {
     "chapter": "12",
     "itc_hscode": "1214",
     "description": "KALE, LUPINES, VETCHES AND SIMILAR"
    },
    {
     "chapter": "13",
     "itc_hscode": "1301",
     "description": "LAC;NATURL GUMS,RESNS,GUM‐RESNS&OLEORESNS"
    },
    {
     "chapter": "13",
     "itc_hscode": "1302",
     "description": "THCKENERSW\/N MODIFIED DERIVED FROM VEGITBL PRDCTS"
    },
    {
     "chapter": "14",
     "itc_hscode": "1401",
     "description": "BLCD\/DYD CEREAL STRAW,AND LIME BARK"
    },
    {
     "chapter": "14",
     "itc_hscode": "1404",
     "description": "VEG PRODUCTS N.E.S. OR INCLUDED"
    },
    {
     "chapter": "15",
     "itc_hscode": "1501",
     "description": "HDNG NO.02.09 & 15.03"
    },
    {
     "chapter": "15",
     "itc_hscode": "1502",
     "description": "FATS OF BOVINE ANIMALS, SHEEP OR GOATS, OTHER THAN THOSE OF HEADING 1503"
    },
    {
     "chapter": "15",
     "itc_hscode": "1503",
     "description": "OR OTHERWISE PREPARED"
    },
    {
     "chapter": "15",
     "itc_hscode": "1504",
     "description": "REFINED, BUT NOT CHEMICALLY MODIFIED"
    },
    {
     "chapter": "15",
     "itc_hscode": "1505",
     "description": "WOOL GREASE AND FATTY SUBSTANCES DERIVED THEREFROM (INCLUDING LANOLIN)"
    },
    {
     "chapter": "15",
     "itc_hscode": "1506",
     "description": "CHEMICALLY MODIFIED"
    },
    {
     "chapter": "15",
     "itc_hscode": "1507",
     "description": "SOYA BEAN OIL & ITS FRACTNS W\/N REFIND BUT NOT CHEMICALLY MODIFIED"
    },
    {
     "chapter": "15",
     "itc_hscode": "1508",
     "description": "MODIFIED"
    },
    {
     "chapter": "15",
     "itc_hscode": "1509",
     "description": "OLIVE OIL AND ITS FRACTIONS, WHETHER OR NOT REFINED, BUT NOT CHEMICALLY MODIFIED"
    },
    {
     "chapter": "15",
     "itc_hscode": "1510",
     "description": "REFINED, BUT NOT CHEMICALLY MODIFIED"
    },
    {
     "chapter": "15",
     "itc_hscode": "1511",
     "description": "PALM OIL AND ITS FRACTIONS, WHETHER OR NOT REFINED, BUT NOT CHEMICALLY MODIFIED"
    },
    {
     "chapter": "15",
     "itc_hscode": "1512",
     "description": "OR NOT REFINED, BUT NOT CHEMICALLY MODIFIE"
    },
    {
     "chapter": "15",
     "itc_hscode": "1513",
     "description": "REFINED, BUT NOT CHEMICALLY MODIFIED"
    },
    {
     "chapter": "15",
     "itc_hscode": "1514",
     "description": "RAPE COLZA\/MUSTARD OIL & ITS FRACTNS W\/N REFINED, BUT NOT CHEMICLLY MODIFIED"
    },
    {
     "chapter": "15",
     "itc_hscode": "1515",
     "description": "WHETHER OR NOT REFINED, BUT NOT CHEMICALL"
    },
    {
     "chapter": "15",
     "itc_hscode": "1516",
     "description": "ESTRFDELAIDINSD W\/N REFND BUT NT FURTHR PRPD"
    },
    {
     "chapter": "15",
     "itc_hscode": "1517",
     "description": "FRACTIONS OF DIFFERENT FATS OR OILS"
    },
    {
     "chapter": "15",
     "itc_hscode": "1518",
     "description": "OF HDG 1516; INEDIBLE MIXTURES"
    },
    {
     "chapter": "15",
     "itc_hscode": "1520",
     "description": "GLYCEROL, CRUDE; GLYCEROL WATERS AND GLYCEROL LYES"
    },
    {
     "chapter": "15",
     "itc_hscode": "1521",
     "description": "SPERMACETI, WHETHER OR NOT REFINED OR COLO"
    },
    {
     "chapter": "15",
     "itc_hscode": "1522",
     "description": "VEGETABLE WAXES"
    },
    {
     "chapter": "16",
     "itc_hscode": "1602",
     "description": "OTHER PREPARED OR PRESERVED MEAT, MEAT OFFAL OR BLOOD"
    },
    {
     "chapter": "16",
     "itc_hscode": "1603",
     "description": "EXTRCTS & JUICES OF MEAT FISH CRUSTACEANS MOLLUSCS\/OTHER AQUATIC INVERTEBRATES"
    },
    {
     "chapter": "16",
     "itc_hscode": "1605",
     "description": "CRUSTACEANS, MOLLUSCS AND OTHER AQUATIC INVERTEBRATES, PREPARED OR PRESERVED"
    },
    {
     "chapter": "17",
     "itc_hscode": "1701",
     "description": "CANE\/BEET SUGR CHMCLY PURE SUCRSE IN SOLID"
    },
    {
     "chapter": "17",
     "itc_hscode": "1702",
     "description": "SOLID FORM; SUGAR SYRUPS NOT CONTAINING A"
    },
    {
     "chapter": "17",
     "itc_hscode": "1703",
     "description": "MOLSES RSLTD FROM THE EXTRCTN\/RFNG OF SUGR"
    },
    {
     "chapter": "17",
     "itc_hscode": "1704",
     "description": "SUGR CNFCTNRY (INCL WHTE CHCLT)WTHOT COCOA"
    },
    {
     "chapter": "18",
     "itc_hscode": "1801",
     "description": "COCOA BEANS, WHOLE OR BROKEN, RAW OR ROASTED"
    },
    {
     "chapter": "18",
     "itc_hscode": "1802",
     "description": "COCOA SHELLS, HUSKS, SKINS AND OTHER COCOA WASTE"
    },
    {
     "chapter": "18",
     "itc_hscode": "1803",
     "description": "COCOA PASTE, WHETHER OR NOT DEFATTED"
    },
    {
     "chapter": "18",
     "itc_hscode": "1804",
     "description": "COCOA BUTTER, FAT AND OIL"
    },
    {
     "chapter": "18",
     "itc_hscode": "1805",
     "description": "COCOA POWDER, NOT CONTAINING ADDED SUGAR OR OTHER SWEETENING MATTER"
    },
    {
     "chapter": "18",
     "itc_hscode": "1806",
     "description": "CHOCOLATE AND OTHER FOOD PREPARATIONS CONTAINING COCOA"
    },
    {
     "chapter": "19",
     "itc_hscode": "1901",
     "description": "CONTAINING COCOA OR CONTAINING LESS THAN 4"
    },
    {
     "chapter": "19",
     "itc_hscode": "1902",
     "description": "OTHERWISE PREPARED, SUCH AS SPAGHETTI, MAC"
    },
    {
     "chapter": "19",
     "itc_hscode": "1904",
     "description": "GRAINFLKS ETC.EVCL.MAZEPRE COOKD\/OTHRWSE PRPD"
    },
    {
     "chapter": "19",
     "itc_hscode": "1905",
     "description": "COCOA; COMMUNION WAFERS, EMPTY CACHETS"
    },
    {
     "chapter": "20",
     "itc_hscode": "2001",
     "description": "VEG FRUTS NUTS & OTHR EDBL PRTS OF PLNTS PRPD\/PRSVD BY VINEGAR\/ACETIC ACID"
    },
    {
     "chapter": "20",
     "itc_hscode": "2002",
     "description": "TOMATOES PREPARED OR PRESERVED OTHERWISE THAN BY VINEGAR OR ACETIC ACID"
    },
    {
     "chapter": "20",
     "itc_hscode": "2004",
     "description": "FROZEN, OTHER THAN PRODUCTS OF HEADING 200"
    },
    {
     "chapter": "20",
     "itc_hscode": "2005",
     "description": "PRDTCS OF HDNG NO‐2006"
    },
    {
     "chapter": "20",
     "itc_hscode": "2006",
     "description": "GLACE\/CRYSTALLISED)"
    },
    {
     "chapter": "20",
     "itc_hscode": "2007",
     "description": "SUGR"
    },
    {
     "chapter": "20",
     "itc_hscode": "2009",
     "description": "SWEETND"
    },
    {
     "chapter": "21",
     "itc_hscode": "2101",
     "description": "SUBSTITUTS,EXTRCTS,ESSNCS ETC THROF"
    },
    {
     "chapter": "21",
     "itc_hscode": "2102",
     "description": "HEADING NO 3002);PRPD BAKING POWDERS"
    },
    {
     "chapter": "21",
     "itc_hscode": "2103",
     "description": "FLOUR AND MEAL AND PREPARED MUSTARD"
    },
    {
     "chapter": "21",
     "itc_hscode": "2104",
     "description": "PREPARATIONS"
    },
    {
     "chapter": "21",
     "itc_hscode": "2105",
     "description": "ICE CREAM & OTHR EDBL ICE W\/N CONTNG COCOA"
    },
    {
     "chapter": "21",
     "itc_hscode": "2106",
     "description": "OTHR FOOD PREPRNS N.E.S."
    },
    {
     "chapter": "22",
     "itc_hscode": "2201",
     "description": "CONTAINING ADDED SUGAR OR OTHER SWEETENING"
    },
    {
     "chapter": "22",
     "itc_hscode": "2202",
     "description": "OTHER SWEETENING MATTER OR FLAVOURED"
    },
    {
     "chapter": "22",
     "itc_hscode": "2203",
     "description": "BEER MADE FROM MALT"
    },
    {
     "chapter": "22",
     "itc_hscode": "2204",
     "description": "HEADING 2009"
    },
    {
     "chapter": "22",
     "itc_hscode": "2205",
     "description": "SUBSTANCES"
    },
    {
     "chapter": "22",
     "itc_hscode": "2206",
     "description": "BEVERAGES AND NON‐ALCOHOLIC BEVERAGES"
    },
    {
     "chapter": "22",
     "itc_hscode": "2207",
     "description": "ETHYL ALCOHOL AND OTHER SPIRITS, DENATURED"
    },
    {
     "chapter": "22",
     "itc_hscode": "2208",
     "description": "BVRGS;COMPND ALCHL PRPN FOR MNUFCTRE OF BVRGS"
    },
    {
     "chapter": "22",
     "itc_hscode": "2209",
     "description": "VINEGAR AND SUBSTITUTES FOR VINEGAR OBTAINED FROM ACETIC ACID"
    },
    {
     "chapter": "23",
     "itc_hscode": "2301",
     "description": "MOLLUSCS OR OTHER AQUATIC INVERTEBRATES"
    },
    {
     "chapter": "23",
     "itc_hscode": "2302",
     "description": "OTHR WORKING OF CEREALS\/OF LEGUMINOUS PLAN"
    },
    {
     "chapter": "23",
     "itc_hscode": "2303",
     "description": "BRWNG\/DSTLNG DRGS & WSTE W\/N IN PLLET"
    },
    {
     "chapter": "23",
     "itc_hscode": "2304",
     "description": "RESULTING FROM THE EXTRACTION OF SOYABEAN"
    },
    {
     "chapter": "23",
     "itc_hscode": "2306",
     "description": "RESULTING FROM THE EXTRACTION OF VEGETABLE"
    },
    {
     "chapter": "23",
     "itc_hscode": "2307",
     "description": "WINE LEES; ARGOL"
    },
    {
     "chapter": "23",
     "itc_hscode": "2308",
     "description": "VEG,MATERIALS &VEG. WASTE\/RESIDUES FOR ANIMAL FEEDINGNES"
    },
    {
     "chapter": "23",
     "itc_hscode": "2309",
     "description": "PREPARATIONS OF A KIND USED IN ANIMAL FEEDING"
    },
    {
     "chapter": "24",
     "itc_hscode": "2401",
     "description": "UNMANUFACTURED TOBACCO; TOBACCO REFUSE"
    },
    {
     "chapter": "24",
     "itc_hscode": "2402",
     "description": "SUBSTITUTES"
    },
    {
     "chapter": "24",
     "itc_hscode": "2403",
     "description": "TOBACCO TOBACCO EXTRACTS & ESSENCES"
    },
    {
     "chapter": "25",
     "itc_hscode": "2501",
     "description": "SALT (INCL TABLE SALT & DENATRD SALT) & PURE SODIM CHLRDE W\/N AQS SOLN SEA WTR"
    },
    {
     "chapter": "25",
     "itc_hscode": "2502",
     "description": "UNROASTED IRON PYRITES"
    },
    {
     "chapter": "25",
     "itc_hscode": "2503",
     "description": "COLLODIAL SULPHUR"
    },
    {
     "chapter": "25",
     "itc_hscode": "2504",
     "description": "NATURAL GRAPHITE"
    },
    {
     "chapter": "25",
     "itc_hscode": "2506",
     "description": "SAWING\/OTHRWSEINTO BLKS\/SLBS OF RECTNGLR\/SQ SHAPE"
    },
    {
     "chapter": "25",
     "itc_hscode": "2507",
     "description": "KAOLIN AND OTHER KAOLINIC CLAYS, WHETHER OR NOT CALCINED"
    },
    {
     "chapter": "25",
     "itc_hscode": "2508",
     "description": "CHAMOTTE OR DINAS EARTHS"
    },
    {
     "chapter": "25",
     "itc_hscode": "2509",
     "description": "CHALK"
    },
    {
     "chapter": "25",
     "itc_hscode": "2510",
     "description": "NATRL CALCIUM PHOSPHATES,NATRL ALMNM CALCIUM PHOSPHATES & PHOSPHATIC CHALK"
    },
    {
     "chapter": "25",
     "itc_hscode": "2511",
     "description": "OTHR THAN BARIUM OXIDE OF HDNG NO 2816"
    },
    {
     "chapter": "25",
     "itc_hscode": "2512",
     "description": "SILICEOUS EARTHS, WHETHER OR NOT C"
    },
    {
     "chapter": "25",
     "itc_hscode": "2513",
     "description": "ABRASIVES, WHETHER OR NOT HEAT‐TREATED"
    },
    {
     "chapter": "25",
     "itc_hscode": "2514",
     "description": "RCTNGLR & SQ SHAPE"
    },
    {
     "chapter": "25",
     "itc_hscode": "2515",
     "description": "AN APPARENT SPECIFIC GRAVITY OF 2.5 OR MO"
    },
    {
     "chapter": "25",
     "itc_hscode": "2516",
     "description": "CUT INTO BLCKS\/SLBS OF A RECTNGLR INCL SQ"
    },
    {
     "chapter": "25",
     "itc_hscode": "2517",
     "description": "PWDR ETC OF HOG NO 2515\/2516 W\/N HEAT‐TRE"
    },
    {
     "chapter": "25",
     "itc_hscode": "2518",
     "description": "DOLOMITE, WHETHER OR NOT CALCINED OR SINTERED, INCLUDING DOLOMITE ROUGHLY"
    },
    {
     "chapter": "25",
     "itc_hscode": "2519",
     "description": "OXIDE W\/N CHMCLY PURE"
    },
    {
     "chapter": "25",
     "itc_hscode": "2520",
     "description": "QUANTITIES OF ACCELERATORS\/RETARDERS"
    },
    {
     "chapter": "25",
     "itc_hscode": "2521",
     "description": "MANUFACTURE OF LIME OR CEMENT"
    },
    {
     "chapter": "25",
     "itc_hscode": "2522",
     "description": "HEADING 2825"
    },
    {
     "chapter": "25",
     "itc_hscode": "2523",
     "description": "CEMENTS W\/N CLRD\/IN THE FORM OF CLINKERS"
    },
    {
     "chapter": "25",
     "itc_hscode": "2524",
     "description": "ASBESTOS"
    },
    {
     "chapter": "25",
     "itc_hscode": "2525",
     "description": "MICA INCLUDING SPLITTINGS MICA WASTE"
    },
    {
     "chapter": "25",
     "itc_hscode": "2526",
     "description": "SLABS OF A RECTNGLR (INCL SQ) SHAPE"
    },
    {
     "chapter": "25",
     "itc_hscode": "2528",
     "description": "OF H3BO3 CALCULATED ON THE DRY WEIGHT"
    },
    {
     "chapter": "25",
     "itc_hscode": "2529",
     "description": "FELSPAR LEUCITE NEPHELINE & NEPHELINE SYENITE FLUORSPAR"
    },
    {
     "chapter": "25",
     "itc_hscode": "2530",
     "description": "MINERAL SUBSTANCES NOT ELSEWHERE SPECIFIED OR INCLUDED"
    },
    {
     "chapter": "26",
     "itc_hscode": "2601",
     "description": "CONCENTRATES, OTHER THAN ROASTED IRON PYRI TON"
    },
    {
     "chapter": "26",
     "itc_hscode": "2602",
     "description": "PERCNTOR MORE CALCULTED ON THE DRY WEIGHT"
    },
    {
     "chapter": "26",
     "itc_hscode": "2603",
     "description": "COPPER ORES AND CONCERTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "2604",
     "description": "NICKEL ORES AND CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "2605",
     "description": "COBALT ORES AND CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "2606",
     "description": "ALUMINIUM ORES AND CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "2607",
     "description": "LEAD ORES AND CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "2608",
     "description": "ZINC ORES AND CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "2609",
     "description": "TIN ORES AND CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "2610",
     "description": "CHROMIUM ORES AND CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "2611",
     "description": "TUNGSTEN ORES AND CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "2612",
     "description": "URANIUM OR THORIUM ORES AND CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "2613",
     "description": "MOLYBDENUM ORES AND CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "2614",
     "description": "TITANIUM ORES AND CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "2615",
     "description": "NIOBIUM, TANTALUM, VANADIUM OR ZIRCONIUM ORES AND CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "2616",
     "description": "PRECIOUS METAL ORES AND CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "2617",
     "description": "OTHER ORES AND CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "2618",
     "description": "GRNULATD SLAG(SLAG SAND) FROM IRON\/STEEL"
    },
    {
     "chapter": "26",
     "itc_hscode": "2621",
     "description": "INCINERATION OF MUNICIPAL WASTE"
    },
    {
     "chapter": "27",
     "itc_hscode": "2701",
     "description": "COAL BRIQUETTES OVOIDS & SIMILAR SOLID FUELS MANUFACTURED FROM COAL TON"
    },
    {
     "chapter": "27",
     "itc_hscode": "2702",
     "description": "LIGNITE, WHETHER OR NOT AGGLOMERATED, EXCLUDING JET TON"
    },
    {
     "chapter": "27",
     "itc_hscode": "2703",
     "description": "PEAT(INCLDNG PEAT LITTER) W\/N AGLOMRTD TON"
    },
    {
     "chapter": "27",
     "itc_hscode": "2704",
     "description": "RETORT CARBON TON"
    },
    {
     "chapter": "27",
     "itc_hscode": "2705",
     "description": "AND OTHER GASEOUS HYDROCARBONS"
    },
    {
     "chapter": "27",
     "itc_hscode": "2706",
     "description": "DISTILLD INCLUDING RECONSTITUTED TARS"
    },
    {
     "chapter": "27",
     "itc_hscode": "2707",
     "description": "PRODUCTS IN WHICH THE WEIGHT OF TH"
    },
    {
     "chapter": "27",
     "itc_hscode": "2708",
     "description": "PITCH AND PITCH COKE, OBTAINED FROM COAL TAR OR FROM OTHER MINERAL TARS"
    },
    {
     "chapter": "27",
     "itc_hscode": "2709",
     "description": "PETROLEUM OILS AND OILS OBTAINED FROM BITUMINOUS MINERALS, CRUDE TON"
    },
    {
     "chapter": "27",
     "itc_hscode": "2710",
     "description": "MOREBY WEIGHT OF THESE OILS TON"
    },
    {
     "chapter": "27",
     "itc_hscode": "2711",
     "description": "PETRLM GASES & OTHR GASEOUS HYDRCRBNS"
    },
    {
     "chapter": "27",
     "itc_hscode": "2712",
     "description": "WAX,OTHROTHR MNRL WAXES OBTND BY SYNTHSIS,W\/N CLRD"
    },
    {
     "chapter": "27",
     "itc_hscode": "2713",
     "description": "MNRLS"
    },
    {
     "chapter": "27",
     "itc_hscode": "2714",
     "description": "ASPHALTIC ROCKS"
    },
    {
     "chapter": "27",
     "itc_hscode": "2715",
     "description": "MNRLTAR PITCH(E.G.BITUMNOUS MASTICS CUT‐BACKS)"
    },
    {
     "chapter": "27",
     "itc_hscode": "2716",
     "description": "ELECTRICAL ENERGY"
    },
    {
     "chapter": "28",
     "itc_hscode": "2801",
     "description": "FLUORINE, CHLORINE, BROMINE AND IODINE"
    },
    {
     "chapter": "28",
     "itc_hscode": "2802",
     "description": "SULPHUR, SUBLIMED OR PRECIPITATED; COLLOIDAL SULPHUR"
    },
    {
     "chapter": "28",
     "itc_hscode": "2803",
     "description": "INCLUDED)"
    },
    {
     "chapter": "28",
     "itc_hscode": "2804",
     "description": "HYDROGEN, RARE GASES AND OTHER NON‐METALS"
    },
    {
     "chapter": "28",
     "itc_hscode": "2805",
     "description": "OR NOT INTERMIXED OR INTERALLOYED; MERCUR"
    },
    {
     "chapter": "28",
     "itc_hscode": "2806",
     "description": "HCL(HYDROCHLORIC ACID) CHLOROSULPHRIC ACID"
    },
    {
     "chapter": "28",
     "itc_hscode": "2807",
     "description": "SULPHURIC ACID; OLEUM"
    },
    {
     "chapter": "28",
     "itc_hscode": "2808",
     "description": "NITRIC ACID; SULPHONITRIC ACIDS"
    },
    {
     "chapter": "28",
     "itc_hscode": "2809",
     "description": "CHEMICALLY DEFINED"
    },
    {
     "chapter": "28",
     "itc_hscode": "2810",
     "description": "OXIDES OF BORON; BORIC ACIDS"
    },
    {
     "chapter": "28",
     "itc_hscode": "2811",
     "description": "OTHER INORGANIC ACIDS AND OTHER INORGANIC OXYGEN COMPOUNDS OF NON‐METALS"
    },
    {
     "chapter": "28",
     "itc_hscode": "2812",
     "description": "HALIDES AND HALIDE OXIDES OF NON‐METALS"
    },
    {
     "chapter": "28",
     "itc_hscode": "2813",
     "description": "SULPHIDES OF NON‐METALS; COMMERCIAL PHOSPHORUS TRISULPHIDE"
    },
    {
     "chapter": "28",
     "itc_hscode": "2814",
     "description": "AMMONIA, ANHYDROUS OR IN AQUEOUS SOLUTION"
    },
    {
     "chapter": "28",
     "itc_hscode": "2815",
     "description": "SODIUM OR POTASSIUM"
    },
    {
     "chapter": "28",
     "itc_hscode": "2816",
     "description": "STRONTIUM OR BARIUM"
    },
    {
     "chapter": "28",
     "itc_hscode": "2817",
     "description": "ZINC OXIDE; ZINC PEROXIDE"
    },
    {
     "chapter": "28",
     "itc_hscode": "2818",
     "description": "ALUMINIUM HYDROXIDE"
    },
    {
     "chapter": "28",
     "itc_hscode": "2819",
     "description": "CHROMIUM OXIDES AND HYDROXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "2820",
     "description": "MANGANESE OXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "2821",
     "description": "COMBINED IRON EVALUATED AS FE 2 O 3"
    },
    {
     "chapter": "28",
     "itc_hscode": "2822",
     "description": "COBALT OXIDES AND HYDROXIDES; COMMERCIAL COBALT OXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "2823",
     "description": "TITANIUM OXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "2824",
     "description": "LEAD OXIDES; RED LEAD AND ORANGE LEAD"
    },
    {
     "chapter": "28",
     "itc_hscode": "2825",
     "description": "OTHER METAL OXIDES, HYDROXIDES AND PEROXID"
    },
    {
     "chapter": "28",
     "itc_hscode": "2828",
     "description": "HYPOCHLORITES; COMMERCIAL CALCIUM HYPOCHLORITES; CHLORITES; HYPOBROMITES"
    },
    {
     "chapter": "28",
     "itc_hscode": "2829",
     "description": "CHLORATES AND PERCHLORATES; BROMATES AND PERBROMATES; IODATES AND PERIODATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "2830",
     "description": "SULPHIDES; POLYSULPHIDES, WHETHER OR NOT CHEMICALLY DEFINED"
    },
    {
     "chapter": "28",
     "itc_hscode": "2831",
     "description": "DITHONITES AND SULPHOXYLATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "2832",
     "description": "SULPHITES; THIOSULPHATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "2833",
     "description": "SULPHATES; ALUMS; PEROXOSULPHATES ( PERSULPHATES)"
    },
    {
     "chapter": "28",
     "itc_hscode": "2834",
     "description": "NITRITES; NITRATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "2835",
     "description": "POLYPHOSPHATES, WHETHER OR NOT CHEMICALLY"
    },
    {
     "chapter": "28",
     "itc_hscode": "2836",
     "description": "CARBMTS"
    },
    {
     "chapter": "28",
     "itc_hscode": "2837",
     "description": "CYANIDES, CYANIDE OXIDES AND COMPLEX CYANIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "2839",
     "description": "SILICATES; COMMERCIAL ALKALI METAL SILICATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "2840",
     "description": "BORATES; PEROXOBORATES (PERBORATES)"
    },
    {
     "chapter": "28",
     "itc_hscode": "2841",
     "description": "SALTS OF OXOMETALLIC OR PEROXOMETALLIC ACIDS"
    },
    {
     "chapter": "28",
     "itc_hscode": "2842",
     "description": "OTHER SALTS OF INORGANIC ACIDS OR PEROXOACIDS,EXCLUDING AZIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "2843",
     "description": "DEFINED AMALGAMS OF PRECIOUS METAL"
    },
    {
     "chapter": "28",
     "itc_hscode": "2844",
     "description": "ISOTOPES)&THEIR COMPOUNDS;MIXTURES & RSDUS"
    },
    {
     "chapter": "28",
     "itc_hscode": "2845",
     "description": "ISOTOPES, WHETHER OR NOT CHEMICALLY DEFINE"
    },
    {
     "chapter": "28",
     "itc_hscode": "2846",
     "description": "MTLS"
    },
    {
     "chapter": "28",
     "itc_hscode": "2847",
     "description": "HYDROGEN PEROXIDE, WHETHER OR NOT SOLIDIFIED WITH UREA"
    },
    {
     "chapter": "28",
     "itc_hscode": "2848",
     "description": "PHSPHIDS,W\/N CHMCLY DFND,EXCL FERO‐PHSPHRS"
    },
    {
     "chapter": "28",
     "itc_hscode": "2849",
     "description": "CARBIDES, WHETHER OR NOT CHEMICALLY DEFINED"
    },
    {
     "chapter": "28",
     "itc_hscode": "2850",
     "description": "OTHER THAN COMPOUNDS WHICH ARE AL"
    },
    {
     "chapter": "28",
     "itc_hscode": "2852",
     "description": "COMPOUNDS, INORGANIC OR ORGANIC, OF MERCURY, EXCLUDING AMALGAMS"
    },
    {
     "chapter": "28",
     "itc_hscode": "2853",
     "description": "OF SIMILAR PURITY); LIQUID AIR"
    },
    {
     "chapter": "29",
     "itc_hscode": "2901",
     "description": "ACYCLIC HYDROCARBONS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2902",
     "description": "CYCLIC HYDROCARBONS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2903",
     "description": "HALOGENATED DERIVATIVES OF HYDROCARBONS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2905",
     "description": "DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "2906",
     "description": "DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "2907",
     "description": "PHENOLS; PHENOL‐ALCOHOLS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2908",
     "description": "HALGNTD,SLPHNTD,NITRTD\/NITRSTD DRVTVS OF PHENOLS\/PHENOL‐ALCOHOLS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2909",
     "description": "NITRATED\/NITROSATED DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "2910",
     "description": "AND THEIR HALOGENATED, SULPHONATED, NITRAT"
    },
    {
     "chapter": "29",
     "itc_hscode": "2911",
     "description": "DRVTVS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2913",
     "description": "HALGNTD,SLPHNTD NITRTD\/NITRSTD DRVTVS OF PRODUCTS OF HEADING NO.2912"
    },
    {
     "chapter": "29",
     "itc_hscode": "2914",
     "description": "DRVTVS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2915",
     "description": "HALGNTD SLPHNTD NITRTD\/NITRSTD DRVTVS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2916",
     "description": "ANHYDRIDES, HALIDES, PEROXIDES AND PEROXYA"
    },
    {
     "chapter": "29",
     "itc_hscode": "2917",
     "description": "SLPHNTDNITRATED OR NITROSATED DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "2918",
     "description": "THRHALGNTD SLPHNTD NITRTD\/NITRSTD DRVTVS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2919",
     "description": "DRVTVS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2920",
     "description": "SLPHNTD NITRTD\/NITRSTD DRVTVS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2921",
     "description": "AMINE‐ FUNCTION COMPOUNDS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2922",
     "description": "OXYGEN‐FUNCTION AMINO‐COMPOUNDS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2923",
     "description": "WHETHER OR NOT CHEMICALLY DEFINED"
    },
    {
     "chapter": "29",
     "itc_hscode": "2924",
     "description": "CRBOXYAMIDE‐FNCTN CMPNDS AMIDE‐FNCTN COMPOUNDS OF CARBONIC ACID"
    },
    {
     "chapter": "29",
     "itc_hscode": "2925",
     "description": "CRBOXYIMD‐FNCTN CMPNDS(INCL SACCHARIN & ITS SLTS) & IMINE‐FUNCTION COMPOUNDS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2926",
     "description": "NITRILE‐FUNCTION COMPOUNDS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2927",
     "description": "DIAZO‐, AZO‐ OR AZOXY‐COMPOUNDS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2928",
     "description": "ORGNC DRVTVS OF HYDRAZINE\/OF HYDROXYLAMINE"
    },
    {
     "chapter": "29",
     "itc_hscode": "2929",
     "description": "COMPOUNDS WITH OTHER NITROGEN FUNCTION"
    },
    {
     "chapter": "29",
     "itc_hscode": "2930",
     "description": "ORGANO‐SULPHUR COMPOUNDS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2931",
     "description": "OTHER ORGANO‐INORGANIC COMPOUNDS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2932",
     "description": "HTRCYCLC CMPNDS WTH OXYGN HTR‐ATM(S) ONLY"
    },
    {
     "chapter": "29",
     "itc_hscode": "2933",
     "description": "HETEROCYCLIC COMPOUNDS WITH NITROGEN"
    },
    {
     "chapter": "29",
     "itc_hscode": "2934",
     "description": "MUCIEIC ACIDS & THEIR SALTS W\/N CHEMICALLYDEFINED , OTHER"
    },
    {
     "chapter": "29",
     "itc_hscode": "2935",
     "description": "SULPHONAMIDES"
    },
    {
     "chapter": "29",
     "itc_hscode": "2936",
     "description": "CONCENTRATES), DERIVATIVES THEREOF USED P"
    },
    {
     "chapter": "29",
     "itc_hscode": "2937",
     "description": "BY SYNTHESIS; DERIVATIVES AND STRCTRAL ANALOG"
    },
    {
     "chapter": "29",
     "itc_hscode": "2938",
     "description": "OTHER DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "2939",
     "description": "VGTBL ALKLDS NATRL\/RPRDCD BY SYNTHSIS & THR SLTS ETHRS ESTRS AND OTHR DRVTVS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2940",
     "description": "SLTS BESIDES HDG NO. 2937 2938 OR 2939"
    },
    {
     "chapter": "29",
     "itc_hscode": "2941",
     "description": "ANTIBIOTICS"
    },
    {
     "chapter": "29",
     "itc_hscode": "2942",
     "description": "OTHER ORGANIC COMPOUNDS"
    },
    {
     "chapter": "30",
     "itc_hscode": "3001",
     "description": "POWDERED; EXTRACTS OF GLANDS OR OTHER"
    },
    {
     "chapter": "30",
     "itc_hscode": "3003",
     "description": "MXD TOGETHER FOR HMN MEDCNE NT FR RTL SALE"
    },
    {
     "chapter": "30",
     "itc_hscode": "3004",
     "description": "DOSESOR IN PCKNGS FR RTL SALE"
    },
    {
     "chapter": "30",
     "itc_hscode": "3005",
     "description": "PLASTERS, POULTICES), IMPREGNATED OR COAT"
    },
    {
     "chapter": "30",
     "itc_hscode": "3006",
     "description": "MISCELLANEOUS PHARMACEUTICAL GOODS"
    },
    {
     "chapter": "31",
     "itc_hscode": "3102",
     "description": "MINERAL OR CHEMICAL FERTILISERS, NITROGENOUS"
    },
    {
     "chapter": "31",
     "itc_hscode": "3103",
     "description": "MINERAL OR CHEMICAL FERTILISERS, PHOSPHATIC"
    },
    {
     "chapter": "31",
     "itc_hscode": "3104",
     "description": "MINERAL OR CHEMICAL FERTILISERS, POTASSIC"
    },
    {
     "chapter": "31",
     "itc_hscode": "3105",
     "description": "GOODS IN TBLTS\/LIKE FRM IN PKT OF WT<=10KG"
    },
    {
     "chapter": "32",
     "itc_hscode": "3201",
     "description": "TANING EXTRCS OF VEGTBL ORGN TANIS & THEIRSALT ETHRS ESTRS & OTHR DERIVTS"
    },
    {
     "chapter": "32",
     "itc_hscode": "3202",
     "description": "TNNG SUBSTNCS ENZYMTIC PREPTNS FOR PRE‐TNNG"
    },
    {
     "chapter": "32",
     "itc_hscode": "3204",
     "description": "SYNTC ORGNC COLRNG MATR W\/N CHMCLY DFND"
    },
    {
     "chapter": "32",
     "itc_hscode": "3205",
     "description": "COLR LAKES"
    },
    {
     "chapter": "32",
     "itc_hscode": "3207",
     "description": "INCRMIC.ENMLG\/GLS INDSTY,FRIT IN PWDR\/GRNL"
    },
    {
     "chapter": "32",
     "itc_hscode": "3208",
     "description": "OR DSLVD NON ACEUS MDUM SLTN IN VOLTILE"
    },
    {
     "chapter": "32",
     "itc_hscode": "3209",
     "description": "DSPRS\/DSLVD IN AQUEOUS MEDIUM"
    },
    {
     "chapter": "32",
     "itc_hscode": "3211",
     "description": "PREPARED DRIERS"
    },
    {
     "chapter": "32",
     "itc_hscode": "3212",
     "description": "OTHR COLRNG MATR IN PCKNG FR RETAIL SALE"
    },
    {
     "chapter": "32",
     "itc_hscode": "3213",
     "description": "BTTLS,PANS\/IN SMLR FORMS\/PCKNGS"
    },
    {
     "chapter": "32",
     "itc_hscode": "3215",
     "description": "SOLID"
    },
    {
     "chapter": "33",
     "itc_hscode": "3301",
     "description": "PRDCTAQUS DSTLTS\/SLTN"
    },
    {
     "chapter": "33",
     "itc_hscode": "3302",
     "description": "BEVRGS"
    },
    {
     "chapter": "33",
     "itc_hscode": "3303",
     "description": "PERFUMES AND TOILET WATERS"
    },
    {
     "chapter": "33",
     "itc_hscode": "3304",
     "description": "SUN TAN PEDICURE\/MANICURE"
    },
    {
     "chapter": "33",
     "itc_hscode": "3305",
     "description": "PREPARATIONS FOR USE ON THE HAIR"
    },
    {
     "chapter": "33",
     "itc_hscode": "3306",
     "description": "PRPARTN FR ORL\/DNTL HYGN,DNTUR FIXATV PST\/PWDR & DNTL FLOS IN INDVDL PACKGS."
    },
    {
     "chapter": "33",
     "itc_hscode": "3307",
     "description": "PRPNPRPN NES;PRPD ROOM DEODORISERS W\/N PRFMD"
    },
    {
     "chapter": "34",
     "itc_hscode": "3401",
     "description": "FELT ETC IMPRGNTD,COATD\/CVRD WTH SOAP\/LIKE"
    },
    {
     "chapter": "34",
     "itc_hscode": "3402",
     "description": "OTHER THAN THOSE OF HEADING NO 3401"
    },
    {
     "chapter": "34",
     "itc_hscode": "3403",
     "description": "CNTNG 70% MORE BY WT PETROLM OIL ETC"
    },
    {
     "chapter": "34",
     "itc_hscode": "3404",
     "description": "ARTIFICIAL WAXES AND PREPARED WAXES"
    },
    {
     "chapter": "34",
     "itc_hscode": "3405",
     "description": "EXCL WAXES OF HDG NO 3404"
    },
    {
     "chapter": "34",
     "itc_hscode": "3406",
     "description": "CANDLES, TAPERS AND THE LIKE"
    },
    {
     "chapter": "34",
     "itc_hscode": "3407",
     "description": "(OF CALCND GYPSUM\/CAL SLPHT"
    },
    {
     "chapter": "35",
     "itc_hscode": "3501",
     "description": "CASEIN, CASEINATES AND OTHER CASEIN DERIVATIVES; CASEIN GLUES"
    },
    {
     "chapter": "35",
     "itc_hscode": "3502",
     "description": "ALBUMINS ALBUMINTS & OTHR ALBUMIN DRVTVS"
    },
    {
     "chapter": "35",
     "itc_hscode": "3503",
     "description": "ANML ORIGIN,EXCL CASEIN GLUES OF HD 350300"
    },
    {
     "chapter": "35",
     "itc_hscode": "3504",
     "description": "ELSEWHERE SPECIFIED OR INCLUDED; HIDE"
    },
    {
     "chapter": "35",
     "itc_hscode": "3505",
     "description": "STARCHES); GLUES BASED ON STARCHES, OR ON"
    },
    {
     "chapter": "35",
     "itc_hscode": "3506",
     "description": "RETL SALE AS GLUES\/ADHSVS NT EXCDNG 1 KG"
    },
    {
     "chapter": "35",
     "itc_hscode": "3507",
     "description": "ENZYMES; PREPARED ENZYMES NOT ELSEWHERE SPECIFIED OR INCLUDED"
    },
    {
     "chapter": "36",
     "itc_hscode": "3601",
     "description": "PROPELLANT POWDERS"
    },
    {
     "chapter": "36",
     "itc_hscode": "3602",
     "description": "PRPD EXPLOSIVES OTHR THN PROPELLENT PWDRS"
    },
    {
     "chapter": "36",
     "itc_hscode": "3603",
     "description": "DETONATORS"
    },
    {
     "chapter": "36",
     "itc_hscode": "3604",
     "description": "ARTICLES"
    },
    {
     "chapter": "36",
     "itc_hscode": "3605",
     "description": "MTCHS EXCL PYRTCHNC ARTCLS OF HDNG NO 3604"
    },
    {
     "chapter": "36",
     "itc_hscode": "3606",
     "description": "FERO CERM & OTHR PYROPHORIC ALLOYS;ARTCLS OF COMBUSTIBLE MATERIALS NES"
    },
    {
     "chapter": "37",
     "itc_hscode": "3701",
     "description": "INSTANT PRNT FLM,FLT SNSTSD,UNEXPSD ETC"
    },
    {
     "chapter": "37",
     "itc_hscode": "3702",
     "description": "PRNT FLM IN ROLLS SENSTSD UNEXPSD"
    },
    {
     "chapter": "37",
     "itc_hscode": "3703",
     "description": "PHTOGRC PAPR PAPRBRD TXTLS SENSTSD UNEXPSD"
    },
    {
     "chapter": "37",
     "itc_hscode": "3704",
     "description": "PHOT PLTS FLM PAPR PAPRBRD AND TXTLS EXPSED BUT NOT DEVELOPED"
    },
    {
     "chapter": "37",
     "itc_hscode": "3705",
     "description": "FILM"
    },
    {
     "chapter": "37",
     "itc_hscode": "3707",
     "description": "UP IN MSRD PORTNS\/PUT UP FOR RTL SALE"
    },
    {
     "chapter": "38",
     "itc_hscode": "3802",
     "description": "ACTVTD CRBN‐ACTVTD NATRL MNRL PRODCTS‐ANMLBLACK INCL SPENT ANML BLACK"
    },
    {
     "chapter": "38",
     "itc_hscode": "3803",
     "description": "TALL OIL, WHETHER OR NOT REFINED"
    },
    {
     "chapter": "38",
     "itc_hscode": "3804",
     "description": "SLPHNTS‐BUT EXCL TALL OIL OF HDG 3803"
    },
    {
     "chapter": "38",
     "itc_hscode": "3805",
     "description": "PINE OIL CNTNG ALPHATERPINEOL"
    },
    {
     "chapter": "38",
     "itc_hscode": "3807",
     "description": "PITCH AND SIMILAR PREPARATIONS BASED ON RO"
    },
    {
     "chapter": "38",
     "itc_hscode": "3808",
     "description": "ETC IN PCKNGS\/AS ARTCLS (SLPHR‐TRTD BNDS ETC)"
    },
    {
     "chapter": "38",
     "itc_hscode": "3810",
     "description": "SOLDERING, BRAZING OR WELDING; SOLDERI"
    },
    {
     "chapter": "38",
     "itc_hscode": "3811",
     "description": "ANTI‐KNOCK PREPARATIONS, OXIDATION INHIBITORS, GUM"
    },
    {
     "chapter": "38",
     "itc_hscode": "3812",
     "description": "PRPD RUBR ACCLRTRS‐CMPND PLSTCSRS‐N.E.S ANTIOXDSNG PRPNS & OTHR CMPND STBLSRS"
    },
    {
     "chapter": "38",
     "itc_hscode": "3813",
     "description": "PRPNS & CHARGES FOR FIRE EXTINGUISHERS CHARGED FIRE‐EXTINGUISHING GRENADES"
    },
    {
     "chapter": "38",
     "itc_hscode": "3814",
     "description": "PREPARED PAINT OR VARNISH REMOVERS"
    },
    {
     "chapter": "38",
     "itc_hscode": "3815",
     "description": "SPECIFIED OR INCLUDED"
    },
    {
     "chapter": "38",
     "itc_hscode": "3817",
     "description": "MXD ALKYLBENZEBES & MXD ALKYLNAPHTHALENES OTHR THAN THOSE OF HDG NO. 2707\/2902"
    },
    {
     "chapter": "38",
     "itc_hscode": "3818",
     "description": "ELCTRNCS"
    },
    {
     "chapter": "38",
     "itc_hscode": "3819",
     "description": "PTRLM BTMNS MNRLS WEIGHING LESS THAN 70%"
    },
    {
     "chapter": "38",
     "itc_hscode": "3820",
     "description": "ANTI‐FREEZING PREPARATIONS AND PREPARED DE‐ICING FLUIDS"
    },
    {
     "chapter": "38",
     "itc_hscode": "3821",
     "description": "PRPD CULTR MEDIA FR MICRO‐ORGNSMS DVLPMNT"
    },
    {
     "chapter": "38",
     "itc_hscode": "3823",
     "description": "INDSTRL MONOCARBOXYLC FATY ACIDS ACID OILSFROM REFINING INDUSTRIAL FATTY ALCOHOL"
    },
    {
     "chapter": "38",
     "itc_hscode": "3824",
     "description": "OR ALLIED INDUSTRIES N.E.S."
    },
    {
     "chapter": "38",
     "itc_hscode": "3825",
     "description": "RESIDUAL PRODUCTS OF THE CHEMICAL OR ALLIED"
    },
    {
     "chapter": "39",
     "itc_hscode": "3901",
     "description": "POLYMERS OF ETHYLENE IN PRIMARY FORMS"
    },
    {
     "chapter": "39",
     "itc_hscode": "3902",
     "description": "POLYMERS OF PROPYLENE OR OF OTHER OLEFINS, IN PRIMARY FORMS"
    },
    {
     "chapter": "39",
     "itc_hscode": "3903",
     "description": "POLYMERS OF STYRENE, IN PRIMARY FORMS"
    },
    {
     "chapter": "39",
     "itc_hscode": "3904",
     "description": "POLYMERS OF VINYL CHLORIDE OR OF OTHER HALOGENATED OLEFINS, IN PRIMARY FORMS"
    },
    {
     "chapter": "39",
     "itc_hscode": "3905",
     "description": "POLYMERS IN PRIMARY FORMS"
    },
    {
     "chapter": "39",
     "itc_hscode": "3906",
     "description": "ACRYLIC POLYMERS IN PRIMARY FORMS"
    },
    {
     "chapter": "39",
     "itc_hscode": "3907",
     "description": "POLYACETALS, OTHER POLYETHERS AND EPOXIDE RESINS,"
    },
    {
     "chapter": "39",
     "itc_hscode": "3908",
     "description": "POLYAMIDES IN PRIMARY FORMS"
    },
    {
     "chapter": "39",
     "itc_hscode": "3909",
     "description": "AMINO‐RESINS, PHENOLIC RESINS AND POLYURETHANES,"
    },
    {
     "chapter": "39",
     "itc_hscode": "3910",
     "description": "SILICONES IN PRIMARY FORMS"
    },
    {
     "chapter": "39",
     "itc_hscode": "3911",
     "description": "POLYSULPHONES AND OTHER PRODUCTS SPECIFIED"
    },
    {
     "chapter": "39",
     "itc_hscode": "3912",
     "description": "PRIMARY FORMS"
    },
    {
     "chapter": "39",
     "itc_hscode": "3914",
     "description": "ION EXCHANGERS BASED ON POLYMERS OF HEADINGS 3901 TO 3913, IN PRIMARY FORMS"
    },
    {
     "chapter": "39",
     "itc_hscode": "3915",
     "description": "WASTE, PARINGS AND SCRAP, OF PLASTICS"
    },
    {
     "chapter": "39",
     "itc_hscode": "3916",
     "description": "SRFCE WRKD BT NT OTHRWSE WRKD OF PLSTCS"
    },
    {
     "chapter": "39",
     "itc_hscode": "3917",
     "description": "OF PLASTICS"
    },
    {
     "chapter": "39",
     "itc_hscode": "3918",
     "description": "COVERING OF PIASTICS"
    },
    {
     "chapter": "39",
     "itc_hscode": "3919",
     "description": "WHETHER OR NOT IN ROLLS"
    },
    {
     "chapter": "39",
     "itc_hscode": "3920",
     "description": "REINFORCED, LAMINATED, SUPPORTED OR SIMILA"
    },
    {
     "chapter": "39",
     "itc_hscode": "3921",
     "description": "OTHER PLATES, SHEETS, FILM, FOIL AND STRIP, OF PLASTICS"
    },
    {
     "chapter": "39",
     "itc_hscode": "3922",
     "description": "FLUSHING CISTERNS AND SIMILAR SANITARY WAR"
    },
    {
     "chapter": "39",
     "itc_hscode": "3923",
     "description": "ARTCLS FOR THE CNVYNCE\/PCKNG OF GOODS STOPRS LIDS CAPS & OTHR CLSRS OF PLSTCS"
    },
    {
     "chapter": "39",
     "itc_hscode": "3924",
     "description": "TABLEWARE, KITCHENWARE, OTHER HOUSEHOLD ARTICLES AND TOILET ARTICLES, OF PLASTICS"
    },
    {
     "chapter": "39",
     "itc_hscode": "3925",
     "description": "BUILDERS WARE OF PLASTICS, NOT ELSEWHERE SPECIFIED OR INCLUDED"
    },
    {
     "chapter": "40",
     "itc_hscode": "4002",
     "description": "OR STRIP; MIXTURES OF ANY PROD OF"
    },
    {
     "chapter": "40",
     "itc_hscode": "4003",
     "description": "RECLAIMED RUBBER IN PRIMARY FORMS OR IN PLATES, SHEETS OR STRIP"
    },
    {
     "chapter": "40",
     "itc_hscode": "4004",
     "description": "GRANULES OBTAINED THEREFROM"
    },
    {
     "chapter": "40",
     "itc_hscode": "4005",
     "description": "CMPNDED RUBR UNVULCNSD IN PRMRY FORMS\/IN PLATES SHEETS\/STRIP"
    },
    {
     "chapter": "40",
     "itc_hscode": "4006",
     "description": "DISCS AND RINGS), OF UNVULCANISED RUBBER"
    },
    {
     "chapter": "40",
     "itc_hscode": "4007",
     "description": "VULCANISED RUBBER THREAD AND CORD"
    },
    {
     "chapter": "40",
     "itc_hscode": "4008",
     "description": "PLATS,SHTS,STRP,RODS & PROFILE SHAPES OF VULCNSD RUBR OTHR THN HARD RUBR"
    },
    {
     "chapter": "40",
     "itc_hscode": "4009",
     "description": "WITHOUT THEIR FITTINGS (FOR EXAMPLE, JOINT"
    },
    {
     "chapter": "40",
     "itc_hscode": "4010",
     "description": "CNVYR TRNSMSSN BLTS\/BLTNG OF VULCNSD RUBR"
    },
    {
     "chapter": "40",
     "itc_hscode": "4011",
     "description": "NEW PNEUMATIC TYRES, OF RUBBER"
    },
    {
     "chapter": "40",
     "itc_hscode": "4012",
     "description": "AND TYRE FLAPS, OF RUBBER"
    },
    {
     "chapter": "40",
     "itc_hscode": "4013",
     "description": "INNER TUBES, OF RUBBER"
    },
    {
     "chapter": "40",
     "itc_hscode": "4014",
     "description": "WTH\/WITHOUT FITTINGS OF HARD RUBBER"
    },
    {
     "chapter": "40",
     "itc_hscode": "4015",
     "description": "PURPOSE OF VULCANISED RUBR NOT HARD RUBR"
    },
    {
     "chapter": "40",
     "itc_hscode": "4016",
     "description": "OTHER ARTICLES OF VULCANISED RUBBER OTHER THAN HARD RUBBER"
    },
    {
     "chapter": "40",
     "itc_hscode": "4017",
     "description": "HARD RUBBER"
    },
    {
     "chapter": "41",
     "itc_hscode": "4101",
     "description": "SALTED, DRIED, LIMED, PICKLED OR OTHERWISE"
    },
    {
     "chapter": "41",
     "itc_hscode": "4102",
     "description": "PRESERVED, BUT NOT TANNED, PARCHMENT‐DRES"
    },
    {
     "chapter": "41",
     "itc_hscode": "4103",
     "description": "PRESERVED, BUT NOT TANNED, PARCHMENT‐DRES"
    },
    {
     "chapter": "41",
     "itc_hscode": "4104",
     "description": "WONSPLT BUT NT FURTHER PREPARED"
    },
    {
     "chapter": "41",
     "itc_hscode": "4105",
     "description": "FURTHER PREPARD."
    },
    {
     "chapter": "41",
     "itc_hscode": "4106",
     "description": "FURTHERPREPARED."
    },
    {
     "chapter": "41",
     "itc_hscode": "4107",
     "description": "LEATHER, OF BOVINE (INCLUDING BUFFALO)"
    },
    {
     "chapter": "41",
     "itc_hscode": "4112",
     "description": "LEATHER, OF SHEEP OR LAMB, WITHOUT WOOL ON"
    },
    {
     "chapter": "41",
     "itc_hscode": "4113",
     "description": "LEATHER, OF OTHER ANIMALS, WITHOUT WOOL"
    },
    {
     "chapter": "41",
     "itc_hscode": "4114",
     "description": "CHAMDIS LEATHER\/PATENT LEATHER\/LAMINATED LEATHER METALLISED LEATHER"
    },
    {
     "chapter": "41",
     "itc_hscode": "4115",
     "description": "WHETHER OR NOT IN ROLLS; PARING"
    },
    {
     "chapter": "42",
     "itc_hscode": "4201",
     "description": "BAGS‐DOG COATS & THE LIKE)OF ANY MAT"
    },
    {
     "chapter": "42",
     "itc_hscode": "4202",
     "description": "SPECTACLE CASES, BINOCULAR CASES"
    },
    {
     "chapter": "42",
     "itc_hscode": "4205",
     "description": "OTHER ARTICLES OF LEATHER OR OF COMPOSITION LEATHER"
    },
    {
     "chapter": "42",
     "itc_hscode": "4206",
     "description": "TENDONS"
    },
    {
     "chapter": "43",
     "itc_hscode": "4301",
     "description": "RAW HIDS & SKNS OF HDNGS NO.4101,41"
    },
    {
     "chapter": "43",
     "itc_hscode": "4302",
     "description": "MATRLS)OTHR THAN THOSE OF HEADNG NO.4303"
    },
    {
     "chapter": "43",
     "itc_hscode": "4303",
     "description": "ARTICLES OF APPAREL, CLOTHING ACCESSORIES AND OTHER ARTICLES OF FURSKIN"
    },
    {
     "chapter": "43",
     "itc_hscode": "4304",
     "description": "ARTIFICIAL FUR AND ARTICLES THEREOF"
    },
    {
     "chapter": "44",
     "itc_hscode": "4401",
     "description": "PARTICLES; SAWDUST AND WOOD WASTE"
    },
    {
     "chapter": "44",
     "itc_hscode": "4402",
     "description": "WOD CHRCL(INCL SHL\/NUT CHRCL) W\/N AGLOMRTD"
    },
    {
     "chapter": "44",
     "itc_hscode": "4404",
     "description": "LENGTHWSE WOODEN STICKS CHIPWOOD ETC."
    },
    {
     "chapter": "44",
     "itc_hscode": "4405",
     "description": "WOOD WOOL; WOOD FLOUR"
    },
    {
     "chapter": "44",
     "itc_hscode": "4406",
     "description": "RLY & TRMY SLEEPERS(CROSSTIES) OF WOOD"
    },
    {
     "chapter": "44",
     "itc_hscode": "4407",
     "description": "ENDJOINTED, OF A THICKNESS EXCEEDING 6 MM"
    },
    {
     "chapter": "44",
     "itc_hscode": "4408",
     "description": "PLANED OR FINGR JTD THIKNES <= 6MM"
    },
    {
     "chapter": "44",
     "itc_hscode": "4409",
     "description": "JTD ETC) ALONG ANY EDGS\/FACS W\/N PLANED"
    },
    {
     "chapter": "44",
     "itc_hscode": "4410",
     "description": "RESIN OR OTHR ORGNIC BINDG SUBSTS"
    },
    {
     "chapter": "44",
     "itc_hscode": "4412",
     "description": "PLYWOOD, VENEERED PANELS AND SIMILAR LAMINATED WOOD"
    },
    {
     "chapter": "44",
     "itc_hscode": "4413",
     "description": "DENSIFIED WOOD, IN BLOCKS, PLATES, STRIPS, OR PROFILE SHAPES"
    },
    {
     "chapter": "44",
     "itc_hscode": "4414",
     "description": "WOODEN FRAMES FOR PAINTINGS, PHOTOGRAPHS, MIRRORS OR SIMILAR OBJECTS"
    },
    {
     "chapter": "44",
     "itc_hscode": "4415",
     "description": "PALLETS & OTHR LOAD BOARDS OF WOOD"
    },
    {
     "chapter": "44",
     "itc_hscode": "4416",
     "description": "INCLUDING STAVES"
    },
    {
     "chapter": "44",
     "itc_hscode": "4417",
     "description": "OR SHOE LASTS AND TREES, OF WOOD"
    },
    {
     "chapter": "44",
     "itc_hscode": "4418",
     "description": "FLOORING PANELS, SHINGLES AND SHAKES"
    },
    {
     "chapter": "44",
     "itc_hscode": "4419",
     "description": "TABLEWARE AND KITCHENWARE, OF WOOD"
    },
    {
     "chapter": "44",
     "itc_hscode": "4420",
     "description": "OTHR ORNAMTS OF WOOD NT FALLNG IN CH 94"
    },
    {
     "chapter": "44",
     "itc_hscode": "4421",
     "description": "OTHER ARTICLES OF WOOD"
    },
    {
     "chapter": "45",
     "itc_hscode": "4501",
     "description": "OR GROUND CORK"
    },
    {
     "chapter": "45",
     "itc_hscode": "4502",
     "description": "STRIP(INCL SHRP EDGD BLNK FR CRKS OR STOPP"
    },
    {
     "chapter": "45",
     "itc_hscode": "4503",
     "description": "ARTICLES OF NATURAL CORK"
    },
    {
     "chapter": "45",
     "itc_hscode": "4504",
     "description": "AGGLOMERATED CORK"
    },
    {
     "chapter": "46",
     "itc_hscode": "4601",
     "description": "TOGETHER IN FORM OF SHEETS (E.G.MATS ETC)"
    },
    {
     "chapter": "46",
     "itc_hscode": "4602",
     "description": "OF HDNG 4601 ARTCLS OF LOOFAH"
    },
    {
     "chapter": "47",
     "itc_hscode": "4701",
     "description": "MECHANICAL WOOD PULP"
    },
    {
     "chapter": "47",
     "itc_hscode": "4702",
     "description": "CHEMICAL WOOD PULP, DISSOLVING GRADES"
    },
    {
     "chapter": "47",
     "itc_hscode": "4703",
     "description": "CHEMICAL WOOD PULP, SODA OR SULPHATE, OTHER THAN DISSOLVING GRADES"
    },
    {
     "chapter": "47",
     "itc_hscode": "4704",
     "description": "CHMCL WOOD PULP SULPHITE EXCPT DISOLVNG GR"
    },
    {
     "chapter": "47",
     "itc_hscode": "4706",
     "description": "OTHER FIBROUS CELLULOSIC MATERIAL"
    },
    {
     "chapter": "47",
     "itc_hscode": "4707",
     "description": "RECOVERED (WASTE AND SCRAP) PAPER OR PAPERBOARD"
    },
    {
     "chapter": "48",
     "itc_hscode": "4801",
     "description": "NEWSPRINT, IN ROLLS OR SHEETS"
    },
    {
     "chapter": "48",
     "itc_hscode": "4802",
     "description": "PAPR OF HDNG 4801\/4803 ; HND‐MDE PAPR & PAPRBRD"
    },
    {
     "chapter": "48",
     "itc_hscode": "4803",
     "description": "CRPD,CRNKLD,EMBSD ETC IN RLS OF WDTH>36 CM"
    },
    {
     "chapter": "48",
     "itc_hscode": "4804",
     "description": "UNCOTD KRFT PAPR AND PAPRBORD IN ROLS OR SHEETS OTHR THAN HEDNG NO. 4802\/4803"
    },
    {
     "chapter": "48",
     "itc_hscode": "4805",
     "description": "PROCESSED THAN AS SPECIFIED"
    },
    {
     "chapter": "48",
     "itc_hscode": "4806",
     "description": "TRANSLUCNT PAPR IN RELS\/SHEETS"
    },
    {
     "chapter": "48",
     "itc_hscode": "4807",
     "description": "NINTERNALY REINFORCD IN ROLS\/SHEETS"
    },
    {
     "chapter": "48",
     "itc_hscode": "4808",
     "description": "IN ROLS\/SHTS OTHR THN HDG NO 4803"
    },
    {
     "chapter": "48",
     "itc_hscode": "4809",
     "description": "ROLS OR SHEETS"
    },
    {
     "chapter": "48",
     "itc_hscode": "4810",
     "description": "W\/NSURFCE COLRD\/DECORTD\/PRNTD IN ROLS\/SHE"
    },
    {
     "chapter": "48",
     "itc_hscode": "4811",
     "description": "THNHDNG 4803,4809,4810"
    },
    {
     "chapter": "48",
     "itc_hscode": "4812",
     "description": "FILTER BLOCKS, SLABS AND PLATES, OF PAPER PULP"
    },
    {
     "chapter": "48",
     "itc_hscode": "4813",
     "description": "CIGARETTE PAPER, WHETHER OR NOT CUT TO SIZE OR IN THE FORM OF BOOKLETS OR TUBES"
    },
    {
     "chapter": "48",
     "itc_hscode": "4814",
     "description": "WALPAPR & SMLR WAL COVERNGS WINDOW TRANSPARENCIS OF PAPR"
    },
    {
     "chapter": "48",
     "itc_hscode": "4816",
     "description": "STNCLS& OFFSET PLATES OF PAPR W\/N PUT IN B"
    },
    {
     "chapter": "48",
     "itc_hscode": "4817",
     "description": "AND ASORTMNT OF PAPR STATIONRY"
    },
    {
     "chapter": "48",
     "itc_hscode": "4818",
     "description": "APPRL OF WDTH <=36 CM OR CUT TO SIZE\/SHPE"
    },
    {
     "chapter": "48",
     "itc_hscode": "4819",
     "description": "CELLULOSE WADDING OR WEBS OF CELLULOSE FIB"
    },
    {
     "chapter": "48",
     "itc_hscode": "4820",
     "description": "MEMORANDUM PADS, DIARIES AND SIMILAR ARTIC"
    },
    {
     "chapter": "48",
     "itc_hscode": "4821",
     "description": "PAPR OR PAPRBORD LABELS W\/N PRINTED"
    },
    {
     "chapter": "48",
     "itc_hscode": "4823",
     "description": "OR SHAPE; OTHER ARTICLES OF PAPERPULP"
    },
    {
     "chapter": "49",
     "itc_hscode": "4901",
     "description": "SINGLE SHEETS"
    },
    {
     "chapter": "49",
     "itc_hscode": "4902",
     "description": "ADVERTISING MATERIAL"
    },
    {
     "chapter": "49",
     "itc_hscode": "4903",
     "description": "CHILDREN'S PICTURE, DRAWING OR COLOURING BOOKS"
    },
    {
     "chapter": "49",
     "itc_hscode": "4904",
     "description": "MUSIC, PRINTED OR IN MANUSCRIPT, WHETHER OR NOT BOUND OR ILLUSTRATED"
    },
    {
     "chapter": "49",
     "itc_hscode": "4905",
     "description": "TOPOGRAPHICAL PLANS AND GLOBES, PRINTED"
    },
    {
     "chapter": "49",
     "itc_hscode": "4906",
     "description": "TXTS;PHTO RPRDCTNS ON SNSTSD PPR&CRBN COPY"
    },
    {
     "chapter": "49",
     "itc_hscode": "4907",
     "description": "NOTE STOCK SHARE CERTIFCTS & SMLR TITL DOCUMNTS"
    },
    {
     "chapter": "49",
     "itc_hscode": "4908",
     "description": "TRANSFERS (DECALCOMANIAS)"
    },
    {
     "chapter": "49",
     "itc_hscode": "4909",
     "description": "ILSTRTD WITH ENVLPS OR TRIMNGS OR NOT"
    },
    {
     "chapter": "49",
     "itc_hscode": "4910",
     "description": "ALL PRINTD CALENDARS INCLDNG CALNDAR BLCKS"
    },
    {
     "chapter": "49",
     "itc_hscode": "4911",
     "description": "OTHER PRINTED MATTER, INCLUDING PRINTED PICTURES AND PHOTOGRAPHS"
    },
    {
     "chapter": "50",
     "itc_hscode": "5001",
     "description": "SILK‐WORM COCOONS SUITABLE FOR REELING"
    },
    {
     "chapter": "50",
     "itc_hscode": "5002",
     "description": "RAW SILK (NOT THROWN)"
    },
    {
     "chapter": "50",
     "itc_hscode": "5003",
     "description": "SLK WSTE (INCLD COCOONS NT SUTBLE FR RELNGYARN WSTE & GARNTE STOCK)"
    },
    {
     "chapter": "50",
     "itc_hscode": "5004",
     "description": "SLK YARNS(OTHR THN YRN SPUN FROM SLK WSTE)NT PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "50",
     "itc_hscode": "5005",
     "description": "YRN SPN FRM SLK WST NT PUT UP FR RETAL SLE"
    },
    {
     "chapter": "50",
     "itc_hscode": "5006",
     "description": "SLK YRN & YRN SPUN FROM SLK WAST PUT UP FOR RETAIL SALE,SLK‐WORM GUT"
    },
    {
     "chapter": "50",
     "itc_hscode": "5007",
     "description": "WOVEN FABRICS OF SILK OR OF SILK WASTE"
    },
    {
     "chapter": "51",
     "itc_hscode": "5101",
     "description": "WOOL NOT CARDED OR COMBED"
    },
    {
     "chapter": "51",
     "itc_hscode": "5102",
     "description": "FINE\/COARSE ANML HAIR NT CRDED\/COMBED"
    },
    {
     "chapter": "51",
     "itc_hscode": "5103",
     "description": "GARNETTED STOCK"
    },
    {
     "chapter": "51",
     "itc_hscode": "5104",
     "description": "GRNTD STOCK OF WOOL\/FINE\/COARSE ANML HAIR"
    },
    {
     "chapter": "51",
     "itc_hscode": "5105",
     "description": "WOOL AND FINE OR COARSE ANIMAL HAIR, CARDED OR COMBED (INCLUDING COMBED"
    },
    {
     "chapter": "51",
     "itc_hscode": "5106",
     "description": "YRN OF CRDED WOOL NT PUT UP FR RETAIL SALE"
    },
    {
     "chapter": "51",
     "itc_hscode": "5107",
     "description": "YRN OF CMBD WOOL NT PUT UP FR RETAIL SALE"
    },
    {
     "chapter": "51",
     "itc_hscode": "5108",
     "description": "YARN OF FINE ANIMAL HAIR (CARDED OR COMBED), NOT PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "51",
     "itc_hscode": "5109",
     "description": "YARN OF WOOL OR FINE ANIMAL HAIR, PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "51",
     "itc_hscode": "5111",
     "description": "WOVEN FABRICS OF CARDED WOOL OR OF CARDED FINE ANIMAL HAIR"
    },
    {
     "chapter": "51",
     "itc_hscode": "5112",
     "description": "WOVN FBRCS OF CMBD WOOL\/FINE ANML HAIR"
    },
    {
     "chapter": "51",
     "itc_hscode": "5113",
     "description": "WOVN FBRCS OF CORSE ANML HAIR\/OF HORS HAIR"
    },
    {
     "chapter": "52",
     "itc_hscode": "5201",
     "description": "COTTON, NOT CARDED OR COMBED"
    },
    {
     "chapter": "52",
     "itc_hscode": "5202",
     "description": "COTON WAST(INCL YARN WAST & GRNTED STOCK)"
    },
    {
     "chapter": "52",
     "itc_hscode": "5203",
     "description": "COTTON, CARDED OR COMBED"
    },
    {
     "chapter": "52",
     "itc_hscode": "5204",
     "description": "COTON SEWNG THRED W\/N PUT UP FOR RETL SALE"
    },
    {
     "chapter": "52",
     "itc_hscode": "5206",
     "description": "COTON YRN(OTHR THN SEWNG THRD)CONTNG COTON <85% BY WT NT PUT FOR RETAIL SALE"
    },
    {
     "chapter": "52",
     "itc_hscode": "5207",
     "description": "COTTON YARN (OTHER THAN SEWING THREAD) PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "52",
     "itc_hscode": "5208",
     "description": "WOVN FBRCS OF COTON CONTNG>=85% BY WT OF COTON WEGHNG NT MORE THN 200 G\/M2"
    },
    {
     "chapter": "52",
     "itc_hscode": "5209",
     "description": "WOVN FBRCS OF COTTON, CONTNG >=85% COTN BY WT WEIGHING>200 GM PER SQM"
    },
    {
     "chapter": "52",
     "itc_hscode": "5211",
     "description": "G\/M2"
    },
    {
     "chapter": "52",
     "itc_hscode": "5212",
     "description": "OTHER WOVEN FABRICS OF COTTON"
    },
    {
     "chapter": "53",
     "itc_hscode": "5301",
     "description": "FLUX,RAW OR PRCSSD BUT NT SPUN;FLAX TOW & WAST(INCL YARN WAST & GARNTTD STOCK)"
    },
    {
     "chapter": "53",
     "itc_hscode": "5302",
     "description": "(INCL YARN WASTE & GARNETTED STOCK)"
    },
    {
     "chapter": "53",
     "itc_hscode": "5303",
     "description": "WASTE(INCL YARN WASTE & GARNTTD STOCK)"
    },
    {
     "chapter": "53",
     "itc_hscode": "5305",
     "description": "TOW,NOILS & WASTE OF THESE FIBRS"
    },
    {
     "chapter": "53",
     "itc_hscode": "5306",
     "description": "FLAX YARN"
    },
    {
     "chapter": "53",
     "itc_hscode": "5307",
     "description": "YARN OF JUTE OR OF OTHER TEXTILE BAST FIBRES OF HEADING 5303"
    },
    {
     "chapter": "53",
     "itc_hscode": "5308",
     "description": "YARN OF OTHER VEGETABLE TEXTILE FIBRES; PAPER YARN"
    },
    {
     "chapter": "53",
     "itc_hscode": "5309",
     "description": "WOVEN FABRICS OF FLAX"
    },
    {
     "chapter": "53",
     "itc_hscode": "5310",
     "description": "WOVEN FABRICS OF JUTE OR OF OTHER TEXTILE BASE FIBRES OF HEADING 5303"
    },
    {
     "chapter": "53",
     "itc_hscode": "5311",
     "description": "WOVEN FABRICS OF OTHER VEGETABLE TEXTILE FIBRES; WOVEN FABRICS OF PAPER YARN"
    },
    {
     "chapter": "54",
     "itc_hscode": "5401",
     "description": "SEWING THREAD OF MAN‐MADE FILAMENTS, WHETHER OR NOT PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "54",
     "itc_hscode": "5402",
     "description": "MONOFILAMENT OF LESS THAN 67 DECITEX"
    },
    {
     "chapter": "54",
     "itc_hscode": "5403",
     "description": "MONOFILAMENT OF < 67 DECITEX"
    },
    {
     "chapter": "54",
     "itc_hscode": "5404",
     "description": "STRW)OF SYNTHTC TXTL MTRLS OF WDTH<=5MM"
    },
    {
     "chapter": "54",
     "itc_hscode": "5405",
     "description": "STRW)OF ARTFCL TXTL MTRLS OF WDTH <=5MM"
    },
    {
     "chapter": "54",
     "itc_hscode": "5406",
     "description": "MAN‐MADE FILAMENT YARN (OTHER THAN SEWING THREAD), PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "54",
     "itc_hscode": "5407",
     "description": "NO.5404"
    },
    {
     "chapter": "54",
     "itc_hscode": "5408",
     "description": "WOVEN FABRICS OF ARTIFICIAL FILAMENT YARN,"
    },
    {
     "chapter": "55",
     "itc_hscode": "5501",
     "description": "SYNTHETIC FILAMENT TOW"
    },
    {
     "chapter": "55",
     "itc_hscode": "5502",
     "description": "ARTIFICIAL FILAMENT TOW"
    },
    {
     "chapter": "55",
     "itc_hscode": "5504",
     "description": "ARTIFICIAL STAPLE FIBRES, NOT CARDED, COMBED OR OTHERWISE PROCESSED FOR"
    },
    {
     "chapter": "55",
     "itc_hscode": "5505",
     "description": "WASTE (INCLUDING NOILS, YARN WASTE AND GARNETTED STOCK) OF MAN‐MADE FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "5506",
     "description": "SYNTHETIC STAPLE FIBRES, CARDED COMBED OR OTHERWISE PROCESSED FOR SPINNING"
    },
    {
     "chapter": "55",
     "itc_hscode": "5507",
     "description": "ARTIFICIAL STAPLE FIBRES, CARDED, COMBED OR OTHERWISE PROCESSED FOR SPINNING"
    },
    {
     "chapter": "55",
     "itc_hscode": "5508",
     "description": "SEWING THREAD OF MAN‐MADE STAPLE FIBRES, WHETHER OR NOT PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "55",
     "itc_hscode": "5509",
     "description": "YARN(OTHR THN SWNG THREAD)OF SYNTHTC STAPLE FIBRES,NOT PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "55",
     "itc_hscode": "5510",
     "description": "YARN(OTHR THN SWNG THREAD)OF ARTFCL STAPLE FIBRES NOT PUT UP FR RTL SALE"
    },
    {
     "chapter": "55",
     "itc_hscode": "5511",
     "description": "YARN(OTHR THN SWNG THREAD)OF MAN‐MADE STAPLE FIBRES PUT UP FOR RTL SALE"
    },
    {
     "chapter": "55",
     "itc_hscode": "5512",
     "description": "SYNTHETIC STAPLE FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "5513",
     "description": "MNLYOR SOLELY WTH COTTON OF WT<=170 G\/M2"
    },
    {
     "chapter": "55",
     "itc_hscode": "5514",
     "description": "COTTON OF A WT EXCDG 170 G\/M2"
    },
    {
     "chapter": "55",
     "itc_hscode": "5515",
     "description": "OTHER WOVEN FABRICS OF SYNTHETIC STAPLE FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "5516",
     "description": "WOVEN FABRICS OF ARTIFICIAL STAPLE FIBRES"
    },
    {
     "chapter": "56",
     "itc_hscode": "5601",
     "description": "LENGTH (FLOCK), TEXTILE DUST AND MIL"
    },
    {
     "chapter": "56",
     "itc_hscode": "5602",
     "description": "FELT, WHETHER OR NOT IMPREGNATED, COATED, COVERED OR LAMINATED"
    },
    {
     "chapter": "56",
     "itc_hscode": "5603",
     "description": "NONWOVENS, WHETHER OR NOT IMPREGNATED, COATED, COVERED OR LAMINATED"
    },
    {
     "chapter": "56",
     "itc_hscode": "5604",
     "description": "IMPRGNTD COTD,COVRD\/SHTHD WTH RUBR\/PLATCS"
    },
    {
     "chapter": "56",
     "itc_hscode": "5605",
     "description": "THE FORM OF THRED,STRP\/PWDR\/COVRD WTH M"
    },
    {
     "chapter": "56",
     "itc_hscode": "5606",
     "description": "FLOCK CHENL YRN); LOOPWALE‐YRN"
    },
    {
     "chapter": "56",
     "itc_hscode": "5607",
     "description": "RUBR\/PLSTCS"
    },
    {
     "chapter": "56",
     "itc_hscode": "5609",
     "description": "ARTCLS OF YRN,STRP\/THE LIKE OF HDNG NO. 5404\/5405 TWINE,CORDGE,ROP\/CBLS N.E.S."
    },
    {
     "chapter": "57",
     "itc_hscode": "5701",
     "description": "CARPETS AND OTHER TEXTILE FLOOR COVERINGS, KNOTTED, WHETHER OR NOT MADE UP"
    },
    {
     "chapter": "57",
     "itc_hscode": "5702",
     "description": "SCHUMACKS,\"KARAMANIE\"& SMLR HNDWVN RUGS"
    },
    {
     "chapter": "57",
     "itc_hscode": "5703",
     "description": "CARPETS AND OTHER TEXTILE FLOOR COVERINGS, TUFTED, WHETHER OR NOT MADE UP"
    },
    {
     "chapter": "57",
     "itc_hscode": "5704",
     "description": "NOT MADE UP"
    },
    {
     "chapter": "57",
     "itc_hscode": "5705",
     "description": "OTHER CARPETS AND OTHER TEXTILE FLOOR COVERINGS, WHETHER OR NOT MADE UP"
    },
    {
     "chapter": "58",
     "itc_hscode": "5802",
     "description": "FBRCS,EXCPT PRDCTS OF HDNG NO 5703"
    },
    {
     "chapter": "58",
     "itc_hscode": "5803",
     "description": "GAUZE, OTHER THAN NARROW FABRICS OF HEADING 5806"
    },
    {
     "chapter": "58",
     "itc_hscode": "5804",
     "description": "MOTFS EXCL FBRCS OF HEDG NO.6002"
    },
    {
     "chapter": "58",
     "itc_hscode": "5805",
     "description": "POINT CROSS STITCH),W\/N MADE UP"
    },
    {
     "chapter": "58",
     "itc_hscode": "5806",
     "description": "OF WARP WITHOUT WEFT ASSEMBLED"
    },
    {
     "chapter": "58",
     "itc_hscode": "5807",
     "description": "SHAPE OR SIZE, NOT EMBROIDERED"
    },
    {
     "chapter": "58",
     "itc_hscode": "5808",
     "description": "THAN KNITTED OR CROCHETED; TASSELS, POMPON"
    },
    {
     "chapter": "58",
     "itc_hscode": "5809",
     "description": "FBRCS\/FOR SMLR PURPOSES N.E.S.\/INCLUDED"
    },
    {
     "chapter": "58",
     "itc_hscode": "5810",
     "description": "EMBRDRY IN THE PIECE,IN STRIPS\/IN MOTIFS"
    },
    {
     "chapter": "58",
     "itc_hscode": "5811",
     "description": "MATERIALS ASSEMBLED WITH PADDING BY STITCH"
    },
    {
     "chapter": "59",
     "itc_hscode": "5902",
     "description": "VISCOSE RAYON"
    },
    {
     "chapter": "59",
     "itc_hscode": "5903",
     "description": "TXTL FBRCS IMPRGNTD,COATD,CVRD\/LAMNTD WTH PLASTICS EXCL THOSE OF HDG NO. 5902"
    },
    {
     "chapter": "59",
     "itc_hscode": "5904",
     "description": "COVERING APPLIED ON A TEXTILE BACKING, WH"
    },
    {
     "chapter": "59",
     "itc_hscode": "5905",
     "description": "TEXTILE WALL COVERINGS"
    },
    {
     "chapter": "59",
     "itc_hscode": "5906",
     "description": "RUBBERISED TEXTILE FABRICS, OTHER THAN THOSE OF HEADING 5902"
    },
    {
     "chapter": "59",
     "itc_hscode": "5907",
     "description": "STUDIO BACK‐CLOTHS OR THE LIKE"
    },
    {
     "chapter": "59",
     "itc_hscode": "5908",
     "description": "GAS MANTLES ETC,W\/N IMPREGNATED"
    },
    {
     "chapter": "59",
     "itc_hscode": "5909",
     "description": "ACCESSORIES OF OTHER MATERIALS"
    },
    {
     "chapter": "59",
     "itc_hscode": "5910",
     "description": "PLSTCOR RINFRCD WTH MTL\/OTHR MATRL"
    },
    {
     "chapter": "60",
     "itc_hscode": "6001",
     "description": "PILE FABRICS INCLUDING\"LONG PILE\" FABRICS AND TERRY FABRICS,KNITTED\/CROCHETTED"
    },
    {
     "chapter": "60",
     "itc_hscode": "6002",
     "description": "EXCPT HDG NO 6001"
    },
    {
     "chapter": "60",
     "itc_hscode": "6003",
     "description": "KNITD OR CROCHETED FBRCS OF A WIDTH<30CM, EXCPT HDG NO 6001 OR 6002"
    },
    {
     "chapter": "60",
     "itc_hscode": "6004",
     "description": "EXCPT HDGNO. 6001"
    },
    {
     "chapter": "60",
     "itc_hscode": "6005",
     "description": "THOSE OF HEADINGS 6001 TO 6004"
    },
    {
     "chapter": "60",
     "itc_hscode": "6006",
     "description": "OTHER KNITTED OR CROCHETED FABRICS"
    },
    {
     "chapter": "61",
     "itc_hscode": "6101",
     "description": "ETC,KNTTD\/CRCHTD,EXCL OF HDG NO 6103"
    },
    {
     "chapter": "61",
     "itc_hscode": "6102",
     "description": "SKIJACKETS), WIND‐CHEATERS, WIND‐JACKETS A"
    },
    {
     "chapter": "61",
     "itc_hscode": "6103",
     "description": "BREECHES AND SHORTS (OTHER THAN SWIM WEAR)"
    },
    {
     "chapter": "61",
     "itc_hscode": "6104",
     "description": "TROUSERS, BIB AND BRACE OVERALLS,"
    },
    {
     "chapter": "61",
     "itc_hscode": "6105",
     "description": "MEN'S\/BOYS'SHIRTS,KNITTED\/CROCHETED"
    },
    {
     "chapter": "61",
     "itc_hscode": "6106",
     "description": "WOMEN[S OR GIRLS[ BLOUSES, SHIRTS AND SHIRT‐BLOUSES, KNITTED OR CROCHETED"
    },
    {
     "chapter": "61",
     "itc_hscode": "6107",
     "description": "MEN'S\/BOYS'UNDERPANTS,BRIEFS,NIGHTSHIRTS, PYJAMAS,BATHROBES ETC,KNTTD\/CRCHTD"
    },
    {
     "chapter": "61",
     "itc_hscode": "6108",
     "description": "BATHROBES, DRESSING GOWNS AND S"
    },
    {
     "chapter": "61",
     "itc_hscode": "6109",
     "description": "T‐SHRTS,SNGLTS & OTHR VESTS,KNTTD\/CRCHTD"
    },
    {
     "chapter": "61",
     "itc_hscode": "6111",
     "description": "BABIES[ GARMENTS AND CLOTHING ACCESSORIES, KNITTED OR CROCHETED"
    },
    {
     "chapter": "61",
     "itc_hscode": "6112",
     "description": "TRACK SUITS, SKI SUITS AND SWIMWEAR, KNITTED OR CROCHETED"
    },
    {
     "chapter": "61",
     "itc_hscode": "6113",
     "description": "GRMNTS,MADE UP OF KNTTD\/CRCHTD FABRICS OF HDNG NO. 5903 5906 OR 5907"
    },
    {
     "chapter": "61",
     "itc_hscode": "6114",
     "description": "OTHER GARMENTS, KNITTED OR CROCHETED"
    },
    {
     "chapter": "61",
     "itc_hscode": "6115",
     "description": "SSION HOSIERY (FOR EXAMPLE, STOCKINGS"
    },
    {
     "chapter": "61",
     "itc_hscode": "6116",
     "description": "GLOVES, MITTENS AND MITTS, KNITTED OR CROCHETED"
    },
    {
     "chapter": "61",
     "itc_hscode": "6117",
     "description": "PARTS OF GARMENTS OR OF CLOTHING ACCESSOR"
    },
    {
     "chapter": "62",
     "itc_hscode": "6201",
     "description": "CHETRS,WINDJACKETS & SMLR ARTCLS EXCPTG HDG 6203"
    },
    {
     "chapter": "62",
     "itc_hscode": "6202",
     "description": "JACKETS), WIND‐CHEATERS, WINDJACKETS AND S"
    },
    {
     "chapter": "62",
     "itc_hscode": "6203",
     "description": "BREECHES & SHORTS(OTHER THAN SWIMWEAR)"
    },
    {
     "chapter": "62",
     "itc_hscode": "6204",
     "description": "TROUSERS, BIB AND BRACE OVERALLS,"
    },
    {
     "chapter": "62",
     "itc_hscode": "6205",
     "description": "MEN'S OR BOY'S SHIRTS"
    },
    {
     "chapter": "62",
     "itc_hscode": "6206",
     "description": "WOMEN[S OR GIRLS[ BLOUSES, SHIRTS AND SHIRT‐BLOUSES"
    },
    {
     "chapter": "62",
     "itc_hscode": "6207",
     "description": "BATHROBES,DRESSING GOWNS & SIMILAR ARTCLS"
    },
    {
     "chapter": "62",
     "itc_hscode": "6208",
     "description": "NIGHTDRESSES, PYJAMAS, NEGLIGES, BATHROBE"
    },
    {
     "chapter": "62",
     "itc_hscode": "6209",
     "description": "BABIES[ GARMENTS AND CLOTHING ACCESSORIES"
    },
    {
     "chapter": "62",
     "itc_hscode": "6210",
     "description": "GARMENTS, MADE UP OF FABRICS OF HEADING 5602, 5603, 5903, 5906 OR 5907"
    },
    {
     "chapter": "62",
     "itc_hscode": "6211",
     "description": "TRCK SUITS,SKI SUITS & SWMWEAR,OTHR GRMNTS"
    },
    {
     "chapter": "62",
     "itc_hscode": "6213",
     "description": "HANDKERCHIEFS"
    },
    {
     "chapter": "62",
     "itc_hscode": "6214",
     "description": "SHWLS,SCRVS,MUFLRS,MNTLS,VELS & THE LIKE"
    },
    {
     "chapter": "62",
     "itc_hscode": "6215",
     "description": "TIES, BOW TIES AND CRAVATS"
    },
    {
     "chapter": "62",
     "itc_hscode": "6216",
     "description": "GLOVES, MITTENS AND MITTS"
    },
    {
     "chapter": "62",
     "itc_hscode": "6217",
     "description": "OTHER"
    },
    {
     "chapter": "63",
     "itc_hscode": "6301",
     "description": "BLANKETS AND TRAVELLING RUGS"
    },
    {
     "chapter": "63",
     "itc_hscode": "6302",
     "description": "BED LINEN, TABLE LINEN, TOILET LINEN AND KITCHEN LINEN"
    },
    {
     "chapter": "63",
     "itc_hscode": "6303",
     "description": "CURTAINS (INCLUDING DRAPES) AND INTERIOR BLINDS; CURTAIN OR BED VALANCES"
    },
    {
     "chapter": "63",
     "itc_hscode": "6304",
     "description": "OTHER FURNISHING ARTICLES, EXCLUDING THOSE OF HEADING 9404"
    },
    {
     "chapter": "63",
     "itc_hscode": "6305",
     "description": "SACKS AND BAGS, OF A KIND USED FOR THE PACKING OF GOODS"
    },
    {
     "chapter": "63",
     "itc_hscode": "6306",
     "description": "CAMPING GOODS"
    },
    {
     "chapter": "63",
     "itc_hscode": "6307",
     "description": "OTHER MADE UP ARTICLES, INCLUDING DRESS PATTERNS"
    },
    {
     "chapter": "63",
     "itc_hscode": "6308",
     "description": "MAKING UP INTO RUGS, TAPESTRIES, EMBROIDER"
    },
    {
     "chapter": "63",
     "itc_hscode": "6309",
     "description": "WORN CLOTHING AND OTHER WORN ARTICLES"
    },
    {
     "chapter": "63",
     "itc_hscode": "6310",
     "description": "ROPE\/CBLS,OF TEXTILE MATERIALS"
    },
    {
     "chapter": "64",
     "itc_hscode": "6401",
     "description": "ASSMBLD BY STCHNG‐RVTNG ETC"
    },
    {
     "chapter": "64",
     "itc_hscode": "6402",
     "description": "OTHER FOOTWEAR WITH OUTER SOLES AND UPPERS OF RUBBER OR PLASTICS"
    },
    {
     "chapter": "64",
     "itc_hscode": "6403",
     "description": "FTWEAR WTH OUTR SOLES OF RUBR,PLSTCS, LTHR\/CMPSTN LTHR & UPPRS OF LTHR"
    },
    {
     "chapter": "64",
     "itc_hscode": "6404",
     "description": "FTWEAR WTH OUTR SOLES OF RUBR‐PLSTCS ETC & UPPRS OF TXTL MATRLS"
    },
    {
     "chapter": "64",
     "itc_hscode": "6405",
     "description": "OTHER FOOTWEAR"
    },
    {
     "chapter": "64",
     "itc_hscode": "6406",
     "description": "ARTICLES, AND PRTS THEREOF"
    },
    {
     "chapter": "65",
     "itc_hscode": "6501",
     "description": "BRIMS; PLATEAUX AND MANCHONS (INCLUDING SL"
    },
    {
     "chapter": "65",
     "itc_hscode": "6502",
     "description": "SHAPE, NOR WITH MADE BRIMS, NOR LINED, NO"
    },
    {
     "chapter": "65",
     "itc_hscode": "6504",
     "description": "WHETHER ORNOT LINED OR TRIMMED"
    },
    {
     "chapter": "65",
     "itc_hscode": "6505",
     "description": "OTHER TEXTILE FABRIC, IN THE PIECE"
    },
    {
     "chapter": "65",
     "itc_hscode": "6506",
     "description": "OTHER HEADGEAR, WHETHER OR NOT LINED OR TRIMMED"
    },
    {
     "chapter": "65",
     "itc_hscode": "6507",
     "description": "FOR HEADGEAR"
    },
    {
     "chapter": "66",
     "itc_hscode": "6601",
     "description": "UMBRLS & SUN‐UMBRLS(INCL WLKNG‐STCK UMBRLS GRDN UMBRLS & SMLR UMBRLS)"
    },
    {
     "chapter": "66",
     "itc_hscode": "6602",
     "description": "WALKING‐STICKS, SEAT‐STICKS, WHIPS, RIDING CROPS AND THE LIKE"
    },
    {
     "chapter": "66",
     "itc_hscode": "6603",
     "description": "PARTS, TRIMMINGS AND ACCESSORIES OF ARTICLES OF HEADING 6601 TO 6602"
    },
    {
     "chapter": "67",
     "itc_hscode": "6701",
     "description": "ARTCLS(EXCL GOODS OF 0505 & WRKD QULLS & SCPES)"
    },
    {
     "chapter": "67",
     "itc_hscode": "6703",
     "description": "FOR MAKNG WIGS\/THE LIKE"
    },
    {
     "chapter": "67",
     "itc_hscode": "6704",
     "description": "TXTL MTRLS;ARTCLS OF HUMN HAIR NES"
    },
    {
     "chapter": "68",
     "itc_hscode": "6801",
     "description": "SETTS, CURBSTONES AND FLAGSTONES, OF NATURAL STONE (EXCEPT SLATE)"
    },
    {
     "chapter": "68",
     "itc_hscode": "6802",
     "description": "GRNLS ETC OF NATRL STONE (INCL SLATE)"
    },
    {
     "chapter": "68",
     "itc_hscode": "6803",
     "description": "WRKD SLATE & ARTCLS OF SLATE\/AGLMRTD SLATE"
    },
    {
     "chapter": "68",
     "itc_hscode": "6804",
     "description": "AGGLMRTD NTRL\/ARTFCL ABRSVS W\/N WTH PRTS"
    },
    {
     "chapter": "68",
     "itc_hscode": "6806",
     "description": "CLAYS, FOAMED SLAG AND SIMILAR EXPANDED MI"
    },
    {
     "chapter": "68",
     "itc_hscode": "6807",
     "description": "ARTCLS OF ASPHALT\/OF SMLR MATRL(FOR EXMPL PETROLEUM BITUMEN OR COAL TAR PITCH)"
    },
    {
     "chapter": "68",
     "itc_hscode": "6808",
     "description": "WOODWOOD,AGLMRTD WTH CMNT,PLSTR\/OTHR BINDE"
    },
    {
     "chapter": "68",
     "itc_hscode": "6809",
     "description": "ARTCLS OF PLASTER OR OF ITS COMPOSITIONS"
    },
    {
     "chapter": "68",
     "itc_hscode": "6810",
     "description": "REINFORCED"
    },
    {
     "chapter": "68",
     "itc_hscode": "6811",
     "description": "ARTICLES OF ASBESTOS‐CEMENT, OF CELLULOSE FIBRE‐CEMENT OR THE LIKE"
    },
    {
     "chapter": "68",
     "itc_hscode": "6812",
     "description": "REINFRCD,EXCL GOODS OF 6811\/6813"
    },
    {
     "chapter": "68",
     "itc_hscode": "6813",
     "description": "CELLULOSEETC W\/N CMBND WTH TXTL\/OTHR MATRL"
    },
    {
     "chapter": "69",
     "itc_hscode": "6902",
     "description": "GOODS, OTHER THAN THOSE OF SILICEOUS FOSSI"
    },
    {
     "chapter": "69",
     "itc_hscode": "6903",
     "description": "MEALS\/OF SMLR SILICEOUS EARTHS"
    },
    {
     "chapter": "69",
     "itc_hscode": "6904",
     "description": "CERAMIC BUILDING BRICKS, FLOORING BLOCKS, SUPPORT OR FILLER TILES AND THE LIKE"
    },
    {
     "chapter": "69",
     "itc_hscode": "6906",
     "description": "CERMC PIPES CONDUITS GUTTRNG & PIPE FITTNG"
    },
    {
     "chapter": "69",
     "itc_hscode": "6908",
     "description": "GLZD CERMC FLAGS & PAVNG HEARTH\/WALL TILES GLZD CERMC MOSAIC CUBES & LIKE"
    },
    {
     "chapter": "69",
     "itc_hscode": "6909",
     "description": "ETC;FOR CONVEYANCE\/PCKNG OF GOODS"
    },
    {
     "chapter": "69",
     "itc_hscode": "6910",
     "description": "CERMC SINKS WASH BASINS & SMLR SNTRY FXTRS"
    },
    {
     "chapter": "69",
     "itc_hscode": "6911",
     "description": "CHINA"
    },
    {
     "chapter": "69",
     "itc_hscode": "6912",
     "description": "CHINA"
    },
    {
     "chapter": "69",
     "itc_hscode": "6913",
     "description": "STATUETTES AND OTHER ORNAMENTAL CERAMIC ARTICLES"
    },
    {
     "chapter": "69",
     "itc_hscode": "6914",
     "description": "OTHER CERAMIC ARTICLES"
    },
    {
     "chapter": "70",
     "itc_hscode": "7001",
     "description": "CULLET AND OTHER WASTE AND SCRAP OF GLASS; GLASS IN THE MASS"
    },
    {
     "chapter": "70",
     "itc_hscode": "7003",
     "description": "LAYR BUT NT OTHRWSE WRKD"
    },
    {
     "chapter": "70",
     "itc_hscode": "7004",
     "description": "NOT OTHRWSE WRKD"
    },
    {
     "chapter": "70",
     "itc_hscode": "7005",
     "description": "LAYR BUT NOT OTHRWSE WRKD"
    },
    {
     "chapter": "70",
     "itc_hscode": "7007",
     "description": "SAFTY GLSS CONSTNG OF TOUGHND\/LMNTD GLSS"
    },
    {
     "chapter": "70",
     "itc_hscode": "7008",
     "description": "MULTIPLE‐WALLED INSULATING UNITS OF GLASS"
    },
    {
     "chapter": "70",
     "itc_hscode": "7009",
     "description": "GLSS MIRORS W\/N FRMD INCL REAR VIEW MIRORS"
    },
    {
     "chapter": "70",
     "itc_hscode": "7010",
     "description": "STOPERS,LIDS & OTHR CLOSRS OF GLASS"
    },
    {
     "chapter": "70",
     "itc_hscode": "7011",
     "description": "FITTINGS, FOR ELECTRIC LAMPS, CATH"
    },
    {
     "chapter": "70",
     "itc_hscode": "7013",
     "description": "GLSSWR FR TBL KTCHN,TOLT,OFFC INDOR DCORTION (EXCL GOODS OF HDG NO 7010\/7018)"
    },
    {
     "chapter": "70",
     "itc_hscode": "7014",
     "description": "SIGNLLNG GLSS WARE & OPTCL ELMNTS OF GLSS (EXCL GOODS OF HDG 7015) NT OPTCLY WRKD"
    },
    {
     "chapter": "70",
     "itc_hscode": "7015",
     "description": "CORRECTIVE SPECTACLES, CURVED, BENT, HOLLO"
    },
    {
     "chapter": "70",
     "itc_hscode": "7016",
     "description": "GLASS, WHETHER OR NOT WIRED"
    },
    {
     "chapter": "70",
     "itc_hscode": "7017",
     "description": "CALIBRATED"
    },
    {
     "chapter": "70",
     "itc_hscode": "7018",
     "description": "SMLR GLS;GLS MICROSCOPES WTH DIAMTR<=1MM"
    },
    {
     "chapter": "70",
     "itc_hscode": "7019",
     "description": "GLSS FBRS(INCL GLSS WOOL) & ARTCL THEROF (E.G. YARN WOVN FBRCS)"
    },
    {
     "chapter": "70",
     "itc_hscode": "7020",
     "description": "OTHER ARTICLES OF GLASS"
    },
    {
     "chapter": "71",
     "itc_hscode": "7102",
     "description": "DIAMONDS, WHETHER OR NOT WORKED, BUT NOT MOUNTED OR SET"
    },
    {
     "chapter": "71",
     "itc_hscode": "7103",
     "description": "PRCS\/SEMIPRCS STONES TMPRLY STRNG FR TRNSPRT"
    },
    {
     "chapter": "71",
     "itc_hscode": "7104",
     "description": "OR GRADED BUT NOT STRUNG, MOUNTED OR SET"
    },
    {
     "chapter": "71",
     "itc_hscode": "7105",
     "description": "DUST AND POWDER OF NATURAL OR SYNTHETIC PRECIOUS OR SEMI‐PRECIOUS STONES"
    },
    {
     "chapter": "71",
     "itc_hscode": "7107",
     "description": "BASE METALS CLAD WITH SILVER, NOT FURTHER WORKED THAN SEMI‐MANUFACTURED"
    },
    {
     "chapter": "71",
     "itc_hscode": "7109",
     "description": "SEMI MNFCTRD BASE MTLS\/SLVR CLAD WTH GOLD"
    },
    {
     "chapter": "71",
     "itc_hscode": "7110",
     "description": "PLTNM UNWRGHT\/SEMI MNFCTRD\/PWDR FORMS"
    },
    {
     "chapter": "71",
     "itc_hscode": "7111",
     "description": "SMI MNFCTRD BS MTLS;SLVR\/GLD,CLD WTH PLTNM"
    },
    {
     "chapter": "71",
     "itc_hscode": "7112",
     "description": "USD PRNCPLY FR THE RECOVRY OF PRCS MTL"
    },
    {
     "chapter": "71",
     "itc_hscode": "7113",
     "description": "ARTCLS OF JEWELLERY & PRTS THEREOF; OF PRCS MTL\/OF MTL CLD WTH PRECIOUS METAL"
    },
    {
     "chapter": "71",
     "itc_hscode": "7114",
     "description": "ARTCLS OF GOLDSMTH'S\/SLVRSMTH'S WARES & PRTS OF PRCS MTL\/MTL CLD WTH PRCS MTL"
    },
    {
     "chapter": "71",
     "itc_hscode": "7115",
     "description": "OTHER ARTICLES OF PRECIOUS METAL OR OF"
    },
    {
     "chapter": "71",
     "itc_hscode": "7116",
     "description": "ARTCLS OF NATRL\/CULTRD PEARLS PRCS\/SEMI PRCS STONES(NATRL SYNTHTC\/RECNSTRCTD)"
    },
    {
     "chapter": "71",
     "itc_hscode": "7117",
     "description": "IMITATION JEWELLERY"
    },
    {
     "chapter": "71",
     "itc_hscode": "7118",
     "description": "COIN"
    },
    {
     "chapter": "72",
     "itc_hscode": "7201",
     "description": "PIG IRON AND SPIEGELEISEN IN PIGS, BLOCKS OR OTHER PRIMARY FORMS"
    },
    {
     "chapter": "72",
     "itc_hscode": "7202",
     "description": "FERRO‐ALLOYS"
    },
    {
     "chapter": "72",
     "itc_hscode": "7203",
     "description": "LMPS,PLLTSETC; >=99.94% PURE IRON BY WT IN LUMPS ETC"
    },
    {
     "chapter": "72",
     "itc_hscode": "7204",
     "description": "FERROUS WASTE AND SCRAP; REMELTING SCRAP INGOTS"
    },
    {
     "chapter": "72",
     "itc_hscode": "7205",
     "description": "GRNL & PWDR,OF PIG IRON,SPGLSN,IRON\/STEEL"
    },
    {
     "chapter": "72",
     "itc_hscode": "7206",
     "description": "HEADING 7203)"
    },
    {
     "chapter": "72",
     "itc_hscode": "7207",
     "description": "SEMI‐FINISHED PRODUCTS OF IRON OR NON‐ ALLOY STEEL"
    },
    {
     "chapter": "72",
     "itc_hscode": "7208",
     "description": "ROLLED, NOT CLAD, PLATED OR COATED"
    },
    {
     "chapter": "72",
     "itc_hscode": "7209",
     "description": "FLT RLLD PRDCTS OF WDTH>= 600MM,COLD‐RLLD (COLD‐REDUCED),NOT CLAD,PLTD\/COATD"
    },
    {
     "chapter": "72",
     "itc_hscode": "7210",
     "description": "FLT‐RLLD PRDCTS OF IRON\/NON‐ALOY STEEL OF WDTH >=600 MM,CLAD,PLATD\/COATD"
    },
    {
     "chapter": "72",
     "itc_hscode": "7211",
     "description": "FLT‐RLLD PRDCTS OF IRON\/NON‐ALOY STL OF WDTH<600 MM,NT CLD,PLTD\/COATD"
    },
    {
     "chapter": "72",
     "itc_hscode": "7212",
     "description": "FLT‐RLLD PRDCTS OF IRON\/NON‐ALOY STEEL OF A WDTH<600 MM,CLAD,PLTD\/COATD"
    },
    {
     "chapter": "72",
     "itc_hscode": "7213",
     "description": "BARS AND RODS, HOT‐ROLLED, IN IRREGULARLY WOUND COILS, OF IRON OR NON‐ALLOY STEEL"
    },
    {
     "chapter": "72",
     "itc_hscode": "7214",
     "description": "HOT‐ROLLED, HOT‐DRAWN"
    },
    {
     "chapter": "72",
     "itc_hscode": "7215",
     "description": "OTHER BARS AND RODS OF IRON OR NON‐ALLOY STEEL"
    },
    {
     "chapter": "72",
     "itc_hscode": "7216",
     "description": "ANGLS,SHAPES & SCTNS OF IRON\/NON‐ALLOY STL"
    },
    {
     "chapter": "72",
     "itc_hscode": "7217",
     "description": "WIRE OF IRON OR NON‐ALLOY STEEL"
    },
    {
     "chapter": "72",
     "itc_hscode": "7218",
     "description": "STAINLESS STEEL"
    },
    {
     "chapter": "72",
     "itc_hscode": "7219",
     "description": "FLT‐RLLD PRDCTS OF STAINLESS STL OF WDTH>=600 MM"
    },
    {
     "chapter": "72",
     "itc_hscode": "7220",
     "description": "FLAT‐ROLLED PRODUCTS OF STAINLESS STEEL, OF A WIDTH OF LESS THAN 600 MM"
    },
    {
     "chapter": "72",
     "itc_hscode": "7221",
     "description": "BARS AND RODS, HOT‐ROLLED, IN IRREGULARLY WOUND COILS, OF STAINLESS STEEL"
    },
    {
     "chapter": "72",
     "itc_hscode": "7223",
     "description": "WIRE OF STAINLESS STEEL"
    },
    {
     "chapter": "72",
     "itc_hscode": "7224",
     "description": "ALLOY STEEL"
    },
    {
     "chapter": "72",
     "itc_hscode": "7225",
     "description": "FLT‐RLLD PRDCTS OF OTHR ALLOY STL OF WDTH 600 MM OR MORE"
    },
    {
     "chapter": "72",
     "itc_hscode": "7226",
     "description": "FLT‐RLD PRDCTS OF A WIDTH OF <600 MM"
    },
    {
     "chapter": "72",
     "itc_hscode": "7227",
     "description": "BARS AND RODS, HOT‐ROLLED, IN IRREGULARLY WOUND COILS, OF OTHER ALLOY STEEL"
    },
    {
     "chapter": "72",
     "itc_hscode": "7228",
     "description": "OR NON‐ALLOY STL"
    },
    {
     "chapter": "72",
     "itc_hscode": "7229",
     "description": "WIRE OF OTHER ALLOY STEEL"
    },
    {
     "chapter": "73",
     "itc_hscode": "7301",
     "description": "ASSEMBLED ELEMENTS; WELDED ANGLES, SHAPES"
    },
    {
     "chapter": "73",
     "itc_hscode": "7302",
     "description": "SLEEPRS,TIES & OTHR MATRL FOR FIXNG RAILS"
    },
    {
     "chapter": "73",
     "itc_hscode": "7303",
     "description": "TUBES, PIPES AND HOLLOW PROFILES, OF CAST IRON"
    },
    {
     "chapter": "73",
     "itc_hscode": "7305",
     "description": "WHCH EXCDS 406.4MM, OF IRON\/STL"
    },
    {
     "chapter": "73",
     "itc_hscode": "7307",
     "description": "TUBE OR PIPE FITTINGS (FOR EXAMPLE, COUPLINGS, ELBOW SLEEVES), OF IRON OR STEEL"
    },
    {
     "chapter": "73",
     "itc_hscode": "7308",
     "description": "TUBES ETC USED IN STRUCTRS OF IRON & STL"
    },
    {
     "chapter": "73",
     "itc_hscode": "7309",
     "description": "NOT FITD WITH MECHNCL\/THERMAL EQUIPMEN"
    },
    {
     "chapter": "73",
     "itc_hscode": "7310",
     "description": "CAPCTY<=300LTRNOT FITTED WTH MECHNCL OR THERML EQ"
    },
    {
     "chapter": "73",
     "itc_hscode": "7311",
     "description": "CONTAINERS FOR COMPRESSED OR LIQUEFIED GAS, OF IRON OR STEEL"
    },
    {
     "chapter": "73",
     "itc_hscode": "7312",
     "description": "ELECTRICALLY"
    },
    {
     "chapter": "73",
     "itc_hscode": "7313",
     "description": "WIREOF A KIND USED FOR FENCING,OF IRON\/STEEL"
    },
    {
     "chapter": "73",
     "itc_hscode": "7314",
     "description": "EXPANDED METAL OF"
    },
    {
     "chapter": "73",
     "itc_hscode": "7315",
     "description": "CHAIN AND PARTS THEREOF, OF IRON OR STEEL"
    },
    {
     "chapter": "73",
     "itc_hscode": "7316",
     "description": "ANCHORS, GRAPNELS AND PARTS THEREOF, OF IRON OR STEEL"
    },
    {
     "chapter": "73",
     "itc_hscode": "7317",
     "description": "NAILS, TACKS, DRAWING PINS, CORRUGATED NAILS,"
    },
    {
     "chapter": "73",
     "itc_hscode": "7318",
     "description": "SPRING WASHERS)& SMLR ARTICLES OF IRN\/STL"
    },
    {
     "chapter": "73",
     "itc_hscode": "7319",
     "description": "STL;SAFETY PINS & OTHR PINS NES\/INCLU"
    },
    {
     "chapter": "73",
     "itc_hscode": "7320",
     "description": "SPRINGS AND LEAVES FOR SPRINGS, OF IRON OR STEEL"
    },
    {
     "chapter": "73",
     "itc_hscode": "7321",
     "description": "ELECTRICDOMESTC APPLIANCES & ITS PRTS OF I"
    },
    {
     "chapter": "73",
     "itc_hscode": "7322",
     "description": "HTD,INCORPRTNG MOTOR DRIVN FAN & ITS PR"
    },
    {
     "chapter": "73",
     "itc_hscode": "7323",
     "description": "OR POLISHNG PADS,GLOVS & LIKE OF"
    },
    {
     "chapter": "73",
     "itc_hscode": "7324",
     "description": "SANITARY WARE AND PARTS THEREOF, OF IRON OR STEEL"
    },
    {
     "chapter": "73",
     "itc_hscode": "7325",
     "description": "OTHER CAST ARTICLES OF IRON OR STEEL"
    },
    {
     "chapter": "73",
     "itc_hscode": "7326",
     "description": "OTHER ARTICLES OF IRON OR STEEL"
    },
    {
     "chapter": "74",
     "itc_hscode": "7401",
     "description": "COPER MATTES;CEMENT COPER(PRECIPITD COPER)"
    },
    {
     "chapter": "74",
     "itc_hscode": "7402",
     "description": "UNREFINED COPPER; COPPER ANODES FOR ELECTROLYTIC REFINING"
    },
    {
     "chapter": "74",
     "itc_hscode": "7403",
     "description": "REFINED COPPER AND COPPER ALLOYS, UNWROUGHT"
    },
    {
     "chapter": "74",
     "itc_hscode": "7404",
     "description": "COPPER WASTE AND SCRAP"
    },
    {
     "chapter": "74",
     "itc_hscode": "7405",
     "description": "MASTER ALLOYS OF COPPER"
    },
    {
     "chapter": "74",
     "itc_hscode": "7406",
     "description": "COPPER POWDERS AND FLAKES"
    },
    {
     "chapter": "74",
     "itc_hscode": "7407",
     "description": "COPPER BARS, RODS AND PROFILES"
    },
    {
     "chapter": "74",
     "itc_hscode": "7408",
     "description": "COPPER WIRE"
    },
    {
     "chapter": "74",
     "itc_hscode": "7409",
     "description": "COPPER PLATES, SHEETS AND STRIP, OF A THICKNESS EXCEEDING 0.12.5 MM"
    },
    {
     "chapter": "74",
     "itc_hscode": "7410",
     "description": "OF A THICKNESS(EXCL BACKING)<=0.15 MM"
    },
    {
     "chapter": "74",
     "itc_hscode": "7411",
     "description": "COPPER TUBES AND PIPES"
    },
    {
     "chapter": "74",
     "itc_hscode": "7412",
     "description": "COPR TUBE\/PIPE FITNG(CUPLNGS,ELBOWS,SLEVS)"
    },
    {
     "chapter": "74",
     "itc_hscode": "7413",
     "description": "INSULATED"
    },
    {
     "chapter": "74",
     "itc_hscode": "7415",
     "description": "ARTICLES, OF COPPER OR OF IRON OR STEEL"
    },
    {
     "chapter": "74",
     "itc_hscode": "7418",
     "description": "SCOURERS AND SCOURING OR POLISHING PADS, G"
    },
    {
     "chapter": "74",
     "itc_hscode": "7419",
     "description": "OTHER ARTICLES OF COPPER"
    },
    {
     "chapter": "75",
     "itc_hscode": "7501",
     "description": "METALLURGY"
    },
    {
     "chapter": "75",
     "itc_hscode": "7502",
     "description": "UNWROUGHT NICKEL"
    },
    {
     "chapter": "75",
     "itc_hscode": "7503",
     "description": "NICKEL WASTE AND SCRAP"
    },
    {
     "chapter": "75",
     "itc_hscode": "7504",
     "description": "NICKEL POWDERS AND FLAKES"
    },
    {
     "chapter": "75",
     "itc_hscode": "7505",
     "description": "NICKEL BARS, RODS, PROFILES AND WIRE"
    },
    {
     "chapter": "75",
     "itc_hscode": "7506",
     "description": "NICKEL PLATES, SHEETS, STRIP AND FOIL"
    },
    {
     "chapter": "75",
     "itc_hscode": "7508",
     "description": "OTHER ARTICLES OF NICKEL"
    },
    {
     "chapter": "76",
     "itc_hscode": "7601",
     "description": "UNWROUGHT ALUMINIUM"
    },
    {
     "chapter": "76",
     "itc_hscode": "7602",
     "description": "ALUMINIUM WASTE AND SCRAP"
    },
    {
     "chapter": "76",
     "itc_hscode": "7603",
     "description": "ALUMINIUM POWDERS AND FLAKES"
    },
    {
     "chapter": "76",
     "itc_hscode": "7604",
     "description": "ALUMINIUM BARS, RODS AND PROFILES"
    },
    {
     "chapter": "76",
     "itc_hscode": "7605",
     "description": "ALUMINIUM WIRE"
    },
    {
     "chapter": "76",
     "itc_hscode": "7606",
     "description": "ALMNM PLTS,SHTS & STRP OF THCKNS>0.2 MM"
    },
    {
     "chapter": "76",
     "itc_hscode": "7607",
     "description": "BCKNG)NT EXCDNG 0.2 MM"
    },
    {
     "chapter": "76",
     "itc_hscode": "7608",
     "description": "ALUMINIUM TUBES AND PIPES"
    },
    {
     "chapter": "76",
     "itc_hscode": "7609",
     "description": "ALUMINIUM TUBE OR PIPE FITTINGS (FOR EXAMPLE, COUPLINGS, ELBOWS, SLEEVES)"
    },
    {
     "chapter": "76",
     "itc_hscode": "7610",
     "description": "PROFILES ETC.PRPD FOR USE IN STRCTR"
    },
    {
     "chapter": "76",
     "itc_hscode": "7611",
     "description": "INSLTD,BT NT FTD WTH MCHNL\/THRML EQPMNT"
    },
    {
     "chapter": "76",
     "itc_hscode": "7612",
     "description": "NW\/N LIND BUT NT FTD WTH MHCHNCL\/THRML EQU"
    },
    {
     "chapter": "76",
     "itc_hscode": "7613",
     "description": "ALMNM CONTAINERS FOR COMPRESSED\/LQFD GAS"
    },
    {
     "chapter": "76",
     "itc_hscode": "7614",
     "description": "INSULATED"
    },
    {
     "chapter": "76",
     "itc_hscode": "7615",
     "description": "GLOVS & TH LIKE,SNTRY WRE & PRTS OF ALMNM"
    },
    {
     "chapter": "76",
     "itc_hscode": "7616",
     "description": "OTHER ARTICLES OF ALUMINIUM"
    },
    {
     "chapter": "78",
     "itc_hscode": "7801",
     "description": "UNWROUGHT LEAD"
    },
    {
     "chapter": "78",
     "itc_hscode": "7802",
     "description": "LEAD WASTE AND SCRAP"
    },
    {
     "chapter": "78",
     "itc_hscode": "7804",
     "description": "LEAD PLATES, SHEETS, STRIP AND FOIL; LEAD POWDERS AND FLAKES"
    },
    {
     "chapter": "78",
     "itc_hscode": "7806",
     "description": "OTHER ARTICLES OF LEAD"
    },
    {
     "chapter": "79",
     "itc_hscode": "7901",
     "description": "UNWROUGHT ZINC"
    },
    {
     "chapter": "79",
     "itc_hscode": "7902",
     "description": "ZINC WASTE AND SCRAP"
    },
    {
     "chapter": "79",
     "itc_hscode": "7903",
     "description": "ZINC DUST, POWDERS AND FLAKES"
    },
    {
     "chapter": "79",
     "itc_hscode": "7904",
     "description": "ZINC BARS, RODS, PROFILES AND WIRE"
    },
    {
     "chapter": "79",
     "itc_hscode": "7905",
     "description": "ZINC PLATES, SHEETS, STRIP AND FOIL"
    },
    {
     "chapter": "79",
     "itc_hscode": "7907",
     "description": "OTHER ARTICLES OF ZINC"
    },
    {
     "chapter": "80",
     "itc_hscode": "8001",
     "description": "UNWROUGHT TIN"
    },
    {
     "chapter": "80",
     "itc_hscode": "8002",
     "description": "TIN WASTE AND SCRAP"
    },
    {
     "chapter": "80",
     "itc_hscode": "8003",
     "description": "TIN BARS, RODS, PROFILES AND WIRE"
    },
    {
     "chapter": "80",
     "itc_hscode": "8007",
     "description": "OTHER ARTICLES OF TIN"
    },
    {
     "chapter": "81",
     "itc_hscode": "8101",
     "description": "TUNGSTEN (WOLFRAM) AND ARTICLES THEREOF, INCLUDING WASTE AND SCRAP"
    },
    {
     "chapter": "81",
     "itc_hscode": "8102",
     "description": "MOLYBDENUM AND ARTICLES THEREOF, INCLUDING WASTE AND SCRAP"
    },
    {
     "chapter": "81",
     "itc_hscode": "8103",
     "description": "TANTALUM AND ARTICLES THEREOF, INCLUDING WASTE AND SCRAP"
    },
    {
     "chapter": "81",
     "itc_hscode": "8104",
     "description": "MAGNESIUM AND ARTICLES THEREOF, INCLUDING WASTE AND SCRAP"
    },
    {
     "chapter": "81",
     "itc_hscode": "8106",
     "description": "BISMUTH AND ARTICLES THEREOF, INCLUDING WASTE AND SCRAP"
    },
    {
     "chapter": "81",
     "itc_hscode": "8107",
     "description": "CADMIUM AND ARTICLES THEREOF, INCLUDING WASTE AND SCRAP"
    },
    {
     "chapter": "81",
     "itc_hscode": "8108",
     "description": "TITANIUM AND ARTICLES THEREOF, INCLUDING WASTE AND SCRAP"
    },
    {
     "chapter": "81",
     "itc_hscode": "8109",
     "description": "ZIRCONIUM AND ARTICLES THEREOF, INCLUDING WASTE AND SCRAP"
    },
    {
     "chapter": "81",
     "itc_hscode": "8110",
     "description": "ANTIMONY AND ARTICLES THEREOF, INCLUDING WASTE AND SCRAP"
    },
    {
     "chapter": "81",
     "itc_hscode": "8111",
     "description": "MANGANESE AND ARTICLES THEREOF, INCLUDING WASTE AND SCRAP"
    },
    {
     "chapter": "81",
     "itc_hscode": "8113",
     "description": "CERMETS AND ARTICLES THEREOF, INCLUDING WASTE AND SCRAP"
    },
    {
     "chapter": "82",
     "itc_hscode": "8201",
     "description": "KINDKNIVES,HEDGE SHEARS ETC USD IN AGR\/FORSTRY"
    },
    {
     "chapter": "82",
     "itc_hscode": "8202",
     "description": "HND SAWS;BLDES FOR SAWS OF ALL KINDS (INCLD SLITNG SLOTNG OR TOTHLES SAW BLADES"
    },
    {
     "chapter": "82",
     "itc_hscode": "8203",
     "description": "PIPE‐CUTTERS, BOLT CROPPERS"
    },
    {
     "chapter": "82",
     "itc_hscode": "8204",
     "description": "CHANGBLE SPANER SOCKETS WTH HANDLE OR NOT"
    },
    {
     "chapter": "82",
     "itc_hscode": "8205",
     "description": "&PRTS OF MCHN TLS;ANVILS;PRTBLE FORGES ETC"
    },
    {
     "chapter": "82",
     "itc_hscode": "8206",
     "description": "TOOLS OF TWO OR MORE OF THE HEADINGS 8202 TO 8205, PUT UP IN SETS FOR RETAIL SALE"
    },
    {
     "chapter": "82",
     "itc_hscode": "8207",
     "description": "STAMPING ETC.)DIES FR DRILNG\/BORNG TOOLS"
    },
    {
     "chapter": "82",
     "itc_hscode": "8208",
     "description": "KNIVES AND CUTTING BLADES, FOR MACHINES OR FOR MECHANICAL APPLIANCES"
    },
    {
     "chapter": "82",
     "itc_hscode": "8209",
     "description": "PLTES STIKS TIPS & LIKE FOR TLS,UNMOUNTD OF CERMETS"
    },
    {
     "chapter": "82",
     "itc_hscode": "8210",
     "description": "FOOD\/DRINK"
    },
    {
     "chapter": "82",
     "itc_hscode": "8211",
     "description": "NO.8208 & BLADES THEREFOR"
    },
    {
     "chapter": "82",
     "itc_hscode": "8212",
     "description": "RAZORS AND RAZOR BLADES (INCLUDING RAZOR BLADE BLANKS IN STRIPS)"
    },
    {
     "chapter": "82",
     "itc_hscode": "8213",
     "description": "SCISORS TAILR'S SHEARS & SIMLR SHEARS & BLADES THEREFOR"
    },
    {
     "chapter": "82",
     "itc_hscode": "8214",
     "description": "CHOPPERS AND MINCING KNIVES, PAP"
    },
    {
     "chapter": "82",
     "itc_hscode": "8215",
     "description": "AND SIMILAR KITCHEN OR TABLEWARE"
    },
    {
     "chapter": "83",
     "itc_hscode": "8301",
     "description": "MTL;KEYS FOR FRGNG ARTCLS OF BASE METAL"
    },
    {
     "chapter": "83",
     "itc_hscode": "8303",
     "description": "CSH\/DEEDBOXS ETC OF BASE METAL"
    },
    {
     "chapter": "83",
     "itc_hscode": "8304",
     "description": "STAMP STANDS AND SIMILAR OFFICE OR"
    },
    {
     "chapter": "83",
     "itc_hscode": "8305",
     "description": "ARTCLS STPLS IN STRIPS OF BS MTL"
    },
    {
     "chapter": "83",
     "itc_hscode": "8306",
     "description": "PICTR,FRMS,MIRRORS ETC OF BSE METL"
    },
    {
     "chapter": "83",
     "itc_hscode": "8307",
     "description": "FLXBL TUBNG OF BSE METL WTH\/WTHOUT FTNGS"
    },
    {
     "chapter": "83",
     "itc_hscode": "8308",
     "description": "OF BASE METAL, OF A KIND USED FO"
    },
    {
     "chapter": "83",
     "itc_hscode": "8309",
     "description": "COVRS,SEALS & OTHR PCKNG ACCSSRS,OF BS MTL"
    },
    {
     "chapter": "83",
     "itc_hscode": "8310",
     "description": "OF HDG NO.9405"
    },
    {
     "chapter": "83",
     "itc_hscode": "8311",
     "description": "ETC OF MTL\/MTL CRBDS WIRE ETC FR MTL SPRNG"
    },
    {
     "chapter": "84",
     "itc_hscode": "8401",
     "description": "AND APPARATUS FOR ISOTOPIC SEPARATION"
    },
    {
     "chapter": "84",
     "itc_hscode": "8402",
     "description": "LOW PRESSURE STEAM);SUPER‐HEATD WTR BOILRS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8403",
     "description": "CNTRL HTNG BOILRS EXCL OF HDG NO.8402"
    },
    {
     "chapter": "84",
     "itc_hscode": "8404",
     "description": "RCVR);CNDNSR FR STM\/OTHR VPR POWR UNIT"
    },
    {
     "chapter": "84",
     "itc_hscode": "8405",
     "description": "PURIFRS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8406",
     "description": "STEAM TURBINES AND OTHER VAPOUR TURBINES"
    },
    {
     "chapter": "84",
     "itc_hscode": "8407",
     "description": "SPARK‐IGNITION RECIPROCATING OR ROTARY INTERNAL COMBUSTION PISTON ENGINES"
    },
    {
     "chapter": "84",
     "itc_hscode": "8408",
     "description": "ENGINES)"
    },
    {
     "chapter": "84",
     "itc_hscode": "8409",
     "description": "8408"
    },
    {
     "chapter": "84",
     "itc_hscode": "8410",
     "description": "HYDRAULIC TURBINES, WATER WHEELS, ANDREGULATORS THEREFOR"
    },
    {
     "chapter": "84",
     "itc_hscode": "8411",
     "description": "TURBO‐JETS, TURBO‐PROPELLERS AND OTHER GAS TURBINES"
    },
    {
     "chapter": "84",
     "itc_hscode": "8412",
     "description": "OTHER ENGINES AND MOTORS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8413",
     "description": "PUMPS FOR LIQUIDS, WHETHER OR NOT FITTED WITH A"
    },
    {
     "chapter": "84",
     "itc_hscode": "8414",
     "description": "FAN,W\/N FITTED WITH FILTERS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8416",
     "description": "GRTS,MCHNCL ASH DISCHRGS & SMLR APPLNCS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8417",
     "description": "ELECTRIC"
    },
    {
     "chapter": "84",
     "itc_hscode": "8418",
     "description": "CONDTNG MCHNS OF HDG NO.8415"
    },
    {
     "chapter": "84",
     "itc_hscode": "8419",
     "description": "FR DOMSTC PURPS;STORG WTR HEATRS,NON‐ELCTRC"
    },
    {
     "chapter": "84",
     "itc_hscode": "8420",
     "description": "CYLINDERS THEREFOR"
    },
    {
     "chapter": "84",
     "itc_hscode": "8421",
     "description": "APPARATUS, FOR LIQUIDS OR GASES"
    },
    {
     "chapter": "84",
     "itc_hscode": "8422",
     "description": "CONTAINERS; MACHINERY FOR FILLING, CLOSING"
    },
    {
     "chapter": "84",
     "itc_hscode": "8423",
     "description": "INCLUDING WEIGHT OPERATED COUNTING OR CHEC"
    },
    {
     "chapter": "84",
     "itc_hscode": "8424",
     "description": "CHRGD;SPRY GUNS & LIKE;STM\/SND BLSTNG&SMLR MCHNS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8425",
     "description": "PULLEY TACKLE AND HOISTS OTHER THAN SKIP HOISTS;"
    },
    {
     "chapter": "84",
     "itc_hscode": "8427",
     "description": "FORK‐LIFT TRUCKS; OTHER WORKS TRUCKS FITTED WITH LIFTING OR HANDLING EQUIPMENT"
    },
    {
     "chapter": "84",
     "itc_hscode": "8428",
     "description": "ESCALATORS, CONVEYORS, TELEFERICS)"
    },
    {
     "chapter": "84",
     "itc_hscode": "8429",
     "description": "LOADERS,TAMPING MACHINES & ROAD ROLLERS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8430",
     "description": "MCHNRY,FR EARTH,MNRLS\/ORES;PILE‐DRVR;SNOW‐PLOUGH ETC"
    },
    {
     "chapter": "84",
     "itc_hscode": "8431",
     "description": "PRTS SUITBL FR USE SOLELY\/PRNCPLY WTH THE MCHNRY OF HDGS.NOS.8425 TO 8430"
    },
    {
     "chapter": "84",
     "itc_hscode": "8432",
     "description": "AGRCLTRL,HRTCLTRL\/FRSTRY MCHNRY FR SOIL PRPRTION\/CLTVTN;LAWN\/SPRTS‐GRND RLLRS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8433",
     "description": "EGGS,FRUIT\/OTHR SMLR PRDC EXCL MCHNRY OF 8437"
    },
    {
     "chapter": "84",
     "itc_hscode": "8434",
     "description": "MILKING MACHINES AND DAIRY MACHINERY"
    },
    {
     "chapter": "84",
     "itc_hscode": "8435",
     "description": "PRSSES,CRSHRS & SMLR,MCHNRY USD IN MNFCTR OF WINE,CIDER,FRUIT JUICES\/SMLR BVRGS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8436",
     "description": "THRML EQPMNT;POLTRY INCUBTRS & BROODRS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8437",
     "description": "DRIED LGMNS VEGTBLS,EXCL FARM‐TYPE MCHNRY"
    },
    {
     "chapter": "84",
     "itc_hscode": "8438",
     "description": "OFANML\/FXD VGTBL FATS\/OILS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8440",
     "description": "BOOK‐BINDING MACHINERY, INCLUDING BOOK‐ SEWING MACHINES"
    },
    {
     "chapter": "84",
     "itc_hscode": "8441",
     "description": "MACHINES OF ALL KINDS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8442",
     "description": "PRPRNG PRNTNG BLKS,PLTS ETC;BLKS FR PRNTNG"
    },
    {
     "chapter": "84",
     "itc_hscode": "8443",
     "description": "ANCILARY TO PRINTNG."
    },
    {
     "chapter": "84",
     "itc_hscode": "8444",
     "description": "MCHNS FR EXTRUDING,DRAWING,TEXTURING OR CUTTING MAN‐MADE TEXTILE MATERIALS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8445",
     "description": "PRPRNGTXTL YRNS FR USE ON MCHNS OF 8446\/8447"
    },
    {
     "chapter": "84",
     "itc_hscode": "8446",
     "description": "WEAVING MACHINES (LOOMS)"
    },
    {
     "chapter": "84",
     "itc_hscode": "8447",
     "description": "YRN,TULLE,LACE,EMBRDRY,TRMMNG, BRAID\/NET & MCHNS FR TFTNG"
    },
    {
     "chapter": "84",
     "itc_hscode": "8448",
     "description": "THIS HDG\/OF HDG 8444,8445,8446\/8447"
    },
    {
     "chapter": "84",
     "itc_hscode": "8449",
     "description": "FRMKNG FELT HATS,BLOCKS FR MKNG HATS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8450",
     "description": "WASH AND DRY"
    },
    {
     "chapter": "84",
     "itc_hscode": "8451",
     "description": "ETC;MCHNS FR RLNG,UNRLNG,FLDNG\/CTTNG TXTL FBRC"
    },
    {
     "chapter": "84",
     "itc_hscode": "8452",
     "description": "FOR SEWNG MCHNS;SEWNG MCHNS NEDLS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8453",
     "description": "ARTCLS OF HIDES,SKINS ETC EXCL SEWNG MCHNS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8454",
     "description": "CNVRTRS,LADLS,INGOT MOULDS & CASTNG MCHNS USD IN METALLURGY\/IN METAL FOUNDRIES"
    },
    {
     "chapter": "84",
     "itc_hscode": "8455",
     "description": "METAL‐ROLLING MILLS AND ROLLS THEREFOR"
    },
    {
     "chapter": "84",
     "itc_hscode": "8456",
     "description": "ULTRSONC ELCTRO‐DSCHRG,ELCTRO‐CHMCL,ETC"
    },
    {
     "chapter": "84",
     "itc_hscode": "8457",
     "description": "TRANSFER MACHINES FOR WORKING META"
    },
    {
     "chapter": "84",
     "itc_hscode": "8458",
     "description": "LATHES (INCLUDING TURNING CENTRES) FOR REMOVING METAL"
    },
    {
     "chapter": "84",
     "itc_hscode": "8459",
     "description": "REMOVNG MTL, EXCL LATHS OF HDG NO. 8458"
    },
    {
     "chapter": "84",
     "itc_hscode": "8460",
     "description": "GRNDNG STONS,GEAR GRNDNG MCHNS OF HDG NO.8"
    },
    {
     "chapter": "84",
     "itc_hscode": "8461",
     "description": "BY REMOVNG MTL, CERMETS N.E.S.\/INCLUDED"
    },
    {
     "chapter": "84",
     "itc_hscode": "8462",
     "description": "BENDNG,FOLDNG, ETC;PRSSES FR WRKNG MTL\/MTL CRBDS, NES"
    },
    {
     "chapter": "84",
     "itc_hscode": "8463",
     "description": "OTHER MACHINE‐TOOLS FOR WORKING METAL, OR CERMETS, WITHOUT REMOVING MATERIAL"
    },
    {
     "chapter": "84",
     "itc_hscode": "8464",
     "description": "OR FR COLD WRKNG GLASS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8465",
     "description": "CORK,BONE,HARD RUBBER,HARD PLASTICS ETC"
    },
    {
     "chapter": "84",
     "itc_hscode": "8466",
     "description": "HOLDRS,SLF‐OPENG DIEHEADS,ETC;TOOL HOLDRS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8468",
     "description": "GAS‐OPERTD SURFACE TAMPRN MCHNS & APPLNCS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8469",
     "description": "TYPEWRITERS OTHER THAN PRINTERS OF HEADING 8443; WORD‐PROCESSING MACHINES"
    },
    {
     "chapter": "84",
     "itc_hscode": "8470",
     "description": "CALCULTNGFUNCTNS; POSTG FRANKNG ETC; CASH‐"
    },
    {
     "chapter": "84",
     "itc_hscode": "8471",
     "description": "AUTOMATIC DATA PROCESSING MACHINES AND UNITS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8472",
     "description": "MACHINES, ADDRESSING MACHINES, AUTOMATIC B"
    },
    {
     "chapter": "84",
     "itc_hscode": "8474",
     "description": "MCHNS FR SHPNG MNRL FUEL&FRMNG MLDS OF"
    },
    {
     "chapter": "84",
     "itc_hscode": "8475",
     "description": "ENVELOPS,MCHNS FR MNFCTRNG\/HT WRKNG GLASS\/GLASSWAR"
    },
    {
     "chapter": "84",
     "itc_hscode": "8476",
     "description": "INCL MONEY CHNGNG MCHNS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8477",
     "description": "MCHNR FR WRKNG RUBBR\/PLSTCS\/FR THE MNFCTR OF PRDCTS FROM THESE MTRLS,N.E.S."
    },
    {
     "chapter": "84",
     "itc_hscode": "8478",
     "description": "MCHNRY PRPRNG\/MKNG UP TOBACCO,N.E.S."
    },
    {
     "chapter": "84",
     "itc_hscode": "8479",
     "description": "MCHNS & MCHNCL APPLNCS HVNG INDVDL FUNCTNS,N.E.S."
    },
    {
     "chapter": "84",
     "itc_hscode": "8480",
     "description": "METAL (OTHER THAN INGOT MOULDS), METAL CARBIDES"
    },
    {
     "chapter": "84",
     "itc_hscode": "8481",
     "description": "INCLUDING PRESSURE‐REDUCING VALV"
    },
    {
     "chapter": "84",
     "itc_hscode": "8482",
     "description": "BALL OR ROLLER BEARINGS"
    },
    {
     "chapter": "84",
     "itc_hscode": "8483",
     "description": "SPD CHNGRS INCL TORQUE CNVRTRSFFLYWHEELS;"
    },
    {
     "chapter": "84",
     "itc_hscode": "8484",
     "description": "SMLR JOINTS,PUT UP IN POUCHES,ENVLPS ETC"
    },
    {
     "chapter": "84",
     "itc_hscode": "8486",
     "description": "SEMICONDUCTOR BOULES OR WAFERS, DEVICES, E"
    },
    {
     "chapter": "84",
     "itc_hscode": "8487",
     "description": "OTHER ELECTRICAL FEATURES, NOT SPECIFIED"
    },
    {
     "chapter": "85",
     "itc_hscode": "8501",
     "description": "ELCTRC MOTRS & GENRTRS(EXCL GENRTNG SETS)"
    },
    {
     "chapter": "85",
     "itc_hscode": "8502",
     "description": "ELECTRIC GENERATING SETS AND ROTARY CONVERTERS"
    },
    {
     "chapter": "85",
     "itc_hscode": "8503",
     "description": "8502"
    },
    {
     "chapter": "85",
     "itc_hscode": "8504",
     "description": "ELECTRICAL TRANSFORMERS, STATIC CONVERTERS (FOR EXAMPLE, RECTIFIERS) AND INDUCTORS"
    },
    {
     "chapter": "85",
     "itc_hscode": "8505",
     "description": "DEVICS ELCTRO MGNTC CLTCHS,BRKS & LFTNG H"
    },
    {
     "chapter": "85",
     "itc_hscode": "8506",
     "description": "PRIMARY CELLS AND PRIMARY BATTERIES"
    },
    {
     "chapter": "85",
     "itc_hscode": "8507",
     "description": "ELCTRC ACCUMLTRS,INCL SEPARATORS THEREFOR W\/N RECTANGULAR(INCL SQ)"
    },
    {
     "chapter": "85",
     "itc_hscode": "8508",
     "description": "VACUUM CLEANERS"
    },
    {
     "chapter": "85",
     "itc_hscode": "8509",
     "description": "ELCTRO‐MECHNCL DOMESTIC APPLIANCES WTH SELF‐CONTAINED ELCTRC MOTOR"
    },
    {
     "chapter": "85",
     "itc_hscode": "8510",
     "description": "MOTOR"
    },
    {
     "chapter": "85",
     "itc_hscode": "8511",
     "description": "IN CONJUNCTION WTH SUCH ENGINES"
    },
    {
     "chapter": "85",
     "itc_hscode": "8512",
     "description": "CYCLES\/MOTOR VEHICLES"
    },
    {
     "chapter": "85",
     "itc_hscode": "8513",
     "description": "LIGHTING EQPMNTS OF HDG NO.8512"
    },
    {
     "chapter": "85",
     "itc_hscode": "8514",
     "description": "LABORATORY INDUCTN\/DIELCTRC HTNG EQPMNTS"
    },
    {
     "chapter": "85",
     "itc_hscode": "8515",
     "description": "ETC FR HOT SPRYNG OF MTLS\/CERMETS"
    },
    {
     "chapter": "85",
     "itc_hscode": "8516",
     "description": "APRTS&HND DRYRS;SMLR ELCTRC APLNCS FR DMSTC USE"
    },
    {
     "chapter": "85",
     "itc_hscode": "8517",
     "description": "CURENT LINE SYSTM; VIDEOPHONE"
    },
    {
     "chapter": "85",
     "itc_hscode": "8518",
     "description": "MCROPHONE\/SPKRSETS;AUDIO FRQNCY AMPLFYR;SND AMPLFYR SETS"
    },
    {
     "chapter": "85",
     "itc_hscode": "8519",
     "description": "SOUND RECORDING DEVICE"
    },
    {
     "chapter": "85",
     "itc_hscode": "8521",
     "description": "TUNER"
    },
    {
     "chapter": "85",
     "itc_hscode": "8522",
     "description": "PRTS & ACSSRS OF APPRTS OF HDGS NOS. 8519 TO 8521"
    },
    {
     "chapter": "85",
     "itc_hscode": "8523",
     "description": "PHENOMENA,OTHR THN PRDCTS OF CH.37"
    },
    {
     "chapter": "85",
     "itc_hscode": "8525",
     "description": "RECORDING\/REPRDCNG APPRTS;TV CAMERAS ETC"
    },
    {
     "chapter": "85",
     "itc_hscode": "8526",
     "description": "APPARATUS"
    },
    {
     "chapter": "85",
     "itc_hscode": "8527",
     "description": "HOUSING, WITH SOUND RECORDING OR REPRODUCI"
    },
    {
     "chapter": "85",
     "itc_hscode": "8529",
     "description": "PRTS SUITBL FR USE SOLELY\/PRNCPLLY WTH APPRTS OF HDGS NOS 8525 TO 8528"
    },
    {
     "chapter": "85",
     "itc_hscode": "8530",
     "description": "ETC(OTHR THAN THOSE OF HDG NOS.8508)"
    },
    {
     "chapter": "85",
     "itc_hscode": "8531",
     "description": "NO.8512\/8530"
    },
    {
     "chapter": "85",
     "itc_hscode": "8532",
     "description": "ELCTRCL CAPACITORS FIXD,VARIABLE\/ ADJUSTABLE(PRE‐SET)"
    },
    {
     "chapter": "85",
     "itc_hscode": "8533",
     "description": "ELCTRCL RESISTORS(INCL RHEOSTATS & POTENTIOMETERS)OTHR THN HTNG RESISTORS"
    },
    {
     "chapter": "85",
     "itc_hscode": "8534",
     "description": "PRINTED CIRCUITS"
    },
    {
     "chapter": "85",
     "itc_hscode": "8535",
     "description": "ARRESTERS ETC)FR A VLTG EXCDG 1000 VOLTS"
    },
    {
     "chapter": "85",
     "itc_hscode": "8536",
     "description": "VOLTAGE NOT EXCDG 1000 VOLTS"
    },
    {
     "chapter": "85",
     "itc_hscode": "8537",
     "description": "INCORPRTNG INSTRMNTS\/APPRTS OF CH 90"
    },
    {
     "chapter": "85",
     "itc_hscode": "8538",
     "description": "PRTS SUITBL FR USE SOLELY\/PRINCIPALLY WTH THE APPRTS OF HDG NO.8535,8536\/8537"
    },
    {
     "chapter": "85",
     "itc_hscode": "8539",
     "description": "VIOLET OR INFRA‐RED LAMPS; ARC‐LAMPS"
    },
    {
     "chapter": "85",
     "itc_hscode": "8541",
     "description": "SEMICONDUCTOR DEVICES, INCLUDING PHOTOVOLT"
    },
    {
     "chapter": "85",
     "itc_hscode": "8542",
     "description": "ELCTRNC INTEGRTD CIRCUITS & MICRO‐ASSMBLS"
    },
    {
     "chapter": "85",
     "itc_hscode": "8543",
     "description": "ELCTRCL MCHNS & APPRTS,HVNG INDIVIDUAL FNCTNS N.E.S.IN THIS CHAPTER"
    },
    {
     "chapter": "85",
     "itc_hscode": "8544",
     "description": "AND OTHER INSULATED ELECTRIC CONDUC"
    },
    {
     "chapter": "85",
     "itc_hscode": "8545",
     "description": "WTHOUT MTL OF A KND USED FOR ELCTRCL PURPS"
    },
    {
     "chapter": "85",
     "itc_hscode": "8546",
     "description": "ELECTRICAL INSULATORS OF ANY MATERIAL"
    },
    {
     "chapter": "85",
     "itc_hscode": "8547",
     "description": "MTL LINED WTH INSLTNG MATRL"
    },
    {
     "chapter": "85",
     "itc_hscode": "8548",
     "description": "BATRSELCTRC ACUMULTRS,ELCTRCL PRTS OF MACH"
    },
    {
     "chapter": "86",
     "itc_hscode": "8601",
     "description": "ACCUMULATORS"
    },
    {
     "chapter": "86",
     "itc_hscode": "8602",
     "description": "OTHER RAIL LOCOMOTIVES; LOCOMOTIVE TENDERS"
    },
    {
     "chapter": "86",
     "itc_hscode": "8603",
     "description": "HEADING 8604"
    },
    {
     "chapter": "86",
     "itc_hscode": "8604",
     "description": "TRCKLNRS,TSTNG COCHS & TRCK INSPCTN VHCLS)"
    },
    {
     "chapter": "86",
     "itc_hscode": "8605",
     "description": "RLWAY\/TRMWAYCOACHS,NT SLF‐PRPLD(EXCL ITMS OF 8604)"
    },
    {
     "chapter": "86",
     "itc_hscode": "8606",
     "description": "RALWY\/TRMWY GOODS VAN & WAGN,NT SELF‐PRPLD"
    },
    {
     "chapter": "86",
     "itc_hscode": "8607",
     "description": "PRTS OF RLWAY\/TRMWAY LCMTVS\/ROLLNG‐STOCK"
    },
    {
     "chapter": "86",
     "itc_hscode": "8608",
     "description": "FR ROADS,INLND WTRWAYS ETC,PRTS OF THE ABOVE"
    },
    {
     "chapter": "86",
     "itc_hscode": "8609",
     "description": "EQUIPPED FOR CARRIAGE BY ONE OR MORE M"
    },
    {
     "chapter": "87",
     "itc_hscode": "8701",
     "description": "TRACTORS (OTHER THAN TRACTORS OF HEADING 8709)"
    },
    {
     "chapter": "87",
     "itc_hscode": "8702",
     "description": "PUBLIC‐TRNSPRT TYPE PASSENGER MOTOR VHCLS"
    },
    {
     "chapter": "87",
     "itc_hscode": "8703",
     "description": "MOTR CARS & OTHR MOTR VHCLS FR TRNSPRT OF PERSONS(EXCL OF 8702)INCL RCNG CARS ETC"
    },
    {
     "chapter": "87",
     "itc_hscode": "8704",
     "description": "MOTOR VEHICLES FOR THE TRANSPORT OF GOODS"
    },
    {
     "chapter": "87",
     "itc_hscode": "8705",
     "description": "CONCRETE MIXR LORRIES,ROAD SWEEPR ETC)"
    },
    {
     "chapter": "87",
     "itc_hscode": "8706",
     "description": "CHASSIS FITTED WITH ENGINES, FOR THE MOTOR VEHICLES OF HEADINGS 8701 TO 8705"
    },
    {
     "chapter": "87",
     "itc_hscode": "8707",
     "description": "BODIES (INCLUDING CABS), FOR THE MOTOR VEHICLES OF HEADINGS 8701 TO 8705"
    },
    {
     "chapter": "87",
     "itc_hscode": "8708",
     "description": "PARTS AND ACCESSORIES OF THE MOTOR VEHICLES OF HEADINGS 8701 TO 8705"
    },
    {
     "chapter": "87",
     "itc_hscode": "8709",
     "description": "USD ON RLWAY PLTFORMS;PRTS OF THE ABOVE"
    },
    {
     "chapter": "87",
     "itc_hscode": "8710",
     "description": "WITH WEAPONS, AND PARTS OF SUCH VEHICLES"
    },
    {
     "chapter": "87",
     "itc_hscode": "8711",
     "description": "WITHOUT SIDE‐CARS;"
    },
    {
     "chapter": "87",
     "itc_hscode": "8712",
     "description": "BICYCLES AND OTHER CYCLES (INCLUDING DELIVERY TRICYCLES), NOT MOTORISED"
    },
    {
     "chapter": "87",
     "itc_hscode": "8713",
     "description": "INVALID CARRIAGES,W\/N MOTIRISED\/OTHERWISE MECHANICALLY PROPELLED"
    },
    {
     "chapter": "87",
     "itc_hscode": "8714",
     "description": "PRTS & ACCSSRS OF VHCLS OF HDG 8711‐8713"
    },
    {
     "chapter": "87",
     "itc_hscode": "8715",
     "description": "BABY CARRIAGES AND PARTS THEREOF"
    },
    {
     "chapter": "87",
     "itc_hscode": "8716",
     "description": "THEREOF"
    },
    {
     "chapter": "88",
     "itc_hscode": "8801",
     "description": "BALLOONS AND DIRIGIBLES, GLIDERS, HAND GLIDERS AND OTHER NON‐POWERED AIRCRAFT"
    },
    {
     "chapter": "88",
     "itc_hscode": "8802",
     "description": "SATELLITES) AND SUBORBITAL AND SPACECRAFT"
    },
    {
     "chapter": "88",
     "itc_hscode": "8803",
     "description": "PRTS OF GOODS OF HDG NO.8801 OR 8802"
    },
    {
     "chapter": "88",
     "itc_hscode": "8804",
     "description": "THEREOF AND ACCESSORIES THERETO"
    },
    {
     "chapter": "88",
     "itc_hscode": "8805",
     "description": "PARTS OF THE FOREGOING ARTICLES"
    },
    {
     "chapter": "89",
     "itc_hscode": "8901",
     "description": "FOR THE TRANSPORT OF PERSONS OR GO"
    },
    {
     "chapter": "89",
     "itc_hscode": "8902",
     "description": "FISHNG VSSLS;FACTORY SHIPS & OTHR VSSLS FRPROCESSING OR PRESERVING FISHERY PRDCTS"
    },
    {
     "chapter": "89",
     "itc_hscode": "8903",
     "description": "YACHTS AND OTHER VESSELS FOR PLEASURE OR SPORTS; ROWING BOATS AND CANOES"
    },
    {
     "chapter": "89",
     "itc_hscode": "8904",
     "description": "TUGS AND PUSHER CRAFT"
    },
    {
     "chapter": "89",
     "itc_hscode": "8905",
     "description": "THR MN FNCTN;FLTNG DOCKS;FLTNG PLATFORM"
    },
    {
     "chapter": "89",
     "itc_hscode": "8906",
     "description": "OTHER VESSELS, INCLUDING WARSHIPS AND LIFEBOATS OTHER THAN ROWING BOATS"
    },
    {
     "chapter": "89",
     "itc_hscode": "8907",
     "description": "BUOYS AND BEACONS)"
    },
    {
     "chapter": "89",
     "itc_hscode": "8908",
     "description": "VSSLS & OTHR FLOATNG STRCTRS FR BREAKNG UP"
    },
    {
     "chapter": "90",
     "itc_hscode": "9001",
     "description": "OTHR OPTCL ELMNTS OF ANY MTRL,UNMNTD"
    },
    {
     "chapter": "90",
     "itc_hscode": "9002",
     "description": "OTHR THN SUCH ELMNTS OF GLS,NT OPTCLY WRKD"
    },
    {
     "chapter": "90",
     "itc_hscode": "9003",
     "description": "FRAMES AND MOUNTINGS FOR SPECTACLES, GOGGLES OR THE LIKE, AND PARTS THEREOF"
    },
    {
     "chapter": "90",
     "itc_hscode": "9004",
     "description": "SPECTACLES, GOGGLES AND THE LIKE, CORRECTIVE, PROTECTIVE OR OTHER"
    },
    {
     "chapter": "90",
     "itc_hscode": "9005",
     "description": "MOUNTNGS THRFR EXCPT THE INSTRMNT FOR RAD"
    },
    {
     "chapter": "90",
     "itc_hscode": "9006",
     "description": "FLSHBLBSEXCPT DSCHRG LMPS OF HDG NO.8539"
    },
    {
     "chapter": "90",
     "itc_hscode": "9007",
     "description": "RECORDING OR REPRODUCING APPARATUS"
    },
    {
     "chapter": "90",
     "itc_hscode": "9008",
     "description": "CINEMATOGRAPHIC) ENLARGERS"
    },
    {
     "chapter": "90",
     "itc_hscode": "9010",
     "description": "CHAPTER;NEGATOSCOPES PROJECTION SCREENS"
    },
    {
     "chapter": "90",
     "itc_hscode": "9011",
     "description": "MCROPHOTOGRPHY,MCROCENMTGRPHY\/MICROPRJCTN"
    },
    {
     "chapter": "90",
     "itc_hscode": "9012",
     "description": "MICROSCOPES OTHER THAN OPTICAL MICROSCOPES; DIFFRACTION APPARATUS"
    },
    {
     "chapter": "90",
     "itc_hscode": "9013",
     "description": "DIODS;OTHR OPTCL APLNCS & INSTRMNTS N"
    },
    {
     "chapter": "90",
     "itc_hscode": "9014",
     "description": "DIRECTION FINDING COMPASSES; OTHER NAVIGATIONAL INSTRUMENTS AND APPLIANCES"
    },
    {
     "chapter": "90",
     "itc_hscode": "9016",
     "description": "BLNCS OF A SNSTIVTY OF 5 CG\/BTR,W\/N WTH WT"
    },
    {
     "chapter": "90",
     "itc_hscode": "9017",
     "description": "HND(E.G.MICROMTRS,CALLIPRS)N.E.S.IN THIS C"
    },
    {
     "chapter": "90",
     "itc_hscode": "9018",
     "description": "ELCTRO‐MDCL APPRTS & SIGHT‐TSTNG INSTRMNT"
    },
    {
     "chapter": "90",
     "itc_hscode": "9019",
     "description": "THRPY,AERSL THRPY,ARTFCL RSPRTN APPRTS ETC"
    },
    {
     "chapter": "90",
     "itc_hscode": "9020",
     "description": "MECHANICAL PARTS NOR REPLACEABLE FILTERS"
    },
    {
     "chapter": "90",
     "itc_hscode": "9021",
     "description": "IMPLNTD IN THE BODY TO CMPNST DFCT\/DSABLTY"
    },
    {
     "chapter": "90",
     "itc_hscode": "9022",
     "description": "TUBE&GNRTRS,HGH TNSN GNRTRS,SCRNS ETC"
    },
    {
     "chapter": "90",
     "itc_hscode": "9024",
     "description": "MCHNES & APLNCS FR TSTNG THE HRDNSS, STRNGTH,ELSTCTY,COMPRSSBLTY ETC OF MATRLS"
    },
    {
     "chapter": "90",
     "itc_hscode": "9025",
     "description": "& ANY CMBNTN OF THESE INSTRMNTS"
    },
    {
     "chapter": "90",
     "itc_hscode": "9026",
     "description": "EXCL APPRTS OF HDG 9014,9015,9028\/9032"
    },
    {
     "chapter": "90",
     "itc_hscode": "9027",
     "description": "POLARIMETERS, REFRACTOMETERS, SPECTROMETER"
    },
    {
     "chapter": "90",
     "itc_hscode": "9028",
     "description": "GAS,LQD\/ELECTRICITY SUPPLY\/PRODUCTION METERS,INCL CALIBRATING METERS THEREFOR"
    },
    {
     "chapter": "90",
     "itc_hscode": "9029",
     "description": "THE LIKE; SPEED INDICATORS AND TACHOMETERS"
    },
    {
     "chapter": "90",
     "itc_hscode": "9030",
     "description": "MSRNG\/DTCTNG ALPHA,BTA,GMA,X‐RAY ETC"
    },
    {
     "chapter": "90",
     "itc_hscode": "9031",
     "description": "INCLUDED ELSEWHERE IN THIS"
    },
    {
     "chapter": "90",
     "itc_hscode": "9032",
     "description": "AUTMTC REGLTNG\/CONTRLNG INSTRMNTS & APRTS"
    },
    {
     "chapter": "91",
     "itc_hscode": "9101",
     "description": "OF PRECIOUS METAL OR OF METAL CLAD"
    },
    {
     "chapter": "91",
     "itc_hscode": "9102",
     "description": "THAN THOSE OF HEADING 9101 WRIST‐WATCHES,"
    },
    {
     "chapter": "91",
     "itc_hscode": "9103",
     "description": "CLOCKS WITH WATCH MOVEMENTS, EXCLUDING CLOCKS OF HEADING 9104"
    },
    {
     "chapter": "91",
     "itc_hscode": "9104",
     "description": "SPACECRAFT OR VESSELS"
    },
    {
     "chapter": "91",
     "itc_hscode": "9105",
     "description": "OTHER CLOCKS"
    },
    {
     "chapter": "91",
     "itc_hscode": "9106",
     "description": "TIME,WITH CLOCK\/WATCH MVMNT\/WITH SYNCHRNS MOTOR"
    },
    {
     "chapter": "91",
     "itc_hscode": "9107",
     "description": "TIME SWITCHES WITH CLOCK OR WATCH MOVEMENT OR WITH SYNCHRONOUS MOTOR"
    },
    {
     "chapter": "91",
     "itc_hscode": "9108",
     "description": "WATCH MOVEMENTS, COMPLETE AND ASSEMBLED"
    },
    {
     "chapter": "91",
     "itc_hscode": "9109",
     "description": "CLOCK MOVEMENTS, COMPLETE AND ASSEMBLED"
    },
    {
     "chapter": "91",
     "itc_hscode": "9110",
     "description": "WTCH\/CLOCK MVMNTS,ASSMBLD;ROUGH WTCH\/CLOCK MVMNTS"
    },
    {
     "chapter": "91",
     "itc_hscode": "9111",
     "description": "WATCH CASES AND PARTS THEREOF"
    },
    {
     "chapter": "91",
     "itc_hscode": "9112",
     "description": "THEREOF"
    },
    {
     "chapter": "91",
     "itc_hscode": "9113",
     "description": "WATCH STRAPS, WATCH BANDS AND WATCH BRACELETS, AND PARTS THEREOF"
    },
    {
     "chapter": "91",
     "itc_hscode": "9114",
     "description": "OTHER CLOCK OR WATCH PARTS"
    },
    {
     "chapter": "92",
     "itc_hscode": "9201",
     "description": "INSTRUMENTS"
    },
    {
     "chapter": "92",
     "itc_hscode": "9202",
     "description": "OTHER STRING MUSICAL INSTRUMENTS (FOR EXAMPLE, GUITARS, VIOLINS, HARPS)"
    },
    {
     "chapter": "92",
     "itc_hscode": "9205",
     "description": "OTHER WIND MUSICAL INSTRUMENTS (FOR EXAMPLE, CLARINETS, TRUMPETS, BAGPIPES)"
    },
    {
     "chapter": "92",
     "itc_hscode": "9207",
     "description": "ELECTRICALLY (FOR EXAMPLE, ORGANS, GUITARS"
    },
    {
     "chapter": "92",
     "itc_hscode": "9208",
     "description": "SINGING BIRDS, MUSICAL SAWS AND OTHER MUSI"
    },
    {
     "chapter": "92",
     "itc_hscode": "9209",
     "description": "INSTRMNTS;MTRONOMS,ETC OF ALL KNDS"
    },
    {
     "chapter": "93",
     "itc_hscode": "9301",
     "description": "MILITARY WEAPONS, OTHER THAN REVOLVERS, PISTOLS AND THE ARMS OF HEADING"
    },
    {
     "chapter": "93",
     "itc_hscode": "9302",
     "description": "REVOLVERS AND PISTOLS, OTHER THAN THOSE OF HEADING 9303 OR 9304"
    },
    {
     "chapter": "93",
     "itc_hscode": "9303",
     "description": "CHARGE (FOR EXAMPLE, SPORTING SHOTGUNS AND"
    },
    {
     "chapter": "93",
     "itc_hscode": "9304",
     "description": "EXCLUDING THOSE OF HEADING 9307"
    },
    {
     "chapter": "93",
     "itc_hscode": "9305",
     "description": "PRTS& ACCSSRS OF ARTCL OF HDG 9301‐9304"
    },
    {
     "chapter": "93",
     "itc_hscode": "9306",
     "description": "PRJCTLS & PRTS,INCL SHOT & CRTRDG WADS"
    },
    {
     "chapter": "94",
     "itc_hscode": "9401",
     "description": "PARTS THEREOF"
    },
    {
     "chapter": "94",
     "itc_hscode": "9402",
     "description": "FOREGOING ARTICLES"
    },
    {
     "chapter": "94",
     "itc_hscode": "9403",
     "description": "OTHER FURNITURE AND PARTS THEREOF"
    },
    {
     "chapter": "94",
     "itc_hscode": "9404",
     "description": "MATTRESSES, QUILTS, EIDERDOWNS, CUSHIONS,"
    },
    {
     "chapter": "94",
     "itc_hscode": "9405",
     "description": "LIKE WTH PRMNANT LGHT SORCE &PRTSNES"
    },
    {
     "chapter": "94",
     "itc_hscode": "9406",
     "description": "PREFABRICATED BUILDINGS"
    },
    {
     "chapter": "95",
     "itc_hscode": "9504",
     "description": "GAMES & AUTOMATIC BOWLING ALLEY EQU"
    },
    {
     "chapter": "95",
     "itc_hscode": "9505",
     "description": "NOVELTY JOKES"
    },
    {
     "chapter": "95",
     "itc_hscode": "9506",
     "description": "N.E.S.;SWIMMING POOLS & PADDLING POOLS"
    },
    {
     "chapter": "95",
     "itc_hscode": "9507",
     "description": "OF 9208\/9705)& SMLR HUNTNG RQUSTS"
    },
    {
     "chapter": "95",
     "itc_hscode": "9508",
     "description": "TRAVELLING CIRCUSES, TRAVELLING MENAGERIES"
    },
    {
     "chapter": "96",
     "itc_hscode": "9601",
     "description": "MTRL & ARTICLS OF THESE MATRLS(INCLD BY MLDNG)"
    },
    {
     "chapter": "96",
     "itc_hscode": "9602",
     "description": "NTRL GUMSETC;N.E.S;WRKD UNHRDND GLTN"
    },
    {
     "chapter": "96",
     "itc_hscode": "9603",
     "description": "VEHICLES), HAND‐OPERATED MECHANICAL FL"
    },
    {
     "chapter": "96",
     "itc_hscode": "9604",
     "description": "HAND SIEVES AND HAND RIDDLES"
    },
    {
     "chapter": "96",
     "itc_hscode": "9605",
     "description": "TRAVEL SETS FOR PERSONAL TOILET, SEWING OR SHOE OR CLOTHES CLEANING"
    },
    {
     "chapter": "96",
     "itc_hscode": "9606",
     "description": "BUTN,PRS‐FSTNR,SNP‐FSTNR & PRSS‐STUD ETC"
    },
    {
     "chapter": "96",
     "itc_hscode": "9607",
     "description": "SLIDE FASTENERS AND PARTS THEREOF"
    },
    {
     "chapter": "96",
     "itc_hscode": "9608",
     "description": "STYLOGRAPH PENS AND OTHER PENS"
    },
    {
     "chapter": "96",
     "itc_hscode": "9609",
     "description": "CHARCOALS, WRITING OR DRAWING CHAL"
    },
    {
     "chapter": "96",
     "itc_hscode": "9610",
     "description": "SLATES AND BOARDS, WITH WRITING OR DRAWING SURFACES, WHETHER OR NOT FRAMED"
    },
    {
     "chapter": "96",
     "itc_hscode": "9611",
     "description": "HND;HND‐OPRTD CMPSNG STCKS & HND‐PRNTG SET"
    },
    {
     "chapter": "96",
     "itc_hscode": "9612",
     "description": "WHETHER OR NOT ON SPOOLS OR IN CARTRIDGES"
    },
    {
     "chapter": "96",
     "itc_hscode": "9613",
     "description": "PARTS THEREOF OTHER THAN FLINTS AND WI"
    },
    {
     "chapter": "96",
     "itc_hscode": "9614",
     "description": "SMOKNG PIPES(INCL PIPE BOWLS)& CIGAR\/ CIGARETTE HLDRS,& PRTS THEREOF"
    },
    {
     "chapter": "96",
     "itc_hscode": "9615",
     "description": "LIKE,EXCL HDG NO.8516,& PRTS THROF"
    },
    {
     "chapter": "96",
     "itc_hscode": "9616",
     "description": "APPLCTN OF COSMATICS\/TOILT PREPARATNS"
    },
    {
     "chapter": "96",
     "itc_hscode": "9617",
     "description": "THAN GLASS INNERS"
    },
    {
     "chapter": "97",
     "itc_hscode": "9701",
     "description": "ARTCLS;COLLAGES & SMLR DECORATIVE PLAQUES"
    },
    {
     "chapter": "97",
     "itc_hscode": "9702",
     "description": "ORIGNL ENGRVNGS,PRNTS & LITHOGRPHS"
    },
    {
     "chapter": "97",
     "itc_hscode": "9703",
     "description": "ORIGNL SCLPTRS & STATUARY,IN ANY MATRL"
    },
    {
     "chapter": "97",
     "itc_hscode": "9704",
     "description": "(STAMPED PAPER), AND THE LIKE, USED OR UN"
    },
    {
     "chapter": "97",
     "itc_hscode": "9706",
     "description": "ANTIQUES OF AN AGE EXCEEDING ONE HUNDRED YEARS"
    },
    {
     "chapter": "98",
     "itc_hscode": "9801",
     "description": "PROJECT GOODS"
    },
    {
     "chapter": "98",
     "itc_hscode": "9802",
     "description": "LABORATORY CHEMICALS"
    },
    {
     "chapter": "98",
     "itc_hscode": "9803",
     "description": "DUTIABLE PASSENGER'S\/CREW'S BAGGAGE"
    },
    {
     "chapter": "98",
     "itc_hscode": "9804",
     "description": "DUTIABLE IMPORT BY POST OR AIR FOR PERSONA"
    },
    {
     "chapter": "98",
     "itc_hscode": "9805",
     "description": "DUTIABLE SHIP'S\/AIRCRAFT'S STORE"
    },
    {
     "chapter": "01",
     "itc_hscode": "010110",
     "description": "LIVE HORSES,ASSES,MULES & HINNIES PURE BRED BREEDING"
    },
    {
     "chapter": "01",
     "itc_hscode": "010190",
     "description": "LIVE HORSES,ASSES,MULES & HINNIES OTHER"
    },
    {
     "chapter": "01",
     "itc_hscode": "010210",
     "description": "LIVE BOVINE ANIMALS, PURE BRED BREEDING"
    },
    {
     "chapter": "01",
     "itc_hscode": "010290",
     "description": "LIVE BOVNE ANMLS OTHR THN PURE‐BRED BREDNG"
    },
    {
     "chapter": "01",
     "itc_hscode": "010310",
     "description": "LIVE SWINE, PURE‐BRED BREEDING"
    },
    {
     "chapter": "01",
     "itc_hscode": "010391",
     "description": "LIVE SWINE,OTHER THAN PURE BRED‐BREEDING WEIGHING LESS THAN 50 KG"
    },
    {
     "chapter": "01",
     "itc_hscode": "010392",
     "description": "LIVE SWINE OTHER THAN PURE‐BRED BREEDING WEIGHING 50 KG OR MORE"
    },
    {
     "chapter": "01",
     "itc_hscode": "010410",
     "description": "LIVE SHEEP"
    },
    {
     "chapter": "01",
     "itc_hscode": "010420",
     "description": "LIVE GOATS"
    },
    {
     "chapter": "01",
     "itc_hscode": "010511",
     "description": "FOWLS OF THE SPECIES GALLUS DOMESTICUS"
    },
    {
     "chapter": "01",
     "itc_hscode": "010512",
     "description": "FOWLS OF TURKEYS"
    },
    {
     "chapter": "01",
     "itc_hscode": "010519",
     "description": "OTHER LIVE POULTRY WEIGHING < =185 G"
    },
    {
     "chapter": "01",
     "itc_hscode": "010594",
     "description": "FOWLS OF THE SPECIES GALLUS DOMESTICUS"
    },
    {
     "chapter": "01",
     "itc_hscode": "010599",
     "description": "OTHER LIVE POULTRY WEIGHING > 185G"
    },
    {
     "chapter": "01",
     "itc_hscode": "010611",
     "description": "MAMMALS OF THE ORDER PRIMATES"
    },
    {
     "chapter": "01",
     "itc_hscode": "010619",
     "description": "OTHER MAMMALS"
    },
    {
     "chapter": "01",
     "itc_hscode": "010620",
     "description": "REPTILES (INCLUDING SNAKES AND TURTLES)"
    },
    {
     "chapter": "01",
     "itc_hscode": "010631",
     "description": "BIRDS OF PREY"
    },
    {
     "chapter": "01",
     "itc_hscode": "010632",
     "description": "PSITTACIFORMES (INCLUDING PARROTS, PARAKEETS, MACAWS AND COCKATOOS)"
    },
    {
     "chapter": "01",
     "itc_hscode": "010639",
     "description": "OTHER BIRDS"
    },
    {
     "chapter": "01",
     "itc_hscode": "010690",
     "description": "OTHER LIVE ANIMALS EXCLUDING MAMMALS, REPTILES AND BIRDS"
    },
    {
     "chapter": "02",
     "itc_hscode": "020110",
     "description": "CRCS & HLF‐CRCS OF BOVN ANMLS,FRSH OR CHLD"
    },
    {
     "chapter": "02",
     "itc_hscode": "020120",
     "description": "OTHER CUTS WITH BONE IN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020130",
     "description": "BONELESS"
    },
    {
     "chapter": "02",
     "itc_hscode": "020210",
     "description": "CRCS HALF‐CRCS OF BOVN ANMLS, FROZEN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020220",
     "description": "OTHER CUTS WITH BONE IN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020230",
     "description": "BONELESS"
    },
    {
     "chapter": "02",
     "itc_hscode": "020311",
     "description": "CRCS & HLF CRCS SWINE MEAT,FRESH OR CHLD"
    },
    {
     "chapter": "02",
     "itc_hscode": "020312",
     "description": "HAMS, SHOULDERS AND CUTS THEREOF, WITH BONE IN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020319",
     "description": "OTHER MEAT OF SWINE,FRESH OR CHILLED"
    },
    {
     "chapter": "02",
     "itc_hscode": "020321",
     "description": "CARCASSES AND HALF‐CARCASSES"
    },
    {
     "chapter": "02",
     "itc_hscode": "020322",
     "description": "HAMS, SHOULDERS AND CUTS THEREOF, WITH BONE IN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020329",
     "description": "OTHER MEAT OF SWINE, FROZEN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020410",
     "description": "CRCS & HALF‐CRCS OF LAMB, FRSH OR CHLD"
    },
    {
     "chapter": "02",
     "itc_hscode": "020421",
     "description": "CRCS & HLF CRCS OF SHEEP,FRSH OR CHLD"
    },
    {
     "chapter": "02",
     "itc_hscode": "020422",
     "description": "OTHER CUTS WITH BONE IN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020423",
     "description": "BONELESS"
    },
    {
     "chapter": "02",
     "itc_hscode": "020430",
     "description": "CARCASSES AND HALF‐CARCASSES OF LAMB, FROZEN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020441",
     "description": "CARCASSES AND HALF‐CARCASSES"
    },
    {
     "chapter": "02",
     "itc_hscode": "020442",
     "description": "OTHER CUTS WITH BONE IN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020443",
     "description": "BONELESS"
    },
    {
     "chapter": "02",
     "itc_hscode": "020450",
     "description": "MEAT OF GOATS"
    },
    {
     "chapter": "02",
     "itc_hscode": "020500",
     "description": "MEAT OF HORSES, ASSES, MULES OR HINNIES, FRESH, CHILLED OR FROZEN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020610",
     "description": "EDBL OFFAL OF BOVINE ANMLS,FRSH\/CHILLED"
    },
    {
     "chapter": "02",
     "itc_hscode": "020621",
     "description": "EDIBLE TONGUES OF BOVINE ANIMALS, FROZEN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020622",
     "description": "EDIBLE LIVERS OF BOVINE ANIMALS, FROZEN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020629",
     "description": "OTHR EDIBLE OFFAL OF BOVINE ANIMALS,FROZEN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020630",
     "description": "EDIBLE OFFAL OF SWINE, FRESH OR CHILLED"
    },
    {
     "chapter": "02",
     "itc_hscode": "020641",
     "description": "EDIBLE LIVERS OF SWINE, FROZEN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020649",
     "description": "EDINLE OFFAL EXCL LIVER OF SWINE, FRZN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020680",
     "description": "OTHER, FRESH OR CHILLED :"
    },
    {
     "chapter": "02",
     "itc_hscode": "020690",
     "description": "OTHER, FROZEN :"
    },
    {
     "chapter": "02",
     "itc_hscode": "020711",
     "description": "MEAT\/EDBL OFAL OF FOWLS OF THE SPCS GALS DOMESTICUS NOT CUT IN PIECES,FRES\/CHILLED"
    },
    {
     "chapter": "02",
     "itc_hscode": "020712",
     "description": "MEAT\/EDBL OFAL OF FOWLSOF THE SPCS GALS DOMESTICUS NOT CUT IN PIECES,FROZEN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020713",
     "description": "CUTS AND OFFAL, FRESH OR CHILLED"
    },
    {
     "chapter": "02",
     "itc_hscode": "020714",
     "description": "CUTS AND OFFAL, FROZEN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020724",
     "description": "MEAT & EDBL OFAL OF TURKYS WHOL FRSH\/CHLD"
    },
    {
     "chapter": "02",
     "itc_hscode": "020725",
     "description": "MEAT& EDIBLE OFALS OF TURKEYS WHOLE,FRZN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020726",
     "description": "CUTS AND OFFAL, FRESH OR CHILLED"
    },
    {
     "chapter": "02",
     "itc_hscode": "020727",
     "description": "CUTS AND OFFAL, FROZEN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020732",
     "description": "MEAT & EDBL OFAL OF DUCKS,GEESE\/GUINEA FOWLS,NOT CUT IN PIECES FRSH\/CHILLED"
    },
    {
     "chapter": "02",
     "itc_hscode": "020733",
     "description": "MEAT & EDBL OFAL OF DUCKS,GEESE\/GUINEA FOWLS, NOT CUT IN PIECES ,FROZEN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020734",
     "description": "FATTY LIVERS, FRESH OR CHILLED"
    },
    {
     "chapter": "02",
     "itc_hscode": "020735",
     "description": "OTHER, FRESH OR CHILLED"
    },
    {
     "chapter": "02",
     "itc_hscode": "020736",
     "description": "OTHER, FROZEN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020810",
     "description": "MEAT EDBL OFL OFRABT\/HARES FRSH CHLD\/FRZN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020830",
     "description": "MEAT EDBL OFL OF PRIMATES FRSH CHLD\/FRZN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020840",
     "description": "MEAT EDBL OFL FRSH CHLD\/FRZN OF WHALES, DLPHNS,PORPSES,.MANATES & DGNGS"
    },
    {
     "chapter": "02",
     "itc_hscode": "020850",
     "description": "MEAT EDBL OFL OF REPTLES (INCLDG SNAKES & TURTLES) FRSH CHLD\/FRZN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020890",
     "description": "OTHER MEAT\/EDABLE OFFAL FRESH CHILLED\/FRZN"
    },
    {
     "chapter": "02",
     "itc_hscode": "020900",
     "description": "PIG FAT FREE OF LEAN MEAT & PLTRY FAT(NOT RNDERD)FRSH,CHLD,FRZN,SLTED IN BRINE ETC"
    },
    {
     "chapter": "02",
     "itc_hscode": "021011",
     "description": "HAM SHOULDER CUT THREOF WTH BONE OF SWINE"
    },
    {
     "chapter": "02",
     "itc_hscode": "021012",
     "description": "BELLIES (STREAKY) AND CUTS THEREOF"
    },
    {
     "chapter": "02",
     "itc_hscode": "021019",
     "description": "OTHR MEAT OF SWINE,SLTD,IN BRINE,DRD\/SMKD"
    },
    {
     "chapter": "02",
     "itc_hscode": "021020",
     "description": "MEAT OF BOVINE ANIMALS"
    },
    {
     "chapter": "02",
     "itc_hscode": "021091",
     "description": "OTHR INCLDNG EDBL FLOURS & MEALS OF MEAT\/ MEAT OFL OF PRIMATES"
    },
    {
     "chapter": "02",
     "itc_hscode": "021092",
     "description": "OTHER INCLD FLRS & MEALS OF MEAT\/MEAT OFL OF DOLPHINS,PORPSLS,MANTES,DGNGS"
    },
    {
     "chapter": "02",
     "itc_hscode": "021093",
     "description": "OTHR INCLD EDBL FLOURS & MEALS OF MEAT\/ MEAT OFL OF REPTILES(INCLD SNAKES\/TURTLES)"
    },
    {
     "chapter": "02",
     "itc_hscode": "021099",
     "description": "OTHER"
    },
    {
     "chapter": "03",
     "itc_hscode": "030110",
     "description": "LIVE ORNAMENTAL FISH"
    },
    {
     "chapter": "03",
     "itc_hscode": "030191",
     "description": "CHRYGASTR"
    },
    {
     "chapter": "03",
     "itc_hscode": "030192",
     "description": "LIVE EELS (ANGUILLA SPP)"
    },
    {
     "chapter": "03",
     "itc_hscode": "030193",
     "description": "LIVE CARP"
    },
    {
     "chapter": "03",
     "itc_hscode": "030194",
     "description": "BLUEFIN TUNAS (THUNNUS THYNNUS)"
    },
    {
     "chapter": "03",
     "itc_hscode": "030195",
     "description": "SOUTHERN BLUEFIN TUNAS (THUNNUS MACCOYII)"
    },
    {
     "chapter": "03",
     "itc_hscode": "030199",
     "description": "OTHER LIVE FISH"
    },
    {
     "chapter": "03",
     "itc_hscode": "030211",
     "description": "APACHE&CHRYSOGSTR"
    },
    {
     "chapter": "03",
     "itc_hscode": "030219",
     "description": "OTHR SALMONIDAE EXCL LIVR & ROES FRSH\/CHLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030221",
     "description": "HALIBUT EXCL LIVERS & ROES FRSH\/CHLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030222",
     "description": "PLAICE EXCL LIVERS & ROES FRSH OR CHILLED"
    },
    {
     "chapter": "03",
     "itc_hscode": "030223",
     "description": "SOLE(SOLES SPP)EXCL LIVER & ROES FRSH\/CHLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030229",
     "description": "OTHR FLAT FISH EXCL LIVRS & ROES FRSH\/CHLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030231",
     "description": "ALBACORE OR LONGFINED TUNAS (THUNNUS ALALUNGA) EXCL LIVERS & ROES,FRESH\/CHLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030232",
     "description": "YELLOWFIN TUNAS(THUNNUS ALBACARES) EXCLUDING LIVERS & ROES FRESH\/CHILLED"
    },
    {
     "chapter": "03",
     "itc_hscode": "030233",
     "description": "SKIPJACK OR STRIPE BELLIED BONITO EXCLUDING LIVERS & ROES FRESH\/CHILLED"
    },
    {
     "chapter": "03",
     "itc_hscode": "030234",
     "description": "BIGEYE TUNAS(THUNNUS OBESUS)EXCL LIVERS & ROES, FRESH\/CHLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030235",
     "description": "BLUEFIN TUNAS(THANNUS THYNNUS) EXCL LIVERS& ROES,FRESH\/CHLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030236",
     "description": "STHERN BLUEFIN TUNAS (THANNUS MACCOYLI) EXCL LIVERS & ROES,FRESH\/CHLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030239",
     "description": "OTHR TUNAS EXCL LIVERS & ROES FRSH\/CHLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030240",
     "description": "HERRINGS EXCL LIVERS & ROES FRSH\/CHLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030250",
     "description": "COD EXCL LIVERS & ROES FRSH\/CHLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030261",
     "description": "SARDINES (SARDINELLA BRISLING OR SPARTS) EXCL LIVR & ROES FRSH\/CHLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030262",
     "description": "HADDOCK EXCL LIVRS & ROES FRSH\/CHLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030263",
     "description": "COALFISH EXCL LIVERS & ROES FRESH\/CHLLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030264",
     "description": "MACKEREL EXCL LIVRS & ROES FRSH\/CHILLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030265",
     "description": "DOGFISH & OTHER SHARKS EXCLUDING LIVERS & ROES FRSH\/CHLLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030266",
     "description": "EELS EXCL LIVERS & ROES FRSH\/CHLLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030267",
     "description": "SWORDFISH (XIPHIAS GLADIUS)"
    },
    {
     "chapter": "03",
     "itc_hscode": "030268",
     "description": "TOOTHFISH (DISSOSTICHUS SPP.)"
    },
    {
     "chapter": "03",
     "itc_hscode": "030269",
     "description": "OTHR FISH FRSH\/CHLD EXCL LIVRS & ROES"
    },
    {
     "chapter": "03",
     "itc_hscode": "030270",
     "description": "LIVERS & ROES OF FISH FRESH OR CHILLED"
    },
    {
     "chapter": "03",
     "itc_hscode": "030321",
     "description": "APACHE&CHRYSOGSTR"
    },
    {
     "chapter": "03",
     "itc_hscode": "030329",
     "description": "OTHER SALMONIDAE EXCL LIVRS AND ROES FROZEN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030331",
     "description": "HALIBUT EXCL LIVRS & ROES FROZEN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030332",
     "description": "PLAICE(PLEURONECTES PLATESSA) EXCLUDING LIVERS & ROES FORZEN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030333",
     "description": "SOLE(LOSEA SPP) EXCL LIVRS & ROES FRZN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030339",
     "description": "OTHR FLAT FISH EXCLD LIVRS & ROES FROZEN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030341",
     "description": "ALBACORE OR LONGFINNED TUNAS(THUNNUS ALALUNGA)EXCLUDING LIVRS & ROES FROZEN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030342",
     "description": "YELLOWFIN TUNAS(THUNNUS ALBACARES) EXCLUDING LIVERS & ROES FROZEN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030343",
     "description": "SKIPJACK OR STRIPE‐BELLIED BONITO EXCLUDING LIVERS & ROES FROZEN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030344",
     "description": "BIGEYE TUNAS(THANNUS OBESVS) EXCL LIVER & ROES FRZN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030345",
     "description": "BLUEFIN TUNAS(THANNUS THYNNUS)EXCL LIVER &ROES FRZN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030346",
     "description": "SOUTHERN BLUEFIN TUNAS(THANNUS MACCOYLI) EXCL LIVERS & ROES FRZN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030349",
     "description": "OTHER TUNAS EXCL LIVRS AND ROES FRZN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030351",
     "description": "HERRINGS (CLUPEA HARENGUS, CLUPEA PALLASII),"
    },
    {
     "chapter": "03",
     "itc_hscode": "030352",
     "description": "AND TOOTHFISH"
    },
    {
     "chapter": "03",
     "itc_hscode": "030361",
     "description": "SWORDFISH (XIPHIAS GLADIUS)"
    },
    {
     "chapter": "03",
     "itc_hscode": "030362",
     "description": "TOOTHFISH (DISSOSTICHUS SPP.)"
    },
    {
     "chapter": "03",
     "itc_hscode": "030371",
     "description": "SARDINES (SARDINELLA BRISLING OR SPRATS) EXCL LIVRS & ROES FRZN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030372",
     "description": "HADDOCK EXCL. LIVERS & ROES FROZEN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030373",
     "description": "COALFISH EXCL LIVERS & ROES FRZN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030374",
     "description": "MACKEREL EXCL LIVERS & ROES FRZN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030375",
     "description": "DOGFISH & OTHR SRKS EXCL LIVRS & ROES FRZN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030376",
     "description": "EELS(ANGUILLA SP)EXCL LIVRS & ROES FRZN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030377",
     "description": "SEA BASS EXCL LIVRS & ROES FROZEN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030378",
     "description": "HAKE EXCL LIVERS & ROES FROZEN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030379",
     "description": "OTHER FRZN FISH EXCL LIVRS AND ROES"
    },
    {
     "chapter": "03",
     "itc_hscode": "030380",
     "description": "LIVERS & ROES OF FISH FROZEN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030411",
     "description": "SWORDFISH (XIPHIAS GLADIUS)"
    },
    {
     "chapter": "03",
     "itc_hscode": "030412",
     "description": "TOOTHFISH (DISSOSTICHUS SPP.)"
    },
    {
     "chapter": "03",
     "itc_hscode": "030419",
     "description": "OTHER"
    },
    {
     "chapter": "03",
     "itc_hscode": "030421",
     "description": "SWORDFISH (XIPHIAS GLADIUS)"
    },
    {
     "chapter": "03",
     "itc_hscode": "030422",
     "description": "TOOTHFISH (DISSOSTICHUS SPP.)"
    },
    {
     "chapter": "03",
     "itc_hscode": "030429",
     "description": "OTHER:"
    },
    {
     "chapter": "03",
     "itc_hscode": "030491",
     "description": "SWORDFISH (XIPHIAS GLADIUS)"
    },
    {
     "chapter": "03",
     "itc_hscode": "030492",
     "description": "TOOTHFISH (DISSOSTICHUS SPP.)"
    },
    {
     "chapter": "03",
     "itc_hscode": "030499",
     "description": "OTHER"
    },
    {
     "chapter": "03",
     "itc_hscode": "030510",
     "description": "FISH MEAL FIT FOR HUMAN CONSUMPTION"
    },
    {
     "chapter": "03",
     "itc_hscode": "030520",
     "description": "FISH LIVR & ROES DRIED SMOKD SLTD\/IN BRINE"
    },
    {
     "chapter": "03",
     "itc_hscode": "030530",
     "description": "FISH FILTS DRIED SLTD\/IN BRIN NT SMOKED"
    },
    {
     "chapter": "03",
     "itc_hscode": "030542",
     "description": "HERRINGS SMOKED INCLUDING FILLETS"
    },
    {
     "chapter": "03",
     "itc_hscode": "030549",
     "description": "OTHER SMOKED FISH INCLUDING FILLETS"
    },
    {
     "chapter": "03",
     "itc_hscode": "030551",
     "description": "COD DRIED NT SMOKED W\/N SALTED"
    },
    {
     "chapter": "03",
     "itc_hscode": "030559",
     "description": "OTHER DRIED FISH W\/N SALTED NT SMOKED"
    },
    {
     "chapter": "03",
     "itc_hscode": "030561",
     "description": "HERRINGS SLTD\/IN BRINE BUT NT DRID NT SMKD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030562",
     "description": "COD SLTD OR IN BRINE BUT NT DRID\/SMOKD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030563",
     "description": "ANCHVS SLTED OR IN BRINE BUT NT DRD\/SMKD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030569",
     "description": "OTHR FISH SLTD\/IN BRINE,NOT DRIED,NT SMKD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030611",
     "description": "ROCK LOBSTER & OTHER SEA CRAWFISH (PALINURUS SP PANULIRUS SP JASUS SP)FRZN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030612",
     "description": "LOBSTERS (HOMARUS SPP) FROZEN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030613",
     "description": "SHRIMPS & PRAWNS FROZEN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030614",
     "description": "CRABS FROZEN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030619",
     "description": "CONSUMPTION"
    },
    {
     "chapter": "03",
     "itc_hscode": "030621",
     "description": "ROCK LOBSTER & OTHER SEA CRAWFISH NT FRZN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030622",
     "description": "LOBSTER(HOMARUS SPP) NOT FROZEN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030623",
     "description": "SHRIMPS & PRAWNS NOT FROZEN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030624",
     "description": "CRABS NOT FROZEN"
    },
    {
     "chapter": "03",
     "itc_hscode": "030629",
     "description": "CONSUMPTION"
    },
    {
     "chapter": "03",
     "itc_hscode": "030710",
     "description": "OYSTERS LIVE FRSH‐FROZEN ETC SLTD\/BRINE"
    },
    {
     "chapter": "03",
     "itc_hscode": "030721",
     "description": "SCALOPS CHLAMYS LIVE FRSH\/CHLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030729",
     "description": "SCALOPS CHLAMYS OTHR THAN LIVE FRSH\/CHLLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030731",
     "description": "MUSSELS (MUIILUS SPP ETC)LIVE FRSH\/CHLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030739",
     "description": "MUSSELS OTHER THAN LIVE FRESH OR CHLLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030741",
     "description": "CUTLE FISH & SQUID LIVE FRSH\/CHLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030749",
     "description": "CUTTLE FISH & SQUIDS EXCL LIVE FRSH\/CHLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030751",
     "description": "OCTOPUS(OCTOPUS SPP) LIVE FRSH\/CHLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030759",
     "description": "OCTOPUS OTHER THAN LIVE FRSH\/CHLLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030760",
     "description": "SNAILS OTHER THAN SEA SNAILS"
    },
    {
     "chapter": "03",
     "itc_hscode": "030791",
     "description": "OTHER MOLLUSCS LIVE FRSH OR CHLLD"
    },
    {
     "chapter": "03",
     "itc_hscode": "030799",
     "description": "OTHER MOLLUSCS EXCL LIVE FRSH\/CHLD"
    },
    {
     "chapter": "04",
     "itc_hscode": "040110",
     "description": "MLK & CRM ETC CONTNG FAT NOT EXCDNG 1%"
    },
    {
     "chapter": "04",
     "itc_hscode": "040120",
     "description": "MLK & CRM CONTNG FAT>1% BUT<=6% BY WT"
    },
    {
     "chapter": "04",
     "itc_hscode": "040130",
     "description": "MILK AND CREAM CONTNG FAT EXCDNG 6% BY WT"
    },
    {
     "chapter": "04",
     "itc_hscode": "040221",
     "description": "MATTER CONTNG FAT EXCEEDNG 1.5% BY WT"
    },
    {
     "chapter": "04",
     "itc_hscode": "040229",
     "description": "CONTNG FAT EXCEEDNG 1.5% BY WT"
    },
    {
     "chapter": "04",
     "itc_hscode": "040291",
     "description": "OTHR MILK OR CRM NOT CONTNG SWETNG MATTER"
    },
    {
     "chapter": "04",
     "itc_hscode": "040299",
     "description": "OTHR MILK OR CREAM CONTNG SWETNG MATTER"
    },
    {
     "chapter": "04",
     "itc_hscode": "040310",
     "description": "YOGURT"
    },
    {
     "chapter": "04",
     "itc_hscode": "040390",
     "description": "OTHER (BUTTR\/CRDLD MLK,CRM,KPHIR ETC)"
    },
    {
     "chapter": "04",
     "itc_hscode": "040410",
     "description": "WHEY"
    },
    {
     "chapter": "04",
     "itc_hscode": "040490",
     "description": "PRODCTS OTHRTHAN WHEY CONSISTING OF NATURAL MILK CONSTITNTS"
    },
    {
     "chapter": "04",
     "itc_hscode": "040510",
     "description": "BUTTER"
    },
    {
     "chapter": "04",
     "itc_hscode": "040520",
     "description": "DAIRY SPREADS"
    },
    {
     "chapter": "04",
     "itc_hscode": "040590",
     "description": "OTHER :"
    },
    {
     "chapter": "04",
     "itc_hscode": "040610",
     "description": "FRSH CHESE(INCL WHEY CHSE)NT FRMNTD & CURD"
    },
    {
     "chapter": "04",
     "itc_hscode": "040620",
     "description": "GRATED OR POWDERED CHEESE OF ALL KINDS"
    },
    {
     "chapter": "04",
     "itc_hscode": "040630",
     "description": "PROCESSED CHEESE NOT GRATED\/POWDERED"
    },
    {
     "chapter": "04",
     "itc_hscode": "040640",
     "description": "BLUE VEINED CHEESE"
    },
    {
     "chapter": "04",
     "itc_hscode": "040690",
     "description": "OTHER CHEESE"
    },
    {
     "chapter": "04",
     "itc_hscode": "040700",
     "description": "BIRDS EGGS,IN SHELL,FRSH PRSVD OR CKD"
    },
    {
     "chapter": "04",
     "itc_hscode": "040811",
     "description": "EGG YOLKS DRIED"
    },
    {
     "chapter": "04",
     "itc_hscode": "040819",
     "description": "OTHER EGG YOLKS NOT DRIED"
    },
    {
     "chapter": "04",
     "itc_hscode": "040891",
     "description": "BIRDS EGGS NOT IN SHELL DRIED"
    },
    {
     "chapter": "04",
     "itc_hscode": "040899",
     "description": "OTHR BIRDS EGGS NOT IN SHEEL NOT DRIED"
    },
    {
     "chapter": "04",
     "itc_hscode": "040900",
     "description": "NATURAL HONEY"
    },
    {
     "chapter": "04",
     "itc_hscode": "041000",
     "description": "EDIBLE PRDUCTS OF ANIMAL ORIGIN N.E.S."
    },
    {
     "chapter": "05",
     "itc_hscode": "050100",
     "description": "HUMAN HAIR,UNWORKED; WASTE OF HUMAN HAIR"
    },
    {
     "chapter": "05",
     "itc_hscode": "050210",
     "description": "PIGS,HOGS\/BOARS BRISTLES AND HAIR & WASTE TEREOF"
    },
    {
     "chapter": "05",
     "itc_hscode": "050290",
     "description": "BADGR HAR & OTHR BRSH MKNG HAR & THER WSTE"
    },
    {
     "chapter": "05",
     "itc_hscode": "050400",
     "description": "GUTS‐BLADDERS & STOMACHES OF ANIMALS (OTHR THAN FRSH),WHOLE & PIECES THEREOF"
    },
    {
     "chapter": "05",
     "itc_hscode": "050510",
     "description": "FEATHERS OF A KIND USED FOR STUFFING;DOWN"
    },
    {
     "chapter": "05",
     "itc_hscode": "050590",
     "description": "OTHR FETHRS\/PRTS,WSTE & PWDR OF FETHR"
    },
    {
     "chapter": "05",
     "itc_hscode": "050610",
     "description": "OSSEIN & BONES TREATED WITH ACID"
    },
    {
     "chapter": "05",
     "itc_hscode": "050690",
     "description": "OTHER : BONE MEAL :"
    },
    {
     "chapter": "05",
     "itc_hscode": "050710",
     "description": "IVORY;IVORY PWDR & WASTE"
    },
    {
     "chapter": "05",
     "itc_hscode": "050790",
     "description": "OTHER(EXCL IVORY AND ITS POWDER AND WASTE)"
    },
    {
     "chapter": "05",
     "itc_hscode": "050800",
     "description": "WSTE"
    },
    {
     "chapter": "05",
     "itc_hscode": "051000",
     "description": "PHRMACTCLSFRSH,CHLD,FRZN\/OTHRWSE PROVSNLY PRASVD"
    },
    {
     "chapter": "05",
     "itc_hscode": "051110",
     "description": "BOVINE SEMEN"
    },
    {
     "chapter": "05",
     "itc_hscode": "051191",
     "description": "OTHR PRDCTS OF FISH,CRSTCNS,MOLSCS\/OTHR AQTC INVRTBRTS;DEAD ANMLS OF CHPTR 3"
    },
    {
     "chapter": "05",
     "itc_hscode": "051199",
     "description": "OTHER : SILKWORM PUPAE :"
    },
    {
     "chapter": "06",
     "itc_hscode": "060110",
     "description": "BULBS,TUBERS,TUBEROUS ROOTS, CORMS,CROWN & RHIZOMES,DORMANT"
    },
    {
     "chapter": "06",
     "itc_hscode": "060210",
     "description": "UNROOTED CUTTINGS & SLIPS OF LIVE PLANTS"
    },
    {
     "chapter": "06",
     "itc_hscode": "060220",
     "description": "EDBL FRUT\/NUT TRES,SHRBS & BUSHS GRFTD\/NOT"
    },
    {
     "chapter": "06",
     "itc_hscode": "060230",
     "description": "RHODODENDRONS & AZALEAS GRAFTED OR NOT"
    },
    {
     "chapter": "06",
     "itc_hscode": "060240",
     "description": "ROSES GRAFTED OR NOT"
    },
    {
     "chapter": "06",
     "itc_hscode": "060290",
     "description": "OTHER:"
    },
    {
     "chapter": "06",
     "itc_hscode": "060311",
     "description": "ROSES"
    },
    {
     "chapter": "06",
     "itc_hscode": "060312",
     "description": "CARNATIONS"
    },
    {
     "chapter": "06",
     "itc_hscode": "060313",
     "description": "ORCHIDS"
    },
    {
     "chapter": "06",
     "itc_hscode": "060314",
     "description": "CHRYSANTHEMUMS"
    },
    {
     "chapter": "06",
     "itc_hscode": "060319",
     "description": "OTHER"
    },
    {
     "chapter": "06",
     "itc_hscode": "060390",
     "description": "OTHR CUT FLWRS & FLOWER BUDS SUITABLE FOR BOQETS\/FOR ORNMNTL PURPSES"
    },
    {
     "chapter": "06",
     "itc_hscode": "060410",
     "description": "MOSS & LICHENS USD FOR BOQETS\/ORNMNTL PRPS"
    },
    {
     "chapter": "06",
     "itc_hscode": "060491",
     "description": "BOQETS\/ORNMNTL PURPOSES‐FRSH"
    },
    {
     "chapter": "06",
     "itc_hscode": "060499",
     "description": "BOUQUETS\/ORNAMENTAL PURPOSES EXCLDG FRSH"
    },
    {
     "chapter": "07",
     "itc_hscode": "070110",
     "description": "POTATO SEEDS FRESH OR CHILLED"
    },
    {
     "chapter": "07",
     "itc_hscode": "070190",
     "description": "POTATOES FRESH OR CHILLED OTHER THAN SEEDS"
    },
    {
     "chapter": "07",
     "itc_hscode": "070200",
     "description": "TOMATOES FRESH OR CHILLED"
    },
    {
     "chapter": "07",
     "itc_hscode": "070310",
     "description": "ONIONS & SHALLOTS FRESH OR CHILLED"
    },
    {
     "chapter": "07",
     "itc_hscode": "070320",
     "description": "GARLIC FRESH OR CHILLED"
    },
    {
     "chapter": "07",
     "itc_hscode": "070390",
     "description": "LEEKS & OTHR ALIACOUS VEGTBLS FRSH OR CHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "070420",
     "description": "BRUSSELS SPROUTS FRESH OR CHILLED"
    },
    {
     "chapter": "07",
     "itc_hscode": "070490",
     "description": "KOHRBI,KALE&SMLR EDBL BRASSICAS,FRSH\/CHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "070511",
     "description": "CABAGE LETTUCE(HEAD LETTUCE)FRSH OR CHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "070519",
     "description": "OTHER CHICORY :"
    },
    {
     "chapter": "07",
     "itc_hscode": "070521",
     "description": "WITLOOF CHICORY FRSH OR CHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "070529",
     "description": "OTHER CHICORY FRSH OR CHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "070610",
     "description": "CARROTS & TURNIPS FRSH OR CHILLED"
    },
    {
     "chapter": "07",
     "itc_hscode": "070690",
     "description": "OTHER EDIBLE ROOTS FRSH OR CHILLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "070700",
     "description": "CUCUMBERS & GHERKINS FRSH OR CHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "070810",
     "description": "PEAS SHLD OR UNSHLD FRSH OR CHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "070820",
     "description": "BEANS SHLD OR UNSHLD FRSH OR CHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "070890",
     "description": "OTHER LEGUMINOUS VEGETABLES"
    },
    {
     "chapter": "07",
     "itc_hscode": "070920",
     "description": "ASPARAGUS FRESH OR CHILLED"
    },
    {
     "chapter": "07",
     "itc_hscode": "070930",
     "description": "AUBERGINES(EGG PLANTS)FRSH OR CHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "070940",
     "description": "CELERY OTHER THAN CELERIAC FRSH OR CHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "070951",
     "description": "MUSHROOMS FRESH OR CHILLED"
    },
    {
     "chapter": "07",
     "itc_hscode": "070959",
     "description": "OTHER MUSHROOMS(EXCLDNG GENUS,AGARICUS) FRSH OR CHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "070960",
     "description": "FRUITS OF THE GENUS CAPSICUM FRSH\/CHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "070970",
     "description": "SPINACH FRSH\/CHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "070990",
     "description": "OTHER VEG OF HEADING 0709 FRSH\/CHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "071010",
     "description": "POTATOES COOKED OR UNCOOKED,FROZEN"
    },
    {
     "chapter": "07",
     "itc_hscode": "071021",
     "description": "PEAS SHELLED OR UNSHELLED,FRZN"
    },
    {
     "chapter": "07",
     "itc_hscode": "071022",
     "description": "BEANS SHELLED OR UNSHELLED,FRZN"
    },
    {
     "chapter": "07",
     "itc_hscode": "071029",
     "description": "OTHR LEGUMINOUS VEGTBLS SHELD OR NT FRZN"
    },
    {
     "chapter": "07",
     "itc_hscode": "071030",
     "description": "SPINACH FRZN"
    },
    {
     "chapter": "07",
     "itc_hscode": "071040",
     "description": "SWEET CORN FRZN"
    },
    {
     "chapter": "07",
     "itc_hscode": "071080",
     "description": "OTHER VEGETABLES:"
    },
    {
     "chapter": "07",
     "itc_hscode": "071090",
     "description": "MIXTURE OF VEGETABLES FRZN"
    },
    {
     "chapter": "07",
     "itc_hscode": "071120",
     "description": "OLIVES PROVISIONALLY PRESERVED"
    },
    {
     "chapter": "07",
     "itc_hscode": "071140",
     "description": "CUCUMBERS & GHERKINS PROVISIONALLY PRESVD"
    },
    {
     "chapter": "07",
     "itc_hscode": "071151",
     "description": "MUSHROOMS OF GENUS AGARICUS PROVISONALLY PRESRVD"
    },
    {
     "chapter": "07",
     "itc_hscode": "071159",
     "description": "OTHERUSHROOMS AND TRUFFLES PROVISNLY PRESRVD"
    },
    {
     "chapter": "07",
     "itc_hscode": "071190",
     "description": "OTHER VEGETABLES; MIXTURES OF VEGETABLES:"
    },
    {
     "chapter": "07",
     "itc_hscode": "071220",
     "description": "ONIONS DRIED"
    },
    {
     "chapter": "07",
     "itc_hscode": "071231",
     "description": "MUSHROOMS OF GENUS AGARIGVS,DRIED,WHLE,CT,SLCED,BRKN"
    },
    {
     "chapter": "07",
     "itc_hscode": "071232",
     "description": "WOOD EARS (AGRICULARIA SPP.),DRIED"
    },
    {
     "chapter": "07",
     "itc_hscode": "071233",
     "description": "JELLY FUNG DRIED"
    },
    {
     "chapter": "07",
     "itc_hscode": "071239",
     "description": "OTHERS (E.G.TRUFFLES ETC.)DRIED."
    },
    {
     "chapter": "07",
     "itc_hscode": "071290",
     "description": "OTHER VEGETABLES; MIXTURES OF VEGETABLES:"
    },
    {
     "chapter": "07",
     "itc_hscode": "071310",
     "description": "PEAS (PISUM SATIVUM) DRIED & SHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "071320",
     "description": "CHICKPEAS (GARBANZOS) DRIED & SHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "071331",
     "description": "BEANS OF THE SPP VIGNA MUNGO,HEPPER OR VIGNA RADIATA,WILCZEK DRIED & SHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "071332",
     "description": "SMALL RED BEANS DRIED & SHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "071333",
     "description": "KIDNY BENS INCL WHTE PEA BENS DRIED & SHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "071339",
     "description": "OTER BEANS DRIED & SHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "071340",
     "description": "LENTILS (MOSUR),DRIED & SHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "071350",
     "description": "BROAD BEANS & HORSE BEANS DRIED & SHLD"
    },
    {
     "chapter": "07",
     "itc_hscode": "071390",
     "description": "OTHR DRIED & SHLD LUGUMINOUS VEGITABLS"
    },
    {
     "chapter": "07",
     "itc_hscode": "071410",
     "description": "MANIOC (CASSAVA)"
    },
    {
     "chapter": "07",
     "itc_hscode": "071420",
     "description": "SWET POTATOES"
    },
    {
     "chapter": "07",
     "itc_hscode": "071490",
     "description": "OTHER ROOTS AND TUBERS"
    },
    {
     "chapter": "08",
     "itc_hscode": "080111",
     "description": "COCONUT DESICCATED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080119",
     "description": "OTHER COCONUTS"
    },
    {
     "chapter": "08",
     "itc_hscode": "080121",
     "description": "BRAZIL NUTS FRSH\/DRED IN SHELL"
    },
    {
     "chapter": "08",
     "itc_hscode": "080122",
     "description": "BRAZIL NUTS FRSH\/DRED SHELLED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080131",
     "description": "CASHEN NUTS FRESH\/DRIED IN SHELL"
    },
    {
     "chapter": "08",
     "itc_hscode": "080132",
     "description": "CASHEN NUTS FRESH\/DRIED SHELLED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080211",
     "description": "ALMONDS FRSH OR DRIEDIN SHELL"
    },
    {
     "chapter": "08",
     "itc_hscode": "080212",
     "description": "SHELLED ALMONDS FRSH OR DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080221",
     "description": "HAZELNUTS IN SHELL,FRSH OR DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080222",
     "description": "SHELLED HAZELNUTS, FRSH OR DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080231",
     "description": "WALNUTS FRSH OR DRIED IN SHELL"
    },
    {
     "chapter": "08",
     "itc_hscode": "080232",
     "description": "SHELLED WALNUTS FRSH OR DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080240",
     "description": "CHESTNUTS (CASTANEA SPP) FRSH OR DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080250",
     "description": "PISTACHIOS FRESH OR DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080260",
     "description": "MACADAMIA NUTS"
    },
    {
     "chapter": "08",
     "itc_hscode": "080290",
     "description": "OTHER : BETEL NUTS :"
    },
    {
     "chapter": "08",
     "itc_hscode": "080300",
     "description": "BANANAS INCLUDING PLANTAINS FRSH OR DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080410",
     "description": "DATES FRESH OR DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080420",
     "description": "FIGS FRESH OR DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080430",
     "description": "PINEAPPLES FRESH OR DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080440",
     "description": "AVOCADOS FRESH OR DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080450",
     "description": "GUAVAS,MANGOES\/MANGOSTEENS FRESH OR DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080510",
     "description": "ORANGES FRESH OR DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080540",
     "description": "GRAPEFRUIT FRESH OR DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080550",
     "description": "LEMONS(CITRUS LIMON CITRUS LIMONUM) & LIMES(CITRUS AURANTIFOLIA) FRSH OR DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080590",
     "description": "OTHER CITRUS FRUITS FRESH OR DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080610",
     "description": "GRAPES FRESH"
    },
    {
     "chapter": "08",
     "itc_hscode": "080620",
     "description": "GRAPES DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "080711",
     "description": "WATER MELONS"
    },
    {
     "chapter": "08",
     "itc_hscode": "080719",
     "description": "MELON , OTHER THAN WATER MELON"
    },
    {
     "chapter": "08",
     "itc_hscode": "080720",
     "description": "PAPAWS (PAPAYAS) FRESH"
    },
    {
     "chapter": "08",
     "itc_hscode": "080810",
     "description": "APPLES FRSH"
    },
    {
     "chapter": "08",
     "itc_hscode": "080820",
     "description": "PEARS & QUINCES FRSH"
    },
    {
     "chapter": "08",
     "itc_hscode": "080910",
     "description": "APRICOTS FRESH"
    },
    {
     "chapter": "08",
     "itc_hscode": "080920",
     "description": "CHERRIS FRESH"
    },
    {
     "chapter": "08",
     "itc_hscode": "080930",
     "description": "PEACHES INCL NECTARINES FRESH"
    },
    {
     "chapter": "08",
     "itc_hscode": "080940",
     "description": "PLUMS AND SLOES , FRESH"
    },
    {
     "chapter": "08",
     "itc_hscode": "081010",
     "description": "STRAWBERRIES FRESH"
    },
    {
     "chapter": "08",
     "itc_hscode": "081020",
     "description": "RASPBERIS,BLACKBRS,MULBRS & LOGANBRS,FRSH"
    },
    {
     "chapter": "08",
     "itc_hscode": "081040",
     "description": "CRNBERY BILBERS & OTHR OF GNUS VCINUM,FRSH"
    },
    {
     "chapter": "08",
     "itc_hscode": "081050",
     "description": "KIWI FRUIT"
    },
    {
     "chapter": "08",
     "itc_hscode": "081060",
     "description": "DURIANS"
    },
    {
     "chapter": "08",
     "itc_hscode": "081090",
     "description": "OTHER FRESH FRUITS"
    },
    {
     "chapter": "08",
     "itc_hscode": "081110",
     "description": "SUGAR OR WTHER SWEETENING MATTER"
    },
    {
     "chapter": "08",
     "itc_hscode": "081120",
     "description": "RASPBERS,BLACK BERS,MULBERS,LOGANBERS, BLCK,WHTE,\/RED CURRANTS & GOOSEBRS,FRZN"
    },
    {
     "chapter": "08",
     "itc_hscode": "081190",
     "description": "MTR"
    },
    {
     "chapter": "08",
     "itc_hscode": "081210",
     "description": "CHERRIES PROVSNLY PRSVD"
    },
    {
     "chapter": "08",
     "itc_hscode": "081290",
     "description": "OTHER FRUITS AND NUTS PROVSNLY PRSVD"
    },
    {
     "chapter": "08",
     "itc_hscode": "081310",
     "description": "APRICOTS, DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "081320",
     "description": "PRUNES DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "081330",
     "description": "APPLES DRIED"
    },
    {
     "chapter": "08",
     "itc_hscode": "081340",
     "description": "OTHER FRUIT:"
    },
    {
     "chapter": "08",
     "itc_hscode": "081350",
     "description": "MIXTURES OF NUTS OR DRIED FRUITS"
    },
    {
     "chapter": "08",
     "itc_hscode": "081400",
     "description": "INSULPHUR WTR OR IN OTHR PRSVTV SOLNS"
    },
    {
     "chapter": "09",
     "itc_hscode": "090111",
     "description": "COFFEE NEITHER ROASTED NOR DECAFFEINATED"
    },
    {
     "chapter": "09",
     "itc_hscode": "090112",
     "description": "NOT ROASTED BUT DECAFFEINATED COFFEE"
    },
    {
     "chapter": "09",
     "itc_hscode": "090121",
     "description": "ROASTED NOT DECAFFEINATED COFFEE"
    },
    {
     "chapter": "09",
     "itc_hscode": "090122",
     "description": "ROASTED DECAFFEINATED COFFEE"
    },
    {
     "chapter": "09",
     "itc_hscode": "090190",
     "description": "OTHER COFFEE"
    },
    {
     "chapter": "09",
     "itc_hscode": "090210",
     "description": "GREEN TEA IN PACKETS NT EXCDNG 3 KG"
    },
    {
     "chapter": "09",
     "itc_hscode": "090220",
     "description": "OTHER GREEN TEA (NOT FERMENTED):"
    },
    {
     "chapter": "09",
     "itc_hscode": "090240",
     "description": "OTHER BLACK TEA (FERMENTED) AND OTHER PARTLY FERMENTED TEA :"
    },
    {
     "chapter": "09",
     "itc_hscode": "090300",
     "description": "MATE"
    },
    {
     "chapter": "09",
     "itc_hscode": "090411",
     "description": "PEPPER NEITHER CRUSHED NOR GROUND"
    },
    {
     "chapter": "09",
     "itc_hscode": "090412",
     "description": "CRUSHED OR GROUND PEPPER"
    },
    {
     "chapter": "09",
     "itc_hscode": "090420",
     "description": "FRUTS OF GENS CAPSCM\/PMNTA,DRED\/CRSHD\/GRND"
    },
    {
     "chapter": "09",
     "itc_hscode": "090500",
     "description": "VANILLA"
    },
    {
     "chapter": "09",
     "itc_hscode": "090611",
     "description": "CINNAMON (CINNAMOMUM ZEYLANICUM BLUME)"
    },
    {
     "chapter": "09",
     "itc_hscode": "090619",
     "description": "OTHER:"
    },
    {
     "chapter": "09",
     "itc_hscode": "090620",
     "description": "CINNAMON & ITS TREE FLWRS CRSHD OR GRND"
    },
    {
     "chapter": "09",
     "itc_hscode": "090700",
     "description": "CLOVES(WHOLE FRUIT CLOVES & STEMS)"
    },
    {
     "chapter": "09",
     "itc_hscode": "090810",
     "description": "NUTMEG"
    },
    {
     "chapter": "09",
     "itc_hscode": "090820",
     "description": "MACE"
    },
    {
     "chapter": "09",
     "itc_hscode": "090830",
     "description": "CARDAMOMS"
    },
    {
     "chapter": "09",
     "itc_hscode": "090910",
     "description": "SEDS OF ANISE OR BADIAN"
    },
    {
     "chapter": "09",
     "itc_hscode": "090920",
     "description": "SEEDS OF CORIANDER"
    },
    {
     "chapter": "09",
     "itc_hscode": "090930",
     "description": "SEEDS OF CUMIN"
    },
    {
     "chapter": "09",
     "itc_hscode": "090940",
     "description": "SEEDS OF CARAWAY"
    },
    {
     "chapter": "09",
     "itc_hscode": "090950",
     "description": "SEEDS OF FENNEL OR JUNIPER"
    },
    {
     "chapter": "09",
     "itc_hscode": "091010",
     "description": "GINGER"
    },
    {
     "chapter": "09",
     "itc_hscode": "091020",
     "description": "SAFFRON"
    },
    {
     "chapter": "09",
     "itc_hscode": "091030",
     "description": "TURMERIC (CURCUMA)"
    },
    {
     "chapter": "09",
     "itc_hscode": "091091",
     "description": "MIXTRS OF TWO OR MORS PRODCTS OF DIFF HDG"
    },
    {
     "chapter": "09",
     "itc_hscode": "091099",
     "description": "OTHER : SEED :"
    },
    {
     "chapter": "10",
     "itc_hscode": "100110",
     "description": "DURUM WHEAT"
    },
    {
     "chapter": "10",
     "itc_hscode": "100190",
     "description": "OTHER WHEAT AND MESLIN"
    },
    {
     "chapter": "10",
     "itc_hscode": "100200",
     "description": "RYE"
    },
    {
     "chapter": "10",
     "itc_hscode": "100300",
     "description": "BARLEY"
    },
    {
     "chapter": "10",
     "itc_hscode": "100400",
     "description": "OATS"
    },
    {
     "chapter": "10",
     "itc_hscode": "100510",
     "description": "MAIZE SEED"
    },
    {
     "chapter": "10",
     "itc_hscode": "100590",
     "description": "OTHER MAIZE (CORN)"
    },
    {
     "chapter": "10",
     "itc_hscode": "100610",
     "description": "RICE IN HUSK (PADDY OR ROUGH)"
    },
    {
     "chapter": "10",
     "itc_hscode": "100620",
     "description": "HUSKED (BROWN) RICE"
    },
    {
     "chapter": "10",
     "itc_hscode": "100630",
     "description": "SEMI\/WHOLLY MILED RICE W\/N POLISHED\/GLAZED"
    },
    {
     "chapter": "10",
     "itc_hscode": "100640",
     "description": "BROKEN RICE"
    },
    {
     "chapter": "10",
     "itc_hscode": "100700",
     "description": "GRAIN SORGHUM"
    },
    {
     "chapter": "10",
     "itc_hscode": "100810",
     "description": "BUCK WHEAT"
    },
    {
     "chapter": "10",
     "itc_hscode": "100820",
     "description": "MILLET"
    },
    {
     "chapter": "10",
     "itc_hscode": "100830",
     "description": "CANARY SEED"
    },
    {
     "chapter": "10",
     "itc_hscode": "100890",
     "description": "OTHER CEREALS :"
    },
    {
     "chapter": "11",
     "itc_hscode": "110100",
     "description": "WHEAT OR MESLIN FLOUR"
    },
    {
     "chapter": "11",
     "itc_hscode": "110210",
     "description": "RYE FLOUR"
    },
    {
     "chapter": "11",
     "itc_hscode": "110220",
     "description": "MAIZE (CORN) FLOUR"
    },
    {
     "chapter": "11",
     "itc_hscode": "110290",
     "description": "OTHER CEREAL FLOUR"
    },
    {
     "chapter": "11",
     "itc_hscode": "110311",
     "description": "GROATS & MEAL OF WHEAT"
    },
    {
     "chapter": "11",
     "itc_hscode": "110313",
     "description": "GROATS & MEAL OF MAIZE (CORN)"
    },
    {
     "chapter": "11",
     "itc_hscode": "110319",
     "description": "GROATS & MEAL OF OTHR CEREALS"
    },
    {
     "chapter": "11",
     "itc_hscode": "110320",
     "description": "PELLETS OF CEREAL"
    },
    {
     "chapter": "11",
     "itc_hscode": "110412",
     "description": "ROLLED\/FLAKED GRAINS OF OATS"
    },
    {
     "chapter": "11",
     "itc_hscode": "110419",
     "description": "ROLLED\/FLAKED GRAINS OF OTHER CEREALS"
    },
    {
     "chapter": "11",
     "itc_hscode": "110422",
     "description": "HULLED,PEARLED,SLICED OR KIBBLED OATS"
    },
    {
     "chapter": "11",
     "itc_hscode": "110423",
     "description": "HULLED,PEARLED,SLICD\/KIBBLD MAIZE (CORN)"
    },
    {
     "chapter": "11",
     "itc_hscode": "110429",
     "description": "HULLED,PEARLED,SLICD\/KIBBLD OTHR CEREALS"
    },
    {
     "chapter": "11",
     "itc_hscode": "110430",
     "description": "GERM OF CERLS WHOLE ROLLD FLAKED OR GROUND"
    },
    {
     "chapter": "11",
     "itc_hscode": "110510",
     "description": "FLOUR & MEAL OF POTATOES"
    },
    {
     "chapter": "11",
     "itc_hscode": "110520",
     "description": "FLAKES OF POTATOES"
    },
    {
     "chapter": "11",
     "itc_hscode": "110610",
     "description": "FLOUR & MEAL OF THE DRIED LEGUMINOUS VEGETABLES OF HEADING NO.0713"
    },
    {
     "chapter": "11",
     "itc_hscode": "110620",
     "description": "FLOUR & MEAL OF SAGO,ROOTS OR TUBERS OF HEADING NO. 0714"
    },
    {
     "chapter": "11",
     "itc_hscode": "110630",
     "description": "FLOUR,MEAL & PWDR OF THE PRDCTS OF CHPTR 8"
    },
    {
     "chapter": "11",
     "itc_hscode": "110710",
     "description": "MALT NOT ROASTED"
    },
    {
     "chapter": "11",
     "itc_hscode": "110720",
     "description": "MALT ROASTED"
    },
    {
     "chapter": "11",
     "itc_hscode": "110811",
     "description": "STARCH OF WHEAT"
    },
    {
     "chapter": "11",
     "itc_hscode": "110812",
     "description": "STARCH OF MAIZE (CORN)"
    },
    {
     "chapter": "11",
     "itc_hscode": "110813",
     "description": "STARCH OF POTATO"
    },
    {
     "chapter": "11",
     "itc_hscode": "110814",
     "description": "STARCH OF MANIOC(CASSAVA)"
    },
    {
     "chapter": "11",
     "itc_hscode": "110819",
     "description": "OTHER STARCHES"
    },
    {
     "chapter": "11",
     "itc_hscode": "110820",
     "description": "INULIN"
    },
    {
     "chapter": "11",
     "itc_hscode": "110900",
     "description": "WHEAT GLUTEN , W\/N DRIED"
    },
    {
     "chapter": "12",
     "itc_hscode": "120100",
     "description": "SOYA BEANS W\/N BROKEN"
    },
    {
     "chapter": "12",
     "itc_hscode": "120210",
     "description": "GROUND‐NUTS IN SHELL,NOT ROASTED\/COOKED"
    },
    {
     "chapter": "12",
     "itc_hscode": "120220",
     "description": "SHELLED GROUNDNUTS WHETHER OR NOT BROKEN"
    },
    {
     "chapter": "12",
     "itc_hscode": "120300",
     "description": "COPRA"
    },
    {
     "chapter": "12",
     "itc_hscode": "120400",
     "description": "LINSEED WHETHER OR NOT BROKEN"
    },
    {
     "chapter": "12",
     "itc_hscode": "120510",
     "description": "LOW ERVUCACID RAPE OR COLZA SEEDS"
    },
    {
     "chapter": "12",
     "itc_hscode": "120590",
     "description": "OTHER RAPE\/COLZA SEEDS W\/N BROKEN"
    },
    {
     "chapter": "12",
     "itc_hscode": "120600",
     "description": "SUNFLOWER SEEDS WHETHER OR NOT BROKEN"
    },
    {
     "chapter": "12",
     "itc_hscode": "120720",
     "description": "COTTON SEEDS W\/N BROKEN"
    },
    {
     "chapter": "12",
     "itc_hscode": "120740",
     "description": "SEASAMUM SEEDS W\/N BROKEN"
    },
    {
     "chapter": "12",
     "itc_hscode": "120750",
     "description": "MUSTARD SEEDS W\/N BROKEN"
    },
    {
     "chapter": "12",
     "itc_hscode": "120791",
     "description": "POPPY SEEDS W\/N BROKEN"
    },
    {
     "chapter": "12",
     "itc_hscode": "120799",
     "description": "OTHR OIL SEEDS & OLEGNUS FRUITS W\/N BROKN"
    },
    {
     "chapter": "12",
     "itc_hscode": "120810",
     "description": "FLOURS AND MEALS OF SOYA BEANS"
    },
    {
     "chapter": "12",
     "itc_hscode": "120890",
     "description": "OTHER FLOURS AND MEALS"
    },
    {
     "chapter": "12",
     "itc_hscode": "120910",
     "description": "SUGAR BEET SEED OF A KIND USED FOR SOWING"
    },
    {
     "chapter": "12",
     "itc_hscode": "120921",
     "description": "LUCERNE (ALFALFA) SEED OF FORAGE PLANTS"
    },
    {
     "chapter": "12",
     "itc_hscode": "120922",
     "description": "CLOVR (TRIFLIUM SPP) SEED OF FORAGE PLANTS"
    },
    {
     "chapter": "12",
     "itc_hscode": "120923",
     "description": "FESCUE SEED OF FORAGE PLANTS"
    },
    {
     "chapter": "12",
     "itc_hscode": "120924",
     "description": "KENTUCKY BLUE GRASS (POA PRATENSIS L) SEEDOF FORAGE PLANTS"
    },
    {
     "chapter": "12",
     "itc_hscode": "120925",
     "description": "RYE GRASS SEED OF FORAGE PLANTS"
    },
    {
     "chapter": "12",
     "itc_hscode": "120929",
     "description": "OTHR SEEDS OF FORAGE PLANTS"
    },
    {
     "chapter": "12",
     "itc_hscode": "120930",
     "description": "SEEDS OF HERBACEUS PLNTS CULTVTD FOR FLWRS"
    },
    {
     "chapter": "12",
     "itc_hscode": "120991",
     "description": "VEGETABLE SEEDS USED FOR SOWING"
    },
    {
     "chapter": "12",
     "itc_hscode": "120999",
     "description": "OTHR SEEDS,FRUIT & SPORES USED FOR SOWING"
    },
    {
     "chapter": "12",
     "itc_hscode": "121010",
     "description": "HOP CONES,FRESH\/DRIED,NEITHER GROUND NOR POWDERED NOR IN THE FORM OF PELLETS"
    },
    {
     "chapter": "12",
     "itc_hscode": "121020",
     "description": "HOP CONS FRSH\/DRID GRND PWDRD\/PELETS LUPLN"
    },
    {
     "chapter": "12",
     "itc_hscode": "121120",
     "description": "GINSNG ROOTS FRSH\/DRID W\/N CUT CRSHD\/PWDRD"
    },
    {
     "chapter": "12",
     "itc_hscode": "121130",
     "description": "COCA LEAF FRSH\/DRID W\/N CUT CRSHD\/PWDRD"
    },
    {
     "chapter": "12",
     "itc_hscode": "121140",
     "description": "POPY STRAW FRSH\/DRID W\/N CUT CRSHD\/PWDRD"
    },
    {
     "chapter": "12",
     "itc_hscode": "121190",
     "description": "OTHER : SEEDS :"
    },
    {
     "chapter": "12",
     "itc_hscode": "121220",
     "description": "SEAWEEDS AND OTHER ALGAE"
    },
    {
     "chapter": "12",
     "itc_hscode": "121291",
     "description": "SUGAR BEET"
    },
    {
     "chapter": "12",
     "itc_hscode": "121299",
     "description": "OTHR VEGTBL PRDCTS USD FOR HUMAN CONSMPTN"
    },
    {
     "chapter": "12",
     "itc_hscode": "121300",
     "description": "CEREAL STRAW & HUSKS UNPRPD W\/N CHOPPED GROUND PRESSED\/IN THE FORM OF PELLETS"
    },
    {
     "chapter": "12",
     "itc_hscode": "121410",
     "description": "LUCERNE (ALFALFA) MEAL & PELLETS"
    },
    {
     "chapter": "12",
     "itc_hscode": "121490",
     "description": "OTHR SWEDES MANGOLDS FDDR ROOTS HAY ETC"
    },
    {
     "chapter": "13",
     "itc_hscode": "130120",
     "description": "GUM ARABIC"
    },
    {
     "chapter": "13",
     "itc_hscode": "130190",
     "description": "OTHER : NATURAL GUMS :"
    },
    {
     "chapter": "13",
     "itc_hscode": "130211",
     "description": "SAPS & EXTRACTS OF OPIUM"
    },
    {
     "chapter": "13",
     "itc_hscode": "130212",
     "description": "SAPS & EXTRACTS OF LIQUORICE"
    },
    {
     "chapter": "13",
     "itc_hscode": "130213",
     "description": "SAPS & EXTRACTS OF HOPS"
    },
    {
     "chapter": "13",
     "itc_hscode": "130219",
     "description": "OTHER : EXTRACTS :"
    },
    {
     "chapter": "13",
     "itc_hscode": "130220",
     "description": "PECTIC SUBSTNCS PECTINTS & PECTATS"
    },
    {
     "chapter": "13",
     "itc_hscode": "130231",
     "description": "AGAR AGAR W\/N MODIFIED"
    },
    {
     "chapter": "13",
     "itc_hscode": "130239",
     "description": "OTHR MUCILAGS & THICKENRS WHTR\/NOT MODIFD, DERIVD FROM VEGTBL PRDCTS"
    },
    {
     "chapter": "14",
     "itc_hscode": "140110",
     "description": "BAMBOOS"
    },
    {
     "chapter": "14",
     "itc_hscode": "140120",
     "description": "RATTANS"
    },
    {
     "chapter": "14",
     "itc_hscode": "140190",
     "description": "OTHR VEGTBL MATRLS EXCL BAMBOO & RATTAN"
    },
    {
     "chapter": "14",
     "itc_hscode": "140420",
     "description": "COTTON LINTERS"
    },
    {
     "chapter": "14",
     "itc_hscode": "140490",
     "description": "OTHER VEGTBLE MATERIALS"
    },
    {
     "chapter": "15",
     "itc_hscode": "150100",
     "description": "HDNG NO.02.09 & 15.03"
    },
    {
     "chapter": "15",
     "itc_hscode": "150200",
     "description": "FATS OF BOVINE ANMLS SHEEP\/GOATS EXCLUDING HDNG NO. 15.03"
    },
    {
     "chapter": "15",
     "itc_hscode": "150410",
     "description": "FISH LIVER OILS & THEIR FRACTIONS"
    },
    {
     "chapter": "15",
     "itc_hscode": "150420",
     "description": "FATS & OILS & THEIR FRACTIONS OF FISH OTHR THAN LIVER OILS"
    },
    {
     "chapter": "15",
     "itc_hscode": "150430",
     "description": "FATS & OILS & THR FRACTNS OF MARINE MAMLS"
    },
    {
     "chapter": "15",
     "itc_hscode": "150500",
     "description": "WOOL GREASE & FATTY SUBSTNCS DERIVD THEREFROM(INCLUDING LANOLIN)"
    },
    {
     "chapter": "15",
     "itc_hscode": "150600",
     "description": "CHEMICALLY MODIFIED :"
    },
    {
     "chapter": "15",
     "itc_hscode": "150710",
     "description": "SOYA BEAN CRUDE OIL W\/N DEGUMMED"
    },
    {
     "chapter": "15",
     "itc_hscode": "150790",
     "description": "OTHER SOYA BEAN OIL AND ITS FRACTIONS"
    },
    {
     "chapter": "15",
     "itc_hscode": "150810",
     "description": "GROUND NUT OIL CRUDE"
    },
    {
     "chapter": "15",
     "itc_hscode": "150890",
     "description": "OTHR REFND GRND NUT OIL & ITS FRACTIONS"
    },
    {
     "chapter": "15",
     "itc_hscode": "150910",
     "description": "OLIVE OIL VIRGIN"
    },
    {
     "chapter": "15",
     "itc_hscode": "150990",
     "description": "OTHR OLIVE OIL & ITS FRACTNS(EXCLDG VRGN)"
    },
    {
     "chapter": "15",
     "itc_hscode": "151000",
     "description": "REFINED, BUT NOT CHEMICALLY MODIFIED,"
    },
    {
     "chapter": "15",
     "itc_hscode": "151110",
     "description": "CRUDE PALM OIL & ITS FRACTNS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151190",
     "description": "REFINED PALM OIL & ITS FRACTIONS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151211",
     "description": "CRUDE OIL OF SUNFLOWER & SAFFLOWER SEED"
    },
    {
     "chapter": "15",
     "itc_hscode": "151219",
     "description": "OTHER SUNFLWR AND SAFFLWR OIL AND THEIR FRCTNS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151221",
     "description": "COTN SD OIL CRUD W\/N GOSYPL HAS BEEN REMVD"
    },
    {
     "chapter": "15",
     "itc_hscode": "151229",
     "description": "OTHR COTTON SEED OIL & ITS FRACTIONS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151311",
     "description": "COCONUT (COPRA) CRUDE OIL & FRACTIONS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151319",
     "description": "COCONUT (COPRA) REFINED OIL & FRACTIONS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151321",
     "description": "CRUDE PALM KERNEL\/BABASU OIL & ITS FRACTNS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151329",
     "description": "REFND PALM KERNEL\/BABASU OIL & ITS FRACTNS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151411",
     "description": "CRUDE LOW ERUC ACID RAPE COLZA OIL & ITS FRACTIONS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151419",
     "description": "LOW ERUC ACID RAPE COLZA OIL & ITS FRACTNSOTHER THAN CRUDE"
    },
    {
     "chapter": "15",
     "itc_hscode": "151491",
     "description": "OTHR CRUDE COLZA MUSTERED RAPE SEED OILS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151499",
     "description": "OTHER RAPE, COLZA, MUSTERED OILS OTHER THAN CRUDE"
    },
    {
     "chapter": "15",
     "itc_hscode": "151511",
     "description": "CRUDE LINSEED OIL & ITS FRACTIONS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151519",
     "description": "OTHR LINSEED OIL & ITS FRACTIONS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151521",
     "description": "CRUDE MAIZE(CORN) OIL & ITS FRACTIONS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151529",
     "description": "OTHR MAIZE(CORN) OIL & ITS FRACTIONS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151530",
     "description": "CASTOR OIL AND ITS FRACTIONS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151550",
     "description": "SESAME OIL & ITS FRACTIONS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151590",
     "description": "OTHR FXD VEGTBL FATS & OILS & THR FRACTNS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151610",
     "description": "ANIMAL FATS AND OILS & THEIR FRACTIONS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151620",
     "description": "VEGTBL FATS & OILS & THEIR FRACTNS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151710",
     "description": "MARGARINE EXCLUDING LIQUID MARGARINE"
    },
    {
     "chapter": "15",
     "itc_hscode": "151790",
     "description": "OTHR EDBL MXR\/PRPNS OF ANML\/VEGTBL FATS\/ OILS\/OF FRACTNS OF DIFFRNT FATS\/OILS"
    },
    {
     "chapter": "15",
     "itc_hscode": "151800",
     "description": "EXCL HDG 1516; INEDIBLE MIXTURES"
    },
    {
     "chapter": "15",
     "itc_hscode": "152000",
     "description": "GLYCEROL, CRUDE; GLYCEROL WATERS & LYES"
    },
    {
     "chapter": "15",
     "itc_hscode": "152110",
     "description": "VEGETABLE WAXES"
    },
    {
     "chapter": "15",
     "itc_hscode": "152190",
     "description": "BEE WAX & OTHR INSCT WAXES & SPERMACETI"
    },
    {
     "chapter": "15",
     "itc_hscode": "152200",
     "description": "DEGRAS ; RESIDUES RESLTNG FRM THE TREATMNTOF FATTY SUBSTNCS OR ANM\/VEG WAXES"
    },
    {
     "chapter": "16",
     "itc_hscode": "160210",
     "description": "HOMOGENISED PREPARATIONS"
    },
    {
     "chapter": "16",
     "itc_hscode": "160220",
     "description": "PRPD\/PRSVD LIVER OF ANY ANIMAL"
    },
    {
     "chapter": "16",
     "itc_hscode": "160231",
     "description": "PRPD\/PRSVD POULTRY OF HDNG 0105 TURKEYS"
    },
    {
     "chapter": "16",
     "itc_hscode": "160232",
     "description": "PRPD\/PRSVD MEAT,MEAT OFAL\/BLOOD OF FWLS OF THE SPCS GALUS DMSTCS"
    },
    {
     "chapter": "16",
     "itc_hscode": "160239",
     "description": "OTHR PRPD\/PRSVD POULTRY OF HDNG NO 0105"
    },
    {
     "chapter": "16",
     "itc_hscode": "160241",
     "description": "PRPD\/PRSVD HAMS & CUTS OF SWINE"
    },
    {
     "chapter": "16",
     "itc_hscode": "160242",
     "description": "PRPD\/PRSVD SHOULDERS & CUTS OF SWINE"
    },
    {
     "chapter": "16",
     "itc_hscode": "160249",
     "description": "OTHER, INCLUDING MIXTURES"
    },
    {
     "chapter": "16",
     "itc_hscode": "160250",
     "description": "PRPD\/PRSVD MEAT,MEAT OFFAL OF BOVINE ANMLS"
    },
    {
     "chapter": "16",
     "itc_hscode": "160290",
     "description": "OTHER, INCLUDING PREPARATIONS OF BLOOD OF ANY ANIMAL"
    },
    {
     "chapter": "16",
     "itc_hscode": "160300",
     "description": "EXTRCTS & JUICES OF MEAT FISH CRUSTACEANS MOLLUSCS\/OTHER AQUATIC INVERTEBRATES"
    },
    {
     "chapter": "16",
     "itc_hscode": "160411",
     "description": "SALMN FISH WHL\/PIECS BT NT MNCD PRPD\/PRSVD"
    },
    {
     "chapter": "16",
     "itc_hscode": "160412",
     "description": "HERRING FISH WHL\/PCS BT NT MNCD PRPD\/PRSVD"
    },
    {
     "chapter": "16",
     "itc_hscode": "160413",
     "description": "SARDINES SRDNELLA & BRISLNG\/SPRTS WHOLE OR IN PIECES BUT NOT MINCED PRPD\/PRSVD"
    },
    {
     "chapter": "16",
     "itc_hscode": "160414",
     "description": "TUNAS SKPJACK\/ATLNTIC BONTO(SARDA SP) WHOLE\/PIECS BUT NOT MINCD PRPD\/PRSVD"
    },
    {
     "chapter": "16",
     "itc_hscode": "160415",
     "description": "MACKERAL WHL\/PCS NOT MINCD PRPD\/PRSVD"
    },
    {
     "chapter": "16",
     "itc_hscode": "160416",
     "description": "ANCHOVES WHL\/PCS NOT MINCD PRPD\/PRSVD"
    },
    {
     "chapter": "16",
     "itc_hscode": "160419",
     "description": "OTHR FISH,WHL\/PCS,NT MINCED,PRPD\/PRSVD"
    },
    {
     "chapter": "16",
     "itc_hscode": "160420",
     "description": "OTHER PREPARED OR PRESERVED FISH"
    },
    {
     "chapter": "16",
     "itc_hscode": "160430",
     "description": "CAVIR & CAVIR SUBSTUTS PRPD FROM FISH EGGS"
    },
    {
     "chapter": "16",
     "itc_hscode": "160510",
     "description": "CRAB PREPARED OR PRESERVED"
    },
    {
     "chapter": "16",
     "itc_hscode": "160520",
     "description": "SHRIMPS & PRAWNS PRPD OR PRSVD"
    },
    {
     "chapter": "16",
     "itc_hscode": "160530",
     "description": "LOBSTER PREPARED OR PRESERVED"
    },
    {
     "chapter": "16",
     "itc_hscode": "160540",
     "description": "OTHER CRUSTACEANS"
    },
    {
     "chapter": "16",
     "itc_hscode": "160590",
     "description": "MOLUSC OTHR AQTIC INVERTBRTS PRPD\/PRSVD"
    },
    {
     "chapter": "17",
     "itc_hscode": "170111",
     "description": "RAW CANE SUGR NT CONTNG FLVRNG\/COLRNG MATR"
    },
    {
     "chapter": "17",
     "itc_hscode": "170112",
     "description": "BEET SUGR RAW NT CONTNG FLVRNG\/COLRNG MATR"
    },
    {
     "chapter": "17",
     "itc_hscode": "170191",
     "description": "SUGR REFIND CONTNG FLVRNG OR CLRNG MATTER"
    },
    {
     "chapter": "17",
     "itc_hscode": "170199",
     "description": "SUGR REFIND NT CONTNG FRVRNG\/COLRNG MATTER"
    },
    {
     "chapter": "17",
     "itc_hscode": "170211",
     "description": "LACTS & LACTS SYRP CONTNG 99% OR MRE LACTSCALCTD ON THE DRY MATTER"
    },
    {
     "chapter": "17",
     "itc_hscode": "170219",
     "description": "LACTOSE AND LACTOSE SYRUP"
    },
    {
     "chapter": "17",
     "itc_hscode": "170220",
     "description": "MAPLE SUGAR & MAPLE SYRUP"
    },
    {
     "chapter": "17",
     "itc_hscode": "170240",
     "description": "LESS THAN 50%"
    },
    {
     "chapter": "17",
     "itc_hscode": "170250",
     "description": "CHEMICALLY PURE FRUCTOSE IN SOLID FORM"
    },
    {
     "chapter": "17",
     "itc_hscode": "170260",
     "description": "WEIGHT OF FRUCTOSE, EXCLUDING INVERT SU"
    },
    {
     "chapter": "17",
     "itc_hscode": "170290",
     "description": "THE DRY STATE 50% BY WEIGHT OF FRUCTOSE :"
    },
    {
     "chapter": "17",
     "itc_hscode": "170310",
     "description": "CANE MOLSES RSLTD FRM EXTRCTN\/RFNG OF SUGR"
    },
    {
     "chapter": "17",
     "itc_hscode": "170390",
     "description": "OTHR MOLSES RSLTD FRM EXTRCTN\/RFNG OF SUGR"
    },
    {
     "chapter": "17",
     "itc_hscode": "170410",
     "description": "CHEWING GUM W\/N SUGAR COATED"
    },
    {
     "chapter": "17",
     "itc_hscode": "170490",
     "description": "OTHER SUGR CNFCTNRY NT CONTAINING COCOA"
    },
    {
     "chapter": "18",
     "itc_hscode": "180100",
     "description": "COCOA BEANS WHOLE\/BROKEN RAW\/ROASTED"
    },
    {
     "chapter": "18",
     "itc_hscode": "180200",
     "description": "COCOA SHLLS HUSKS SKINS & OTHR COCOA WASTE"
    },
    {
     "chapter": "18",
     "itc_hscode": "180310",
     "description": "COCOA PASTE NOT DEFATTED"
    },
    {
     "chapter": "18",
     "itc_hscode": "180320",
     "description": "WHOLLY OR PARTLY DEFATTED COCOA PASTE"
    },
    {
     "chapter": "18",
     "itc_hscode": "180400",
     "description": "COCOA BUTTER FAT & OIL"
    },
    {
     "chapter": "18",
     "itc_hscode": "180500",
     "description": "COCOA PWDR NT CONTNG SUGAR\/SWTNG MATRL"
    },
    {
     "chapter": "18",
     "itc_hscode": "180610",
     "description": "COCOA PWDR CONTNG SUGAR\/OTHR SWTNG MATRL"
    },
    {
     "chapter": "18",
     "itc_hscode": "180620",
     "description": "BULKFORM IN CNTNRS ETC OF A CNTNT > 2KG"
    },
    {
     "chapter": "18",
     "itc_hscode": "180631",
     "description": "OTHR FOOD PRPN IN BLCKS SLBS\/BARS FLLED"
    },
    {
     "chapter": "18",
     "itc_hscode": "180632",
     "description": "OTHR FOOD PRPN IN BLCKS SLBS\/BARS NT FILD"
    },
    {
     "chapter": "18",
     "itc_hscode": "180690",
     "description": "OTHER :"
    },
    {
     "chapter": "19",
     "itc_hscode": "190110",
     "description": "FOOD PRPNS FR INFNT USE PUT UP FR RTL SALE"
    },
    {
     "chapter": "19",
     "itc_hscode": "190120",
     "description": "MIXES & DOUGHS FOR THE PREPARATION OF BAKER'S WARES OF HEADING NO 1905"
    },
    {
     "chapter": "19",
     "itc_hscode": "190190",
     "description": "OTHER MLT EXTRCT AND FOOD PRPNS"
    },
    {
     "chapter": "19",
     "itc_hscode": "190211",
     "description": "UNCOKD PSTA NTSTFD\/OTHRWSE PRPD CNTNG EGGS"
    },
    {
     "chapter": "19",
     "itc_hscode": "190219",
     "description": "OTHR UNCOOKD NOTSTFD\/OTHRWSE PRPD PSTA"
    },
    {
     "chapter": "19",
     "itc_hscode": "190220",
     "description": "STUFFED PASTA W\/N COOKD\/OTHRWSE PRPD"
    },
    {
     "chapter": "19",
     "itc_hscode": "190230",
     "description": "OTHER PASTA :"
    },
    {
     "chapter": "19",
     "itc_hscode": "190240",
     "description": "COUSCOUS WHETHER OR NOT PREPARED"
    },
    {
     "chapter": "19",
     "itc_hscode": "190410",
     "description": "PRPD FOODS OBTND BY SWLNG\/RSTNG OF CRLS"
    },
    {
     "chapter": "19",
     "itc_hscode": "190420",
     "description": "PRPD FOODS OBTND FRM ROASTD\/UNROASTD OR MXTR OR UNROASTD CRLS FLKS"
    },
    {
     "chapter": "19",
     "itc_hscode": "190430",
     "description": "BULGUR WHEAT"
    },
    {
     "chapter": "19",
     "itc_hscode": "190490",
     "description": "OTHER PRPD FOODS OBTND FROM RSTD CRL FLKS"
    },
    {
     "chapter": "19",
     "itc_hscode": "190510",
     "description": "CRISP BREAD"
    },
    {
     "chapter": "19",
     "itc_hscode": "190520",
     "description": "GINGERBREAD & THE LIKE"
    },
    {
     "chapter": "19",
     "itc_hscode": "190531",
     "description": "SWEET BISCUITS"
    },
    {
     "chapter": "19",
     "itc_hscode": "190532",
     "description": "WAFFLES AND WAFERS"
    },
    {
     "chapter": "19",
     "itc_hscode": "190540",
     "description": "RUSKS TOASTED BREAD & SMLR TOASTED PRDCTS"
    },
    {
     "chapter": "19",
     "itc_hscode": "190590",
     "description": "OTHR BREAD,PSTRY,RICE PAPR & SMLR PRODUCTS"
    },
    {
     "chapter": "20",
     "itc_hscode": "200110",
     "description": "CUCMBRS & GHRKNS PRPD\/PRSVD BY ACETIC ACID"
    },
    {
     "chapter": "20",
     "itc_hscode": "200190",
     "description": "OTHER EDIBLE PARTS OF PLANTS PREPARED OR PRESERVED BY VINEGAR\/ACETIC ACID"
    },
    {
     "chapter": "20",
     "itc_hscode": "200210",
     "description": "TOMATOES WHOLE OR IN PIECES"
    },
    {
     "chapter": "20",
     "itc_hscode": "200290",
     "description": "OTHER PRPD\/PRSVD TOMATOES"
    },
    {
     "chapter": "20",
     "itc_hscode": "200310",
     "description": "MUSHROOMS PREPD\/PRSVD"
    },
    {
     "chapter": "20",
     "itc_hscode": "200320",
     "description": "TRUFFLES PRPD\/PRSVD"
    },
    {
     "chapter": "20",
     "itc_hscode": "200390",
     "description": "OTHER MUSHROOMS AND TRUFRLES PRPD\/PRSVD"
    },
    {
     "chapter": "20",
     "itc_hscode": "200410",
     "description": "POTATOES PRPD\/PRSVD, FRZN"
    },
    {
     "chapter": "20",
     "itc_hscode": "200490",
     "description": "OTHER VEGETABLES AND MIXTURES OF VEGETABLES"
    },
    {
     "chapter": "20",
     "itc_hscode": "200510",
     "description": "HOMOGENISED VGTBLS,PRPD\/PRSVD, NT FRZN"
    },
    {
     "chapter": "20",
     "itc_hscode": "200520",
     "description": "POTATOES PRPD\/PRSVD, NOT FRZN"
    },
    {
     "chapter": "20",
     "itc_hscode": "200540",
     "description": "PEAS (PTSOM SATIVUM) PRPD\/PRSVD,NT FRZN"
    },
    {
     "chapter": "20",
     "itc_hscode": "200551",
     "description": "BEANS SHELLED PRPD\/PRSVD, NT FRZN"
    },
    {
     "chapter": "20",
     "itc_hscode": "200559",
     "description": "OTHR BEANS PRPD\/PRSVD,NT FRZN"
    },
    {
     "chapter": "20",
     "itc_hscode": "200560",
     "description": "ASPARAGUS PRPD\/PRSVD,NT FRZN"
    },
    {
     "chapter": "20",
     "itc_hscode": "200570",
     "description": "OLIVES PRPD\/PRSVD, NT FRZN"
    },
    {
     "chapter": "20",
     "itc_hscode": "200580",
     "description": "SWEET CORN PRPD\/PRSVD, NT FRZN"
    },
    {
     "chapter": "20",
     "itc_hscode": "200591",
     "description": "BAMBOO SHOOTS"
    },
    {
     "chapter": "20",
     "itc_hscode": "200599",
     "description": "OTHER"
    },
    {
     "chapter": "20",
     "itc_hscode": "200600",
     "description": "GLACE\/CRYSTALLISED)"
    },
    {
     "chapter": "20",
     "itc_hscode": "200710",
     "description": "HOMOGENISED PREPARATIONS"
    },
    {
     "chapter": "20",
     "itc_hscode": "200791",
     "description": "JAMS JELLIES MRMLDS ETC OF CITRUS FRUITS"
    },
    {
     "chapter": "20",
     "itc_hscode": "200799",
     "description": "OTHRS"
    },
    {
     "chapter": "20",
     "itc_hscode": "200811",
     "description": "GROUND NUTS , PRPD\/PRSVD"
    },
    {
     "chapter": "20",
     "itc_hscode": "200819",
     "description": "OTHER, INCLUDING MIXTURES:"
    },
    {
     "chapter": "20",
     "itc_hscode": "200820",
     "description": "PINE APPLES PREPARED OR PRESERVED"
    },
    {
     "chapter": "20",
     "itc_hscode": "200830",
     "description": "CITRUS FRUITS PREPARED OR PRESERVED"
    },
    {
     "chapter": "20",
     "itc_hscode": "200840",
     "description": "PEARS PREPARED OR PRESERVED"
    },
    {
     "chapter": "20",
     "itc_hscode": "200850",
     "description": "APRICOTS PREPARED OR PRESERVED"
    },
    {
     "chapter": "20",
     "itc_hscode": "200860",
     "description": "CHERRIES PREPARED OR PRESERVED"
    },
    {
     "chapter": "20",
     "itc_hscode": "200870",
     "description": "PEACHES PREPARED OR PRESERVED"
    },
    {
     "chapter": "20",
     "itc_hscode": "200880",
     "description": "STRAWBERRIES PREPARED OR PRESERVED"
    },
    {
     "chapter": "20",
     "itc_hscode": "200891",
     "description": "PALM HEARTS PREPARED OR PRESERVED"
    },
    {
     "chapter": "20",
     "itc_hscode": "200892",
     "description": "OTHR MXTRS OF FRUTS EXCL SUB‐HD NO 200819 PRPD\/PRSVD"
    },
    {
     "chapter": "20",
     "itc_hscode": "200899",
     "description": "OTHER: SQUASH :"
    },
    {
     "chapter": "20",
     "itc_hscode": "200911",
     "description": "ORANG JUIC FROZN"
    },
    {
     "chapter": "20",
     "itc_hscode": "200912",
     "description": "ORANG JUIC NOT FROZN VALUE NOT EXCEEDING 20"
    },
    {
     "chapter": "20",
     "itc_hscode": "200919",
     "description": "OTHER GRAPEFRUIT (INCLUDING POMELO) JUICE:"
    },
    {
     "chapter": "20",
     "itc_hscode": "200921",
     "description": "GRAPE FRUIT JUICE OF A BRIX VALUE NOT EXC.20"
    },
    {
     "chapter": "20",
     "itc_hscode": "200929",
     "description": "OTHER JUICE OF ANY OTHER SINGLE CITRUS FRUIT:"
    },
    {
     "chapter": "20",
     "itc_hscode": "200931",
     "description": "OTHER SINGLE CITRUS FRUIT JUICE VALUE NOT EXC.20"
    },
    {
     "chapter": "20",
     "itc_hscode": "200939",
     "description": "OTHER PINEAPPLE JUICE :"
    },
    {
     "chapter": "20",
     "itc_hscode": "200941",
     "description": "PINEAPPLE JUICE OF BRIX VALUE NOT EXC.20"
    },
    {
     "chapter": "20",
     "itc_hscode": "200949",
     "description": "OTHER PINEAPPLE JUICE VALUE >20"
    },
    {
     "chapter": "20",
     "itc_hscode": "200950",
     "description": "TOMATO JUICE"
    },
    {
     "chapter": "20",
     "itc_hscode": "200961",
     "description": "GRAPE JUICE(INCL. MUST) OF BRIX VALUE NOT EXC.30"
    },
    {
     "chapter": "20",
     "itc_hscode": "200969",
     "description": "OTHER APPLE JUICE :"
    },
    {
     "chapter": "20",
     "itc_hscode": "200971",
     "description": "APPLE JUICE OF BRIX VAL.NOT EXC.20"
    },
    {
     "chapter": "20",
     "itc_hscode": "200979",
     "description": "OTHER APPLE JUICE VAL.>20"
    },
    {
     "chapter": "20",
     "itc_hscode": "200980",
     "description": "JUICE OF ANY OTHR SINGLE FRUIT OR VEGTBL"
    },
    {
     "chapter": "20",
     "itc_hscode": "200990",
     "description": "MIXTRS OF JUICES UNFRMNTD NT CONTNG SPIRIT"
    },
    {
     "chapter": "21",
     "itc_hscode": "210111",
     "description": "EXTRCTS ESSNCS & CNCNTRTS OF COFFE"
    },
    {
     "chapter": "21",
     "itc_hscode": "210112",
     "description": "PRPN WTH A BASIS OF EXTRCTS ESSNCS OR CNCNTRTS OR WTH A BASIS OF COFFEE"
    },
    {
     "chapter": "21",
     "itc_hscode": "210120",
     "description": "CONCENTRATES OR WTH A BASIS OF TEA\/MATE"
    },
    {
     "chapter": "21",
     "itc_hscode": "210210",
     "description": "ACTIVE YEASTS"
    },
    {
     "chapter": "21",
     "itc_hscode": "210220",
     "description": "INACTV YEAST,OTHR SNGL‐CELL DEAD MICR‐ORG"
    },
    {
     "chapter": "21",
     "itc_hscode": "210230",
     "description": "PREPARED BAKING POWDERS"
    },
    {
     "chapter": "21",
     "itc_hscode": "210310",
     "description": "SOYA SAUCE"
    },
    {
     "chapter": "21",
     "itc_hscode": "210320",
     "description": "TOMATO KETCHUP & OTHER TOMATO SAUCES"
    },
    {
     "chapter": "21",
     "itc_hscode": "210330",
     "description": "MUSTARD FLOUR & MEAL & PREPARED MUSTARD"
    },
    {
     "chapter": "21",
     "itc_hscode": "210390",
     "description": "OTHR SAUCES & PREPARATIONS THERFOR MIXED CONDIMENTS & MIXED SEASONINGS"
    },
    {
     "chapter": "21",
     "itc_hscode": "210410",
     "description": "SOUPS & BROTHS & PREPARATIONS THEREFOR"
    },
    {
     "chapter": "21",
     "itc_hscode": "210420",
     "description": "HOMOGENISED COMPOSITE FOOD PREPARATIONS"
    },
    {
     "chapter": "21",
     "itc_hscode": "210500",
     "description": "ICE CREAM & OTHR EDBL ICE W\/N CONTNG COCOA"
    },
    {
     "chapter": "21",
     "itc_hscode": "210610",
     "description": "PROTEIN CONCNTRTS & TEXTURED PROTN SBSTNCS"
    },
    {
     "chapter": "21",
     "itc_hscode": "210690",
     "description": "OTHER FOOD PREPARATIONS"
    },
    {
     "chapter": "22",
     "itc_hscode": "220110",
     "description": "MINERAL WATERS & AERATED WATERS"
    },
    {
     "chapter": "22",
     "itc_hscode": "220190",
     "description": "OTHERS EXCL MINRL\/AERATED WATERS"
    },
    {
     "chapter": "22",
     "itc_hscode": "220210",
     "description": "FLVRD"
    },
    {
     "chapter": "22",
     "itc_hscode": "220290",
     "description": "OTHER SWEETND FLAVRD WATERS"
    },
    {
     "chapter": "22",
     "itc_hscode": "220300",
     "description": "BEER MADE FROM MALT"
    },
    {
     "chapter": "22",
     "itc_hscode": "220410",
     "description": "SPARKLING WINE"
    },
    {
     "chapter": "22",
     "itc_hscode": "220421",
     "description": "ADDTNOF ALCOHL IN CONTNRS HOLDNG 2 LTRS\/LESS"
    },
    {
     "chapter": "22",
     "itc_hscode": "220429",
     "description": "ADDTNOF ALCOHL IN CONTNRS HOLDNG EXCS 2 LTRS"
    },
    {
     "chapter": "22",
     "itc_hscode": "220430",
     "description": "OTHER GRAPE MUST"
    },
    {
     "chapter": "22",
     "itc_hscode": "220510",
     "description": "VERMOUTH & OTHR WINE OF FRSH GRAPES FLVRD IN CONTNR HOLDING 2 LTR OR LESS"
    },
    {
     "chapter": "22",
     "itc_hscode": "220590",
     "description": "OTHER VERMOUTH AND OTHR WINE OF FRSH GRAPES FLVRD"
    },
    {
     "chapter": "22",
     "itc_hscode": "220600",
     "description": "BEVERAGES AND NON‐ALCOHOLIC BEVERAGES"
    },
    {
     "chapter": "22",
     "itc_hscode": "220710",
     "description": "UNDENATRD ETHYL ALCHL OF AN ALCHLC STRNGTH OF 80 PERCNT OR HIGHER BY VOL."
    },
    {
     "chapter": "22",
     "itc_hscode": "220720",
     "description": "ETHYL ALCHL & OTHR SPIRITS DENATURD OF ANYSTRUNGTH"
    },
    {
     "chapter": "22",
     "itc_hscode": "220820",
     "description": "SPRTS OBTND BY DISTLNG GRPE WINE\/GRPE MARC"
    },
    {
     "chapter": "22",
     "itc_hscode": "220830",
     "description": "WHISKIES"
    },
    {
     "chapter": "22",
     "itc_hscode": "220840",
     "description": "RUM & TAFIA"
    },
    {
     "chapter": "22",
     "itc_hscode": "220850",
     "description": "GIN & GENEVA"
    },
    {
     "chapter": "22",
     "itc_hscode": "220860",
     "description": "VODKA"
    },
    {
     "chapter": "22",
     "itc_hscode": "220870",
     "description": "LIQUEURS AND CORDIALS"
    },
    {
     "chapter": "22",
     "itc_hscode": "220890",
     "description": "OTHER UNDRD ETHYLE ACCHL"
    },
    {
     "chapter": "22",
     "itc_hscode": "220900",
     "description": "VINEGAR & SUBSTITUTES FOR VINEGAR OBTAINED FROM ACETIC ACID"
    },
    {
     "chapter": "23",
     "itc_hscode": "230110",
     "description": "FLRS MEAL & PELETS OF MEAT\/MEAT OFFL;GRVS"
    },
    {
     "chapter": "23",
     "itc_hscode": "230120",
     "description": "FLOURS MEALS & PELLETS OF FISH CRUSTACEANSMOLLUSCS\/OTHR AQUATIC INVERTEBRATES"
    },
    {
     "chapter": "23",
     "itc_hscode": "230210",
     "description": "BRAN SHARPS & OTHR RESIDUES OF MAIZE(CORN)"
    },
    {
     "chapter": "23",
     "itc_hscode": "230230",
     "description": "BRAN SHARPS & OTHR RESIDUES OF WHEAT"
    },
    {
     "chapter": "23",
     "itc_hscode": "230240",
     "description": "BRAN SHARPS&OTHR RESIDUES OF OTHR CEREALS"
    },
    {
     "chapter": "23",
     "itc_hscode": "230250",
     "description": "BRAN SHRPS & OTHR RESDUS OF LEGMINUS PLNTS"
    },
    {
     "chapter": "23",
     "itc_hscode": "230310",
     "description": "RESDUS OF STARCH MNUFCTR & SMLR RESIDUES"
    },
    {
     "chapter": "23",
     "itc_hscode": "230320",
     "description": "BEET‐PULP BGSSE & OTHR WAST OF SUGR MNFCTR"
    },
    {
     "chapter": "23",
     "itc_hscode": "230330",
     "description": "BREWING OR DISTILLING DREGS & WASTE"
    },
    {
     "chapter": "23",
     "itc_hscode": "230610",
     "description": "OIL‐CAKE & OTHR RESDUS OF COTTON SEEDS"
    },
    {
     "chapter": "23",
     "itc_hscode": "230620",
     "description": "OIL‐CAKE & OTHR RESDUS OF LINSEED"
    },
    {
     "chapter": "23",
     "itc_hscode": "230630",
     "description": "OIL‐CAKE & RESIDUES OF SUN FLOWER SEEDS"
    },
    {
     "chapter": "23",
     "itc_hscode": "230641",
     "description": "LOW ERUCIC ACID OF RAPE OR COLZA SEEDS"
    },
    {
     "chapter": "23",
     "itc_hscode": "230649",
     "description": "OTHER RESIDUES OF RAPE OR COLZA SEEDS"
    },
    {
     "chapter": "23",
     "itc_hscode": "230650",
     "description": "OIL‐CAKE & OTHR RESIDUES OF COCNT\/COPRA"
    },
    {
     "chapter": "23",
     "itc_hscode": "230660",
     "description": "OIL‐CAKE & OTHR RESIDUE OF PALM NUT\/KERNEL"
    },
    {
     "chapter": "23",
     "itc_hscode": "230690",
     "description": "OIL‐CAKE & OTHR RESDUS RESLTNG FROM EXTRCTN OF OTHR OIL‐SEED & OLEGNS FRUTS"
    },
    {
     "chapter": "23",
     "itc_hscode": "230700",
     "description": "WINE LEES ARGOL"
    },
    {
     "chapter": "23",
     "itc_hscode": "230800",
     "description": "VEG,MATERIALS &VEG. WASTE\/RESIDUES FOR ANIMAL FEEDINGNES"
    },
    {
     "chapter": "23",
     "itc_hscode": "230910",
     "description": "DOG OR CAT FOOD PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "23",
     "itc_hscode": "230990",
     "description": "OTHR PRPNS OF A KIND USED IN ANML FEEDING"
    },
    {
     "chapter": "24",
     "itc_hscode": "240110",
     "description": "TOBACCO NOT STEMMED \/ STRIPPED"
    },
    {
     "chapter": "24",
     "itc_hscode": "240120",
     "description": "TOBACCO PARTLY OR WHOLLY STEMMED\/STRIPPED"
    },
    {
     "chapter": "24",
     "itc_hscode": "240130",
     "description": "TOBACCO REFUSE"
    },
    {
     "chapter": "24",
     "itc_hscode": "240210",
     "description": "CIGAR CHEROOT & CIGARILLOS CNTNG TOBACCO"
    },
    {
     "chapter": "24",
     "itc_hscode": "240220",
     "description": "CIGARETTES CONTAINING TOBACCO"
    },
    {
     "chapter": "24",
     "itc_hscode": "240290",
     "description": "CIGARS CHEROOTS CIGARILLOS & CIGARETTES OF TOBACCO SUBSTITUTES"
    },
    {
     "chapter": "24",
     "itc_hscode": "240310",
     "description": "SMOKING TOBACCO W\/N CONTNG TOBACO SUBSTUS"
    },
    {
     "chapter": "24",
     "itc_hscode": "240391",
     "description": "HOMOGENISED OR \"RECONSTITUTED\" TOBACCO"
    },
    {
     "chapter": "24",
     "itc_hscode": "240399",
     "description": "OTHR MNFRD TOBACO EXTRCTS & ESSNCS NES"
    },
    {
     "chapter": "25",
     "itc_hscode": "250100",
     "description": "SALT (INCL TABLE SALT & DENATRD SALT) & PURE SODIM CHLRDE W\/N AQS SOLN SEA WTR"
    },
    {
     "chapter": "25",
     "itc_hscode": "250200",
     "description": "UNROASTED IRON PYRITES"
    },
    {
     "chapter": "25",
     "itc_hscode": "250410",
     "description": "NATRL IN PWDR GRPHITE\/IN FLAKES"
    },
    {
     "chapter": "25",
     "itc_hscode": "250490",
     "description": "OTHER NATURAL GRAPHITE"
    },
    {
     "chapter": "25",
     "itc_hscode": "250510",
     "description": "SILICA SANDS & QUARTZ SANDS"
    },
    {
     "chapter": "25",
     "itc_hscode": "250590",
     "description": "OTHER NATRL SANDS NES"
    },
    {
     "chapter": "25",
     "itc_hscode": "250610",
     "description": "QUARTZ"
    },
    {
     "chapter": "25",
     "itc_hscode": "250620",
     "description": "QUARTZITE :"
    },
    {
     "chapter": "25",
     "itc_hscode": "250700",
     "description": "KAOLIN\/KAOLINIC CLAY W\/N CALCINED"
    },
    {
     "chapter": "25",
     "itc_hscode": "250810",
     "description": "BENTONITE"
    },
    {
     "chapter": "25",
     "itc_hscode": "250830",
     "description": "FIRE CLAY"
    },
    {
     "chapter": "25",
     "itc_hscode": "250840",
     "description": "OTHER CLAYS :"
    },
    {
     "chapter": "25",
     "itc_hscode": "250850",
     "description": "ANDALUSITE KYANITE & SILLIMANITE"
    },
    {
     "chapter": "25",
     "itc_hscode": "250860",
     "description": "MULLITE"
    },
    {
     "chapter": "25",
     "itc_hscode": "250870",
     "description": "CHAMOTTE OR DINAS EARTHS"
    },
    {
     "chapter": "25",
     "itc_hscode": "250900",
     "description": "CHALK"
    },
    {
     "chapter": "25",
     "itc_hscode": "251010",
     "description": "CHALK,UNGROUND"
    },
    {
     "chapter": "25",
     "itc_hscode": "251020",
     "description": "GROUND NATRL CAL PHOSPHATES NATRL ALMNM CALCIUM PHOSPHATE & PHOSPHATIC CHALK"
    },
    {
     "chapter": "25",
     "itc_hscode": "251110",
     "description": "NATURAL BARIUM SULHPATE (BARYTES)"
    },
    {
     "chapter": "25",
     "itc_hscode": "251120",
     "description": "NATURAL BARIUM CARBONATE (WITHERITE)"
    },
    {
     "chapter": "25",
     "itc_hscode": "251200",
     "description": "APPRNT SPCIFIC GRVTY OF 1 OR LESS"
    },
    {
     "chapter": "25",
     "itc_hscode": "251310",
     "description": "PUMICE STONE"
    },
    {
     "chapter": "25",
     "itc_hscode": "251400",
     "description": "RCTNGLR & SQ SHAPE"
    },
    {
     "chapter": "25",
     "itc_hscode": "251511",
     "description": "MARBLE & TRAVERTINE CRUDE\/ROUGHLY TRIMMD"
    },
    {
     "chapter": "25",
     "itc_hscode": "251520",
     "description": "ECAUSSINE & OTHER CALCAREOUS MONUMENTAL OR BUILDING STONE ALABASTER"
    },
    {
     "chapter": "25",
     "itc_hscode": "251611",
     "description": "GRANITE CRUDE OR ROUGHLY TRIMMED"
    },
    {
     "chapter": "25",
     "itc_hscode": "251612",
     "description": "GRANITE MERELY CUT INTO BLOCK\/SLABS OF RECTANGULAR (INCL SQR) SHAPE"
    },
    {
     "chapter": "25",
     "itc_hscode": "251620",
     "description": "SANDSTONE"
    },
    {
     "chapter": "25",
     "itc_hscode": "251690",
     "description": "OTHER MONUMENTAL OR BUILDING STONE :"
    },
    {
     "chapter": "25",
     "itc_hscode": "251710",
     "description": "BALAST SHINGLE & FLINT W\/N HEAT‐TREATED"
    },
    {
     "chapter": "25",
     "itc_hscode": "251730",
     "description": "TARRED MACADAM"
    },
    {
     "chapter": "25",
     "itc_hscode": "251741",
     "description": "GRANULES CHPPING & POWDR OF MARBLE"
    },
    {
     "chapter": "25",
     "itc_hscode": "251749",
     "description": "OTHR GRANULES CHIPPINGS & PWDR OF STONES OF HDG NO 2515\/2516 W\/N HEAT‐TREATED"
    },
    {
     "chapter": "25",
     "itc_hscode": "251810",
     "description": "DOLOMITE NOT CALCINED OR SINTERED"
    },
    {
     "chapter": "25",
     "itc_hscode": "251820",
     "description": "CALCINED OR SINTERED DOLOMITE"
    },
    {
     "chapter": "25",
     "itc_hscode": "251830",
     "description": "DOLOMITE RAMMING MIX"
    },
    {
     "chapter": "25",
     "itc_hscode": "251910",
     "description": "NATURAL MAGNESIUM CARBONATE(MAGNESITE)"
    },
    {
     "chapter": "25",
     "itc_hscode": "251990",
     "description": "OTHER MAGNESIUM"
    },
    {
     "chapter": "25",
     "itc_hscode": "252010",
     "description": "GYPSUM; ANHYDRITE"
    },
    {
     "chapter": "25",
     "itc_hscode": "252020",
     "description": "PLASTERS"
    },
    {
     "chapter": "25",
     "itc_hscode": "252100",
     "description": "LIME\/CEMENT"
    },
    {
     "chapter": "25",
     "itc_hscode": "252210",
     "description": "QUICKLIME"
    },
    {
     "chapter": "25",
     "itc_hscode": "252220",
     "description": "SLAKED LIME"
    },
    {
     "chapter": "25",
     "itc_hscode": "252230",
     "description": "HYDRAULIC LIME"
    },
    {
     "chapter": "25",
     "itc_hscode": "252310",
     "description": "CEMENT CLINKERS"
    },
    {
     "chapter": "25",
     "itc_hscode": "252321",
     "description": "WHITE CEMENT W\/N ARTIFICIALLY CLRD"
    },
    {
     "chapter": "25",
     "itc_hscode": "252329",
     "description": "OTHER PORTLAND CEMENT"
    },
    {
     "chapter": "25",
     "itc_hscode": "252330",
     "description": "ALUMINOUS CEMENT"
    },
    {
     "chapter": "25",
     "itc_hscode": "252390",
     "description": "OTHER HYDRAULIC CEMENTS:"
    },
    {
     "chapter": "25",
     "itc_hscode": "252410",
     "description": "CROCIDOLITE"
    },
    {
     "chapter": "25",
     "itc_hscode": "252490",
     "description": "OTHER"
    },
    {
     "chapter": "25",
     "itc_hscode": "252510",
     "description": "CRUDE MICA & MICA RIFTED INTO SHEETSOR SPLITTINGS"
    },
    {
     "chapter": "25",
     "itc_hscode": "252520",
     "description": "MICA POWDER"
    },
    {
     "chapter": "25",
     "itc_hscode": "252530",
     "description": "MICA WASTE"
    },
    {
     "chapter": "25",
     "itc_hscode": "252610",
     "description": "NATRL STEATITE NOT CRUSHED NOT PWDRD"
    },
    {
     "chapter": "25",
     "itc_hscode": "252620",
     "description": "NATRL STEATITE CRUSHED\/POWDERED"
    },
    {
     "chapter": "25",
     "itc_hscode": "252810",
     "description": "NATURAL SODIUM BORATES & COWCENTRATES (W\/N CALCINED)"
    },
    {
     "chapter": "25",
     "itc_hscode": "252890",
     "description": "OTHER NATRL BORATES AND CNCRTS THEREOF"
    },
    {
     "chapter": "25",
     "itc_hscode": "252910",
     "description": "FELSPAR"
    },
    {
     "chapter": "25",
     "itc_hscode": "252921",
     "description": "FLUORSPAR CNTNG BY WT 97 PRCNT OR LESS OF CALCIUM FLUORIDE"
    },
    {
     "chapter": "25",
     "itc_hscode": "252922",
     "description": "FLUORSPAR CNTNG BY WT MORE THAN 97 PERCENT OF CALCIUM FLUORIDE"
    },
    {
     "chapter": "25",
     "itc_hscode": "252930",
     "description": "LEUCITE NEPHELINE & NEPHELINE SYENITE"
    },
    {
     "chapter": "25",
     "itc_hscode": "253010",
     "description": "VERMICULITE PERLITE & CHLORITS UNEXPNDED"
    },
    {
     "chapter": "25",
     "itc_hscode": "253020",
     "description": "KIESERITE EPSOMITE (NATRL MAG SULPHATES)"
    },
    {
     "chapter": "25",
     "itc_hscode": "253090",
     "description": "OTHER MINERAL SUBSTANCES"
    },
    {
     "chapter": "26",
     "itc_hscode": "260111",
     "description": "IRON ORES & CONCENTRATS NON‐AGGLOMERATED OTHER THAN ROASTED IRON PYRITES TON"
    },
    {
     "chapter": "26",
     "itc_hscode": "260112",
     "description": "IRON ORE & CONCENTRATES AGGLOMERATED TON"
    },
    {
     "chapter": "26",
     "itc_hscode": "260120",
     "description": "ROASTED IRON PYRITES TON"
    },
    {
     "chapter": "26",
     "itc_hscode": "260200",
     "description": "PERCNTOR MORE CALCULTED ON THE DRY WEIGHT"
    },
    {
     "chapter": "26",
     "itc_hscode": "260300",
     "description": "COPPER ORES & CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "260400",
     "description": "NICKEL ORES & CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "260500",
     "description": "COBALT ORES & CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "260600",
     "description": "ALUMINIUM ORES & CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "260700",
     "description": "LEAD ORES & CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "260800",
     "description": "ZINC ORES & CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "260900",
     "description": "TIN ORES & CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "261000",
     "description": "CHROMIUM ORES & CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "261100",
     "description": "TUNGSTEN ORES & CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "261210",
     "description": "URANIUM ORES & CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "261220",
     "description": "THORIUM ORES & CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "261310",
     "description": "MOLYBDNUM ORES & CONCENTRATES ROASTED"
    },
    {
     "chapter": "26",
     "itc_hscode": "261390",
     "description": "OTHER MOLYBDENUM ORES AND CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "261400",
     "description": "TITANIUM ORES & CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "261510",
     "description": "ZIRCONIUM ORES & CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "261590",
     "description": "OTHER NIOBIUM,TNTIUM,VNDIUM ORES AND CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "261610",
     "description": "SILVER ORES & CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "261690",
     "description": "OTHR PRECIOUS METAL ORES & CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "261710",
     "description": "ANTIMONY ORES & CONCNRTS"
    },
    {
     "chapter": "26",
     "itc_hscode": "261790",
     "description": "ALL OTHER ORES AND CONCENTRATES"
    },
    {
     "chapter": "26",
     "itc_hscode": "261800",
     "description": "GRNULATD SLAG(SLAG SAND) FROM IRON\/STEEL"
    },
    {
     "chapter": "26",
     "itc_hscode": "262011",
     "description": "HARD ZINC SPELTER"
    },
    {
     "chapter": "26",
     "itc_hscode": "262019",
     "description": "OTHER CONTAINING MAINLY LEAD :"
    },
    {
     "chapter": "26",
     "itc_hscode": "262021",
     "description": "LEADED GASOLINE SLUDGES & ANTI KNOOK COMP.SLUDGES"
    },
    {
     "chapter": "26",
     "itc_hscode": "262029",
     "description": "OTHER ASHR RESIDUE CONTAINING MAINLY LEAD"
    },
    {
     "chapter": "26",
     "itc_hscode": "262030",
     "description": "ASH & RESIDUES CONTNG MAINLY COPPER"
    },
    {
     "chapter": "26",
     "itc_hscode": "262040",
     "description": "ASH & RESIDUES CONTNG MAINLY OF ALUMINIUM"
    },
    {
     "chapter": "26",
     "itc_hscode": "262060",
     "description": "COMP."
    },
    {
     "chapter": "26",
     "itc_hscode": "262091",
     "description": "CONTNG ANTIMONY,RERYLLIUM,CADMIUM,CHROMIUMOR THEIR MIXTURES"
    },
    {
     "chapter": "26",
     "itc_hscode": "262099",
     "description": "ALL OTHER ASH & RESIDUES (EXCEPT FROM IRON &STEEL ) CONTNG METALS AND THEIR COMP"
    },
    {
     "chapter": "26",
     "itc_hscode": "262110",
     "description": "ASH & RESIDUES FROM INCINERATION OF MUNICIPAL WASTE"
    },
    {
     "chapter": "26",
     "itc_hscode": "262190",
     "description": "ASH & RESIDUES FROM INCINERATION OF OTHERTHAN MUNICIPAL WASTE"
    },
    {
     "chapter": "27",
     "itc_hscode": "270111",
     "description": "ANTHRCITE COAL W\/N PULVRSD BUT NT AGLOMRTD TON"
    },
    {
     "chapter": "27",
     "itc_hscode": "270112",
     "description": "BITUMNS COAL W\/N PULVRSD BUT NT AGLOMRTD TON"
    },
    {
     "chapter": "27",
     "itc_hscode": "270119",
     "description": "OTHER COAL: TON"
    },
    {
     "chapter": "27",
     "itc_hscode": "270120",
     "description": "BRIQUETS OVTIDS & SMLR SLD FUILS FROM COAL TON"
    },
    {
     "chapter": "27",
     "itc_hscode": "270210",
     "description": "LIGNITE W\/N PULVRSD BUT NOT AGLOMRTD TON"
    },
    {
     "chapter": "27",
     "itc_hscode": "270220",
     "description": "AGGLOMERATED LIGNITE TON"
    },
    {
     "chapter": "27",
     "itc_hscode": "270300",
     "description": "PEAT(INCLDNG PEAT LITTER) W\/N AGLOMRTD TON"
    },
    {
     "chapter": "27",
     "itc_hscode": "270400",
     "description": "COKE & SEMI\/COKE OF COAL\/LIGNITE\/PEAT W\/N AGGLOMERATED;RETORT CARBON TON"
    },
    {
     "chapter": "27",
     "itc_hscode": "270600",
     "description": "DISTILLD INCLUDING RECONSTITUTED TARS"
    },
    {
     "chapter": "27",
     "itc_hscode": "270710",
     "description": "BANZOLE (BENZENE)"
    },
    {
     "chapter": "27",
     "itc_hscode": "270720",
     "description": "TOLUOLE (TOLUENE)"
    },
    {
     "chapter": "27",
     "itc_hscode": "270730",
     "description": "XYLOLE (XYLENES)"
    },
    {
     "chapter": "27",
     "itc_hscode": "270740",
     "description": "NAPTHALENE"
    },
    {
     "chapter": "27",
     "itc_hscode": "270750",
     "description": "250 DGR.C. BY THE ASTM D 86 METHOD"
    },
    {
     "chapter": "27",
     "itc_hscode": "270791",
     "description": "CREOSOTE OILS"
    },
    {
     "chapter": "27",
     "itc_hscode": "270799",
     "description": "OTHR OIL & OIL PROCUCTS OF DISTILLATION OFHIGH TEMP COAL TAR ETC"
    },
    {
     "chapter": "27",
     "itc_hscode": "270810",
     "description": "PITCH"
    },
    {
     "chapter": "27",
     "itc_hscode": "270820",
     "description": "PITCH COKE"
    },
    {
     "chapter": "27",
     "itc_hscode": "270900",
     "description": "PETROLEUM OILS & OILS OBTAINED FROM BITUMINOUS MINERALS CRUDE TON"
    },
    {
     "chapter": "27",
     "itc_hscode": "271011",
     "description": "LIGHT OILS AND PREPARATIONS TON"
    },
    {
     "chapter": "27",
     "itc_hscode": "271019",
     "description": "OTHER PETROLEUM OILS AND OILS OBTAIND FROMBITUMINOUS MINERALS ETC TON"
    },
    {
     "chapter": "27",
     "itc_hscode": "271091",
     "description": "POLYBROMINATED BIPHENYLS (PBBS) TON"
    },
    {
     "chapter": "27",
     "itc_hscode": "271099",
     "description": "OTHER WASTE OIL TON"
    },
    {
     "chapter": "27",
     "itc_hscode": "271111",
     "description": "LIQUIFIED NATURAL GAS"
    },
    {
     "chapter": "27",
     "itc_hscode": "271112",
     "description": "LIQUIFIED PROPANE"
    },
    {
     "chapter": "27",
     "itc_hscode": "271113",
     "description": "LIQUIFIED BUTANES"
    },
    {
     "chapter": "27",
     "itc_hscode": "271114",
     "description": "LQFD ETHYLNE PROPYLENE BUTYLENE & BUTADENE"
    },
    {
     "chapter": "27",
     "itc_hscode": "271119",
     "description": "OTHER IN GASEOUS STATE :"
    },
    {
     "chapter": "27",
     "itc_hscode": "271121",
     "description": "NATURAL GAS IN GASEOUS STATE"
    },
    {
     "chapter": "27",
     "itc_hscode": "271210",
     "description": "PETROLEUM JELLY"
    },
    {
     "chapter": "27",
     "itc_hscode": "271220",
     "description": "PARFFN WAX CNTNG BY WT <0.75 PRCNT OIL"
    },
    {
     "chapter": "27",
     "itc_hscode": "271311",
     "description": "PETROLEUM COKE NOT CALCINED"
    },
    {
     "chapter": "27",
     "itc_hscode": "271312",
     "description": "PETROLEUM COKE CALCINED"
    },
    {
     "chapter": "27",
     "itc_hscode": "271320",
     "description": "PETROLEUM BITUMEN"
    },
    {
     "chapter": "27",
     "itc_hscode": "271390",
     "description": "OTHER RESIDUES OF PETROLEUM OILS OR OF OILS OBTAINED FROM BITUMINOUS MINERALS"
    },
    {
     "chapter": "27",
     "itc_hscode": "271410",
     "description": "BITUMINOUS OR OIL SHALE & TAR SANDS"
    },
    {
     "chapter": "27",
     "itc_hscode": "271490",
     "description": "OTHER BITUMEN AND ASPHALT NATURAL ASPHATITES AND ASPHALTIC ROCKS"
    },
    {
     "chapter": "27",
     "itc_hscode": "271500",
     "description": "MNRLTAR PITCH(E.G.BITUMINOUS MASTICS CUT‐BACKS"
    },
    {
     "chapter": "27",
     "itc_hscode": "271600",
     "description": "ELECTRICAL ENERGY"
    },
    {
     "chapter": "28",
     "itc_hscode": "280110",
     "description": "CHLORINE"
    },
    {
     "chapter": "28",
     "itc_hscode": "280120",
     "description": "IODINE"
    },
    {
     "chapter": "28",
     "itc_hscode": "280130",
     "description": "FLUORINE BROMINE"
    },
    {
     "chapter": "28",
     "itc_hscode": "280200",
     "description": "SULPHUR SUBLIMD\/PRECPTATED COLLDL SULPHUR"
    },
    {
     "chapter": "28",
     "itc_hscode": "280300",
     "description": "CARBON (CARBON BLACKS & OTHR FORMS NES)"
    },
    {
     "chapter": "28",
     "itc_hscode": "280410",
     "description": "HYDROGEN"
    },
    {
     "chapter": "28",
     "itc_hscode": "280421",
     "description": "ARGON (RARE GASES)"
    },
    {
     "chapter": "28",
     "itc_hscode": "280429",
     "description": "OTHER RARE GASES"
    },
    {
     "chapter": "28",
     "itc_hscode": "280430",
     "description": "NITROGEN"
    },
    {
     "chapter": "28",
     "itc_hscode": "280440",
     "description": "OXYGEN"
    },
    {
     "chapter": "28",
     "itc_hscode": "280450",
     "description": "BORON TELLURIUM"
    },
    {
     "chapter": "28",
     "itc_hscode": "280461",
     "description": "SILICON CONTNG MORE THAN99.99% BY WT OF SILICON"
    },
    {
     "chapter": "28",
     "itc_hscode": "280469",
     "description": "OTHER SILICON"
    },
    {
     "chapter": "28",
     "itc_hscode": "280470",
     "description": "PHOSPHORUS"
    },
    {
     "chapter": "28",
     "itc_hscode": "280480",
     "description": "ARSENIC"
    },
    {
     "chapter": "28",
     "itc_hscode": "280490",
     "description": "SELENIUM"
    },
    {
     "chapter": "28",
     "itc_hscode": "280511",
     "description": "SODIUM"
    },
    {
     "chapter": "28",
     "itc_hscode": "280512",
     "description": "CALCIUM"
    },
    {
     "chapter": "28",
     "itc_hscode": "280519",
     "description": "OTHER ALKALI\/ALKALINE ‐EARTH METALS"
    },
    {
     "chapter": "28",
     "itc_hscode": "280530",
     "description": "RARE‐EARTH METALS SCANDIUM & YTTRIUM W\/N INTERMIXED\/INTERALLOYED"
    },
    {
     "chapter": "28",
     "itc_hscode": "280540",
     "description": "MERCURY"
    },
    {
     "chapter": "28",
     "itc_hscode": "280610",
     "description": "HYDROGEN CHLORIDE(HYDROCHLORIC ACID)"
    },
    {
     "chapter": "28",
     "itc_hscode": "280620",
     "description": "CHLORO‐SULPHURIC ACID"
    },
    {
     "chapter": "28",
     "itc_hscode": "280700",
     "description": "SULPHURIC ACID; OLEUM"
    },
    {
     "chapter": "28",
     "itc_hscode": "280800",
     "description": "NITRIC ACID SULPHONITRIC ACIDS"
    },
    {
     "chapter": "28",
     "itc_hscode": "280910",
     "description": "DIPHOSPHORUS PENIAOXIDE"
    },
    {
     "chapter": "28",
     "itc_hscode": "280920",
     "description": "PHOSPHORIC ACID & POLYPHOSPHORIC ACIDS"
    },
    {
     "chapter": "28",
     "itc_hscode": "281000",
     "description": "OXIDES OF BORON BORIC ACIDS"
    },
    {
     "chapter": "28",
     "itc_hscode": "281111",
     "description": "HYDROGEN FLUORIDE(HYDROFLUORIC ACID)"
    },
    {
     "chapter": "28",
     "itc_hscode": "281119",
     "description": "OTHER INORGANIC ACIDS"
    },
    {
     "chapter": "28",
     "itc_hscode": "281121",
     "description": "CARBON DIOXIDE"
    },
    {
     "chapter": "28",
     "itc_hscode": "281122",
     "description": "SILICON DIOXIDE"
    },
    {
     "chapter": "28",
     "itc_hscode": "281129",
     "description": "OTHER INORGANIC OXYGEN CMPNDS OF NON‐MTLS"
    },
    {
     "chapter": "28",
     "itc_hscode": "281210",
     "description": "CHLORIDES & CHLORIDE OXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "281290",
     "description": "OTHR HALIDES & HALIDES OXIDES OF NON‐MTLS"
    },
    {
     "chapter": "28",
     "itc_hscode": "281310",
     "description": "CARBON DISULPHIDE"
    },
    {
     "chapter": "28",
     "itc_hscode": "281390",
     "description": "OTHER SULPHIDES OF NON‐METALS"
    },
    {
     "chapter": "28",
     "itc_hscode": "281410",
     "description": "ANHYDROUS AMMONIA"
    },
    {
     "chapter": "28",
     "itc_hscode": "281420",
     "description": "AMMONIA IN AQUEOUS SOLUTION"
    },
    {
     "chapter": "28",
     "itc_hscode": "281511",
     "description": "SOLID SODIUM HYDROXIDE (CAUSTIC SODA)"
    },
    {
     "chapter": "28",
     "itc_hscode": "281512",
     "description": "NAOH IN AQS SOLN (SODA LYE OR LQD SODA)"
    },
    {
     "chapter": "28",
     "itc_hscode": "281520",
     "description": "POTASSIUM HYPROXIDE (CAUSTIC POTASH)"
    },
    {
     "chapter": "28",
     "itc_hscode": "281530",
     "description": "PEROXIDES OF SODIUM OR POTASSIUM"
    },
    {
     "chapter": "28",
     "itc_hscode": "281610",
     "description": "HYDROXIDE & PEROXIDE OF MAGNESIUM"
    },
    {
     "chapter": "28",
     "itc_hscode": "281640",
     "description": "OXIDES,HYDROXIDES & PEROXIDE OF STRONTIUM OR BARIUM"
    },
    {
     "chapter": "28",
     "itc_hscode": "281700",
     "description": "ZINC OXIDE & ZINC PEROXIDE"
    },
    {
     "chapter": "28",
     "itc_hscode": "281810",
     "description": "ARTIFICIAL CORUNDUM W\/N CHEMICALLY DEFINED"
    },
    {
     "chapter": "28",
     "itc_hscode": "281820",
     "description": "ALUMINIUM OXIDE OTHER THAN ARTIFICIAL CORUNDUM"
    },
    {
     "chapter": "28",
     "itc_hscode": "281830",
     "description": "ALUMINIUM HYDROXIDE"
    },
    {
     "chapter": "28",
     "itc_hscode": "281910",
     "description": "CHROMIUM TRIOXIDE"
    },
    {
     "chapter": "28",
     "itc_hscode": "281990",
     "description": "OTHER CHROMIUM OXIDES AND HYDROXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "282010",
     "description": "MANGANESE DIOXIDE"
    },
    {
     "chapter": "28",
     "itc_hscode": "282090",
     "description": "OTHER MANGANESE OXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "282110",
     "description": "IRON OXIDES AND HYDROXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "282120",
     "description": "EARTH COLOURS"
    },
    {
     "chapter": "28",
     "itc_hscode": "282200",
     "description": "COBALT OXIDE & HYDROXDE,COMRCL COBLT OXIDE"
    },
    {
     "chapter": "28",
     "itc_hscode": "282300",
     "description": "TITANIUM OXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "282410",
     "description": "LEAD MONOXIDE (LITHARGE,MASSICOT)"
    },
    {
     "chapter": "28",
     "itc_hscode": "282490",
     "description": "OTHR LEAD OXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "282510",
     "description": "HYDRAZINE HYCROXYLAMINE & THR INORGNC SLTS"
    },
    {
     "chapter": "28",
     "itc_hscode": "282520",
     "description": "LITHIUM OXIDE & HYDROXIDE"
    },
    {
     "chapter": "28",
     "itc_hscode": "282530",
     "description": "VANADIUM OXIDES & HYDROXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "282540",
     "description": "NICKEL OXIDES AND HYDROXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "282550",
     "description": "COPPER OXIDES AND HYDROXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "282560",
     "description": "GERMANIUM OXIDES AND ZIRCONIUM DIOXIDE"
    },
    {
     "chapter": "28",
     "itc_hscode": "282570",
     "description": "MOLYBDENUM OXIDES AND HYDROXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "282580",
     "description": "ANTIMONY OXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "282590",
     "description": "OTHER INORGANIC BASES METAL OXIDES HYDROXIDES AND PEROXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "282612",
     "description": "FLUORIDES OF ALUMINIUM"
    },
    {
     "chapter": "28",
     "itc_hscode": "282619",
     "description": "OTHER FLUORIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "282630",
     "description": "SODIUM HEXAFLUOROALUMINATE"
    },
    {
     "chapter": "28",
     "itc_hscode": "282690",
     "description": "OTHR COMPLEX FLUORINE SALTS"
    },
    {
     "chapter": "28",
     "itc_hscode": "282710",
     "description": "AMMONIUM CHLORIDE"
    },
    {
     "chapter": "28",
     "itc_hscode": "282720",
     "description": "CALCIUM CHLORIDE"
    },
    {
     "chapter": "28",
     "itc_hscode": "282731",
     "description": "CHLORIDES OF MAGNESIUM"
    },
    {
     "chapter": "28",
     "itc_hscode": "282732",
     "description": "CHLORIDES OF ALUMINIUM"
    },
    {
     "chapter": "28",
     "itc_hscode": "282735",
     "description": "CHLORIDE OF NICKEL"
    },
    {
     "chapter": "28",
     "itc_hscode": "282739",
     "description": "OTHER CHLORIDE; NES"
    },
    {
     "chapter": "28",
     "itc_hscode": "282741",
     "description": "CHLORIDE OXIDS & CHLRIDE HYDROXDS OF COPPR"
    },
    {
     "chapter": "28",
     "itc_hscode": "282749",
     "description": "OTHER CHLORIDE OXIDES AND CHLORID HYDROXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "282751",
     "description": "BROMIDES OF SODIUM OR OF POTASSIUM"
    },
    {
     "chapter": "28",
     "itc_hscode": "282759",
     "description": "OTHR BROMIDES & BROMIDE OXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "282760",
     "description": "IODIDES & IODIDE OXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "282810",
     "description": "COMMRCL CAL HYPCHLRTE & OTHR CAL HYPCHLRTS"
    },
    {
     "chapter": "28",
     "itc_hscode": "282890",
     "description": "OTHR CHLORITES,HYPOCHLORITES&HYPOBROMITES"
    },
    {
     "chapter": "28",
     "itc_hscode": "282911",
     "description": "SODIUM CHLORATE"
    },
    {
     "chapter": "28",
     "itc_hscode": "282919",
     "description": "OTHER CHLORATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "282990",
     "description": "OTHER PERCHLORITES,BROMATES,PERBROMATES IODATES AND PERIODATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "283010",
     "description": "SODIUM SULPHIDE"
    },
    {
     "chapter": "28",
     "itc_hscode": "283090",
     "description": "OTHER SULPHIDES AND POLYSULPHIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "283110",
     "description": "DITHONITES AND SULPHOXYLATES OF SODIUM"
    },
    {
     "chapter": "28",
     "itc_hscode": "283190",
     "description": "OTHER DITHIONITES AND SULPHOXYLATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "283210",
     "description": "SODIUM SULPHITE"
    },
    {
     "chapter": "28",
     "itc_hscode": "283220",
     "description": "OTHER SULPHITES :"
    },
    {
     "chapter": "28",
     "itc_hscode": "283230",
     "description": "THIOSULPHATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "283311",
     "description": "DISODIUM SULPHATE"
    },
    {
     "chapter": "28",
     "itc_hscode": "283319",
     "description": "OTHER SODIUM SULPHATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "283321",
     "description": "MAGNESIUM SULPHATE"
    },
    {
     "chapter": "28",
     "itc_hscode": "283322",
     "description": "ALUMINIUM SULPHATE"
    },
    {
     "chapter": "28",
     "itc_hscode": "283324",
     "description": "NICKEL SULPHATE"
    },
    {
     "chapter": "28",
     "itc_hscode": "283325",
     "description": "COPPER SULPHATE"
    },
    {
     "chapter": "28",
     "itc_hscode": "283327",
     "description": "BARIUM SULPHATE"
    },
    {
     "chapter": "28",
     "itc_hscode": "283329",
     "description": "OTHER SULPHATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "283330",
     "description": "ALUMS"
    },
    {
     "chapter": "28",
     "itc_hscode": "283340",
     "description": "PEROXOSULPHATES (PERSULPHATES)"
    },
    {
     "chapter": "28",
     "itc_hscode": "283410",
     "description": "NITRITES"
    },
    {
     "chapter": "28",
     "itc_hscode": "283421",
     "description": "POTASSIUM NITRATE"
    },
    {
     "chapter": "28",
     "itc_hscode": "283429",
     "description": "OTHER NITRATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "283510",
     "description": "PHOSPHINATES CHYPHOPHOSPHITES) AND PHOSPHONATES (PHOSPHITES)"
    },
    {
     "chapter": "28",
     "itc_hscode": "283522",
     "description": "MONO OR DISODIUM PHOSPHATE"
    },
    {
     "chapter": "28",
     "itc_hscode": "283524",
     "description": "POTASSIUM PHOSPHATE"
    },
    {
     "chapter": "28",
     "itc_hscode": "283525",
     "description": "CALCIUM HYDROGENORTHO PHOSPHATE (\"DICALCIUM PHOSPHATE\")"
    },
    {
     "chapter": "28",
     "itc_hscode": "283526",
     "description": "OTHER PHOSPHATES OF CALCIUM :"
    },
    {
     "chapter": "28",
     "itc_hscode": "283529",
     "description": "OTHER PHOSPHATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "283531",
     "description": "SODIUM TRIPHOSPHATE( SODIUM TRIPLYPHOSPHAE"
    },
    {
     "chapter": "28",
     "itc_hscode": "283539",
     "description": "OTHER POLYPHOSPHATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "283620",
     "description": "DISODIUM CARBONATE"
    },
    {
     "chapter": "28",
     "itc_hscode": "283630",
     "description": "SODIUM HYDROGEN CARBONATE (SODIUM BICARBONATE)"
    },
    {
     "chapter": "28",
     "itc_hscode": "283640",
     "description": "POTASSIUM CARBONATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "283650",
     "description": "CALCIUM CARBONATE"
    },
    {
     "chapter": "28",
     "itc_hscode": "283660",
     "description": "BARIUM CARBONATE"
    },
    {
     "chapter": "28",
     "itc_hscode": "283691",
     "description": "LITHIUM CARBONATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "283692",
     "description": "STRONTIUM CARBONATE"
    },
    {
     "chapter": "28",
     "itc_hscode": "283699",
     "description": "OTHER CARBONATES PERCARBONATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "283711",
     "description": "CYANIDES&CYANIDE OXIDE OF SODIUM"
    },
    {
     "chapter": "28",
     "itc_hscode": "283719",
     "description": "OTHER CYANIDES AND CYANIDE OXIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "283720",
     "description": "COMPLEX CYANIDES"
    },
    {
     "chapter": "28",
     "itc_hscode": "283911",
     "description": "SODIUM METASILICATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "283919",
     "description": "OTHER SODIUM SILICATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "283990",
     "description": "OTHER SILICATES AND COMMERCL MTL SILICATS"
    },
    {
     "chapter": "28",
     "itc_hscode": "284011",
     "description": "DISIDIUM TETRABORATES (RFND BORAX), ANHYDROUS"
    },
    {
     "chapter": "28",
     "itc_hscode": "284019",
     "description": "OTHER DISODIUM TETRABORATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "284020",
     "description": "OTHER BORATES :"
    },
    {
     "chapter": "28",
     "itc_hscode": "284030",
     "description": "PEROXOBORATES (PERBORATES)"
    },
    {
     "chapter": "28",
     "itc_hscode": "284130",
     "description": "SODIUM DICHROMATE"
    },
    {
     "chapter": "28",
     "itc_hscode": "284150",
     "description": "OTHER CHROMATES AND DICHROMATES; PEROXOCHROMATES :"
    },
    {
     "chapter": "28",
     "itc_hscode": "284161",
     "description": "POTASSIUM PERMANGANATE"
    },
    {
     "chapter": "28",
     "itc_hscode": "284170",
     "description": "MOLYBDATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "284180",
     "description": "TUNGSTATES (WOLFRAMATES)"
    },
    {
     "chapter": "28",
     "itc_hscode": "284190",
     "description": "OTHR SALTS OF OXOMTLC\/PEROXOMTLC ACIDS NES"
    },
    {
     "chapter": "28",
     "itc_hscode": "284210",
     "description": "DOUBLE OR COMPLEX SILICATES INCL. ALUMINOSILICATES"
    },
    {
     "chapter": "28",
     "itc_hscode": "284290",
     "description": "OTHR SALTS OF INORGANIC ACIDS\/PEROXOACIDS"
    },
    {
     "chapter": "28",
     "itc_hscode": "284310",
     "description": "COLLOIDAL PRECIOUS METALS"
    },
    {
     "chapter": "28",
     "itc_hscode": "284321",
     "description": "SILVER NITRATE"
    },
    {
     "chapter": "28",
     "itc_hscode": "284329",
     "description": "OTHER COMPOUND OF SILVER"
    },
    {
     "chapter": "28",
     "itc_hscode": "284330",
     "description": "GOLD COMPOUNDS"
    },
    {
     "chapter": "28",
     "itc_hscode": "284390",
     "description": "OTHER COMPOUNDS; AMALGAMS :"
    },
    {
     "chapter": "28",
     "itc_hscode": "284410",
     "description": "NATRL URANIUM\/NATRL URANIUM CMPNDS"
    },
    {
     "chapter": "28",
     "itc_hscode": "284420",
     "description": "CERMETS),CERAMIC PRDCTS & MXTRS"
    },
    {
     "chapter": "28",
     "itc_hscode": "284430",
     "description": "CERMETS),CERAMIC PRDCTS & MXTRS"
    },
    {
     "chapter": "28",
     "itc_hscode": "284440",
     "description": "CERAMIC PRDCTS & MIXTURES;RADIOACTVE RSDUS"
    },
    {
     "chapter": "28",
     "itc_hscode": "284450",
     "description": "SPENT((IRRADIATED) FUEL ELEMENTS (CARTRIDGES)OF NUCLEAR REACTORS"
    },
    {
     "chapter": "28",
     "itc_hscode": "284510",
     "description": "HEAVY WATER(DEUTERIUM OXIDE)"
    },
    {
     "chapter": "28",
     "itc_hscode": "284590",
     "description": "OTHER ISOTOPES ETC"
    },
    {
     "chapter": "28",
     "itc_hscode": "284610",
     "description": "CERIUM COMPOUNDS"
    },
    {
     "chapter": "28",
     "itc_hscode": "284690",
     "description": "MTLS"
    },
    {
     "chapter": "28",
     "itc_hscode": "284700",
     "description": "HYDROGEN PEROXIDE W\/N SOLIDIFIED WITH UREA"
    },
    {
     "chapter": "28",
     "itc_hscode": "284800",
     "description": "PHSPHIDS,W\/N CHMCLY DFND,EXCL FERO‐PHSPHRS"
    },
    {
     "chapter": "28",
     "itc_hscode": "284910",
     "description": "CARBIDES OF CALCIUM W\/N CHMCLY DEFINED"
    },
    {
     "chapter": "28",
     "itc_hscode": "284920",
     "description": "CARBIDES OF SILICON W\/N CHMCLY DEFINED"
    },
    {
     "chapter": "28",
     "itc_hscode": "284990",
     "description": "OTHER CARBIDES W\/N CHMCLY DEFINED"
    },
    {
     "chapter": "28",
     "itc_hscode": "285000",
     "description": "HYDRIDES NITRIDES AZIDES SILICIDES & BORIDES W\/N CHEMCALLY DEFINED"
    },
    {
     "chapter": "28",
     "itc_hscode": "285200",
     "description": "COMPOUNDS, INORGANIC OR ORGANIC, OF MERCURY, EXCLUDING AMALGAMS"
    },
    {
     "chapter": "28",
     "itc_hscode": "285300",
     "description": "OF SIMILAR PURITY); LIQUID AIR"
    },
    {
     "chapter": "29",
     "itc_hscode": "290110",
     "description": "SATURATED ACYCLIC HYDROCARBONS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290121",
     "description": "UNSATURATED ETHYLENE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290122",
     "description": "UNSATURATED PROPENE (PROPYLENE)"
    },
    {
     "chapter": "29",
     "itc_hscode": "290123",
     "description": "UNSTRD BUTENE (BUTYLENE)& ISOMERS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "290124",
     "description": "UNSTRD BUTS‐1 3‐DIENE AND ISOPRENE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290129",
     "description": "OTHER ACYCLIC HYDROCARBONS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290211",
     "description": "CYCLOHEXANE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290219",
     "description": "OTHER CYCLANES,CYCLENES AND CYCLOTERPENES"
    },
    {
     "chapter": "29",
     "itc_hscode": "290220",
     "description": "BENZENE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290230",
     "description": "TOLUENE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290241",
     "description": "O‐XYLENE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290242",
     "description": "M‐XYLENE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290243",
     "description": "P‐XYLENE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290244",
     "description": "MIXED XYLENE ISOMERS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290250",
     "description": "STYRENE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290260",
     "description": "ETHYLBENZENE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290270",
     "description": "CUMENE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290290",
     "description": "OTHER CYCLIC HYDROCARBONS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290311",
     "description": "SATURATED CHLOROMTHN(MTHYL CHLRD) & CHLOROETHANE (ETHYL CHLORIDE)"
    },
    {
     "chapter": "29",
     "itc_hscode": "290312",
     "description": "DICHLOROMETHANE (METHYLENE CHLORIDE)"
    },
    {
     "chapter": "29",
     "itc_hscode": "290313",
     "description": "CHLOROFORM (TRICHLOROMETHANE)"
    },
    {
     "chapter": "29",
     "itc_hscode": "290314",
     "description": "CARBON TETRACHLORIDE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290315",
     "description": "1,2 DICHLOROMETHANE (CETHYLNE DICHLORIDE)"
    },
    {
     "chapter": "29",
     "itc_hscode": "290319",
     "description": "OTHER CHLOROMETHANE AND CHLOROETHANE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290321",
     "description": "VINYL CHLORIDE (CHLOROETHYLENE),UNSTRTD"
    },
    {
     "chapter": "29",
     "itc_hscode": "290322",
     "description": "TRICHLOROETHYLENE,UNSATURATED"
    },
    {
     "chapter": "29",
     "itc_hscode": "290323",
     "description": "TETRACHLOROETHANE (PERCHLOROETHYLENE ) , UNSATRTD"
    },
    {
     "chapter": "29",
     "itc_hscode": "290329",
     "description": "OTHER UNSATURATED CHLORINATED DERIVATIVES OF ACYCLIC HYDROCARBONS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290331",
     "description": "ETHYLENE DIBROMIDE (ISO) (1, 2‐ DIBROMOETHANE)"
    },
    {
     "chapter": "29",
     "itc_hscode": "290339",
     "description": "OTHER: FLUORINATED DERIVATIVES:"
    },
    {
     "chapter": "29",
     "itc_hscode": "290341",
     "description": "TRICHLORO FLUORO METHANE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290342",
     "description": "DICHLORO DIFLUORO ETHANE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290343",
     "description": "TRICHLORO TRIFLUORO ETHANE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290344",
     "description": "DICHLORO TETRA FLUORO ETHANE AND CHLORO PENTA FLUORO ETHANE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290345",
     "description": "OTHER DERIVATIVES PERHALOGENATED ONLY WITH FLUORINE AND CHLORINE :"
    },
    {
     "chapter": "29",
     "itc_hscode": "290346",
     "description": "FLUOROETHANE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290347",
     "description": "OTHER PERHALOGENATED DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "290349",
     "description": "OTHERDICHLOROTETRAFLUOROETHANE ETC"
    },
    {
     "chapter": "29",
     "itc_hscode": "290351",
     "description": "1,2,3,4,5,6‐HEXACHLOROCYCLOHEXANE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290352",
     "description": "ALDRIN (ISO), CHLORDANE (ISO) AND HEPTACHLOR (ISO)"
    },
    {
     "chapter": "29",
     "itc_hscode": "290359",
     "description": "OTHR HALOGNTD DRVTVS OF CYCLANIC,CYCLENIC"
    },
    {
     "chapter": "29",
     "itc_hscode": "290361",
     "description": "CHLOROBENZENE O‐DICHLOROBENZENE AND P‐DICHLOROBENZENE"
    },
    {
     "chapter": "29",
     "itc_hscode": "290362",
     "description": "HEXACHLOROBENZENE&DDT(1,1,1‐TRICHLORO‐2, 2‐BIS (P‐CHLOROPHENYL) ETHANE)"
    },
    {
     "chapter": "29",
     "itc_hscode": "290369",
     "description": "OTHR HALGNTD DRVTVS OF ARMTC HYDROCARBON"
    },
    {
     "chapter": "29",
     "itc_hscode": "290410",
     "description": "DRVTVS CNTNG ONLY SULPHO GROUPS, THEIR SALTS AND ETHYL ESTERS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290420",
     "description": "DRVTVS CNTNG ONLY NITRO\/NITROSO GRPS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290490",
     "description": "OTHR SULPHONTD NITRTD\/NITRSTD DRVTVS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290511",
     "description": "SATURATED METHANOL (METHYL ALCOHOL)"
    },
    {
     "chapter": "29",
     "itc_hscode": "290512",
     "description": "SATURATED PROPAN‐1OL(PROPYL ALCOHOL) AND PROPAN‐2‐OL (ISOPROPYL ALCOHOL)"
    },
    {
     "chapter": "29",
     "itc_hscode": "290513",
     "description": "SATURATED BUTAN‐1‐OL(N‐BUTYL ALCOHOL)"
    },
    {
     "chapter": "29",
     "itc_hscode": "290514",
     "description": "OTHER BUTANOLS :"
    },
    {
     "chapter": "29",
     "itc_hscode": "290516",
     "description": "SATRTD OCTNL(OCTYL ALCHL)& ISMRS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "290517",
     "description": "SATRTD DDCAN‐1‐OL(LRYL‐ALCHL)HXADECAN‐1‐OL(CETYL ALCHL)&OCTDECN‐1‐OL(STRYL ALCHL)"
    },
    {
     "chapter": "29",
     "itc_hscode": "290519",
     "description": "OTHR SATURTED MONOHYDYDRIC ALCHOL"
    },
    {
     "chapter": "29",
     "itc_hscode": "290522",
     "description": "UNSATURATD ACYCLIC TERPENE ALCOHOLS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290529",
     "description": "OTHER UNSATURATED MONOHYDRIC ALCOHOLS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290531",
     "description": "ETHYLENE GLYCOL (ETHANEDIOL)"
    },
    {
     "chapter": "29",
     "itc_hscode": "290532",
     "description": "PRPPYLENE GLYCOL (PROPANE‐1,2‐DIOL)"
    },
    {
     "chapter": "29",
     "itc_hscode": "290539",
     "description": "OTHER DIOLS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290541",
     "description": "2‐ETHYL‐2‐(HYDROXYMETHYL)PROPANE‐1, 3‐DIOL (TRIMETHYLOLPROPANE)"
    },
    {
     "chapter": "29",
     "itc_hscode": "290542",
     "description": "PENTAERYTHRITOL"
    },
    {
     "chapter": "29",
     "itc_hscode": "290543",
     "description": "MANNITOL"
    },
    {
     "chapter": "29",
     "itc_hscode": "290544",
     "description": "D‐GLUCITOL (SORBITOL)"
    },
    {
     "chapter": "29",
     "itc_hscode": "290545",
     "description": "GLYCEROL"
    },
    {
     "chapter": "29",
     "itc_hscode": "290549",
     "description": "OTHER POLYHYDRIC ALCOHOLS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290551",
     "description": "ETHCHLORVYNOL (INN)"
    },
    {
     "chapter": "29",
     "itc_hscode": "290559",
     "description": "OTHER ACYLIC ALCOHOLS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290611",
     "description": "MENTHOL"
    },
    {
     "chapter": "29",
     "itc_hscode": "290612",
     "description": "CYCLHXNL MTHYLCYCLHXNLS&DIMTHYL CYCLHXNLS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290613",
     "description": "STEROLS AND INOSITOLS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290619",
     "description": "OTHR CYCLNIC,CYCLENIC\/CYCLOTRPNC ALCHLS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290621",
     "description": "BENZYL ALCOHOL"
    },
    {
     "chapter": "29",
     "itc_hscode": "290629",
     "description": "OTHER AROMATIC ALCOHOL"
    },
    {
     "chapter": "29",
     "itc_hscode": "290711",
     "description": "PHENOL (HYDROXYBENZENE) AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290712",
     "description": "CRESOLS AND THEIR SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290713",
     "description": "OCTYLPHNL NONYLPHNL & THR ISOMERS,SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290715",
     "description": "NAPHTHOLS AND THEIR SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290719",
     "description": "OTHER MONOPHENOLS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290721",
     "description": "RESORCINOL AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290722",
     "description": "HYDROQUINONE (QUINOL) AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290723",
     "description": "4,4‐ISOPROPYLIDENEPHNL (BISPHNL A, DIPHENYLOLPROPANE) AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290729",
     "description": "OTHER POLYPHENOLS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290811",
     "description": "PENTACHLOROPHENOL (ISO)"
    },
    {
     "chapter": "29",
     "itc_hscode": "290819",
     "description": "OTHER"
    },
    {
     "chapter": "29",
     "itc_hscode": "290891",
     "description": "DINOSEB (ISO) AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290899",
     "description": "OTHER:"
    },
    {
     "chapter": "29",
     "itc_hscode": "290911",
     "description": "DIETHYL ETHER"
    },
    {
     "chapter": "29",
     "itc_hscode": "290919",
     "description": "OTHR ACYCLIC ETHRS & THR HALGNTD,SLPHNTD NITRATED OR NITROSATED DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "290920",
     "description": "CYCLANIC,CYCLENIC\/CYCLTRPENC ETHRS & THIR HALGNTD SLPHNTD NITRTD\/NITRSTD DRVTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290930",
     "description": "ARMTC ETHRS & THR HALGNTD SLPHNTD NITRATED OR NITROSATED DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "290941",
     "description": "2,2‐OXYDIETHANOL (DIETHYLENE GLYCOL,DIGOL)"
    },
    {
     "chapter": "29",
     "itc_hscode": "290943",
     "description": "MONOBUTYL ETHERS OF ETHYLENE GLYCOL OR OF DIETHYLENE GLYCOL"
    },
    {
     "chapter": "29",
     "itc_hscode": "290944",
     "description": "OTHER MONOALKYLETHERS OF ETHYLENE GLYCOL OR OF DIETHYLENE GLYCOL"
    },
    {
     "chapter": "29",
     "itc_hscode": "290949",
     "description": "OTHR ETHR‐ALCHLS & THR HALGNTD SLPHNTD NITRATED OR NITROSATED DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "290950",
     "description": "ETHR‐PHNLS,ETHR‐ALCHL‐PHNLS & THR HALGNTD SLPHNTD NITRTD\/NITRSTD DRVTVS"
    },
    {
     "chapter": "29",
     "itc_hscode": "290960",
     "description": "OR NITROSATED DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "291010",
     "description": "OXIRANE (ETHYLENE OXIDE)"
    },
    {
     "chapter": "29",
     "itc_hscode": "291020",
     "description": "METHYLOXIRANE (PROPYLENE OXIDE)"
    },
    {
     "chapter": "29",
     "itc_hscode": "291030",
     "description": "1‐CHLORO‐2,3‐EPOXYPRPNE(EPICHLOROPHYDRIN)"
    },
    {
     "chapter": "29",
     "itc_hscode": "291040",
     "description": "DIELDRIN (ISO, INN)"
    },
    {
     "chapter": "29",
     "itc_hscode": "291090",
     "description": "OTHER EPOXIDES,EPOXY ALCHLS ETC"
    },
    {
     "chapter": "29",
     "itc_hscode": "291100",
     "description": "DRVTVS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291211",
     "description": "METHANAL (FORMALDEHYDE)"
    },
    {
     "chapter": "29",
     "itc_hscode": "291212",
     "description": "ETHANAL (ACETALDEHYDE)"
    },
    {
     "chapter": "29",
     "itc_hscode": "291219",
     "description": "OTHR ACYCLIC ALDHYDS WTHOUT OXYGEN FNCTN"
    },
    {
     "chapter": "29",
     "itc_hscode": "291221",
     "description": "BENZALDEHYDE"
    },
    {
     "chapter": "29",
     "itc_hscode": "291229",
     "description": "OTHR CYCLC ALDHYDS WTHOUT OTHR OXYGN FNCTN"
    },
    {
     "chapter": "29",
     "itc_hscode": "291230",
     "description": "ALDEHYDE‐ALCOHOLS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291241",
     "description": "VANILLIN(4‐HYDROXY‐3METHOXY BENZALDEHYDE)"
    },
    {
     "chapter": "29",
     "itc_hscode": "291242",
     "description": "ETHYLVANILIN (3‐ETHOXY‐4‐HYDROXYBNZLDHYD)"
    },
    {
     "chapter": "29",
     "itc_hscode": "291249",
     "description": "OTHR ALDHYD‐ETHR,ALDHYD‐PHNL& OTHR ALDHYD"
    },
    {
     "chapter": "29",
     "itc_hscode": "291250",
     "description": "CYCLIC POLYMERSOF ALDEHYDES"
    },
    {
     "chapter": "29",
     "itc_hscode": "291260",
     "description": "PARA FORMALDEHYDE"
    },
    {
     "chapter": "29",
     "itc_hscode": "291300",
     "description": "HALGNTD SLPHNTD NITRTD\/NITRSTD DRVTVS OF PRODUCTS OF HEADING NO. 2912"
    },
    {
     "chapter": "29",
     "itc_hscode": "291411",
     "description": "ACETONE"
    },
    {
     "chapter": "29",
     "itc_hscode": "291412",
     "description": "BUTANONE (METHYL ETHYL KETONE)"
    },
    {
     "chapter": "29",
     "itc_hscode": "291413",
     "description": "4‐MTHYLPENTAN‐2‐ONE(MTHYL ISOBTYL KETONE)"
    },
    {
     "chapter": "29",
     "itc_hscode": "291419",
     "description": "OTHR ACYLC KETONES WTHOUT OTHR OXYGN FNCTN"
    },
    {
     "chapter": "29",
     "itc_hscode": "291421",
     "description": "CAMPHOR"
    },
    {
     "chapter": "29",
     "itc_hscode": "291422",
     "description": "CYCLOHEXANONE AND METHYL CYCLOHEXANONES"
    },
    {
     "chapter": "29",
     "itc_hscode": "291423",
     "description": "IONONES AND METHYLIONONES"
    },
    {
     "chapter": "29",
     "itc_hscode": "291429",
     "description": "OTHER CYCLANIC CYCLENIC\/CYCLOTRPNC KETONES WITHOUT OTHER OXYGEN FUNCTION"
    },
    {
     "chapter": "29",
     "itc_hscode": "291431",
     "description": "PHENYLACETONE"
    },
    {
     "chapter": "29",
     "itc_hscode": "291439",
     "description": "OTHR ARMTC KETONES WTHOUT OTHR OXYGEN FUNCTION"
    },
    {
     "chapter": "29",
     "itc_hscode": "291440",
     "description": "KETONE‐ALCOHOLS & KETONE ALDEHYDES"
    },
    {
     "chapter": "29",
     "itc_hscode": "291450",
     "description": "KETONE‐PHNLS & KETONS WTHOTHR OXYGN FNCTN"
    },
    {
     "chapter": "29",
     "itc_hscode": "291461",
     "description": "ANTHRAQUINONE"
    },
    {
     "chapter": "29",
     "itc_hscode": "291469",
     "description": "OTHER QUINONES"
    },
    {
     "chapter": "29",
     "itc_hscode": "291470",
     "description": "HALGNTD,SULPHNTD,NITRTD\/NITROSTD DRVTVS OF KETOKES AND QUINONES"
    },
    {
     "chapter": "29",
     "itc_hscode": "291511",
     "description": "FORMIC ACID"
    },
    {
     "chapter": "29",
     "itc_hscode": "291512",
     "description": "SALTS OF FORMIC ACID"
    },
    {
     "chapter": "29",
     "itc_hscode": "291513",
     "description": "ESTERS OF FORMIC ACID"
    },
    {
     "chapter": "29",
     "itc_hscode": "291521",
     "description": "ACETIC ACID"
    },
    {
     "chapter": "29",
     "itc_hscode": "291524",
     "description": "ACETIC ANHYDRIDE"
    },
    {
     "chapter": "29",
     "itc_hscode": "291529",
     "description": "OTHR ACETIC ACID & ITS SLTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291531",
     "description": "ETHYL ACETATE"
    },
    {
     "chapter": "29",
     "itc_hscode": "291532",
     "description": "VINYL ACETATE"
    },
    {
     "chapter": "29",
     "itc_hscode": "291533",
     "description": "N‐BUTYL ACETATE"
    },
    {
     "chapter": "29",
     "itc_hscode": "291536",
     "description": "DINOSEB (ISO) ACETATE"
    },
    {
     "chapter": "29",
     "itc_hscode": "291539",
     "description": "OTHER ESTERS OF ACETIC ACID"
    },
    {
     "chapter": "29",
     "itc_hscode": "291540",
     "description": "MONO‐DI\/TRCHLRACTC ACD,THR SLTS & ESTRS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291550",
     "description": "PROPIONIC ACID ITS SALTS AND ESTERS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291560",
     "description": "BUTYRIC ACDS,VALERIC ACDS THR SLTS & ESTRS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291570",
     "description": "PALMTC ACID,STEARIC ACID THR SLTS & ESTRS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291590",
     "description": "HALGNTD SLPHNTD NITRTD & NITRSTD DRVTVS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291611",
     "description": "ACRYLIC ACID AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291612",
     "description": "ESTERS OF ACRYLIC ACID"
    },
    {
     "chapter": "29",
     "itc_hscode": "291613",
     "description": "METHACRYLIC ACID AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291614",
     "description": "ESTERS OF METHACRYLIC ACID"
    },
    {
     "chapter": "29",
     "itc_hscode": "291615",
     "description": "OLEIC LINOLC\/LINOLNC ACDS,THR SLTS & ESTRS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291619",
     "description": "HALGNTD SLPHNTD NITRTD\/NITRSTD DRVTVS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291620",
     "description": "PEROXYACIDS AND THEIR DERIVATATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "291631",
     "description": "BENZOIC ACID ITS SALTS AND ESTERS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291632",
     "description": "BENZYL PEROXYD & BENZOYL CHLRD"
    },
    {
     "chapter": "29",
     "itc_hscode": "291634",
     "description": "PHENYLACETIC ACID & ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291635",
     "description": "ESTERS OF PHENYL ACETIC ACID"
    },
    {
     "chapter": "29",
     "itc_hscode": "291636",
     "description": "BINAPACRYL (ISO)"
    },
    {
     "chapter": "29",
     "itc_hscode": "291639",
     "description": "DRVTVS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291711",
     "description": "OXALIC ACID ITS SALTS AND ESTERS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291712",
     "description": "ADIPIC ACID ITS SALTS AND ESTERS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291713",
     "description": "AZELAIC ACID,SEBACIC ACID THR SLTS & ESTRS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291714",
     "description": "MALEIC ANHYDRIDE"
    },
    {
     "chapter": "29",
     "itc_hscode": "291720",
     "description": "PEROXYACIDS AND THEIR DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "291732",
     "description": "DIOCTYL ORTHOPHTHALATES"
    },
    {
     "chapter": "29",
     "itc_hscode": "291733",
     "description": "DINONYL OR DIDECYL ORTHOPHTHALATES"
    },
    {
     "chapter": "29",
     "itc_hscode": "291734",
     "description": "OTHER ESTERS OF ORTHOPHTHALIC ACID"
    },
    {
     "chapter": "29",
     "itc_hscode": "291735",
     "description": "PHTHALIC ANHYDRIDE"
    },
    {
     "chapter": "29",
     "itc_hscode": "291736",
     "description": "TEREPHTHALIC ACID AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291737",
     "description": "DIMETHYL TEREPHTHALATE"
    },
    {
     "chapter": "29",
     "itc_hscode": "291811",
     "description": "LACTIC ACID ITS SALTS AND ESTERS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291812",
     "description": "TARTARIC ACID"
    },
    {
     "chapter": "29",
     "itc_hscode": "291813",
     "description": "SALTS AND ESTERS OF TARTARIC ACID"
    },
    {
     "chapter": "29",
     "itc_hscode": "291814",
     "description": "CITRIC ACID"
    },
    {
     "chapter": "29",
     "itc_hscode": "291815",
     "description": "SALTS AND ESTERS OF CITRIC ACID"
    },
    {
     "chapter": "29",
     "itc_hscode": "291816",
     "description": "GLUCONIC ACID ITS SALTS AND ESTERS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291818",
     "description": "CHLOROBENZILATE (ISO)"
    },
    {
     "chapter": "29",
     "itc_hscode": "291819",
     "description": "HALIDES PEROXIDES PEROXYACIDS & THR DRVTVS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291821",
     "description": "SALICYLIC ACID AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291822",
     "description": "0‐ACETYLSALICYLIC ACID ITS SALTS AND ESTRS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291823",
     "description": "OTHER ESTERS OF SALICYLIC ACID AND THEIR SALTS :"
    },
    {
     "chapter": "29",
     "itc_hscode": "291829",
     "description": "HALIDES PEROXIDES PEROXACIDS & THR DRVTVS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291830",
     "description": "HALDS PEROXIDES PEROXYACIDS & THR DRVTVS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291891",
     "description": "2, 4, 5‐T(ISO) (2, 4, 5‐ TRICHLOROPHENOXYACETIC ACID), ITS SALTS AND ESTERS"
    },
    {
     "chapter": "29",
     "itc_hscode": "291899",
     "description": "OTHER"
    },
    {
     "chapter": "29",
     "itc_hscode": "291910",
     "description": "TRIS(2,3‐DIBROMOPROPYL) PHOSPHATE"
    },
    {
     "chapter": "29",
     "itc_hscode": "291990",
     "description": "OTHER:"
    },
    {
     "chapter": "29",
     "itc_hscode": "292011",
     "description": "PARATHION (ISO) AND PARATHION‐METHYL (ISO)"
    },
    {
     "chapter": "29",
     "itc_hscode": "292019",
     "description": "OTHER:"
    },
    {
     "chapter": "29",
     "itc_hscode": "292090",
     "description": "OTR ESTERS OF OTR INORGNC ACDS;THRSLTS ETC"
    },
    {
     "chapter": "29",
     "itc_hscode": "292111",
     "description": "MTHYLAMINE DI‐OR TRIMTHYL AMINE & THR SLTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292119",
     "description": "DIMETHYL:"
    },
    {
     "chapter": "29",
     "itc_hscode": "292121",
     "description": "ETHYLENEDIAMINE AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292122",
     "description": "HEXAMETHYLENEDIAMINE AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292129",
     "description": "OTHR ACYLC PLYAMINS THR DRVTVS SLTS THREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "292130",
     "description": "CYCLANIC CYCLENIC\/CYCLOTRPNC MONO‐OR POLYAMINS & THR DRVTVS; SLTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "292141",
     "description": "ANILINE AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292142",
     "description": "ANILINE DERIVATIVES AND THEIR SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292143",
     "description": "TOLUIDINES AND THEIR DRVTVS SLTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "292144",
     "description": "DIPHNYLAMINE & ITS DRVTVS SLTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "292145",
     "description": "1‐NAPHTHYLAMINE 2‐NAPHTHYLAMINE AND THEIR DERIVATIVES ; SALTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "292146",
     "description": "AMFETAMINE BENZFETAMINE ETC THR SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292149",
     "description": "OTHR ARMTC MONO AMNS & THR DRVTVS AND SLTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292151",
     "description": "O‐M‐P‐PHENYLENEDIAMINE DIAMINOTOLUENE AND THEIR DRVTVS SALTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "292159",
     "description": "OTHR ARMTC PLYAMNS & THR DRVTVS & SLTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292211",
     "description": "MONOETHANOLAMINE AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292212",
     "description": "DIETHANOLAMINE AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292213",
     "description": "TRIETHANOLAMINE AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292214",
     "description": "DEXTROPROPOXYPHENE (INN) AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292219",
     "description": "OTHER OXYGEN‐FUNCTION AMINO‐ALCOHOLS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292221",
     "description": "AMNOHYDRXYNPHTHLENESLPHNC ACDS & THR SLTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292229",
     "description": "THN ONE KND OF EXYGN FNCTN SLTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "292231",
     "description": "AMFEPRA NONE(INN), METHDONE & MORMETHADONESALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292239",
     "description": "OTHER AMINO‐ALDEHYDES ETC CNTNG MORE THAN OXGN FN. SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292241",
     "description": "LYSINE AND ITS ESTERS SALTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "292242",
     "description": "GLUTAMIC ACID AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292243",
     "description": "ANTHRANILIC ACID AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292244",
     "description": "TILIDINE (INN) AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292249",
     "description": "OXYGEN FUNCTION,SALTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "292310",
     "description": "CHOLINE AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292320",
     "description": "LECITHINS AND OTHER PHOSPHOAMINOLIPIDS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292390",
     "description": "PHOSPHOAMINOLIPIDS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292411",
     "description": "MEPROBAMATE (INN)"
    },
    {
     "chapter": "29",
     "itc_hscode": "292412",
     "description": "FLUOROACETAMIDE (ISO), MONOCROTOPHOS (ISO) AND PHOSPHAMIDON (ISO)"
    },
    {
     "chapter": "29",
     "itc_hscode": "292419",
     "description": "OTHER ACYCLIC AMIDES AND THR DRVTVS,SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292421",
     "description": "UREINES & THEIR DERIVATIVES SALTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "292423",
     "description": "2‐ACETAMIDOBENZOIC ACID (N‐ACETYLANTHRANILIC ACID ) AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292424",
     "description": "ETH INA MATE (INN)"
    },
    {
     "chapter": "29",
     "itc_hscode": "292429",
     "description": "OTHR CYCLC AMIDES(INCL CYCLC CRBAMATES) & THEIR DERIVATIVES & SALTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "292511",
     "description": "SACCHARIN AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292512",
     "description": "GLUTETHIMIDE (INN)"
    },
    {
     "chapter": "29",
     "itc_hscode": "292519",
     "description": "OTHR IMIDES & THR DRVTVS SLTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "292521",
     "description": "CHLORDIMEFORM (ISO)"
    },
    {
     "chapter": "29",
     "itc_hscode": "292529",
     "description": "OTHER :"
    },
    {
     "chapter": "29",
     "itc_hscode": "292610",
     "description": "ACRYLONITRILE"
    },
    {
     "chapter": "29",
     "itc_hscode": "292620",
     "description": "1‐CYANOGUANIDINE(DICYANDIAMIDE)"
    },
    {
     "chapter": "29",
     "itc_hscode": "292630",
     "description": "FENPROPOREX (INN) & ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292690",
     "description": "OTHR NITRILE‐FUNCTION COMPOUNDS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292700",
     "description": "DIAZO‐AZO‐OR AZOXY‐COMPOUNDS"
    },
    {
     "chapter": "29",
     "itc_hscode": "292800",
     "description": "ORGNC DRVTVS OF HYDRAZINE\/OF HYDROXYLAMINE"
    },
    {
     "chapter": "29",
     "itc_hscode": "292910",
     "description": "ISOCYANATES"
    },
    {
     "chapter": "29",
     "itc_hscode": "292990",
     "description": "OTHR CMPNDS WITH OTHER NITROGEN FUNCTION"
    },
    {
     "chapter": "29",
     "itc_hscode": "293020",
     "description": "THIOCARBAMATES AND DITHIOCARBAMATES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293030",
     "description": "THIURAM MONO‐,DI‐OR TETRASULPHIDES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293040",
     "description": "METHIONINE"
    },
    {
     "chapter": "29",
     "itc_hscode": "293050",
     "description": "CAPTAFOL (ISO) AND METHAMIDOPHOS (ISO)"
    },
    {
     "chapter": "29",
     "itc_hscode": "293090",
     "description": "OTHER ORGANO‐SULPHUR COMPOUNDS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293100",
     "description": "OTHER ORGANO‐INORGANIC COMPOUNDS :"
    },
    {
     "chapter": "29",
     "itc_hscode": "293211",
     "description": "TETRAHYDROFURAN"
    },
    {
     "chapter": "29",
     "itc_hscode": "293212",
     "description": "2‐FURALDEHYDE(FURFURALDEHYDE)"
    },
    {
     "chapter": "29",
     "itc_hscode": "293213",
     "description": "FURFURYL ALCHL & TETRAHYDROFURFURYL ALCHL"
    },
    {
     "chapter": "29",
     "itc_hscode": "293219",
     "description": "STRUCTURE"
    },
    {
     "chapter": "29",
     "itc_hscode": "293221",
     "description": "COUMARIN,MTHYLCOUMRN & EHYLCOUMRN‐LACTONES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293229",
     "description": "OTHER LACTONES :"
    },
    {
     "chapter": "29",
     "itc_hscode": "293291",
     "description": "IS0SAFR0LE"
    },
    {
     "chapter": "29",
     "itc_hscode": "293292",
     "description": "1‐(1,3‐BENZODIOXOL‐5‐YL) PROPAN‐2‐ONE"
    },
    {
     "chapter": "29",
     "itc_hscode": "293293",
     "description": "PIPERAN0L"
    },
    {
     "chapter": "29",
     "itc_hscode": "293294",
     "description": "SAFR0LE"
    },
    {
     "chapter": "29",
     "itc_hscode": "293295",
     "description": "TETRAHYDROCANNABINOLS (ALL ISOMERS)"
    },
    {
     "chapter": "29",
     "itc_hscode": "293299",
     "description": "OTHER HETEROCYCLIC COMPNDS WITH OXYGEN HETERO ‐ ATOM\/S)"
    },
    {
     "chapter": "29",
     "itc_hscode": "293311",
     "description": "PHENAZONE (ANTIPYRIN) AND ITS DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293321",
     "description": "HYDANTOIN AND ITS DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293331",
     "description": "PYRIDINE AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293332",
     "description": "PIPERIDINE AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293333",
     "description": "ALFENTANIL,ANILERIDINE,PROPIRAM AND TRI MEPE RIDINE ETC SALTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "293339",
     "description": "OTHER : DERIVATIVES OF PYRIDINE :"
    },
    {
     "chapter": "29",
     "itc_hscode": "293341",
     "description": "LEVORPHANOL (INN) AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293349",
     "description": "HYDRGNTD),NOT FURTHER FUSED"
    },
    {
     "chapter": "29",
     "itc_hscode": "293352",
     "description": "MALONYLUREA (BARBITURIC ACID) & ITS SALS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293353",
     "description": "ALLOBARBITAL AND OTHR BARBITAL COMPNDS ANDITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293354",
     "description": "OTHER DERIVATIVES OF MALONYLUREA ( BARBITURIC ACID); SALTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "293355",
     "description": "LOPRAZOLAM, MECLOQUALONE, METHAQUALONE , ZIPEROL, SALTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "293359",
     "description": "THESTRUCTURE"
    },
    {
     "chapter": "29",
     "itc_hscode": "293361",
     "description": "MELAMINE"
    },
    {
     "chapter": "29",
     "itc_hscode": "293371",
     "description": "6‐HEXANELACTAM (EPSILON‐CAPROLACTAM)"
    },
    {
     "chapter": "29",
     "itc_hscode": "293372",
     "description": "CLOBAZAM (INN) AND METHYPRYLDN (INN)"
    },
    {
     "chapter": "29",
     "itc_hscode": "293379",
     "description": "OTHER LACTAMS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293391",
     "description": "ALPRA ZOLAM, CAMAZEPAM & OTHER CMPNDS OF ZEPAM, SALTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "293399",
     "description": "OTHER HETERDCYCLIC CMPNDS WITH NITROGEN HETRO ATOM (S) ONLY"
    },
    {
     "chapter": "29",
     "itc_hscode": "293410",
     "description": "CMPNDS CNTNG AN UNFUSED THIAZOLE RING (W\/N HYDROGENATED ) IN THE STRUCTURE"
    },
    {
     "chapter": "29",
     "itc_hscode": "293420",
     "description": "CMPNDS CNTNG A BENZOTHIAZONE RING‐SYSTEM (W\/N HYDRGNTD) NT FRTHR FUSED"
    },
    {
     "chapter": "29",
     "itc_hscode": "293430",
     "description": "CMPNDS CNTNG A PHENOTHIAZINE RING‐SYSTEM (W\/N HYDRGNTD ) NT FRTHR FUSED"
    },
    {
     "chapter": "29",
     "itc_hscode": "293491",
     "description": "AMINOREX, BROTIZOLAM AND OTHER LIKE CMPNDS, SALTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "293499",
     "description": "OTHER HETEROCYCLIC COMPOUNDS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293500",
     "description": "SULPHONAMIDES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293621",
     "description": "VITAMINS A AND THEIR DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293622",
     "description": "VITAMIN B1 AND ITS DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293623",
     "description": "VITAMIN B2 AND ITS DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293624",
     "description": "D‐OR DL‐PANTOTHENIC ACID (VITAMIN B3 OR VITAMIN B5) AND ITS DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293625",
     "description": "VITAMIN B6 & ITS DRVTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293626",
     "description": "VITAMIN B12 AND ITS DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293627",
     "description": "VITAMIN C (ASCORBIC ACID) & ITS DRVTVS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293628",
     "description": "VITAMIN E AND ITS DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293629",
     "description": "OTHER VITAMINS AND THEIR DERIVATIVES :"
    },
    {
     "chapter": "29",
     "itc_hscode": "293690",
     "description": "OTHER, INCLUDING NATURAL CONCENTRATES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293711",
     "description": "SOMATOTROPIN, ITS DRVTVS& STRCTL ANALOGVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293712",
     "description": "INSULIN AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293719",
     "description": "OTHER POLYPEPTIDE HORMONES THR DTVTVS AND STRCTL ANLGES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293721",
     "description": "PRDNSLN(DEHYDROHYDROCORTISONE)"
    },
    {
     "chapter": "29",
     "itc_hscode": "293722",
     "description": "HALGNTD DRVTVS OF CORTI COSTEROIDAL"
    },
    {
     "chapter": "29",
     "itc_hscode": "293723",
     "description": "OESTROGENS AND PROGESTOGENS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293729",
     "description": "OTHR STEROIDAL HORMONS THR DRVTVS AND STRCTL ANLGES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293731",
     "description": "EPINETHRINE"
    },
    {
     "chapter": "29",
     "itc_hscode": "293739",
     "description": "OTHER CATECHOLAMINE HORMONS THR DRVTVS AND STRCTL ANLGES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293740",
     "description": "AMINO‐ACID DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293750",
     "description": "PROSTAGLANDINS, TIROMBOXAMES& LEUKOTRIENESTHR DRVTVS & STRCLT ANLGES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293790",
     "description": "OTHER HORMONS, NTRL OR RPRDCD BY SYNTHSIS USED AS HORMONS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293810",
     "description": "RUTOSIDE (RUTIN) AND ITS DERIVATIVES"
    },
    {
     "chapter": "29",
     "itc_hscode": "293890",
     "description": "OTHR GLYCOSIDES NATRL\/RPRDCD BY SYNTHSIS &THR SLTS ETHRS ESTRS AND OTHR DRVTVS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293911",
     "description": "THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "293919",
     "description": "OTHER ALKALOIDS OF OPIUM ANDTHR DRVTVS,SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293920",
     "description": "ALKALOID OF CINCHONA AND THEIR DERIVATIVES; SALTS THEREOF :"
    },
    {
     "chapter": "29",
     "itc_hscode": "293930",
     "description": "CAFFEINE AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293941",
     "description": "EPHIDRINES AND THER SLTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293942",
     "description": "PSEUDO EPHEDRINE (INN) AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293943",
     "description": "CATHINE (INN) AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293949",
     "description": "OTHER EPHEDRIVES AND THR SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293951",
     "description": "FENETYLLINE (INN) AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293959",
     "description": "OTHER THEOPHYLLINE AND AMINOPHYLLINE THR DRVTVS, SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293961",
     "description": "ERGOMETRINE (INN) AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293962",
     "description": "ERGOTAMINE (INN) AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293963",
     "description": "LYSERGIC ACID AND ITS SALTS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293969",
     "description": "OTHER ALKALOIDS OF RYE ERGOT AND DRVTVS"
    },
    {
     "chapter": "29",
     "itc_hscode": "293991",
     "description": "COCAINE, ECGOMINE ETC SALTS ESTRS & DRVTVSTHEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "294000",
     "description": "SLTS BESIDES HDG NO. 2937 2938 OR 2939"
    },
    {
     "chapter": "29",
     "itc_hscode": "294110",
     "description": "PENICILLINS & THR DRVTVS WTH A PENICILLANIC ACID STRUCTURE SLTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "294120",
     "description": "STREPTOMYCINS & THR DRVTVS SLTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "294130",
     "description": "TETRACYCLINES & THR DRVTVS SLTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "294140",
     "description": "CHLORAMPHENICOL & ITS DRVTVS SLTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "294150",
     "description": "ERTHROMYCIN & ITS DRVTVS SLTS THEREOF"
    },
    {
     "chapter": "29",
     "itc_hscode": "294190",
     "description": "OTHER : RIFAMPICIN AND ITS SALTS :"
    },
    {
     "chapter": "29",
     "itc_hscode": "294200",
     "description": "RANITIDINE, DANES SALT OF D(‐) PHENYL GLYC"
    },
    {
     "chapter": "30",
     "itc_hscode": "300120",
     "description": "EXTRCTS OF GLNDS\/OTHR ORGNS\/OF THR SECRTNS"
    },
    {
     "chapter": "30",
     "itc_hscode": "300190",
     "description": "HEPARIN SLTS;OTHR HUMAN\/ANML SUBSTNS FR THRUPTC\/PROPHYLACTIC USE NES"
    },
    {
     "chapter": "30",
     "itc_hscode": "300210",
     "description": "ANTSRA & OTHR BLD FRCTN;MDFD IMUNLGCL PRDTS W\/N BY BITECHNOLGCL PRCES"
    },
    {
     "chapter": "30",
     "itc_hscode": "300220",
     "description": "VACCINES FOR HUMAN MEDICINE"
    },
    {
     "chapter": "30",
     "itc_hscode": "300230",
     "description": "VACCINES FOR VETERINARY MADICINE"
    },
    {
     "chapter": "30",
     "itc_hscode": "300290",
     "description": "TOXNS,CULTURS OF MICRORGNSM & SMLR PRODTS"
    },
    {
     "chapter": "30",
     "itc_hscode": "300320",
     "description": "MEDICAMENTS CONT. OTHER ANTI‐BIOTICS"
    },
    {
     "chapter": "30",
     "itc_hscode": "300331",
     "description": "MEDICAMENTS CONTAINING INSULIN"
    },
    {
     "chapter": "30",
     "itc_hscode": "300339",
     "description": "ANTIBIOTIC"
    },
    {
     "chapter": "30",
     "itc_hscode": "300340",
     "description": "29.37\/ANTBT"
    },
    {
     "chapter": "30",
     "itc_hscode": "300390",
     "description": "PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "30",
     "itc_hscode": "300410",
     "description": "DERVTVS PUT UP FOR RTL SALE"
    },
    {
     "chapter": "30",
     "itc_hscode": "300420",
     "description": "MEDICAMENTS CONTAINING OTHER ANTIBIOTICS AND PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "30",
     "itc_hscode": "300431",
     "description": "MEDICAMENTS CONTAINING INSULIN"
    },
    {
     "chapter": "30",
     "itc_hscode": "300432",
     "description": "ANALG"
    },
    {
     "chapter": "30",
     "itc_hscode": "300439",
     "description": "PROGESTOGEN AND OESTOGEN GROUP HORMONES :"
    },
    {
     "chapter": "30",
     "itc_hscode": "300440",
     "description": "2937"
    },
    {
     "chapter": "30",
     "itc_hscode": "300450",
     "description": "OTHER MEDICAMENTS CONTAINING VITAMINS OR OTHER PRODUCTS OF HEADING 2936 :"
    },
    {
     "chapter": "30",
     "itc_hscode": "300490",
     "description": "OTHER MEDCNE PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "30",
     "itc_hscode": "300510",
     "description": "ADHESIVE DRSSNGS & OTHR ARTCLS HAVING AN ADHESIVE LAYER"
    },
    {
     "chapter": "30",
     "itc_hscode": "300590",
     "description": "OTHER DRESSING ARTICLES"
    },
    {
     "chapter": "30",
     "itc_hscode": "300610",
     "description": "SURGICAL OR DENTAL HAEMOSTATICS"
    },
    {
     "chapter": "30",
     "itc_hscode": "300620",
     "description": "BLOOD‐GROUPING REAGENTS"
    },
    {
     "chapter": "30",
     "itc_hscode": "300630",
     "description": "BE ADMINISTERED TO THE PATIENT"
    },
    {
     "chapter": "30",
     "itc_hscode": "300640",
     "description": "DENTAL CEMENTS AND OTHR DENTAL FILLINGS BONE RECONSTRUCTION CEMENTS"
    },
    {
     "chapter": "30",
     "itc_hscode": "300650",
     "description": "FIRST‐AID BOXES AND KITS"
    },
    {
     "chapter": "30",
     "itc_hscode": "300660",
     "description": "CHMCL CONTRACEPTIVE PRPNS BASED ON HORMONES\/SPERMISIDES"
    },
    {
     "chapter": "30",
     "itc_hscode": "300670",
     "description": "BODYFOR SURGI OPER\/PHYS EXAM BETWN BODY&INSTRU"
    },
    {
     "chapter": "30",
     "itc_hscode": "300691",
     "description": "APPLIANCES IDENTIFIABLE FOR OSTOMY USE"
    },
    {
     "chapter": "30",
     "itc_hscode": "300692",
     "description": "WASTE PHARMACEUTICALS"
    },
    {
     "chapter": "31",
     "itc_hscode": "310100",
     "description": "MXNG\/CHMCL TREATMNT OF ANML\/VEGTBL PRDCTS"
    },
    {
     "chapter": "31",
     "itc_hscode": "310210",
     "description": "UREA WHETHER OR NOT IN AQUEOUS SOLUTION"
    },
    {
     "chapter": "31",
     "itc_hscode": "310221",
     "description": "AMMONIUM SULPHATE"
    },
    {
     "chapter": "31",
     "itc_hscode": "310229",
     "description": "DOUBLE SALTS & MIXTURES OF AMMONIUM SLPHTE"
    },
    {
     "chapter": "31",
     "itc_hscode": "310230",
     "description": "AMMONIUM NITRATE W\/N IN AQUEOUS SOLUTION"
    },
    {
     "chapter": "31",
     "itc_hscode": "310240",
     "description": "SUBSTNCS"
    },
    {
     "chapter": "31",
     "itc_hscode": "310250",
     "description": "SODIUM NITRATE"
    },
    {
     "chapter": "31",
     "itc_hscode": "310260",
     "description": "DOUBLE SLT\/MXTR OF CALCM NITRTE\/AMONM NTRT"
    },
    {
     "chapter": "31",
     "itc_hscode": "310280",
     "description": "MIXTURES OF UREA & AMMONIUM NITRATE IN AQUEOUS OR AMMONIACAL SOLUTION"
    },
    {
     "chapter": "31",
     "itc_hscode": "310290",
     "description": "OTHR MNRL\/CHMCL FRTLSRS,NTROGNS INCL MXTRSFOREGOING SUB‐HEADING"
    },
    {
     "chapter": "31",
     "itc_hscode": "310310",
     "description": "SUPERPHOSPHATES"
    },
    {
     "chapter": "31",
     "itc_hscode": "310390",
     "description": "OTHER MINERLS OF CHEMCL FRTLISRS PHOSPHTC"
    },
    {
     "chapter": "31",
     "itc_hscode": "310420",
     "description": "POTASSIUM CHLORIDE"
    },
    {
     "chapter": "31",
     "itc_hscode": "310430",
     "description": "POTASSIUM SULPHATE"
    },
    {
     "chapter": "31",
     "itc_hscode": "310490",
     "description": "OTHER MINERLS OF CHEMCL FRTLISRS POTSSIC"
    },
    {
     "chapter": "31",
     "itc_hscode": "310530",
     "description": "DIAMONM HYDRGNORTHPHOSPHT(DIAMONM PHOSPHT)"
    },
    {
     "chapter": "31",
     "itc_hscode": "310540",
     "description": "DIAMMONIUM HYDROGNORTHOPHOSPHT(DIAMMONIUM PHOSPHATE)"
    },
    {
     "chapter": "31",
     "itc_hscode": "310551",
     "description": "MNRL\/CHMCL FERTLSRS CONTNG NITRTS\/PHOSPHTS"
    },
    {
     "chapter": "31",
     "itc_hscode": "310590",
     "description": "OTHER MINRL\/CHEMCL FERTLSRS"
    },
    {
     "chapter": "32",
     "itc_hscode": "320110",
     "description": "QUEBRACHO EXTRACT"
    },
    {
     "chapter": "32",
     "itc_hscode": "320120",
     "description": "WATTLE EXTRACT"
    },
    {
     "chapter": "32",
     "itc_hscode": "320190",
     "description": "OTHER TANNING EXTRACTS"
    },
    {
     "chapter": "32",
     "itc_hscode": "320210",
     "description": "SYNTHETIC ORGANIC TANNING SUBSTANCES"
    },
    {
     "chapter": "32",
     "itc_hscode": "320290",
     "description": "OTHR INORGANIC TANNING SUBSTANCES"
    },
    {
     "chapter": "32",
     "itc_hscode": "320300",
     "description": "COLRNG MATR OF VEGTBL\/ANML ORGN(INCL DYNG EXTRCT EXCL ANML BLCK) W\/N CMCLY DFND"
    },
    {
     "chapter": "32",
     "itc_hscode": "320411",
     "description": "DISPERSE DYES & PREPARATIONS BASED THEREON"
    },
    {
     "chapter": "32",
     "itc_hscode": "320412",
     "description": "ACID DYS W\/N PREMETALSD & PRPTNS BASED THERON MORDNT DYS & PRPTNS BASED THRON"
    },
    {
     "chapter": "32",
     "itc_hscode": "320413",
     "description": "BASIC DYES AND PRE PARATIONS BASED THEREON"
    },
    {
     "chapter": "32",
     "itc_hscode": "320414",
     "description": "DIRECT DYES & PREPARATIONS BASED THEREON"
    },
    {
     "chapter": "32",
     "itc_hscode": "320415",
     "description": "VAT DYES (INCL THOSE USABLE IN THAT STATE AS PPIGMNTS & PREPRATIONS BASED THEREON"
    },
    {
     "chapter": "32",
     "itc_hscode": "320416",
     "description": "REACTIVE DYS & PREPTNS BASED THEREON"
    },
    {
     "chapter": "32",
     "itc_hscode": "320417",
     "description": "PIGMENTS & PREPTNS BASED THEREON"
    },
    {
     "chapter": "32",
     "itc_hscode": "320419",
     "description": "3204 11 TO 3204 19 : AZOIC COUPLING COMPON"
    },
    {
     "chapter": "32",
     "itc_hscode": "320420",
     "description": "SYNTHETIC ORGANIC PRDCTS OF A KIND USED AS FLUORESCENT BRIGHTENING AGENTS"
    },
    {
     "chapter": "32",
     "itc_hscode": "320490",
     "description": "OTHR SYNTHETIC ORGANIC COLORNG MATTER"
    },
    {
     "chapter": "32",
     "itc_hscode": "320500",
     "description": "COLR LAKES"
    },
    {
     "chapter": "32",
     "itc_hscode": "320611",
     "description": "PGMNT & PRPARTN CNTNNG >= 80% BY WT OF TITANUM DIOXD CLCULTD ON THE DRY WT"
    },
    {
     "chapter": "32",
     "itc_hscode": "320619",
     "description": "OTHR CLRNG MATR CNTNG <80% TITNIUM DIOXLDE"
    },
    {
     "chapter": "32",
     "itc_hscode": "320620",
     "description": "PIGMNTS & PRPTNS BASD ON CHROM COMPND"
    },
    {
     "chapter": "32",
     "itc_hscode": "320641",
     "description": "ULTRAMARIN & PRPTNS BASD THEREON"
    },
    {
     "chapter": "32",
     "itc_hscode": "320642",
     "description": "LITHOPHONE & OTHR PIGMNTS AND PREPARATIONSBASD ON ZINC SULPHIDE"
    },
    {
     "chapter": "32",
     "itc_hscode": "320649",
     "description": "OTHR COLRNG MATR AND OTHR PRPTNS"
    },
    {
     "chapter": "32",
     "itc_hscode": "320650",
     "description": "INORGNC PRDCT A KIND USD AS LUMINOPHORS"
    },
    {
     "chapter": "32",
     "itc_hscode": "320710",
     "description": "PREPRD PIGMNT OPACIFIER COLRS,SMLR PRPTNS"
    },
    {
     "chapter": "32",
     "itc_hscode": "320720",
     "description": "VITRIFIABLE ENAMEL AND GLAZS ENGOBS(SLIPS) & SMLR PREPARATIONS"
    },
    {
     "chapter": "32",
     "itc_hscode": "320730",
     "description": "LIQD LUSTRS & SIMLR PRPTNS"
    },
    {
     "chapter": "32",
     "itc_hscode": "320740",
     "description": "GLAS FRIT & OTHR GLAS IN PWDR GRANUL\/FLKS"
    },
    {
     "chapter": "32",
     "itc_hscode": "320810",
     "description": "PAINTS & VARNISHES BASED ON POLYESTERS"
    },
    {
     "chapter": "32",
     "itc_hscode": "320820",
     "description": "PAINTS VRNSHS BSD ON ACRYLIC\/VINYL PLYMRS"
    },
    {
     "chapter": "32",
     "itc_hscode": "320910",
     "description": "PAINTS VARNSHS BSD ON ACRYLC\/VNYL PLYMR"
    },
    {
     "chapter": "32",
     "itc_hscode": "320990",
     "description": "OTHR PAINT VARNSHS (INCL ENML & LAQURS) BSD ON OTHR SYNTHTIC POLYMERS ETC"
    },
    {
     "chapter": "32",
     "itc_hscode": "321000",
     "description": "PREPARED WATER PIGMENTS OF A KIND USED FOR"
    },
    {
     "chapter": "32",
     "itc_hscode": "321100",
     "description": "PREPARED DRIERS"
    },
    {
     "chapter": "32",
     "itc_hscode": "321210",
     "description": "STAMPNG FOILS"
    },
    {
     "chapter": "32",
     "itc_hscode": "321290",
     "description": "OTHR PIGMNTS DYS & CLRNG MATR"
    },
    {
     "chapter": "32",
     "itc_hscode": "321310",
     "description": "COLOURS IN SETS"
    },
    {
     "chapter": "32",
     "itc_hscode": "321390",
     "description": "OTHER (OTHER THAN IN SETS)"
    },
    {
     "chapter": "32",
     "itc_hscode": "321410",
     "description": "FILLINGS."
    },
    {
     "chapter": "32",
     "itc_hscode": "321511",
     "description": "PRINTING INK,BLACK"
    },
    {
     "chapter": "32",
     "itc_hscode": "321519",
     "description": "OTHER PRINTING INK"
    },
    {
     "chapter": "32",
     "itc_hscode": "321590",
     "description": "OTHER INK"
    },
    {
     "chapter": "33",
     "itc_hscode": "330112",
     "description": "ESSENTIAL OILS OF ORANGE"
    },
    {
     "chapter": "33",
     "itc_hscode": "330113",
     "description": "ESSENTIAL OILS OF LEMON"
    },
    {
     "chapter": "33",
     "itc_hscode": "330119",
     "description": "ESSENTIAL OILS OF OTHR CITRUS FRUITS"
    },
    {
     "chapter": "33",
     "itc_hscode": "330122",
     "description": "ESSENTIAL OILS OF JASMIN"
    },
    {
     "chapter": "33",
     "itc_hscode": "330124",
     "description": "ESSNTL OIL OF PEPPERMINT(MENTHA PIPERITA)"
    },
    {
     "chapter": "33",
     "itc_hscode": "330125",
     "description": "ESSENTIAL OILS OF OTHER MINTS"
    },
    {
     "chapter": "33",
     "itc_hscode": "330129",
     "description": "OTHER ESSENTIAL OILS OTHER THAN THOSE OF CITRUS FRUIT"
    },
    {
     "chapter": "33",
     "itc_hscode": "330130",
     "description": "RESINOIDS"
    },
    {
     "chapter": "33",
     "itc_hscode": "330190",
     "description": "OILS AQUS DISTLTS\/SOLTN OF ESNL OLS"
    },
    {
     "chapter": "33",
     "itc_hscode": "330210",
     "description": "MXTRS OF ODORIFRS SUBTNS ETC OF A KIND USD IN FOOD\/DRINK INDUSTRIES"
    },
    {
     "chapter": "33",
     "itc_hscode": "330290",
     "description": "OTHER: MIXTURES OF AROMATIC CHEMICALS AND ESSENTIAL OILS AS PERFUME BASE:"
    },
    {
     "chapter": "33",
     "itc_hscode": "330300",
     "description": "PERFUME AND TOILET WATERS."
    },
    {
     "chapter": "33",
     "itc_hscode": "330410",
     "description": "LIP MAKE UP PREPARATIONS"
    },
    {
     "chapter": "33",
     "itc_hscode": "330420",
     "description": "EYE MAKE UP PREPARATIONS"
    },
    {
     "chapter": "33",
     "itc_hscode": "330430",
     "description": "MANICURE OR PEDICURE PREPARATIONS"
    },
    {
     "chapter": "33",
     "itc_hscode": "330491",
     "description": "POWDERS WHETHER OR NOT COMPRESSED"
    },
    {
     "chapter": "33",
     "itc_hscode": "330499",
     "description": "OTHR BEAUTY\/MAKE UP PRPNS NES"
    },
    {
     "chapter": "33",
     "itc_hscode": "330510",
     "description": "SHAMPOOS"
    },
    {
     "chapter": "33",
     "itc_hscode": "330520",
     "description": "PRPNS FOR PERMNT WAVING OR STRAIGHTENING"
    },
    {
     "chapter": "33",
     "itc_hscode": "330530",
     "description": "HAIR LACQUERS"
    },
    {
     "chapter": "33",
     "itc_hscode": "330590",
     "description": "OTHER : HAIR OIL :"
    },
    {
     "chapter": "33",
     "itc_hscode": "330610",
     "description": "DENTRIFRICES"
    },
    {
     "chapter": "33",
     "itc_hscode": "330620",
     "description": "YARN TO CLEAN BETWN TEETH (DNTL FLOSS)"
    },
    {
     "chapter": "33",
     "itc_hscode": "330690",
     "description": "OTHR PRPNS ORAL\/DENTAL HYGNE"
    },
    {
     "chapter": "33",
     "itc_hscode": "330710",
     "description": "SHAVING PRE OR AFTER SHAVE PRPNS"
    },
    {
     "chapter": "33",
     "itc_hscode": "330720",
     "description": "PERSONL DEODORNTS AND ANTIPERSPIRANTS"
    },
    {
     "chapter": "33",
     "itc_hscode": "330730",
     "description": "PERFUMD BATH SALTS AND OTHR BATH PRPNS"
    },
    {
     "chapter": "33",
     "itc_hscode": "330741",
     "description": "AGARBATTI & OTHR ODORIFEROUS PRPNS WHICHOPERATE BY BURNING"
    },
    {
     "chapter": "33",
     "itc_hscode": "330749",
     "description": "OTHER ODORIFEROUS PRPNS USD FOR DEODORIZING ROOM (EXCL AGARBATTI)"
    },
    {
     "chapter": "33",
     "itc_hscode": "330790",
     "description": "COSMETIC & TOILT PRPN N E S"
    },
    {
     "chapter": "34",
     "itc_hscode": "340111",
     "description": "SOAP AND ORGNC SURFACE ACTV PRDCTS ETC FOR TIOLET USE (INCL MEDICATED PRDCTS)"
    },
    {
     "chapter": "34",
     "itc_hscode": "340119",
     "description": "OTHER: BARS AND BLOCKS OF NOT LESS THAN 500 GM IN WEIGHT:"
    },
    {
     "chapter": "34",
     "itc_hscode": "340120",
     "description": "SOAP IN OTHER FORMS"
    },
    {
     "chapter": "34",
     "itc_hscode": "340130",
     "description": "OROR CREAM AND PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "34",
     "itc_hscode": "340211",
     "description": "ANIONIC W\/N FOR RTL SALE"
    },
    {
     "chapter": "34",
     "itc_hscode": "340212",
     "description": "CATIONIC W\/N FOR RTL SALE"
    },
    {
     "chapter": "34",
     "itc_hscode": "340213",
     "description": "NON‐IONIC W\/N FOR RTL SALE"
    },
    {
     "chapter": "34",
     "itc_hscode": "340219",
     "description": "OTHR ORNGC SRFCE‐ACTV AGNTS W\/N FOR RTL SL"
    },
    {
     "chapter": "34",
     "itc_hscode": "340220",
     "description": "PREPARATIONS PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "34",
     "itc_hscode": "340290",
     "description": "OTHER WASHING PRPNS & CLEANING PRPNS"
    },
    {
     "chapter": "34",
     "itc_hscode": "340311",
     "description": "PETROLIUM OILS\/OIL OBTND FROM BITMNS MNRLS"
    },
    {
     "chapter": "34",
     "itc_hscode": "340319",
     "description": "OTHER OTHER:"
    },
    {
     "chapter": "34",
     "itc_hscode": "340391",
     "description": "OTHR PRPNS FR THE TRTMNT OF TXTLE MATRLS LEATHER FURSKINS OR OTHER MATRLS"
    },
    {
     "chapter": "34",
     "itc_hscode": "340399",
     "description": "OTHER LUBRICTNG PREPARATIONS"
    },
    {
     "chapter": "34",
     "itc_hscode": "340420",
     "description": "ARTFCL WAXES POLYETHYLENE GLYCOL"
    },
    {
     "chapter": "34",
     "itc_hscode": "340490",
     "description": "OTHER ARTFCL WAXES AND PRPD WAXES"
    },
    {
     "chapter": "34",
     "itc_hscode": "340510",
     "description": "POLISHES CRMS & SMLR PRPNS FR FTWEAR\/LTHR"
    },
    {
     "chapter": "34",
     "itc_hscode": "340520",
     "description": "WOODWRK"
    },
    {
     "chapter": "34",
     "itc_hscode": "340530",
     "description": "POLISHES & SMLR PRPNS FR COACHWRK EXCEPT MTL POLISHES"
    },
    {
     "chapter": "34",
     "itc_hscode": "340540",
     "description": "SCOURING PASTES,PWDRS & OTHR SCRNG PRPNS"
    },
    {
     "chapter": "34",
     "itc_hscode": "340590",
     "description": "OTHER METAL POLISHES"
    },
    {
     "chapter": "34",
     "itc_hscode": "340600",
     "description": "CANDLES TAPERS AND THE LIKE"
    },
    {
     "chapter": "34",
     "itc_hscode": "340700",
     "description": "(OF CALCND GYPSUM\/CAL SLPHT)"
    },
    {
     "chapter": "35",
     "itc_hscode": "350110",
     "description": "CASEIN CASEIN DERIVATIVES CASEIN GLUES"
    },
    {
     "chapter": "35",
     "itc_hscode": "350190",
     "description": "CASEINATE OTHER CASEIN DRVTS &CASEIN GLUES"
    },
    {
     "chapter": "35",
     "itc_hscode": "350211",
     "description": "DRIED (EGG ALBUMIN )"
    },
    {
     "chapter": "35",
     "itc_hscode": "350219",
     "description": "OTHER (EGG ALBUMIN )"
    },
    {
     "chapter": "35",
     "itc_hscode": "350220",
     "description": "MILK ALBUMIN INCLDNG CONCENTRATES OF TWO OR MORE WHEY PROTEINS"
    },
    {
     "chapter": "35",
     "itc_hscode": "350290",
     "description": "OTHER ALBUMINATES AND OTHER ALBUMIN DRVTVS"
    },
    {
     "chapter": "35",
     "itc_hscode": "350300",
     "description": "ANML ORIGIN,EXCL CASEIN GLUES OF HD 350300"
    },
    {
     "chapter": "35",
     "itc_hscode": "350400",
     "description": "PEPTONES,THR DRVTVS OTHR PROTEIN SUBSTANCS& NES\/INCLD HIDE PWDR W\/N CHRMD"
    },
    {
     "chapter": "35",
     "itc_hscode": "350510",
     "description": "DEXTRINS & OTHER MODIFIED STARCHES"
    },
    {
     "chapter": "35",
     "itc_hscode": "350520",
     "description": "GLUES"
    },
    {
     "chapter": "35",
     "itc_hscode": "350610",
     "description": "PRDCTS FOR USE AS GLUES\/ADHSVS PUT UP FOR RETL SALE AS GLUES\/ADHSVS NT EXCDNG 1 KG"
    },
    {
     "chapter": "35",
     "itc_hscode": "350691",
     "description": "ADHESIVES BASED ON POLYMERS OF HEADINGS 3901 TO 3913 OR ON RUBBER:"
    },
    {
     "chapter": "35",
     "itc_hscode": "350699",
     "description": "OTHER PREPAREDD GLUES AND OTHER ADHESIVES"
    },
    {
     "chapter": "35",
     "itc_hscode": "350710",
     "description": "RENNET AND CONCENTRATES THEREOF"
    },
    {
     "chapter": "35",
     "itc_hscode": "350790",
     "description": "OTHR ENZYMES PREPARED ENZYMES"
    },
    {
     "chapter": "36",
     "itc_hscode": "360100",
     "description": "PROPELLENT POWDERS"
    },
    {
     "chapter": "36",
     "itc_hscode": "360200",
     "description": "PRPD EXPLOSIVES OTHR THN PROPELLENT PWDRS"
    },
    {
     "chapter": "36",
     "itc_hscode": "360410",
     "description": "FIREWORKS"
    },
    {
     "chapter": "36",
     "itc_hscode": "360490",
     "description": "OTHER PYROTECHNIC ARTICLES EXCL FIREWORKS"
    },
    {
     "chapter": "36",
     "itc_hscode": "360500",
     "description": "MTCHS EXCL PYRTCHNC ARTCLS OF HDNG NO 3604"
    },
    {
     "chapter": "37",
     "itc_hscode": "370110",
     "description": "P'GHY PLTS\/FLM FOR X‐RAY"
    },
    {
     "chapter": "37",
     "itc_hscode": "370120",
     "description": "INSTANT PRINT FILM IN FLAT"
    },
    {
     "chapter": "37",
     "itc_hscode": "370130",
     "description": "OTHER PLATES AND FILM, WITH ANY SIDE EXCEEDING 255 MM"
    },
    {
     "chapter": "37",
     "itc_hscode": "370191",
     "description": "OTHR FOR COLR P'GRAPHY(POLYCHROM)"
    },
    {
     "chapter": "37",
     "itc_hscode": "370199",
     "description": "OTHR PHOTOGRAPHIC PLATE & FILMS IN FLAT"
    },
    {
     "chapter": "37",
     "itc_hscode": "370210",
     "description": "P'GHY FLM ETC IN ROLLS FOR X‐RAY"
    },
    {
     "chapter": "37",
     "itc_hscode": "370231",
     "description": "OTHR FLM WTHOUT PERFORATNS OF A WIDTH <= 105 MM FR CLR PHTOGRAPHY (POLYCRM)"
    },
    {
     "chapter": "37",
     "itc_hscode": "370239",
     "description": "OTHR FLM WTHOUT PERFORATIONS OF WIDTH NOT EXCEEDING 105MM N.E.S."
    },
    {
     "chapter": "37",
     "itc_hscode": "370241",
     "description": "(PLYCRM) FOR COLOUR PHOTOGRAPHY (POLYCHROME)"
    },
    {
     "chapter": "37",
     "itc_hscode": "370242",
     "description": "OTHER THAN FOR COLR PHOTOGRAPHY"
    },
    {
     "chapter": "37",
     "itc_hscode": "370243",
     "description": "OTHR FLM WTHOUT PERFORATN WIDTH EXCDNG 610MM AND OF A LNGTH NT EXCDG 200M"
    },
    {
     "chapter": "37",
     "itc_hscode": "370244",
     "description": "OTHR FLM WTHOUT PERFORATN WIDTH EXCEEDING105MM BUT NOT EXCEEDING 610MM"
    },
    {
     "chapter": "37",
     "itc_hscode": "370252",
     "description": "14M"
    },
    {
     "chapter": "37",
     "itc_hscode": "370254",
     "description": "SLIDS"
    },
    {
     "chapter": "37",
     "itc_hscode": "370255",
     "description": "OTHR FLM FR COLR PHOTGRPHY OF A WDTH>16MM BUT NOT EXCDNG 35MM & LENGTH >30M"
    },
    {
     "chapter": "37",
     "itc_hscode": "370256",
     "description": "OTHR FLM FR COLR PHOTGRPHY(POLYCHRM) OF A WIDTH EXCEEDING 35MM"
    },
    {
     "chapter": "37",
     "itc_hscode": "370291",
     "description": "OTHR FILM OF A WIDTH NOT EXCEEDING 16 MM"
    },
    {
     "chapter": "37",
     "itc_hscode": "370294",
     "description": "OTHR FLM OF WDTH>16MM BUT NOT EXCDNG 35MM AND OF A LENGTH EXCEEDING 3M"
    },
    {
     "chapter": "37",
     "itc_hscode": "370295",
     "description": "OTHR FLM OF A WIDTH EXCEEDING 35MM"
    },
    {
     "chapter": "37",
     "itc_hscode": "370310",
     "description": "PHOTPAPR ETC IN ROLLS OF WIDTH EXCDG 610MM"
    },
    {
     "chapter": "37",
     "itc_hscode": "370320",
     "description": "OTHER, FOR COLOUR PHOTOGRAPHY (POLYCHROME):"
    },
    {
     "chapter": "37",
     "itc_hscode": "370390",
     "description": "OTHR PHOTGRAPIC PAPR,PAPRBRD&TXTLS,UNEXPSD"
    },
    {
     "chapter": "37",
     "itc_hscode": "370400",
     "description": "PHOT PLTS FLM PAPR PAPRBRD AND TXTLS EXPOSED BUT NOT DEVELOPED"
    },
    {
     "chapter": "37",
     "itc_hscode": "370510",
     "description": "PHOT PLTS AND FLM FOR OFFSET REPRODUCTION"
    },
    {
     "chapter": "37",
     "itc_hscode": "370590",
     "description": "OTHER PHOT PLTS AND FLMS EXPOSED AND DEVELOPED"
    },
    {
     "chapter": "37",
     "itc_hscode": "370610",
     "description": "CINE FLM OF A WDTH 35MM\/MORE"
    },
    {
     "chapter": "37",
     "itc_hscode": "370690",
     "description": "OTHER CINEMATOGRAPHIC FILMS"
    },
    {
     "chapter": "37",
     "itc_hscode": "370710",
     "description": "SENSITISED EMULSIONS"
    },
    {
     "chapter": "37",
     "itc_hscode": "370790",
     "description": "OTHR CHMCL PRPRNS FR PHOTGRPHC USES"
    },
    {
     "chapter": "38",
     "itc_hscode": "380110",
     "description": "ARTIFICIAL GRAPHITE"
    },
    {
     "chapter": "38",
     "itc_hscode": "380120",
     "description": "COLLOIDAL\/SEMI‐COLLOIDAL GRAPHITE"
    },
    {
     "chapter": "38",
     "itc_hscode": "380130",
     "description": "CRBNCEOUS PSTS FR ELECTRDS & FURNCE LINEGS"
    },
    {
     "chapter": "38",
     "itc_hscode": "380190",
     "description": "OTHER (GRAPHITE BASED PREPARATIONS)"
    },
    {
     "chapter": "38",
     "itc_hscode": "380210",
     "description": "ACTIVATED CARBON"
    },
    {
     "chapter": "38",
     "itc_hscode": "380290",
     "description": "OTHER(ACTVTD NATRL MNRL PRDCTS ETC)"
    },
    {
     "chapter": "38",
     "itc_hscode": "380300",
     "description": "TALL OIL WHETHER OR NOT REFINED"
    },
    {
     "chapter": "38",
     "itc_hscode": "380400",
     "description": "SLPHNTS‐BUT EXCL TALL OIL OF HDG 3803"
    },
    {
     "chapter": "38",
     "itc_hscode": "380510",
     "description": "GUM,WOOD OR SULPHATE TURPENTINE OILS"
    },
    {
     "chapter": "38",
     "itc_hscode": "380590",
     "description": "OTHER (CRUDE DIPENTINE ETC)"
    },
    {
     "chapter": "38",
     "itc_hscode": "380610",
     "description": "ROSIN AND RESIN ACIDS:"
    },
    {
     "chapter": "38",
     "itc_hscode": "380620",
     "description": "ADDUCTS"
    },
    {
     "chapter": "38",
     "itc_hscode": "380630",
     "description": "ESTER GUMS"
    },
    {
     "chapter": "38",
     "itc_hscode": "380690",
     "description": "OTHER (RUN GUMS, ROSIN SPIRITS ETC)"
    },
    {
     "chapter": "38",
     "itc_hscode": "380700",
     "description": "BSD ON ROSN,RESN ACIDS\/ON VGTBL PTCH"
    },
    {
     "chapter": "38",
     "itc_hscode": "380850",
     "description": "CHLORDANE (ISO); CHLORDIMEFORM (ISO); CHLO"
    },
    {
     "chapter": "38",
     "itc_hscode": "380891",
     "description": "INSECTICIDES"
    },
    {
     "chapter": "38",
     "itc_hscode": "380892",
     "description": "FUNGICIDES:"
    },
    {
     "chapter": "38",
     "itc_hscode": "380893",
     "description": "HERBICIDES, ANTI‐SPROUTING PRODUCTS AND PLANT‐GROWTH REGULATED:"
    },
    {
     "chapter": "38",
     "itc_hscode": "380894",
     "description": "DISINFECTANTS"
    },
    {
     "chapter": "38",
     "itc_hscode": "380899",
     "description": "OTHER:"
    },
    {
     "chapter": "38",
     "itc_hscode": "380910",
     "description": "PRPNS WTH A BASIS OF AMYLACEOUS SBSTNCS"
    },
    {
     "chapter": "38",
     "itc_hscode": "380991",
     "description": "PRPNS USD IN TXTL INDUSTRY"
    },
    {
     "chapter": "38",
     "itc_hscode": "380992",
     "description": "PRPNS OF A KIND USED IN THE PAPER INDUSTRY"
    },
    {
     "chapter": "38",
     "itc_hscode": "380993",
     "description": "OTHR FNSHNG AGNTS,DYE CARRIERS&OTHR PRPNS USED IN LEATHER INDUSTRY OR LIKE"
    },
    {
     "chapter": "38",
     "itc_hscode": "380999",
     "description": "OTHR FNSHNG AGNTS,DYE CARRIERS&OTHR PRPNS"
    },
    {
     "chapter": "38",
     "itc_hscode": "381111",
     "description": "ANTI‐KNOCK PRPNS BASED ON LEAD COMPOUND"
    },
    {
     "chapter": "38",
     "itc_hscode": "381119",
     "description": "OTHER ANTI‐KNOCK PREPARATION"
    },
    {
     "chapter": "38",
     "itc_hscode": "381129",
     "description": "OTHER ADDITIVES FOR LUBRICATING OILS"
    },
    {
     "chapter": "38",
     "itc_hscode": "381190",
     "description": "OTHER PREPARED ADDITIVES ANTI‐CORRSIVE PRPNS AND OTHR PRPD ADDITVS"
    },
    {
     "chapter": "38",
     "itc_hscode": "381210",
     "description": "PREPARED RUBBER ACCELERATORS"
    },
    {
     "chapter": "38",
     "itc_hscode": "381220",
     "description": "COMPOUND PLASTICISERS FOR RUBBER\/PLASTICS"
    },
    {
     "chapter": "38",
     "itc_hscode": "381230",
     "description": "ANTI‐OXIDISING PREPARATIONS & OTHR COMPOUND STABILISERS FR RUBBER OR PLASTICS"
    },
    {
     "chapter": "38",
     "itc_hscode": "381300",
     "description": "PRPNS & CHARGES FOR FIRE EXTINGUISHERS CHARGED FIRE‐EXTINGUISHING GRENADES"
    },
    {
     "chapter": "38",
     "itc_hscode": "381400",
     "description": "ORGANIC COMPSTE SLVNTS & THINNERS N.E.S. PREPARED PAINT OR VARNISH REMOVERS"
    },
    {
     "chapter": "38",
     "itc_hscode": "381511",
     "description": "SUPPRTD CATALYSTS WTH NICKEL\/NICKEL CMPNDS"
    },
    {
     "chapter": "38",
     "itc_hscode": "381512",
     "description": "SUPPRTD CATALYSTS WTH PRCUS MTL\/ITS CMPNDS"
    },
    {
     "chapter": "38",
     "itc_hscode": "381519",
     "description": "OTHER SUPPORTED CATALYSTS"
    },
    {
     "chapter": "38",
     "itc_hscode": "381590",
     "description": "OTHER REACTION INITIATORS ETC"
    },
    {
     "chapter": "38",
     "itc_hscode": "381700",
     "description": "MXD ALKYLBENZEBES & MXD ALKYLNAPHTHALENES OTHR THAN THOSE OF HDG NO. 2707\/2902"
    },
    {
     "chapter": "38",
     "itc_hscode": "381800",
     "description": "ELCTRNCS"
    },
    {
     "chapter": "38",
     "itc_hscode": "381900",
     "description": "BTMNS MNRLS WEIGHING LESS THAN 70% BY WT"
    },
    {
     "chapter": "38",
     "itc_hscode": "382000",
     "description": "ANTI‐FRZING PRPNS & PRPD DE‐ICING FLUIDS"
    },
    {
     "chapter": "38",
     "itc_hscode": "382100",
     "description": "PRPD CULTR MEDIA FR MICRO‐ORGNSMS DVLPMNT"
    },
    {
     "chapter": "38",
     "itc_hscode": "382200",
     "description": "COMPST DIAGNOSTIC\/LABRTRY REAGNTS EXCL GOODS OF HDG. NO. 3002\/3006"
    },
    {
     "chapter": "38",
     "itc_hscode": "382311",
     "description": "STEARIC ACID"
    },
    {
     "chapter": "38",
     "itc_hscode": "382312",
     "description": "OLEIC ACID"
    },
    {
     "chapter": "38",
     "itc_hscode": "382313",
     "description": "TALL OIL FATTY ACIDS"
    },
    {
     "chapter": "38",
     "itc_hscode": "382319",
     "description": "OTHER INDUSTRIAL MONOCARBOXYLIC FATTY ACID"
    },
    {
     "chapter": "38",
     "itc_hscode": "382370",
     "description": "INDUSTRIAL FATTY ALCOHOL"
    },
    {
     "chapter": "38",
     "itc_hscode": "382410",
     "description": "PRPD BINDERS FR FOUNDRY MOULDS\/CORES"
    },
    {
     "chapter": "38",
     "itc_hscode": "382430",
     "description": "NON‐AGGLOMERATED METAL CARBIDES MIXED TOGETHER OR WITH METALLIC BINDERS"
    },
    {
     "chapter": "38",
     "itc_hscode": "382440",
     "description": "PRPD ADTVS FOR CEMENTS‐MORTARS\/CONCRETES"
    },
    {
     "chapter": "38",
     "itc_hscode": "382450",
     "description": "NON‐REFRACTORY MORTARES & CONCRETES"
    },
    {
     "chapter": "38",
     "itc_hscode": "382460",
     "description": "SORBITOL OTHR THN THAT OF SUBHDG NO.290544"
    },
    {
     "chapter": "38",
     "itc_hscode": "382472",
     "description": "DIBROMOTERTRAFLUORO‐ETHANES"
    },
    {
     "chapter": "38",
     "itc_hscode": "382473",
     "description": "CONTAINING HYDROBROMOFLUOROCARBONS (HBFCS)"
    },
    {
     "chapter": "38",
     "itc_hscode": "382474",
     "description": "PERFLUOROCARBONS (PFCS) OR HYDROFLUORO‐CAR"
    },
    {
     "chapter": "38",
     "itc_hscode": "382475",
     "description": "CONTAINING CARBON TETRACHLORIDE"
    },
    {
     "chapter": "38",
     "itc_hscode": "382476",
     "description": "CONTAINING 1,1,1‐TRICHLOROETHANE(METHYL CHLOROFORM)"
    },
    {
     "chapter": "38",
     "itc_hscode": "382477",
     "description": "CONTAINING BROMOMETHANE (METHYL BROMIDE) OR BROMOCHLOROMETHANE"
    },
    {
     "chapter": "38",
     "itc_hscode": "382478",
     "description": "CONTAINING CHLOROFLUOROCARBONS (CFCS) OR"
    },
    {
     "chapter": "38",
     "itc_hscode": "382479",
     "description": "OTHER,CONTNG TWO OR MORE DIFFRNT HALOGENS"
    },
    {
     "chapter": "38",
     "itc_hscode": "382481",
     "description": "CONTAINING OXIRANE (ETHYLENE OXIDE)"
    },
    {
     "chapter": "38",
     "itc_hscode": "382482",
     "description": "POLYBROMINATED BIPHENYLS (PBBS)"
    },
    {
     "chapter": "38",
     "itc_hscode": "382483",
     "description": "CONTAINING TRIS (2,3‐DIBROMOPROPYL PHOSPHATE)"
    },
    {
     "chapter": "38",
     "itc_hscode": "382490",
     "description": "CHEMICAL PRODCTS NES"
    },
    {
     "chapter": "38",
     "itc_hscode": "382510",
     "description": "MUNICIPAL WASTE"
    },
    {
     "chapter": "38",
     "itc_hscode": "382520",
     "description": "SEWAGE SLUDGE"
    },
    {
     "chapter": "38",
     "itc_hscode": "382530",
     "description": "CLINICAL WASTE"
    },
    {
     "chapter": "38",
     "itc_hscode": "382541",
     "description": "HALOGENATED WASTE ORGANIC SOLVENTS"
    },
    {
     "chapter": "38",
     "itc_hscode": "382549",
     "description": "OTHER WASTE ORGANIC SOLVENTS"
    },
    {
     "chapter": "38",
     "itc_hscode": "382550",
     "description": "WASTES OF METAL PICKLING LIQUORS, HYDRALICFLUIDS, BRAKE FLUIDS AND ANTI‐FREEZE FLUID"
    },
    {
     "chapter": "38",
     "itc_hscode": "382561",
     "description": "OTHR WASTE MAINLY CONTN. ORGNIC CONSTIUENT"
    },
    {
     "chapter": "38",
     "itc_hscode": "382569",
     "description": "OTHR WASTE OF ORGANIC & ALIED INDUSTRIES"
    },
    {
     "chapter": "38",
     "itc_hscode": "382590",
     "description": "OTHER RESUDUAL PRODUCTS NES"
    },
    {
     "chapter": "39",
     "itc_hscode": "390110",
     "description": "POLYETHYLENE HVNG A SPFC GRVTY BELOW 0.94"
    },
    {
     "chapter": "39",
     "itc_hscode": "390120",
     "description": "POLYETHYLENE HVNG A SPCFC GRVTY 0.94 \/MORE"
    },
    {
     "chapter": "39",
     "itc_hscode": "390130",
     "description": "ETHYLENE‐VINYL ACETATE COPOLYMERS"
    },
    {
     "chapter": "39",
     "itc_hscode": "390190",
     "description": "OTHR POLYMERSOF ETHYLINE IN PRIMARY FORMS"
    },
    {
     "chapter": "39",
     "itc_hscode": "390210",
     "description": "POLYPROPYLENE"
    },
    {
     "chapter": "39",
     "itc_hscode": "390220",
     "description": "POLYISOBYTYLENE"
    },
    {
     "chapter": "39",
     "itc_hscode": "390230",
     "description": "PROPYLENE COPOLYMERS"
    },
    {
     "chapter": "39",
     "itc_hscode": "390290",
     "description": "OTHR POLYMERS OF PROPYLENE IN PRMRY FORMS"
    },
    {
     "chapter": "39",
     "itc_hscode": "390311",
     "description": "EXPANSIBLE POLYSTERENE"
    },
    {
     "chapter": "39",
     "itc_hscode": "390319",
     "description": "OTHER POLYSTYRENE"
    },
    {
     "chapter": "39",
     "itc_hscode": "390320",
     "description": "STYRENE ACRYLONITRILE (SAN) COPOLYMERS"
    },
    {
     "chapter": "39",
     "itc_hscode": "390330",
     "description": "ACRYLONITRILE‐BUTADIENE STYRENE COPOLYMRS"
    },
    {
     "chapter": "39",
     "itc_hscode": "390390",
     "description": "OTHR POLYMRS OF STYRENE"
    },
    {
     "chapter": "39",
     "itc_hscode": "390410",
     "description": "POLY (VINYL CHLORIDE), NOT MIXED WITH OTHR"
    },
    {
     "chapter": "39",
     "itc_hscode": "390421",
     "description": "OTHER POLYVINYL CHLORIDE NON‐PLASTICISED"
    },
    {
     "chapter": "39",
     "itc_hscode": "390422",
     "description": "OTHER PLASTICISED POLYVINYL CHLORIDE"
    },
    {
     "chapter": "39",
     "itc_hscode": "390430",
     "description": "VINYL CHLORIDE‐VINYL ACETATE COPOLYMERS"
    },
    {
     "chapter": "39",
     "itc_hscode": "390440",
     "description": "OTHER VINYL CHLORIDE COPOLYMERS"
    },
    {
     "chapter": "39",
     "itc_hscode": "390450",
     "description": "VINYLIDENE CLORIDE POLYMERS"
    },
    {
     "chapter": "39",
     "itc_hscode": "390461",
     "description": "POLYTETRAFLUOROETHYLENE"
    },
    {
     "chapter": "39",
     "itc_hscode": "390469",
     "description": "OTHER FLURO‐POLYMERS"
    },
    {
     "chapter": "39",
     "itc_hscode": "390512",
     "description": "POLYVINYL ACETATE IN AQS DISPRSN"
    },
    {
     "chapter": "39",
     "itc_hscode": "390519",
     "description": "OTHER POLYMERS OF VINYL ACETATE"
    },
    {
     "chapter": "39",
     "itc_hscode": "390521",
     "description": "VNYL ACETT COPOLYMRS IN AQUEOUS DISPRSN"
    },
    {
     "chapter": "39",
     "itc_hscode": "390529",
     "description": "VNYL ACETT COPOLYMR EXCL IN AQOUS DISPRSN"
    },
    {
     "chapter": "39",
     "itc_hscode": "390530",
     "description": "PV ALCHL W\/N CNTNG UNHYDROLYED ACTATE GRPS"
    },
    {
     "chapter": "39",
     "itc_hscode": "390591",
     "description": "COPOLYMERS"
    },
    {
     "chapter": "39",
     "itc_hscode": "390599",
     "description": "OTHER VINYL ESTERS AND VINYL POLYMERS"
    },
    {
     "chapter": "39",
     "itc_hscode": "390610",
     "description": "POLYMETHYL METHACRYLATE"
    },
    {
     "chapter": "39",
     "itc_hscode": "390690",
     "description": "OTHER ACRYLIC POLYMERS (EXCL METHACRYLATE)"
    },
    {
     "chapter": "39",
     "itc_hscode": "390710",
     "description": "POLYACETALS"
    },
    {
     "chapter": "39",
     "itc_hscode": "390720",
     "description": "OTHER POLYETHERS:"
    },
    {
     "chapter": "39",
     "itc_hscode": "390730",
     "description": "EPOXIDE RESINS"
    },
    {
     "chapter": "39",
     "itc_hscode": "390740",
     "description": "POLYCARBONATES"
    },
    {
     "chapter": "39",
     "itc_hscode": "390750",
     "description": "ALKYD RESINS"
    },
    {
     "chapter": "39",
     "itc_hscode": "390760",
     "description": "POLYETHYLENE TEREPHTHALATE"
    },
    {
     "chapter": "39",
     "itc_hscode": "390770",
     "description": "POLY (LACTIC ACID)"
    },
    {
     "chapter": "39",
     "itc_hscode": "390791",
     "description": "OTHER POLYESTERS UNSATURATED"
    },
    {
     "chapter": "39",
     "itc_hscode": "390799",
     "description": "OTHER POLYESTERS (SATURATED)"
    },
    {
     "chapter": "39",
     "itc_hscode": "390810",
     "description": "POLYAMIDE ‐6,‐11,‐12,‐6,6,‐6,9,‐6,10\/‐6,12"
    },
    {
     "chapter": "39",
     "itc_hscode": "390890",
     "description": "OTHER POLYAMIDES"
    },
    {
     "chapter": "39",
     "itc_hscode": "390910",
     "description": "UREA RESINS THIOUREA RESINS"
    },
    {
     "chapter": "39",
     "itc_hscode": "390920",
     "description": "MELAMINE RESINS:"
    },
    {
     "chapter": "39",
     "itc_hscode": "390930",
     "description": "OTHER AMINO‐RESINS:"
    },
    {
     "chapter": "39",
     "itc_hscode": "390940",
     "description": "PHENOLIC RESINS"
    },
    {
     "chapter": "39",
     "itc_hscode": "390950",
     "description": "POLYURETHANES"
    },
    {
     "chapter": "39",
     "itc_hscode": "391000",
     "description": "SILICONS IN PRIMARY FORMS"
    },
    {
     "chapter": "39",
     "itc_hscode": "391190",
     "description": "OTHER PRODUCTS IN RIMARY FORMS"
    },
    {
     "chapter": "39",
     "itc_hscode": "391211",
     "description": "CELLULOSE ACETATES‐NON‐PLASTICISED"
    },
    {
     "chapter": "39",
     "itc_hscode": "391212",
     "description": "CELLULOSE ACETATES PLASTICISED"
    },
    {
     "chapter": "39",
     "itc_hscode": "391220",
     "description": "CELLULOSE NITRATES(INCLUDNG COLLODIONS)"
    },
    {
     "chapter": "39",
     "itc_hscode": "391231",
     "description": "CARBOXYMETHYLCELLULOSE AND ITS SALTS"
    },
    {
     "chapter": "39",
     "itc_hscode": "391239",
     "description": "OTHER : ‐"
    },
    {
     "chapter": "39",
     "itc_hscode": "391290",
     "description": "OTHER CELLULOSE AND ITS CHEMICAL DERIVATIVES"
    },
    {
     "chapter": "39",
     "itc_hscode": "391310",
     "description": "ALGINIC ACID ITS SALTS AND ESTERS"
    },
    {
     "chapter": "39",
     "itc_hscode": "391390",
     "description": "OTHER NATRL AND MODFD NATRL POLYMERS"
    },
    {
     "chapter": "39",
     "itc_hscode": "391400",
     "description": "ION EXCHANGERS BASED ON POLYMERS OF HEADING 3901 TO 3913, IN PRIMARY FORMS"
    },
    {
     "chapter": "39",
     "itc_hscode": "391510",
     "description": "WSTE PARINGS & SCRAP OF PLYMRS OF ETHYLENE"
    },
    {
     "chapter": "39",
     "itc_hscode": "391520",
     "description": "WASTE PARINGS & SCRAP OF POLYMRS OF STYREN"
    },
    {
     "chapter": "39",
     "itc_hscode": "391530",
     "description": "WASTE PARINGS & SCRAP OF P.V.C."
    },
    {
     "chapter": "39",
     "itc_hscode": "391590",
     "description": "WASTE PARINGS & SCRAP OF OTHR PLASTIC"
    },
    {
     "chapter": "39",
     "itc_hscode": "391610",
     "description": "MONOFIL,RODS,STICKS ETC OF POLYETHYLENE"
    },
    {
     "chapter": "39",
     "itc_hscode": "391620",
     "description": "MONOFIL ROD ETC OF POLMRS OF VINYL CHLRIDE"
    },
    {
     "chapter": "39",
     "itc_hscode": "391690",
     "description": "MONOFIL,RODS,STICKS ETC. OF OTHR PLSTCS"
    },
    {
     "chapter": "39",
     "itc_hscode": "391710",
     "description": "ARTFCL GUTS OF HRDND PRTN\/OF CELULSC MTRLS"
    },
    {
     "chapter": "39",
     "itc_hscode": "391721",
     "description": "TUBES PIPES & HOSES OF POLYETHYLNE RIGID"
    },
    {
     "chapter": "39",
     "itc_hscode": "391722",
     "description": "TUBES PIPES & HOSES OF PLYMRS OF PROPYLENE"
    },
    {
     "chapter": "39",
     "itc_hscode": "391723",
     "description": "TUBES PIPES & HOSES OF POLYVINYL CHLORDE"
    },
    {
     "chapter": "39",
     "itc_hscode": "391729",
     "description": "TUBES PIPES & HOSES OF OTHR PLSTCS RIGID"
    },
    {
     "chapter": "39",
     "itc_hscode": "391731",
     "description": "FLEXIBLE TUBES PIPES AND HOSES HAVING A MINIMUM BURST PRESSURE OF 27.6 MPA"
    },
    {
     "chapter": "39",
     "itc_hscode": "391739",
     "description": "OTHR TUBES PIPES AND HOSES"
    },
    {
     "chapter": "39",
     "itc_hscode": "391740",
     "description": "FITTINGS FOR TUBES PIPES & HOSES OF PLSTC"
    },
    {
     "chapter": "39",
     "itc_hscode": "391810",
     "description": "FLR CVRNGS ETC OF PLYMRS OF VNYL CHLORIDE"
    },
    {
     "chapter": "39",
     "itc_hscode": "391890",
     "description": "FLOOR COVERING OF OTHER PLASTICS"
    },
    {
     "chapter": "39",
     "itc_hscode": "391910",
     "description": "SELF‐ADHSV PLTS ETC IN RLS,WDTH < = 20CM"
    },
    {
     "chapter": "39",
     "itc_hscode": "391990",
     "description": "OTHER SELF‐ADHSV PLTS ETC"
    },
    {
     "chapter": "39",
     "itc_hscode": "392010",
     "description": "PLATES SHEETS ETC.OF POLYMRS OF ETHYLENE"
    },
    {
     "chapter": "39",
     "itc_hscode": "392020",
     "description": "PLTES SHTS ETC. OF POLYMRS OF PROPYLN"
    },
    {
     "chapter": "39",
     "itc_hscode": "392030",
     "description": "PLTES SHTS ETC. OF POLYMRS OF STYRENE"
    },
    {
     "chapter": "39",
     "itc_hscode": "392043",
     "description": "PLTES SHTS ETC OF POLYMRS OF VINYL CHLORIDCONT. BY WEIGHT >= 6% OF PLASTICIZERS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392049",
     "description": "OTHR PLTES SHTS OF POLYMR OF VINYL CHLORID"
    },
    {
     "chapter": "39",
     "itc_hscode": "392051",
     "description": "PLTES SHTS ETC OF PLYMTHYL METHACRYLTE"
    },
    {
     "chapter": "39",
     "itc_hscode": "392059",
     "description": "SHETS ETC OF OTHR ACRYLIC POLYMERS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392061",
     "description": "PLTES SHTS ETC OF PLYCRBNTS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392062",
     "description": "PLTES SHTS ETC OF PLYETHYLN TEREPHTHALTE"
    },
    {
     "chapter": "39",
     "itc_hscode": "392063",
     "description": "PLTES SHTS ETC OF UNSATURATED POLYESTERS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392069",
     "description": "PLTES SHTS ETC OF OTHR POLYESTERS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392071",
     "description": "PLTES SHTS ETC OF REGENERATED CELLULSE"
    },
    {
     "chapter": "39",
     "itc_hscode": "392073",
     "description": "PLTES SHTS ETC OF CELLULOSE ACETATE"
    },
    {
     "chapter": "39",
     "itc_hscode": "392079",
     "description": "OTHR PLTES SHTS ETC OF OTHR CELULSE DRVTVS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392091",
     "description": "OTHR PLTES SHTS ETCOF OTHER PLASTICS:"
    },
    {
     "chapter": "39",
     "itc_hscode": "392092",
     "description": "OTHR PLTES SHTS ETC OF POLAMIDES"
    },
    {
     "chapter": "39",
     "itc_hscode": "392093",
     "description": "OTHR PLTES SHTS ETC OF AMINO‐RESINS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392094",
     "description": "OTHR PLTES SHTS ETC OF PHENOLIC RESINS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392099",
     "description": "PLATES SHEETS ETC OF OTHR PLASTICS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392111",
     "description": "PLTES SHTS ETC OF POLYMRS OF STYRENE"
    },
    {
     "chapter": "39",
     "itc_hscode": "392112",
     "description": "PLTES ETC OF POLYMRS OF VINYL CHLORDE"
    },
    {
     "chapter": "39",
     "itc_hscode": "392113",
     "description": "PLTES ETC OF POLYURETHANES"
    },
    {
     "chapter": "39",
     "itc_hscode": "392114",
     "description": "PLTES ETC OF REGNRTD CELULSE"
    },
    {
     "chapter": "39",
     "itc_hscode": "392119",
     "description": "OTHR PLTES SHTS ETC OF OTHR PLSTCS CELULR"
    },
    {
     "chapter": "39",
     "itc_hscode": "392190",
     "description": "OTHR PLTS,SHTS,FILM FOIL,STRIP ETC,NONCLLR"
    },
    {
     "chapter": "39",
     "itc_hscode": "392210",
     "description": "BATHS SHOWER‐BATHS AND WASH‐BASINS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392220",
     "description": "LAVATORY SEATS AND COVERS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392290",
     "description": "OTHR SANITARY ARTICLES"
    },
    {
     "chapter": "39",
     "itc_hscode": "392310",
     "description": "BOXS CASES CRATES & SMLR ARTCLS OF PLSTCS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392321",
     "description": "SACKS & BAGS OF POLYETHYLENE (INCL CONES)"
    },
    {
     "chapter": "39",
     "itc_hscode": "392329",
     "description": "SACKS & BAGS (INCL CONES)OF OTHR PLASTICS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392330",
     "description": "CRBYS BTTLS FLSKS & SMLR ARTCLS OF PLSTCS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392340",
     "description": "SPLS COPS BOBBINS & SMLR SPPRTS OF PLSTCS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392350",
     "description": "STOPRS LIDS CAPS & OTHR CLSRES OF PLSTCS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392390",
     "description": "OTHR ARTCLS FOR THE CNVYNCE\/PCKNG OF GOODS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392410",
     "description": "TABLEWARE & KITCHENWARE OF PLASTICS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392490",
     "description": "OTHR HOUSEHOLD & TOILT ARTCLS OF PLSTCS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392510",
     "description": "RESRVRS TANKS VATS & SMLR CONTNR UPTO 300L"
    },
    {
     "chapter": "39",
     "itc_hscode": "392520",
     "description": "DOORS WNDOWS & THR FRMS THRSHLDS FOR DOORS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392530",
     "description": "SHUTTERS BLINDS(INCLUDING VENETIAN BLINDS)& SIMILAR ARTICLES & PARTS THEREOF"
    },
    {
     "chapter": "39",
     "itc_hscode": "392590",
     "description": "OTHER BUILDERS WARE OF PLASTICS"
    },
    {
     "chapter": "39",
     "itc_hscode": "392610",
     "description": "ARTICLS OF OFFICE OR SCHOOL SUPPLIES"
    },
    {
     "chapter": "39",
     "itc_hscode": "392620",
     "description": "ARTCLS OF APRL & CLTHNG ACSORS(INCL GLVS)"
    },
    {
     "chapter": "39",
     "itc_hscode": "392630",
     "description": "FITTINGS FOR FURNITURE COACHWORK\/THE LIKE"
    },
    {
     "chapter": "39",
     "itc_hscode": "392640",
     "description": "STATUETTES & OTHER ORNAMENTAL ARTICLES"
    },
    {
     "chapter": "39",
     "itc_hscode": "392690",
     "description": "OTHER ARTICLES OF PLASTICS"
    },
    {
     "chapter": "40",
     "itc_hscode": "400110",
     "description": "NATRL RUBR LATEX W\/N PRE‐VULCANISED"
    },
    {
     "chapter": "40",
     "itc_hscode": "400121",
     "description": "NATRL RUBR IN SMKD SHEETS"
    },
    {
     "chapter": "40",
     "itc_hscode": "400122",
     "description": "TECHNICALLY SPCFD NATRL RUBR(TSNR)"
    },
    {
     "chapter": "40",
     "itc_hscode": "400129",
     "description": "NATURAL RUBBER IN OTHER FORMS"
    },
    {
     "chapter": "40",
     "itc_hscode": "400130",
     "description": "BALTA GUTTA‐PERCHA ETC & SMLR NATRL GUMS"
    },
    {
     "chapter": "40",
     "itc_hscode": "400211",
     "description": "LATEX (SBR\/XSBR)"
    },
    {
     "chapter": "40",
     "itc_hscode": "400219",
     "description": "OTHR STYRENE‐BUTADIENE RUBR(SBR) CRBOXLATED STYRENE‐BUTADIENE RUBR(XSBR)"
    },
    {
     "chapter": "40",
     "itc_hscode": "400220",
     "description": "BUTADIENE RUBBER (BR)"
    },
    {
     "chapter": "40",
     "itc_hscode": "400231",
     "description": "ISOBUTENE‐ISOPRENE(BUTYL) RUBBER (IIR)"
    },
    {
     "chapter": "40",
     "itc_hscode": "400239",
     "description": "HALO‐ISOBUTENE‐ISOPRENE RUBR (CIIR\/BIIR)"
    },
    {
     "chapter": "40",
     "itc_hscode": "400241",
     "description": "LATEX,CHLOROPRENE RUBR"
    },
    {
     "chapter": "40",
     "itc_hscode": "400249",
     "description": "OTHR CHLOROPRENE(CHLOROBUTADIENE) RUBR(CR)"
    },
    {
     "chapter": "40",
     "itc_hscode": "400251",
     "description": "ACRYLONITRILE‐BUTADINE RUBR LATEX"
    },
    {
     "chapter": "40",
     "itc_hscode": "400259",
     "description": "OTHR ACRYLONITRILE‐BUTADIENE RUBR (NBR)"
    },
    {
     "chapter": "40",
     "itc_hscode": "400260",
     "description": "ISOPRENE RUBBER"
    },
    {
     "chapter": "40",
     "itc_hscode": "400270",
     "description": "ETHYLENE‐PRPYLENE‐NON‐CONJUGATED"
    },
    {
     "chapter": "40",
     "itc_hscode": "400280",
     "description": "MXTRS OF ANY PRDCT OF HDG NO 4001 WTH ANY PRDCT OF THIS HDG"
    },
    {
     "chapter": "40",
     "itc_hscode": "400291",
     "description": "OTHR RUBER LATEX"
    },
    {
     "chapter": "40",
     "itc_hscode": "400299",
     "description": "OTHR SYNTHTC & FACTICE RBR DRVD FRM OILS"
    },
    {
     "chapter": "40",
     "itc_hscode": "400300",
     "description": "RECLAIMED RUBR IN PRMRY FORMS OR IN PLATES SHEETS OR STRIP"
    },
    {
     "chapter": "40",
     "itc_hscode": "400510",
     "description": "RUBR COMPOUNDED WTH CRBN BLACKS\/SILICA"
    },
    {
     "chapter": "40",
     "itc_hscode": "400520",
     "description": "SOLUTIONS; DISPRSNS OTHR THN THOSE OF SUBHEADING NO. 400510"
    },
    {
     "chapter": "40",
     "itc_hscode": "400591",
     "description": "PLATES SHEETS AND STRIP"
    },
    {
     "chapter": "40",
     "itc_hscode": "400599",
     "description": "OTHR CMPNDED UNVULCNSD RUBR EXCL PLTS SHTS"
    },
    {
     "chapter": "40",
     "itc_hscode": "400610",
     "description": "CAMEL‐BLACKSTRPS FR RETREADING RUBR TYRS"
    },
    {
     "chapter": "40",
     "itc_hscode": "400690",
     "description": "OTHR FORMS & ARTICLES OF UNVULCNSD RUBR"
    },
    {
     "chapter": "40",
     "itc_hscode": "400700",
     "description": "VULCANISED RUBR THREAD AND CORD"
    },
    {
     "chapter": "40",
     "itc_hscode": "400811",
     "description": "PLTS,SHTS,STRP OF CELLULAR RUBBER"
    },
    {
     "chapter": "40",
     "itc_hscode": "400819",
     "description": "OTHRS OF CELLULAR RUBBER"
    },
    {
     "chapter": "40",
     "itc_hscode": "400821",
     "description": "PLTS SHTS STRPS OF NON‐CELLULAR RUBR"
    },
    {
     "chapter": "40",
     "itc_hscode": "400829",
     "description": "OTHRS OF NON‐CELLULAR RUBBER"
    },
    {
     "chapter": "40",
     "itc_hscode": "400911",
     "description": "MATERIALS WITHOUT FITTINGS"
    },
    {
     "chapter": "40",
     "itc_hscode": "400912",
     "description": "MATERIALS WITH FITTINGS"
    },
    {
     "chapter": "40",
     "itc_hscode": "400921",
     "description": "MATERIALS WITHOUT FITTINGS"
    },
    {
     "chapter": "40",
     "itc_hscode": "400922",
     "description": "WITH FITTINGS"
    },
    {
     "chapter": "40",
     "itc_hscode": "400931",
     "description": "MATERIALS WTHOUT FITTINGS"
    },
    {
     "chapter": "40",
     "itc_hscode": "400932",
     "description": "TEXTILES MATERIALS WITH FITTINGS"
    },
    {
     "chapter": "40",
     "itc_hscode": "400941",
     "description": "MATERIALS WITHOUT FITTINGS"
    },
    {
     "chapter": "40",
     "itc_hscode": "400942",
     "description": "MATARIALS WITH FITTINGS"
    },
    {
     "chapter": "40",
     "itc_hscode": "401011",
     "description": "(CNVYR BLT\/BLTNG )RENFRCD ONLY WITH METL"
    },
    {
     "chapter": "40",
     "itc_hscode": "401012",
     "description": "(CNVYR BLT\/BLTNG)RENFRCD WTH TXTL MTRLS"
    },
    {
     "chapter": "40",
     "itc_hscode": "401019",
     "description": "OTHR CONVEYOR BELT OR BELTING"
    },
    {
     "chapter": "40",
     "itc_hscode": "401031",
     "description": "BETWN"
    },
    {
     "chapter": "40",
     "itc_hscode": "401032",
     "description": "OFCIRCUM BETWN 60 CM & 180 CM."
    },
    {
     "chapter": "40",
     "itc_hscode": "401033",
     "description": "BETWN 60 CM & 180 CM"
    },
    {
     "chapter": "40",
     "itc_hscode": "401034",
     "description": "CIRCUM BETWN 180 CM & 240 CM."
    },
    {
     "chapter": "40",
     "itc_hscode": "401035",
     "description": "ENDLESS SYNCHRONOUS BELTS,OF A CIRCUMFRNCEBETWN 60CM & 150CM"
    },
    {
     "chapter": "40",
     "itc_hscode": "401036",
     "description": "ENDLESS SYNCHRONOUS BLTS, OF A CIRCUMFRNCEBETWN 150CM & 198 CM"
    },
    {
     "chapter": "40",
     "itc_hscode": "401039",
     "description": "OTHR TRANSMISSION BLTS\/BELTING OF VULCANISED RUBBER"
    },
    {
     "chapter": "40",
     "itc_hscode": "401110",
     "description": "NEW PNMTC TYRES OF A KND USED ON MOTOR CARS(INCL STATION WAGONS & RACING CARS"
    },
    {
     "chapter": "40",
     "itc_hscode": "401120",
     "description": "NEW PNMTC TYRES USED ON BUSES\/LORRIES"
    },
    {
     "chapter": "40",
     "itc_hscode": "401130",
     "description": "NEW PNMTC TYRES OF A KIND USED ON AIRCRAFT"
    },
    {
     "chapter": "40",
     "itc_hscode": "401140",
     "description": "NEW PNMTC TYRES OF A KIND USED ON MTRCYCLS"
    },
    {
     "chapter": "40",
     "itc_hscode": "401150",
     "description": "NEW PNMTC TYRES OF A KND USED ON BICYCLS"
    },
    {
     "chapter": "40",
     "itc_hscode": "401161",
     "description": "SIMILAR TREAD.WITH RIM SIZE LESS THN 61 CW"
    },
    {
     "chapter": "40",
     "itc_hscode": "401162",
     "description": "SIMILAR TREAD."
    },
    {
     "chapter": "40",
     "itc_hscode": "401163",
     "description": "61 CWW HAVING\"HR‐BON\"ORSIMILAR TREAD."
    },
    {
     "chapter": "40",
     "itc_hscode": "401169",
     "description": "TREAD."
    },
    {
     "chapter": "40",
     "itc_hscode": "401192",
     "description": "OTHER KIND OF TYRES USED ON AGRL OR FORES TRY VEHICLE\/MACHINES"
    },
    {
     "chapter": "40",
     "itc_hscode": "401193",
     "description": "THAN 61 CWW."
    },
    {
     "chapter": "40",
     "itc_hscode": "401194",
     "description": "SIZEMORE THAN 61 CWW."
    },
    {
     "chapter": "40",
     "itc_hscode": "401199",
     "description": "OTHR PNMTC TYRES OF RUBBER"
    },
    {
     "chapter": "40",
     "itc_hscode": "401211",
     "description": "RETREADED TYRE USED ON MOTOR CARS(INCL STATATION WAGON\/RACING CARS)"
    },
    {
     "chapter": "40",
     "itc_hscode": "401212",
     "description": "RETREADED TYRE USED 0ON BUSES\/LORRIES"
    },
    {
     "chapter": "40",
     "itc_hscode": "401213",
     "description": "RETREADED TYRE USED ON AIRCRAFTS"
    },
    {
     "chapter": "40",
     "itc_hscode": "401219",
     "description": "RETREADED TYRE USED ON VEHICLE OTHER THAN MOTOR CARS\/BUSES\/LORRIES\/AIRCRAFTS"
    },
    {
     "chapter": "40",
     "itc_hscode": "401220",
     "description": "USED PNEUMATIC TYRES"
    },
    {
     "chapter": "40",
     "itc_hscode": "401290",
     "description": "OTHER SOLID\/CUSHION TYRES,TYRE TREADS AND TYRE FLAPS OF RUBBER"
    },
    {
     "chapter": "40",
     "itc_hscode": "401310",
     "description": "INNER TUBES OF MTR CARS (INCL STATION WAGONS & RACING CARS) BUSES \/LORIES"
    },
    {
     "chapter": "40",
     "itc_hscode": "401320",
     "description": "INNER TUBES OF RUBBER USED ON BICYCLES"
    },
    {
     "chapter": "40",
     "itc_hscode": "401390",
     "description": "OTHER INNER TUBES OF RUBBER"
    },
    {
     "chapter": "40",
     "itc_hscode": "401410",
     "description": "SHEATH CONTRACEPTIVES"
    },
    {
     "chapter": "40",
     "itc_hscode": "401490",
     "description": "OTHR HYGNC & PHRMCTL ARTCLS"
    },
    {
     "chapter": "40",
     "itc_hscode": "401511",
     "description": "SURGICLE GLOVES,MITTENS & MITTS"
    },
    {
     "chapter": "40",
     "itc_hscode": "401519",
     "description": "OTHER GLOVES,MITTENS AND MITTS"
    },
    {
     "chapter": "40",
     "itc_hscode": "401590",
     "description": "OTHR ARTCLS OF APARL & CLTHNG ACSRS OF VOLCANISED RUBR"
    },
    {
     "chapter": "40",
     "itc_hscode": "401610",
     "description": "OTHR ARTCLS OF CELLULAR RUBBER"
    },
    {
     "chapter": "40",
     "itc_hscode": "401691",
     "description": "FLOOR COVERINGS AND MATS"
    },
    {
     "chapter": "40",
     "itc_hscode": "401692",
     "description": "ERASERS"
    },
    {
     "chapter": "40",
     "itc_hscode": "401693",
     "description": "GASKETS WASHERS & OTHER SEALS"
    },
    {
     "chapter": "40",
     "itc_hscode": "401694",
     "description": "BOAT\/DOCK FENDERS W\/N INFLATABLE"
    },
    {
     "chapter": "40",
     "itc_hscode": "401695",
     "description": "OTHER INFLATABLE ARTICLES:"
    },
    {
     "chapter": "40",
     "itc_hscode": "401699",
     "description": "ARTCLS OF VULCANISED RBR EXCL HRD RBR NES"
    },
    {
     "chapter": "40",
     "itc_hscode": "401700",
     "description": "HARD RUBR IN ALL FORMS INCLUDING WASTE AND SCRAP ARTCLS OF HRD RUBR"
    },
    {
     "chapter": "41",
     "itc_hscode": "410120",
     "description": "SLTD,16 KG WHEN FRESH\/SLTD\/PRSRVD"
    },
    {
     "chapter": "41",
     "itc_hscode": "410150",
     "description": "WHOL HIDS &SKNS OF BVNE ANMLS OF WT EXCDNG16 KG"
    },
    {
     "chapter": "41",
     "itc_hscode": "410190",
     "description": "OTHER HIDES AND SKINS OF BVNE ANMLS INCDNGBUTTS\/BENDS\/BULLIES FRESH\/SLTD\/PRSRVD"
    },
    {
     "chapter": "41",
     "itc_hscode": "410210",
     "description": "RAW SKINS OF SHEEP OR LAMBS WITH WOOL ON"
    },
    {
     "chapter": "41",
     "itc_hscode": "410221",
     "description": "RAW SKNS OF SHP LMB ETC PCKLD WTHOUT WOOL"
    },
    {
     "chapter": "41",
     "itc_hscode": "410229",
     "description": "RW SKN OF SHP LMB ETC NT PCKLD WTOUT WL ON"
    },
    {
     "chapter": "41",
     "itc_hscode": "410320",
     "description": "RAW HIDES AND SKINS OF REPTILES"
    },
    {
     "chapter": "41",
     "itc_hscode": "410330",
     "description": "RAW HIDES AND SKINS OF SWINE"
    },
    {
     "chapter": "41",
     "itc_hscode": "410390",
     "description": "RAW HIDS AND SKINS OF OTHER ANIMAL"
    },
    {
     "chapter": "41",
     "itc_hscode": "410411",
     "description": "FULL GRAINS‐UNSPLIT\/GRAIN‐SPLITS OF BOVINEIN WET STATE INCLDNG WET‐BLUE"
    },
    {
     "chapter": "41",
     "itc_hscode": "410419",
     "description": "OTHER GRAIN OF BOVINE IN WET STATE INCLDNGWET‐BLUE"
    },
    {
     "chapter": "41",
     "itc_hscode": "410441",
     "description": "FULL GRAINS‐UNSPLIT\/GRAIN‐SPLITS OF BOVINE IN DRY STATE(CRUST)"
    },
    {
     "chapter": "41",
     "itc_hscode": "410449",
     "description": "OTHER GRAIN OF BOVINE IN DRY STATE (CRUST)"
    },
    {
     "chapter": "41",
     "itc_hscode": "410510",
     "description": "FURTHER PREPARED. IN WET STATE"
    },
    {
     "chapter": "41",
     "itc_hscode": "410530",
     "description": "FURTHER PREPARED IN DRY STATE"
    },
    {
     "chapter": "41",
     "itc_hscode": "410621",
     "description": "TANED\/CRUST HIDE &SKINS OF GOAT OR KIDS INWET STATE INCLUDING WET‐BLUE."
    },
    {
     "chapter": "41",
     "itc_hscode": "410622",
     "description": "TANED\/CRUST HIDE & SKINS OF GOAT OR KIDS IN DRY STATE (CRUST)"
    },
    {
     "chapter": "41",
     "itc_hscode": "410631",
     "description": "TANED\/CRUST HIDE & SKINS OF SWINE IN WET STATE INCLUDING WET‐BLUE."
    },
    {
     "chapter": "41",
     "itc_hscode": "410632",
     "description": "TANED\/CRUST HIDE &SKIN OF SWINE IN DRY STATE(CRUST)"
    },
    {
     "chapter": "41",
     "itc_hscode": "410640",
     "description": "TANED\/CRUST HIDE & SKINS OF REPTILES"
    },
    {
     "chapter": "41",
     "itc_hscode": "410691",
     "description": "TANED\/CRUST HIDE & SKINS OF OTHER ANIMALS IN WET STATE INCLUDING WET‐BLUE"
    },
    {
     "chapter": "41",
     "itc_hscode": "410692",
     "description": "TANED\/CRUST HIDE & SKINS OF OTHER ANIMALS IN DRY STATE (CRUST)"
    },
    {
     "chapter": "41",
     "itc_hscode": "410711",
     "description": "LREATHER FURTHER OF BOVIN FULL GRAINS‐ UNSPLIT OF WHOLE HIDES\/SKINS"
    },
    {
     "chapter": "41",
     "itc_hscode": "410712",
     "description": "LEATHERFUTHER OF BOVIN GRAIN‐SPLIT OF WHOLE HIDES\/SKINS"
    },
    {
     "chapter": "41",
     "itc_hscode": "410719",
     "description": "OTHER WHOLE HIDS\/SKINS"
    },
    {
     "chapter": "41",
     "itc_hscode": "410791",
     "description": "FULL GRAINS‐UNSPLIT OF OTHER HIDES\/SKINS INCLUDING SIDES"
    },
    {
     "chapter": "41",
     "itc_hscode": "410792",
     "description": "GRAIN‐SPLIT OF OTHER HIDES\/SKINS INCLUDINGSIDES"
    },
    {
     "chapter": "41",
     "itc_hscode": "410799",
     "description": "OTHER\/HIDES\/SKINS INCLUDING SIDES"
    },
    {
     "chapter": "41",
     "itc_hscode": "411200",
     "description": "W.O.N. SPLIT"
    },
    {
     "chapter": "41",
     "itc_hscode": "411310",
     "description": "LEATHER FURTHER OF GOATS\/KIDS"
    },
    {
     "chapter": "41",
     "itc_hscode": "411320",
     "description": "LEATHER FURTHER OF SWINE"
    },
    {
     "chapter": "41",
     "itc_hscode": "411330",
     "description": "LTATHER FURTHER OF REPTILES"
    },
    {
     "chapter": "41",
     "itc_hscode": "411390",
     "description": "LEATHER FURTHER OF OTHER ANIMALS"
    },
    {
     "chapter": "41",
     "itc_hscode": "411410",
     "description": "CHAMOIS LEATHER(INCLUDING COMBINATION CHAMOIS)"
    },
    {
     "chapter": "41",
     "itc_hscode": "411420",
     "description": "PATENT LEATHER\/LAMINATED LEATHER\/METALLISD LEATHER"
    },
    {
     "chapter": "41",
     "itc_hscode": "411510",
     "description": "COMPOSIUTION LEATHER WITH BASE OF LEATHER\/LEATHER FIBRE IN SLABS\/SHEET\/STRIPS"
    },
    {
     "chapter": "41",
     "itc_hscode": "411520",
     "description": "ARTCLE\/DUST\/POWDER\/FLOUR"
    },
    {
     "chapter": "42",
     "itc_hscode": "420100",
     "description": "BAGS‐DOG COATS & THE LIKE)OF ANY MATERIALS"
    },
    {
     "chapter": "42",
     "itc_hscode": "420211",
     "description": "LTHR\/COMPSTN LTHR\/PATENT LEATHER"
    },
    {
     "chapter": "42",
     "itc_hscode": "420212",
     "description": "TRUNKS SUIT CASES ETC AND SMLR CONTNR WTH OUTER SURFACE OF PLASTIC\/OF TXTL MATRLS"
    },
    {
     "chapter": "42",
     "itc_hscode": "420219",
     "description": "TRUNKS,SUIT‐CASES ETC & SMLR CONTNRS WITH OUTER SURFACE OF OTHR MATERIALS"
    },
    {
     "chapter": "42",
     "itc_hscode": "420221",
     "description": "WTH SHOULDER STRAP‐INCL THOS WITHOUT HANDL"
    },
    {
     "chapter": "42",
     "itc_hscode": "420222",
     "description": "SHOULDER STRAP‐INCL THOSE WITHOUT HANDLE"
    },
    {
     "chapter": "42",
     "itc_hscode": "420229",
     "description": "OTHR HANDBAGS INCL THOSE WITHOUT HANDLE"
    },
    {
     "chapter": "42",
     "itc_hscode": "420232",
     "description": "ARTCLS WTH OUTER SRFCE OF SHEETING OF PLASTICS\/TXTL MTRL CARIED IN POCKET\/HNDBG"
    },
    {
     "chapter": "42",
     "itc_hscode": "420239",
     "description": "ARTCL OF OTHR MATRL CARIED IN PCKT\/HNDBG"
    },
    {
     "chapter": "42",
     "itc_hscode": "420292",
     "description": "OTHER ARTICLES WITH OUTER SURFACE OF PLASTIC SHEETING OR OF TXTL MATERIALS"
    },
    {
     "chapter": "42",
     "itc_hscode": "420299",
     "description": "OTHR SIMILAR CONTAINERS OF HDNG 4202"
    },
    {
     "chapter": "42",
     "itc_hscode": "420310",
     "description": "ARTICLES OF APPAREL"
    },
    {
     "chapter": "42",
     "itc_hscode": "420321",
     "description": "GLOVES‐MITTENS & MITTS SPECIALLY DESIGNED FOR USE IN SPORTS"
    },
    {
     "chapter": "42",
     "itc_hscode": "420329",
     "description": "GLOVS,MITNS & MITS DESGND FR OTHR USE"
    },
    {
     "chapter": "42",
     "itc_hscode": "420330",
     "description": "BELTS & BANDOLIERS"
    },
    {
     "chapter": "42",
     "itc_hscode": "420340",
     "description": "OTHER CLOTHING ACCESSORIES :"
    },
    {
     "chapter": "42",
     "itc_hscode": "420500",
     "description": "OTHR ARTCLS OF LEATHER\/OF COMPSTN LEATHER"
    },
    {
     "chapter": "42",
     "itc_hscode": "420600",
     "description": "TENDONS"
    },
    {
     "chapter": "43",
     "itc_hscode": "430110",
     "description": "RAW FURSKINS OF MINK WHOLE WITH OR WITHOUT HEAD TAIL OR PAWS"
    },
    {
     "chapter": "43",
     "itc_hscode": "430160",
     "description": "RAW FURSKINS OF FOX WHOLE WITH OR WITHOUT HEAD TAIL OR PAWS"
    },
    {
     "chapter": "43",
     "itc_hscode": "430180",
     "description": "OTHER FRSKNS WHOLE W\/N WITH HEAD TAIL\/PAWS"
    },
    {
     "chapter": "43",
     "itc_hscode": "430190",
     "description": "CUTTINGS SUITABLE FOR FURRIERS USE CUTTINGS SUITABLE FOR FURRIERS USE"
    },
    {
     "chapter": "43",
     "itc_hscode": "430211",
     "description": "WHOLE FUR‐SKINS OF MINK WITH\/WITHOUT HEAD TAIL OR PAWS NOT ASSEMBLED, TANNED"
    },
    {
     "chapter": "43",
     "itc_hscode": "430219",
     "description": "OTHER FURSKINS WHOLE WITH OR WITHOUT HEAD TAIL OR PAWS NOT ASSEMBLED,TANNED"
    },
    {
     "chapter": "43",
     "itc_hscode": "430220",
     "description": "HEDS,TAILS PAWS,OTHR PCS\/CUTNGS UNASMBLD"
    },
    {
     "chapter": "43",
     "itc_hscode": "430230",
     "description": "WHOLE FUR SKINS & PCS\/CUTNGS THROF ASMBLD"
    },
    {
     "chapter": "43",
     "itc_hscode": "430310",
     "description": "ARTICLES OF APPAREL & CLOTHING ACCESSORIES"
    },
    {
     "chapter": "43",
     "itc_hscode": "430390",
     "description": "OTHER ARTICLES OF FURSKIN"
    },
    {
     "chapter": "43",
     "itc_hscode": "430400",
     "description": "ARTIFICIAL FUR AND ARTICLES THEREOF"
    },
    {
     "chapter": "44",
     "itc_hscode": "440110",
     "description": "FUEL WOOD IN LOGS BILETS ETC\/IN SMLR FORMS"
    },
    {
     "chapter": "44",
     "itc_hscode": "440121",
     "description": "CONFEROUS WOOD IN CHIPS OR PARTICLS"
    },
    {
     "chapter": "44",
     "itc_hscode": "440122",
     "description": "NON‐CONIFEROUS WOOD IN CHIPS OR PARTICLS"
    },
    {
     "chapter": "44",
     "itc_hscode": "440210",
     "description": "OF BAMBOO"
    },
    {
     "chapter": "44",
     "itc_hscode": "440290",
     "description": "OTHER :"
    },
    {
     "chapter": "44",
     "itc_hscode": "440310",
     "description": "WOOD TRTD WTH PAINT STAN CRESTE\/OTHR PRSVT"
    },
    {
     "chapter": "44",
     "itc_hscode": "440320",
     "description": "OTHER, CONIFEROUS :"
    },
    {
     "chapter": "44",
     "itc_hscode": "440341",
     "description": "DARK RED\/LIGHT RED MERANTI & MERANTI BAKAU"
    },
    {
     "chapter": "44",
     "itc_hscode": "440349",
     "description": "OTHR TROPICAL WOOD"
    },
    {
     "chapter": "44",
     "itc_hscode": "440391",
     "description": "OAK WOOD IN ROUGH"
    },
    {
     "chapter": "44",
     "itc_hscode": "440392",
     "description": "BEECH WOOD IN ROUGH"
    },
    {
     "chapter": "44",
     "itc_hscode": "440399",
     "description": "OTHER WOOD IN ROUGH"
    },
    {
     "chapter": "44",
     "itc_hscode": "440410",
     "description": "HOOPWOOD ETC CONIFEROUS"
    },
    {
     "chapter": "44",
     "itc_hscode": "440420",
     "description": "HOOPWOOD NON‐CONIFEROUS"
    },
    {
     "chapter": "44",
     "itc_hscode": "440500",
     "description": "WOOD WOOL ,WOOD FLOUR"
    },
    {
     "chapter": "44",
     "itc_hscode": "440610",
     "description": "WOODEN SLEEPERS NOT IMPREGNATED"
    },
    {
     "chapter": "44",
     "itc_hscode": "440690",
     "description": "OTHER WOODEN SLEEPER"
    },
    {
     "chapter": "44",
     "itc_hscode": "440710",
     "description": "SAWN OR CHIPPED WOOD CONIFEROUS"
    },
    {
     "chapter": "44",
     "itc_hscode": "440721",
     "description": "MAHOGANY (SWIETENIA SPP.)"
    },
    {
     "chapter": "44",
     "itc_hscode": "440722",
     "description": "VIROLA, IMBUIA AND BALSA"
    },
    {
     "chapter": "44",
     "itc_hscode": "440725",
     "description": "MERANTI(DRK RD,LGHL RD & BAKAU)"
    },
    {
     "chapter": "44",
     "itc_hscode": "440726",
     "description": "WHIT(LAUAN,SERAYA),MERNTI(WHIT,YELOW)&ALAN"
    },
    {
     "chapter": "44",
     "itc_hscode": "440727",
     "description": "SAPELLI"
    },
    {
     "chapter": "44",
     "itc_hscode": "440728",
     "description": "IROKO"
    },
    {
     "chapter": "44",
     "itc_hscode": "440729",
     "description": "OTHER :"
    },
    {
     "chapter": "44",
     "itc_hscode": "440791",
     "description": "SAWN\/CHIPPED WOOD OF OAK"
    },
    {
     "chapter": "44",
     "itc_hscode": "440792",
     "description": "SAWN\/CHIPPED WOOD OF BEECH"
    },
    {
     "chapter": "44",
     "itc_hscode": "440793",
     "description": "OF MAPLE (ACER SPP.)"
    },
    {
     "chapter": "44",
     "itc_hscode": "440794",
     "description": "OF CHERRY (PRUNUS SPP.)"
    },
    {
     "chapter": "44",
     "itc_hscode": "440795",
     "description": "OF ASH (FRAXINUS SPP.)"
    },
    {
     "chapter": "44",
     "itc_hscode": "440799",
     "description": "OTHR SAWN\/CHIPPED WOOD EXCL OAK & BEECH"
    },
    {
     "chapter": "44",
     "itc_hscode": "440810",
     "description": "VENEERSHTS PLY SHTS ETC OF CONIFEROUS"
    },
    {
     "chapter": "44",
     "itc_hscode": "440831",
     "description": "VNR SHETS,MRNTI(DRK RD,LGHT RD & BAKAU)"
    },
    {
     "chapter": "44",
     "itc_hscode": "440839",
     "description": "OTHER OF TROPICAL WOOD"
    },
    {
     "chapter": "44",
     "itc_hscode": "440890",
     "description": "VENNER SHTS PLYSHTS ETC OF OTHER WOOD"
    },
    {
     "chapter": "44",
     "itc_hscode": "440910",
     "description": "CONIFEROUS WOOD CONTINOUSLY SHAPED"
    },
    {
     "chapter": "44",
     "itc_hscode": "440921",
     "description": "OF BAMBOO"
    },
    {
     "chapter": "44",
     "itc_hscode": "440929",
     "description": "OTHER:"
    },
    {
     "chapter": "44",
     "itc_hscode": "441011",
     "description": "PARTICLE BOARD:"
    },
    {
     "chapter": "44",
     "itc_hscode": "441012",
     "description": "ORIENTED STRAND BOARD (OSB):"
    },
    {
     "chapter": "44",
     "itc_hscode": "441019",
     "description": "OTHER"
    },
    {
     "chapter": "44",
     "itc_hscode": "441090",
     "description": "PRTCL BORD\/SMLR BORD OF OTHR LIGNUS MATRLS"
    },
    {
     "chapter": "44",
     "itc_hscode": "441112",
     "description": "OF A THICKNESS NOT EXCEEDING 5MM"
    },
    {
     "chapter": "44",
     "itc_hscode": "441113",
     "description": "OF A THICKNESS EXCEEDING 5MM BUT NOT EXCEEDING 9MM"
    },
    {
     "chapter": "44",
     "itc_hscode": "441114",
     "description": "OF A THICKNESS EXCEEDING 9MM"
    },
    {
     "chapter": "44",
     "itc_hscode": "441192",
     "description": "OF A DENSITY EXCEEDING 0.8 GM\/CM3 :"
    },
    {
     "chapter": "44",
     "itc_hscode": "441193",
     "description": "OF A DENSITY EXCEEDING 0.5 GM\/CM 3 BUT NOT EXCEEDING 0.8 GM\/CM 3 :"
    },
    {
     "chapter": "44",
     "itc_hscode": "441194",
     "description": "OF A DENSITY NOT EXCEEDING 0.5 GM\/CM 3 :"
    },
    {
     "chapter": "44",
     "itc_hscode": "441210",
     "description": "OF BAMBOO"
    },
    {
     "chapter": "44",
     "itc_hscode": "441231",
     "description": "TROPICAL WOOD SPECIFIED IN SUB‐HEADING"
    },
    {
     "chapter": "44",
     "itc_hscode": "441232",
     "description": "OTHER, WITH AT LEAST ONE OUTER PLY OF NON‐CONIFEROUS WOOD:"
    },
    {
     "chapter": "44",
     "itc_hscode": "441239",
     "description": "OTHER:"
    },
    {
     "chapter": "44",
     "itc_hscode": "441294",
     "description": "BLOCKBOARD, LAMINBOARD AND BATTENBOARD"
    },
    {
     "chapter": "44",
     "itc_hscode": "441299",
     "description": "OTHR PLYWOOD,VINERED PANELS&LMNTD WOOD PANEL AND LAMINATED WOOD"
    },
    {
     "chapter": "44",
     "itc_hscode": "441300",
     "description": "DENSIFIED WOOD IN BLOCKS PLATES STRIPS OR PROFILE SHAPES"
    },
    {
     "chapter": "44",
     "itc_hscode": "441400",
     "description": "WOODEN FRAMES FOR PAINTINGS PHOTOGRAPHS MIRRORS OR SIMILAR OBJECTS"
    },
    {
     "chapter": "44",
     "itc_hscode": "441510",
     "description": "CASES BOXES CRATES DRUMS AND SMLR PACKINGS CABLE‐DURMS OF WOOD"
    },
    {
     "chapter": "44",
     "itc_hscode": "441520",
     "description": "PALETS,PALETS(BOX,COLRS) & OTHR LOAD BORDSOF WOOD"
    },
    {
     "chapter": "44",
     "itc_hscode": "441600",
     "description": "CASKS BARRELS VATS TUBS & OTHR COOPERS' PRODUCT OF WOOD INCL STAVES"
    },
    {
     "chapter": "44",
     "itc_hscode": "441700",
     "description": "OR SHOE LASTS AND TREES,OF WOOD"
    },
    {
     "chapter": "44",
     "itc_hscode": "441810",
     "description": "WINDOWS FRENCH WINDOWS AND THEIR FRAMES"
    },
    {
     "chapter": "44",
     "itc_hscode": "441820",
     "description": "DOORS,THEIR FRAMES AND THRESHOLDS"
    },
    {
     "chapter": "44",
     "itc_hscode": "441840",
     "description": "SHUTTERNG FOR CONCRETE CONSTRUCTIONAL WORK"
    },
    {
     "chapter": "44",
     "itc_hscode": "441850",
     "description": "SHINGLES AND SHAKES"
    },
    {
     "chapter": "44",
     "itc_hscode": "441860",
     "description": "POSTS AND BEAMS"
    },
    {
     "chapter": "44",
     "itc_hscode": "441871",
     "description": "FOR MOSAIC FLOORS"
    },
    {
     "chapter": "44",
     "itc_hscode": "441872",
     "description": "OTHER, MULTILAYER"
    },
    {
     "chapter": "44",
     "itc_hscode": "441879",
     "description": "OTHER"
    },
    {
     "chapter": "44",
     "itc_hscode": "441890",
     "description": "OTHER BUILDERS JOINERY ETC"
    },
    {
     "chapter": "44",
     "itc_hscode": "441900",
     "description": "TABLE\/KITCHENWARE OF WOOD"
    },
    {
     "chapter": "44",
     "itc_hscode": "442010",
     "description": "STATUETS AND OTHR ORNAMNTS OF WOOD"
    },
    {
     "chapter": "44",
     "itc_hscode": "442090",
     "description": "WOOD"
    },
    {
     "chapter": "44",
     "itc_hscode": "442110",
     "description": "CLOTHS HANGERS"
    },
    {
     "chapter": "44",
     "itc_hscode": "442190",
     "description": "OTHER ARTICLES EXCL CLOTH HANGERS"
    },
    {
     "chapter": "45",
     "itc_hscode": "450110",
     "description": "NATURAL CORK RAW OR SIMPLY PREPARED"
    },
    {
     "chapter": "45",
     "itc_hscode": "450190",
     "description": "OTHER NATURAL CORK"
    },
    {
     "chapter": "45",
     "itc_hscode": "450200",
     "description": "SHEETS\/STRIP(INCL SHRP EDGD BLNK FR CRKS OR STOPPERS)"
    },
    {
     "chapter": "45",
     "itc_hscode": "450310",
     "description": "CORKS & STOPPERS"
    },
    {
     "chapter": "45",
     "itc_hscode": "450390",
     "description": "OTHER ARTICLS OF NATURAL CORK"
    },
    {
     "chapter": "45",
     "itc_hscode": "450410",
     "description": "BLOCKS PLTES SHEETS & STRIP TILES OF ANY SHAPE SOLID CYLINDERS INCL DISCS"
    },
    {
     "chapter": "45",
     "itc_hscode": "450490",
     "description": "OTHR AGGLOMERATED CORKS"
    },
    {
     "chapter": "46",
     "itc_hscode": "460121",
     "description": "OF BAMBOO"
    },
    {
     "chapter": "46",
     "itc_hscode": "460122",
     "description": "OF RATTAN"
    },
    {
     "chapter": "46",
     "itc_hscode": "460129",
     "description": "OTHER"
    },
    {
     "chapter": "46",
     "itc_hscode": "460192",
     "description": "OF BAMBOO"
    },
    {
     "chapter": "46",
     "itc_hscode": "460193",
     "description": "OF RATTAN"
    },
    {
     "chapter": "46",
     "itc_hscode": "460194",
     "description": "OF OTHER VEGETABLE MATERIALS"
    },
    {
     "chapter": "46",
     "itc_hscode": "460199",
     "description": "OTHR PLAITING MATERIALS (EXCL VEG MATERLS)"
    },
    {
     "chapter": "46",
     "itc_hscode": "460211",
     "description": "OF BAMBOO"
    },
    {
     "chapter": "46",
     "itc_hscode": "460212",
     "description": "OF RATTAN"
    },
    {
     "chapter": "46",
     "itc_hscode": "460219",
     "description": "OTHER :"
    },
    {
     "chapter": "46",
     "itc_hscode": "460290",
     "description": "OTHER WICKER\/BASKET WORK ARTICLES"
    },
    {
     "chapter": "47",
     "itc_hscode": "470100",
     "description": "MECHANICAL WOOD PULP"
    },
    {
     "chapter": "47",
     "itc_hscode": "470200",
     "description": "CHEMICAL WOOD PULP DISSOLVING GRADES"
    },
    {
     "chapter": "47",
     "itc_hscode": "470311",
     "description": "CHEMICAL WOOD PULP UNBLCD CONFRS,SULPHATE"
    },
    {
     "chapter": "47",
     "itc_hscode": "470319",
     "description": "CHEMICAL WOOD PULP UNBLCD N‐CONIFRS,SLPHTE"
    },
    {
     "chapter": "47",
     "itc_hscode": "470321",
     "description": "BLEACHED OR SEMI‐BLEACHED CONIFEROUS CHEMICAL WOOD PULP SULPHATE"
    },
    {
     "chapter": "47",
     "itc_hscode": "470329",
     "description": "BLEACHED OR SEMI‐BLEACHED NON‐CONIFEROUS CHEMICAL WOOD PULP SULPHATE"
    },
    {
     "chapter": "47",
     "itc_hscode": "470411",
     "description": "UNBLCD CONFRS CHMCAL WOOD PULP SULPHITE"
    },
    {
     "chapter": "47",
     "itc_hscode": "470419",
     "description": "UNBLCD N‐CONIFRS CHMICAL WOOD PULP SULPHIT"
    },
    {
     "chapter": "47",
     "itc_hscode": "470421",
     "description": "SEMI‐BLEACHED\/BLEACHED CONIFEROUS CHMCAL WOOD PULP SULPHITE"
    },
    {
     "chapter": "47",
     "itc_hscode": "470429",
     "description": "SEMI‐BLEACHED\/BLEACHED NON‐CONIFEROUS CHMICAL WOOD PULP SULPHITE"
    },
    {
     "chapter": "47",
     "itc_hscode": "470500",
     "description": "WOOD PULP OBTAINED BY COMBINATION OF MECHANICAL & CHEMICAL PULP PROCESS"
    },
    {
     "chapter": "47",
     "itc_hscode": "470610",
     "description": "COTTON LINTERS PULP"
    },
    {
     "chapter": "47",
     "itc_hscode": "470620",
     "description": "PULPS OF FIBRES DERIVED FROM RECOVERED (WASTE & SCRAP) PAPER & PAPERBOARD"
    },
    {
     "chapter": "47",
     "itc_hscode": "470630",
     "description": "OTHER, OF BAMBOO"
    },
    {
     "chapter": "47",
     "itc_hscode": "470691",
     "description": "OTHER MECHANICAL PULP"
    },
    {
     "chapter": "47",
     "itc_hscode": "470692",
     "description": "OTHER CHEMICAL PULPS"
    },
    {
     "chapter": "47",
     "itc_hscode": "470693",
     "description": "OTHER SEMI‐CHEMICAL PULP"
    },
    {
     "chapter": "47",
     "itc_hscode": "470710",
     "description": "WSTE AND SCRP OF UNBLECHD KRAFT PAPR OR PAPRBORD OR CORGTD PAPR\/PAPRBORD"
    },
    {
     "chapter": "47",
     "itc_hscode": "470720",
     "description": "THE MASS"
    },
    {
     "chapter": "47",
     "itc_hscode": "470790",
     "description": "OTHER, INCLUDING UNSORTED WASTE AND SCRAP"
    },
    {
     "chapter": "48",
     "itc_hscode": "480100",
     "description": "NEWSPRINT IN ROLLS OR SHEETS"
    },
    {
     "chapter": "48",
     "itc_hscode": "480210",
     "description": "HAND MADE PAPER & PAPERBOARD"
    },
    {
     "chapter": "48",
     "itc_hscode": "480220",
     "description": "PAPR,PAPRBORD USD AS BASE FOR PHOTO\/HEAT ELECTRO SENSITIVE PAPR OR PAPRBORD"
    },
    {
     "chapter": "48",
     "itc_hscode": "480240",
     "description": "WALPAPER BASE"
    },
    {
     "chapter": "48",
     "itc_hscode": "480254",
     "description": "THETOTL FBR CNTNT,WGHNG <40 G\/M2"
    },
    {
     "chapter": "48",
     "itc_hscode": "480255",
     "description": "TOTAL FBR CNTNT,WGHNG GO G\/M2 TO 150 G\/M2"
    },
    {
     "chapter": "48",
     "itc_hscode": "480256",
     "description": "AND OTHER SIDE <297 MM. UNFOLDED STATE."
    },
    {
     "chapter": "48",
     "itc_hscode": "480257",
     "description": "OTHER PAPER & PAPR BORD WGHNG 40 G\/M2 TO 150 G\/M2"
    },
    {
     "chapter": "48",
     "itc_hscode": "480258",
     "description": "TOTL FBR CNTNG,WHGNG MORE THAN 150 G\/M2"
    },
    {
     "chapter": "48",
     "itc_hscode": "480261",
     "description": "OBTND BY MCHNCL\/CHEMI‐MCHNCL PROCESS"
    },
    {
     "chapter": "48",
     "itc_hscode": "480262",
     "description": "MM AND OTHER SIDE <297 MM"
    },
    {
     "chapter": "48",
     "itc_hscode": "480269",
     "description": "PAPER & PAPERBOARD OTHER THAN ROLL\/SHEET OFWHCH >10% BY WT OF TOTL FBR CNTNT."
    },
    {
     "chapter": "48",
     "itc_hscode": "480300",
     "description": "ROLS\/SHETS"
    },
    {
     "chapter": "48",
     "itc_hscode": "480411",
     "description": "KRFT LINER UNBLEACHED"
    },
    {
     "chapter": "48",
     "itc_hscode": "480419",
     "description": "OTHER KRAFT LINER"
    },
    {
     "chapter": "48",
     "itc_hscode": "480421",
     "description": "SACK KRAFT PAPER UNBLEACHED"
    },
    {
     "chapter": "48",
     "itc_hscode": "480429",
     "description": "OTHER SACK KRAFT PAPER"
    },
    {
     "chapter": "48",
     "itc_hscode": "480431",
     "description": "OTHER CRAFT PAPER & PAPERBOARD WEIGHING 150 G\/M2 OR LESS UNBLEACHED"
    },
    {
     "chapter": "48",
     "itc_hscode": "480439",
     "description": "OTHR CRFT PAPR & PAPRBORD WGHNG<=150G\/M2"
    },
    {
     "chapter": "48",
     "itc_hscode": "480442",
     "description": "FIBRE CONTNG WOOD FIBR FROM CHM PROCESS"
    },
    {
     "chapter": "48",
     "itc_hscode": "480449",
     "description": "OTHR KRFT PAR & PAPRBORD WEING ABOVE 150G\/M2 BUT BELOW 225G\/M2"
    },
    {
     "chapter": "48",
     "itc_hscode": "480451",
     "description": "KRFT PAPR\/PAPRBORD WEING\/225G\/M2 UNBLCHD"
    },
    {
     "chapter": "48",
     "itc_hscode": "480452",
     "description": "WOOD FIBR FROM CHM PROCESS"
    },
    {
     "chapter": "48",
     "itc_hscode": "480459",
     "description": "OTHR KRFT PAPR\/PAPRBORD WEING 225G\/M2\/MORE"
    },
    {
     "chapter": "48",
     "itc_hscode": "480511",
     "description": "SEMI‐CHEMICAL FLUTING PAPER"
    },
    {
     "chapter": "48",
     "itc_hscode": "480512",
     "description": "STRAW FLUTING PAPER"
    },
    {
     "chapter": "48",
     "itc_hscode": "480519",
     "description": "OTHER FLUTING PAPER"
    },
    {
     "chapter": "48",
     "itc_hscode": "480524",
     "description": "TESTLINER(RECYCLED LINER BORD) OF WT<=150 G\/M2"
    },
    {
     "chapter": "48",
     "itc_hscode": "480525",
     "description": "TESTLINER(RECYLED LINER BORD)OF WT>250 G \/M2"
    },
    {
     "chapter": "48",
     "itc_hscode": "480530",
     "description": "SULPHITE WRAPPING PAPR"
    },
    {
     "chapter": "48",
     "itc_hscode": "480540",
     "description": "FILTER PAPER AND PAPERBOARD"
    },
    {
     "chapter": "48",
     "itc_hscode": "480550",
     "description": "FELT PAPER AND PAPERBOARD"
    },
    {
     "chapter": "48",
     "itc_hscode": "480591",
     "description": "OTHER UNCOATED PAPR & PARPBORD OF WT<=150 G\/M2"
    },
    {
     "chapter": "48",
     "itc_hscode": "480592",
     "description": "OTHER UNCOATED PAPR & PAPRBORD OF WT< 150 G\/M2 SUT <225 G\/M2"
    },
    {
     "chapter": "48",
     "itc_hscode": "480593",
     "description": "OTHER UNCOATED PAPR & PAPRBORD OF WT>=225 G\/M2"
    },
    {
     "chapter": "48",
     "itc_hscode": "480610",
     "description": "VEGETABLE PARCHMENT PAPER"
    },
    {
     "chapter": "48",
     "itc_hscode": "480620",
     "description": "GREASEPROOF PAPERS"
    },
    {
     "chapter": "48",
     "itc_hscode": "480630",
     "description": "TRACING PAPERS"
    },
    {
     "chapter": "48",
     "itc_hscode": "480640",
     "description": "GLASNE & OTHR GLZD TRNSPRN\/TRNSLCNT PAPERS"
    },
    {
     "chapter": "48",
     "itc_hscode": "480700",
     "description": "W\/NINTERNLY REINFORCED IN ROLS\/SHEETS"
    },
    {
     "chapter": "48",
     "itc_hscode": "480810",
     "description": "CORRUGATED PAPR\/PAPRBORD W\/N PERFORATED"
    },
    {
     "chapter": "48",
     "itc_hscode": "480820",
     "description": "SACK KRFT PPR CRPD\/CRNKLD W\/N EMBSD\/PRFRTD"
    },
    {
     "chapter": "48",
     "itc_hscode": "480830",
     "description": "OTHER KRAFT PAPER, CREPED OR CRINKLED, WHETHER OR NOT EMBOSSED OR PERFORATED"
    },
    {
     "chapter": "48",
     "itc_hscode": "480890",
     "description": "OTHER PAPER AND PAERBORD CORRUGATED"
    },
    {
     "chapter": "48",
     "itc_hscode": "480920",
     "description": "SELF COPY PAPER"
    },
    {
     "chapter": "48",
     "itc_hscode": "480990",
     "description": "OTHR COPYING OR TRANSFER PAPERS"
    },
    {
     "chapter": "48",
     "itc_hscode": "481013",
     "description": "THAN 10% BY WT OF TOTAL FBR IN ROLLS"
    },
    {
     "chapter": "48",
     "itc_hscode": "481019",
     "description": "PAPR\/PAPRBORD OTHER THAN ROLLS\/SHEETS"
    },
    {
     "chapter": "48",
     "itc_hscode": "481022",
     "description": "BY MCH PROCS>10% BY WEIGHT"
    },
    {
     "chapter": "48",
     "itc_hscode": "481029",
     "description": "FIBRS OBTND BY A MCHNCL PRCSS"
    },
    {
     "chapter": "48",
     "itc_hscode": "481031",
     "description": "OF THE TOTL FIBRS & WEIGHING <=150G\/M2"
    },
    {
     "chapter": "48",
     "itc_hscode": "481032",
     "description": "CHPROCS IS MORE THN 95 PRCNT OF THE TOTAL"
    },
    {
     "chapter": "48",
     "itc_hscode": "481039",
     "description": "OTHR KRFT PAPR AND PAPRBORD NT USD FR WRTNG PRNTNG OR OTHR GRAPHIC PURPOSES"
    },
    {
     "chapter": "48",
     "itc_hscode": "481092",
     "description": "MULTIPLY PAPR AND PAPRBORD"
    },
    {
     "chapter": "48",
     "itc_hscode": "481099",
     "description": "OTHR COATED PAPR AND PPRBRD (NOT MLTIPLY)"
    },
    {
     "chapter": "48",
     "itc_hscode": "481110",
     "description": "TARD BITUMINISD\/ASPHALTD PAPR AND PAPRBORD"
    },
    {
     "chapter": "48",
     "itc_hscode": "481141",
     "description": "SELF ADHESIVE PAPER & PAPRBOARD"
    },
    {
     "chapter": "48",
     "itc_hscode": "481149",
     "description": "OTHR GUMMED OR ADHESIVE PAPR AND PAPRBORD"
    },
    {
     "chapter": "48",
     "itc_hscode": "481159",
     "description": "OTHER PAPR AND PAPRBORD COTD IMPRGNTD COVRD WITH PLSTICS (EXCL ADHESV )"
    },
    {
     "chapter": "48",
     "itc_hscode": "481160",
     "description": "STEARINE, OIL OR GLYCEROL"
    },
    {
     "chapter": "48",
     "itc_hscode": "481190",
     "description": "OTHER PAPER, PAPERBOARD, CELLULOSE WADDING AND WEBS OF CELLULOSE FIBRES :"
    },
    {
     "chapter": "48",
     "itc_hscode": "481200",
     "description": "FILTER BLOCKS SLABS AND PLATS OF PAPR PULP"
    },
    {
     "chapter": "48",
     "itc_hscode": "481310",
     "description": "PAPR IN THE FORM OF BOOKLETS OR TUBES"
    },
    {
     "chapter": "48",
     "itc_hscode": "481320",
     "description": "CIG PAPR IN ROLLS OF WIDTH NOT EXCDNG 5 CM"
    },
    {
     "chapter": "48",
     "itc_hscode": "481390",
     "description": "OTHER CIG PAPER"
    },
    {
     "chapter": "48",
     "itc_hscode": "481410",
     "description": "INGRAIN PAPER"
    },
    {
     "chapter": "48",
     "itc_hscode": "481420",
     "description": "EMBOSD COLRD ETC\/DECORATD LAYR OR PLASTICS"
    },
    {
     "chapter": "48",
     "itc_hscode": "481490",
     "description": "OTHR WALLPAPER AND WALLCOVERINGS"
    },
    {
     "chapter": "48",
     "itc_hscode": "481620",
     "description": "SELF COPY PAPER"
    },
    {
     "chapter": "48",
     "itc_hscode": "481690",
     "description": "OTHR COPYING ORTRANSFER PAPER"
    },
    {
     "chapter": "48",
     "itc_hscode": "481710",
     "description": "ENVELOPES"
    },
    {
     "chapter": "48",
     "itc_hscode": "481720",
     "description": "LTR CRDS,PLN POSTCRDS & CORSPNDNCE CRDS"
    },
    {
     "chapter": "48",
     "itc_hscode": "481730",
     "description": "STATIONRY"
    },
    {
     "chapter": "48",
     "itc_hscode": "481810",
     "description": "TOILET PAPER"
    },
    {
     "chapter": "48",
     "itc_hscode": "481820",
     "description": "HANDKERCHIPS,CLNG\/FACIAL TISSU & TOWELS"
    },
    {
     "chapter": "48",
     "itc_hscode": "481830",
     "description": "TABLECLOTHS AND SERVIETTES."
    },
    {
     "chapter": "48",
     "itc_hscode": "481840",
     "description": "SANTRY TOWLS & TAMPNS NAPKINS & SMLR ARTCL"
    },
    {
     "chapter": "48",
     "itc_hscode": "481850",
     "description": "ARTCLS OF APPAREL &CLOTHNG ACCESSORIES"
    },
    {
     "chapter": "48",
     "itc_hscode": "481890",
     "description": "OTHR ARTCLS OF PAPR,PAPR PLP,CLLS WDNG ETC"
    },
    {
     "chapter": "48",
     "itc_hscode": "481910",
     "description": "CARTNS BOXS CASES OF CORUGTD PAPR\/PAPRBORD"
    },
    {
     "chapter": "48",
     "itc_hscode": "481920",
     "description": "CARTN&CASES OF NON‐CORRUGATED PAPR&PAPER BOARD PAPER\/PAPER BOARD"
    },
    {
     "chapter": "48",
     "itc_hscode": "481930",
     "description": "SACKS ,BAGS WIDTH OF BASE 40 CM AND ABOVE"
    },
    {
     "chapter": "48",
     "itc_hscode": "481940",
     "description": "OTHER SACKS AND BAGS, INCLUDING CONES"
    },
    {
     "chapter": "48",
     "itc_hscode": "481950",
     "description": "OTHER PACKING CONTAINERS, INCLUDING RECORD SLEEVES :"
    },
    {
     "chapter": "48",
     "itc_hscode": "481960",
     "description": "BOX FILES LETR TRAYS STORGE BOXS & SIMLR ARTCLS USD IN OFFCS SHOPS OR THE LIKE"
    },
    {
     "chapter": "48",
     "itc_hscode": "482010",
     "description": "REGISTRS ACCT\/NOTE\/ORDR\/RECPT BOOKS LETR\/ MEMO PADS DIARIS & SMLR ARTCLS OF PAPR"
    },
    {
     "chapter": "48",
     "itc_hscode": "482020",
     "description": "EXERCESE BOOKS"
    },
    {
     "chapter": "48",
     "itc_hscode": "482030",
     "description": "BINDERS FOLDERS & FILE COVERS"
    },
    {
     "chapter": "48",
     "itc_hscode": "482040",
     "description": "MANIFOLD BUSINES FORMS,INTRLVD CRBN SETS"
    },
    {
     "chapter": "48",
     "itc_hscode": "482050",
     "description": "ALBUMS FOR SAMPLS OR FOR COLLECTIONS"
    },
    {
     "chapter": "48",
     "itc_hscode": "482090",
     "description": "OTHR ARTCLS OF STATIONARY OF PAPR\/PAPRBORD"
    },
    {
     "chapter": "48",
     "itc_hscode": "482110",
     "description": "PRINTED LABELS"
    },
    {
     "chapter": "48",
     "itc_hscode": "482190",
     "description": "OTHER LABELS"
    },
    {
     "chapter": "48",
     "itc_hscode": "482210",
     "description": "BOBINS SPOOLS USD FORWINDNG TEXTL YARN"
    },
    {
     "chapter": "48",
     "itc_hscode": "482290",
     "description": "OTHR BOBNS SPOOLS COPS AND SIMLR SUPPORT OF PAPRPULP PAPR\/PAPRBORD"
    },
    {
     "chapter": "48",
     "itc_hscode": "482320",
     "description": "FILTER PAPER AND PAPERBOARD"
    },
    {
     "chapter": "48",
     "itc_hscode": "482340",
     "description": "PRNTD ROLS,SHTS&DIALS FR SLFRCRDNG APRTS"
    },
    {
     "chapter": "48",
     "itc_hscode": "482361",
     "description": "OF BAMBOO"
    },
    {
     "chapter": "48",
     "itc_hscode": "482369",
     "description": "OTHER"
    },
    {
     "chapter": "48",
     "itc_hscode": "482370",
     "description": "MOULDED OR PRESSED ARTICLES OF PAPRPULP"
    },
    {
     "chapter": "48",
     "itc_hscode": "482390",
     "description": "OTHRARTCLS OF PAPR PULP PAPRBORD CELULOSE WADNG OR WEBS OF CEL FIBRS"
    },
    {
     "chapter": "49",
     "itc_hscode": "490110",
     "description": "PRINTD BOOKS ETC IN SINGL SHEET W\/N FOLDED"
    },
    {
     "chapter": "49",
     "itc_hscode": "490191",
     "description": "DICTIONARIES & ENCYCLOPAEDIAS AND SERIAL INSTALMENTS THEREOF"
    },
    {
     "chapter": "49",
     "itc_hscode": "490199",
     "description": "OTHR PRINTD BOOKS ETC OF HD NO. 4901"
    },
    {
     "chapter": "49",
     "itc_hscode": "490210",
     "description": "NEWSPARS JOURNLS ETC APPEARNG AT LEAST FOUR TIMES A WEEK"
    },
    {
     "chapter": "49",
     "itc_hscode": "490290",
     "description": "OTHR NEWSPARS JOURNALS PERIODICALS"
    },
    {
     "chapter": "49",
     "itc_hscode": "490300",
     "description": "CHILDREN'S PICTURE DRAWNG OR COLORNG BOOKS"
    },
    {
     "chapter": "49",
     "itc_hscode": "490400",
     "description": "MUSIC,PRINTD OR MANSCRPT W\/N BOUND\/ILUSTRD"
    },
    {
     "chapter": "49",
     "itc_hscode": "490510",
     "description": "GLOBES"
    },
    {
     "chapter": "49",
     "itc_hscode": "490591",
     "description": "OTHR MAPS ETC IN BOOK FORM"
    },
    {
     "chapter": "49",
     "itc_hscode": "490599",
     "description": "OTHERS MAPS ETC"
    },
    {
     "chapter": "49",
     "itc_hscode": "490600",
     "description": "TXTS;PHTO RPRDCTNS ON SNSTSD PPR&CRBN COPY"
    },
    {
     "chapter": "49",
     "itc_hscode": "490700",
     "description": "NOTE STOCK SHARE CERTIFCTS & SMLR TITL DOCUMNTS"
    },
    {
     "chapter": "49",
     "itc_hscode": "490810",
     "description": "TRANSFERS(DECALCOMANIAS) VITRIFIABLE"
    },
    {
     "chapter": "49",
     "itc_hscode": "490890",
     "description": "OTHER TRANSFERS"
    },
    {
     "chapter": "49",
     "itc_hscode": "490900",
     "description": "ILSTRTD WITH ENVLPS OR TRIMNGS OR NOT"
    },
    {
     "chapter": "49",
     "itc_hscode": "491000",
     "description": "ALL PRINTD CALENDARS INCLDNG CALNDAR BLCKS"
    },
    {
     "chapter": "49",
     "itc_hscode": "491110",
     "description": "TRDE ADVRTSG MATERLS COMRCL CATALGE & LIKE"
    },
    {
     "chapter": "49",
     "itc_hscode": "491191",
     "description": "PICTURES DESIGNS & PHOTOGRAPHS"
    },
    {
     "chapter": "49",
     "itc_hscode": "491199",
     "description": "OTHER PRINTED MATERIALS"
    },
    {
     "chapter": "50",
     "itc_hscode": "500100",
     "description": "SILK‐WORM COCOONS SUITABLE FOR REELING"
    },
    {
     "chapter": "50",
     "itc_hscode": "500200",
     "description": "RAW SILK (NOT THROWN)"
    },
    {
     "chapter": "50",
     "itc_hscode": "500300",
     "description": "STOCK):"
    },
    {
     "chapter": "50",
     "itc_hscode": "500400",
     "description": "SLK YARNS(OTHR THN YRN SPUN FROM SLK WSTE)NT PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "50",
     "itc_hscode": "500500",
     "description": "YRN SPN FRM SLK WST NT PUT UP FR RETAL SLE"
    },
    {
     "chapter": "50",
     "itc_hscode": "500600",
     "description": "SLK YRN & YRN SPUN FROM SLK WAST PUT UP FOR RETAIL SALE,SLK‐WORM GUT"
    },
    {
     "chapter": "50",
     "itc_hscode": "500710",
     "description": "WOVEN FABRICS OF NOIL SILK"
    },
    {
     "chapter": "50",
     "itc_hscode": "500720",
     "description": "NOIL SILK :"
    },
    {
     "chapter": "50",
     "itc_hscode": "500790",
     "description": "OTHER FABRICS"
    },
    {
     "chapter": "51",
     "itc_hscode": "510111",
     "description": "SHORN WOOL,GREASY,INCL FLEECE‐WASHED"
    },
    {
     "chapter": "51",
     "itc_hscode": "510119",
     "description": "OTHER WOOL,GREASY,INCL FLEECE‐WASHED"
    },
    {
     "chapter": "51",
     "itc_hscode": "510121",
     "description": "DEGRESD SHORN WOOL NT CRBNSD NR CRDED\/CMBD"
    },
    {
     "chapter": "51",
     "itc_hscode": "510129",
     "description": "OTHR DEGRESD WOOL NT CRBNSD NOR CRDED\/CMBD"
    },
    {
     "chapter": "51",
     "itc_hscode": "510130",
     "description": "CARBONISED WOOL NOT CARDED\/COMBED"
    },
    {
     "chapter": "51",
     "itc_hscode": "510211",
     "description": "FINE ANML HAIR OF KASHMIRI GOATS"
    },
    {
     "chapter": "51",
     "itc_hscode": "510219",
     "description": "FINE ANML HAIR OF OTHER ANIMALS"
    },
    {
     "chapter": "51",
     "itc_hscode": "510220",
     "description": "COARSE ANIMAL HAIR"
    },
    {
     "chapter": "51",
     "itc_hscode": "510310",
     "description": "NOILS OF WOOL OR FINE ANIMAL HAIR"
    },
    {
     "chapter": "51",
     "itc_hscode": "510320",
     "description": "OTHER WASTE OF WOOL OR OF FINE ANIMAL HAIR :"
    },
    {
     "chapter": "51",
     "itc_hscode": "510330",
     "description": "WASTE OF COARSE ANIMAL HAIR"
    },
    {
     "chapter": "51",
     "itc_hscode": "510400",
     "description": "GRNTD STOCK OF WOOL\/FINE\/COARSE ANML HAIR"
    },
    {
     "chapter": "51",
     "itc_hscode": "510510",
     "description": "CARDED WOOL"
    },
    {
     "chapter": "51",
     "itc_hscode": "510521",
     "description": "COMBED WOOL IN FRAGMENTS"
    },
    {
     "chapter": "51",
     "itc_hscode": "510529",
     "description": "WOOL TOPS AND OTHER COMBED WOOL"
    },
    {
     "chapter": "51",
     "itc_hscode": "510531",
     "description": "FINE ANML HAIR,CARDED\/COMBED OF KASHMIRI GOATS."
    },
    {
     "chapter": "51",
     "itc_hscode": "510539",
     "description": "OTHER FINE ANML HAIR"
    },
    {
     "chapter": "51",
     "itc_hscode": "510540",
     "description": "COARSE ANIMAL HAIR CARDED OR COMBED"
    },
    {
     "chapter": "51",
     "itc_hscode": "510610",
     "description": "YRN OF CRDED WOOL CONTNG>=85% WOOL BY WT NT PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "51",
     "itc_hscode": "510620",
     "description": "YARN OF CRDED WOOL CONTNG<85% WOOL BY WT NT PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "51",
     "itc_hscode": "510710",
     "description": "YARN OF COMBED WOOL CONTNG>=85% WOOL BY WTNOT PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "51",
     "itc_hscode": "510720",
     "description": "YARN OF CMBD WOOL CONTNG < 85% WOOL BY WT"
    },
    {
     "chapter": "51",
     "itc_hscode": "510810",
     "description": "CARDED YARN OF FINE ANIMAL HAIR NOT PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "51",
     "itc_hscode": "510820",
     "description": "COMBED YARN OF FINE ANIMAL HAIR NOT PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "51",
     "itc_hscode": "510910",
     "description": "YARN OF WOOL\/OF FINE ANML HAIR CONTNG>=85%BY WT OF WOOL,PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "51",
     "itc_hscode": "510990",
     "description": "OTHER YARN OF WOOL\/OF FINE ANIMAL HAIR PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "51",
     "itc_hscode": "511120",
     "description": "OTHER, MIXED MAINLY OR SOLELY WITH MAN‐ MADE FILAMENTS :"
    },
    {
     "chapter": "51",
     "itc_hscode": "511130",
     "description": "OTHER, MIXED MAINLY OR SOLELY WITH MAN‐ MADE STAPLE FIBRES :"
    },
    {
     "chapter": "51",
     "itc_hscode": "511190",
     "description": "OTHER WOVEN FABRICS OF CARDED WOOL ETC"
    },
    {
     "chapter": "51",
     "itc_hscode": "511219",
     "description": "G\/M2"
    },
    {
     "chapter": "51",
     "itc_hscode": "511220",
     "description": "OTHER, MIXED MAINLY OR SOLELY WITH MAN‐ MADE FILAMENTS :"
    },
    {
     "chapter": "51",
     "itc_hscode": "511230",
     "description": "OTHER, MIXED MAINLY OR SOLELY WITH MAN‐ MADE STAPLE FIBRES :"
    },
    {
     "chapter": "51",
     "itc_hscode": "511290",
     "description": "OTHER WOVEN FABRICS OF COMBED WOOL OR OF COMBED FINE ANIMAL HAIR"
    },
    {
     "chapter": "51",
     "itc_hscode": "511300",
     "description": "WOVN FBRCS OF CORSE ANML HAIR\/OF HORS HAIR"
    },
    {
     "chapter": "52",
     "itc_hscode": "520100",
     "description": "COTTON, NOT CARDED OR COMBED"
    },
    {
     "chapter": "52",
     "itc_hscode": "520210",
     "description": "YARN WASTE (INCL THREAD WASTE)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520291",
     "description": "COTTON WASTE (GARNETTED STOCK)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520299",
     "description": "OTHER COTTON WASTE"
    },
    {
     "chapter": "52",
     "itc_hscode": "520300",
     "description": "COTTON CARDED OR COMBED"
    },
    {
     "chapter": "52",
     "itc_hscode": "520411",
     "description": "SWNG THREAD CNTNG 85% OR MORE BY WEIGHT OFCOTTON NOT PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "52",
     "itc_hscode": "520419",
     "description": "SWNG THRD CONTNG LESS THN 85% BY WEIGHT OFCOTTON NOT PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "52",
     "itc_hscode": "520420",
     "description": "COTTON SWNG THREAD PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "52",
     "itc_hscode": "520511",
     "description": "SNGL YRN OF UNCMBD FBRS MEASURNG 714.29 DCTX\/MORE(NT EXCDNG 14 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520513",
     "description": "SNGL YRN OF UNCMBD FBRS MEASURNG<232.56 BUT >=192.31 DCTX(>43 BUT <=52 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520514",
     "description": "SNGL YRN OF UNCMBD FBRS MEASURNG<192.31 BUT >=125 DCTX(>50 BUT <=80 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520515",
     "description": "SNGL YRN OF UNCMBD FBRS MEASURNG LESS THN 125 DCTX (EXCDNG 80 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520521",
     "description": "SNGL YRN OF CMBD FBRS MEASURNG 714.29 D CTX\/MORE (NT EXCDNG 14 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520522",
     "description": "SNGL YRN OF CMBD FBRS MEASURNG<714.29 BUT >= 232.56 DCTX(>14 BUT <=43 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520523",
     "description": "SNGL YRN OF CMBD FBRS MEASURNG< 232.56 BUT >=192.31 DCTX(>43 BUT <=52 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520524",
     "description": "SNGL YRN OF CMBD FBRS MEASURNG<192.31 BUT >=125 DCTX(>52 BUT <=80 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520526",
     "description": "SNGL YRN OF COMBD FBRS MSRNG BETWN 106.38 & 125.00 DCTX & 80 TO 94 MTRC NO."
    },
    {
     "chapter": "52",
     "itc_hscode": "520527",
     "description": "SNGL YRN OF COMBD FBRS MSRNG BETWN 83.33 & 106.38 DCTX & 94 TO 120 MTRC NO."
    },
    {
     "chapter": "52",
     "itc_hscode": "520528",
     "description": "SNGL YRN OF COMBD FBRS MSRNG <83.83 DCTX AND > 120 MTRC NO."
    },
    {
     "chapter": "52",
     "itc_hscode": "520531",
     "description": "EXCDNG 14 MTRC NO PER SNGL YRN)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520532",
     "description": "<= 43 MTRC NO PER SNGL YARN)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520533",
     "description": "<=52 MTRC NO PER SNGL YARN)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520534",
     "description": "<=80 MTRC NO PER SINGLE YARN)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520535",
     "description": "SINGLE YRN)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520541",
     "description": "EXCDNG 14 MTRC NO PER SNGL YRN)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520542",
     "description": "DCTX(>14 BUT <=43 MTRC NO PER SNGL YARN)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520543",
     "description": ">=192.31DCTX(>43 BUT <=52 MTRC NO PER SNGL YARN)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520544",
     "description": "DCTX(>52 BUT <=80 MTRC NO PER SNGL YRN)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520546",
     "description": "& BETWN 80 & 94 MTRC NO."
    },
    {
     "chapter": "52",
     "itc_hscode": "520547",
     "description": "& BETWN 94 & 120 MTRC NO."
    },
    {
     "chapter": "52",
     "itc_hscode": "520548",
     "description": "NO."
    },
    {
     "chapter": "52",
     "itc_hscode": "520611",
     "description": "SNGL YRN OF UNCMBD FBRS MEASURNG 714.29 DCTX\/MORE(NT EXCDNG 14 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520612",
     "description": "SNGL YRN OF UNCMBD FBRS MEASURNG<714.29 BUT >=232.56 DCTX(>14 BUT <=43 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520613",
     "description": "SNGL YRN OF UNCMBD FBRS MEASURNG<232.56 BUT >=192.31 DCTX(<52 BUT >=43 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520614",
     "description": "SNGL YRN OF UNCMBD FBRS MEASURNG<192.31 BUT>125 DCTX(<80 BUT >=52 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520615",
     "description": "SNGL YRN OF UNCMBD FBRS MEASURNG LESS THN 125 DCTX(EXCDNG 80 MTRC NO )"
    },
    {
     "chapter": "52",
     "itc_hscode": "520621",
     "description": "SNGL YRN OF CMBD FBRS MEASURNG>=714.29 DCTX (NT EXCDNG 14 MTRC NO )"
    },
    {
     "chapter": "52",
     "itc_hscode": "520622",
     "description": "SNGL YRN OF CMBD FBRS MEASURNG<714.29 BUT>=232.56 DCTX(>14 BUT<=43 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520623",
     "description": "SNGL YRN OF CMBD FBRS MEASURNG <232.56 BUT >= 192.31 DCTX(>43 BUT <=52 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520624",
     "description": "SNGL YRN OF CMBD FBRS MEASURNG <192.31 BUT>=125 DCTX (>52 BUT <=80 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520625",
     "description": "SNGL YRN OF CMBD FBRS MEASURNG LESS THN 125 DCTX(EXCDNG 80 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520631",
     "description": "EXCDNG 14 MTRC NO PER SNGL YRN)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520632",
     "description": "DCTX(>14 BUT <=43 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520633",
     "description": "DCTX(>43 BUT <=52 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520634",
     "description": "(>52 BUT <=80 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520635",
     "description": "(EXCDNG 80 MTRC NO PER LNGL YRN)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520641",
     "description": "EXCDNG 1J MTRC NO PER SNGL YRN)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520642",
     "description": "(>14 BUT<=43 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520643",
     "description": "(>43 BUT <=52 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520644",
     "description": "(>52 BUT <=80 MTRC NO)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520645",
     "description": "(EXCDNG 80 MTRC NO PER SNGL YRN)"
    },
    {
     "chapter": "52",
     "itc_hscode": "520710",
     "description": "COTON YARN CONTNG COTON>=85% BY WT PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "52",
     "itc_hscode": "520790",
     "description": "OTHER COTTON YARN PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "52",
     "itc_hscode": "520813",
     "description": "WEIGHNG NOT MORE THN 200 GM PER SQM"
    },
    {
     "chapter": "52",
     "itc_hscode": "520819",
     "description": "OTHER FABRICS :"
    },
    {
     "chapter": "52",
     "itc_hscode": "520821",
     "description": "BLECHD PLAIN WEAVE WEIGNG <=100 G\/M2"
    },
    {
     "chapter": "52",
     "itc_hscode": "520823",
     "description": "WEIGHING NOT MORE THN 200 GM PER SQM"
    },
    {
     "chapter": "52",
     "itc_hscode": "520829",
     "description": "OTHER FABRICS :"
    },
    {
     "chapter": "52",
     "itc_hscode": "520831",
     "description": "COTN FABRICS CONTNG >=85%BY WT OF COTN DYED PLAIN WEAVE WEIGNG<=100 G\/M2"
    },
    {
     "chapter": "52",
     "itc_hscode": "520832",
     "description": "COTN FABRICS CONTNG>=85% BY WT OF COTN DYED,PLAIN WEAVE WEIGHNG >=100 G\/M2"
    },
    {
     "chapter": "52",
     "itc_hscode": "520833",
     "description": "WEIGHING NOT MORE THN 200 G\/M2"
    },
    {
     "chapter": "52",
     "itc_hscode": "520839",
     "description": "OTHER FABRICS :"
    },
    {
     "chapter": "52",
     "itc_hscode": "520841",
     "description": "GMPER SQM OF YARN OF DIFFERENT COLOURS"
    },
    {
     "chapter": "52",
     "itc_hscode": "520842",
     "description": "PER SQM OF YARN OF DIFFERENT COLOURS"
    },
    {
     "chapter": "52",
     "itc_hscode": "520843",
     "description": "YARN OF DIFF CLRS WEIGHNG <=200 GSM"
    },
    {
     "chapter": "52",
     "itc_hscode": "520849",
     "description": "OTHER FABRICS :"
    },
    {
     "chapter": "52",
     "itc_hscode": "520852",
     "description": "COTN FABRICS CONTNG >=85% BY WT COTN PRINTED,PLAIN WEAVE WEIGHING >100 G\/M2"
    },
    {
     "chapter": "52",
     "itc_hscode": "520859",
     "description": "OTHR COTN FABRICS CONTNG>=85% BY WT OF COTN,PRNTD,WEIGHING 200 G\/M2"
    },
    {
     "chapter": "52",
     "itc_hscode": "520911",
     "description": "PLAIN WEAVE,UNBLEACHED COTTON FABRICS WEIGHING MORE THN 200 GM PER SQM"
    },
    {
     "chapter": "52",
     "itc_hscode": "520912",
     "description": "PER SQM"
    },
    {
     "chapter": "52",
     "itc_hscode": "520919",
     "description": "OTHER FABRICS"
    },
    {
     "chapter": "52",
     "itc_hscode": "520921",
     "description": "BLEACHED COTON FABRICS,PLAIN WEAVE WEIGHING MORE THN 200 GM PER SQM"
    },
    {
     "chapter": "52",
     "itc_hscode": "520922",
     "description": "PER SQM"
    },
    {
     "chapter": "52",
     "itc_hscode": "520929",
     "description": "OTHER FABRICS :"
    },
    {
     "chapter": "52",
     "itc_hscode": "520931",
     "description": "DYED PLAIN WEAVE COTTON FABRICS WEGHNG MORE THAN 200 GM PER SQM"
    },
    {
     "chapter": "52",
     "itc_hscode": "520939",
     "description": "OTHER FABRICS :"
    },
    {
     "chapter": "52",
     "itc_hscode": "520941",
     "description": "PLAIN WEAVE COTTON FABRICS OF YARN OF DIFF CLRS, WEIGHING >= 200 G\/M2"
    },
    {
     "chapter": "52",
     "itc_hscode": "520942",
     "description": "DENIM"
    },
    {
     "chapter": "52",
     "itc_hscode": "520943",
     "description": "OTHER FABRICS OF 3‐THREAD OR 4‐THREAD TWILL, INCLUDING CROSS TWILL :"
    },
    {
     "chapter": "52",
     "itc_hscode": "520949",
     "description": "OTHER FABRICS :"
    },
    {
     "chapter": "52",
     "itc_hscode": "520951",
     "description": "PLAIN WEAVE,PRINTED COTN FABRICS WEIGHING MORE THAN 200 GM PER SQM"
    },
    {
     "chapter": "52",
     "itc_hscode": "520952",
     "description": "PRINTD 3\/4 THRED TWILL INCLDNG CROSS TWILLCOTTON FABRICS WEIGHING>200 G\/SQM"
    },
    {
     "chapter": "52",
     "itc_hscode": "520959",
     "description": "OTHER FABRICS :"
    },
    {
     "chapter": "52",
     "itc_hscode": "521011",
     "description": "UNBLEACHED PLAIN WEAVE MXD COTTON FABRICS WEGHING<= 200 G\/SM"
    },
    {
     "chapter": "52",
     "itc_hscode": "521019",
     "description": "OTHER MIXD COTN FABRICS, UNBLEACHED WEGHNGNOT MORE THAN 200 GM PER SQM"
    },
    {
     "chapter": "52",
     "itc_hscode": "521021",
     "description": "BLEACHD PLAIN WEAVE MXD COTN FABRICS WEGHING NOT MORE THN 200 GM PER SQM"
    },
    {
     "chapter": "52",
     "itc_hscode": "521029",
     "description": "OTHER MXD COTN FABRICS,BLEACHED WEGHNG NOT MORE THN 200 GM PER SQM"
    },
    {
     "chapter": "52",
     "itc_hscode": "521031",
     "description": "DYED PLAIN WEAVE MXD COTN FABRICS WEIGHING NOT MORE THN 200 GM PER SQM"
    },
    {
     "chapter": "52",
     "itc_hscode": "521032",
     "description": "DYED 3\/4‐THRED TWILL INCLUDNG CROSS TWILL MIXD COTN FABRICS WEGHNG<=200 GSM"
    },
    {
     "chapter": "52",
     "itc_hscode": "521039",
     "description": "OTHER FABRICS :"
    },
    {
     "chapter": "52",
     "itc_hscode": "521049",
     "description": "OTHER MIXED COTTON FABRICS OF YARN OF DIFFERENT COLOUR WEIGHING <200 GSM"
    },
    {
     "chapter": "52",
     "itc_hscode": "521051",
     "description": "MIXED COTTON FABRICS WEIGHING NOT MORE THAN 200 GSM PRINTED, PLAIN WEAVE"
    },
    {
     "chapter": "52",
     "itc_hscode": "521059",
     "description": "OTHER MXD COTN FABRICS,PRINTED WEGHING NOT MORE THAN 200 GM PER SQM"
    },
    {
     "chapter": "52",
     "itc_hscode": "521111",
     "description": "UNBLEACHED PLAIN WEAVE MXD COTN FABRICS WEIGHING MORE THN 200 GM PER SQM"
    },
    {
     "chapter": "52",
     "itc_hscode": "521112",
     "description": "MIXED COTTON FBRCS OF 3\/4 THRD TWILL INCL CROSS TWILL,UNBLCHD,WGNG >200 G\/M2"
    },
    {
     "chapter": "52",
     "itc_hscode": "521119",
     "description": "OTHER FABRICS"
    },
    {
     "chapter": "52",
     "itc_hscode": "521120",
     "description": "BLEACHED :"
    },
    {
     "chapter": "52",
     "itc_hscode": "521131",
     "description": "PLAIN WEAVE,DYED,MXD COTN FABRICS WEGHING MORE THAN 200 GM PER SQM"
    },
    {
     "chapter": "52",
     "itc_hscode": "521132",
     "description": "MIXED COTTON FABRICS WEIGHING > 200 G\/SQM DYED 3\/4 THREAD TWILL INCL CROSS TWILL"
    },
    {
     "chapter": "52",
     "itc_hscode": "521139",
     "description": "OTHER FABRICS :"
    },
    {
     "chapter": "52",
     "itc_hscode": "521142",
     "description": "DENIM OF YARNS OF DIFFERENT COLOUR OF MXD COTN FABRICS WEIGHING>200 GSM"
    },
    {
     "chapter": "52",
     "itc_hscode": "521143",
     "description": "OTHER FABRICS OF 3‐THREAD OR 4‐THREAD TWILL, INCLUDING CROSS TWILL :"
    },
    {
     "chapter": "52",
     "itc_hscode": "521149",
     "description": "OTHER FABRICS :"
    },
    {
     "chapter": "52",
     "itc_hscode": "521151",
     "description": "PRINTED PLAIN WEAVE MXD COTN FABRICS WEGHING MORE THAN 200 GSM"
    },
    {
     "chapter": "52",
     "itc_hscode": "521152",
     "description": "PRINTED 3\/4‐THRED TWILL INCL CROSS TWILL MXD COTN FABRICS WGHING>200 G\/SM"
    },
    {
     "chapter": "52",
     "itc_hscode": "521159",
     "description": "OTHER FABRICS :"
    },
    {
     "chapter": "52",
     "itc_hscode": "521211",
     "description": "OTHR UNBLCHED WOVEN FABRICS OF COTTON WEIGHING NOT MORE THAN 200 G\/M2"
    },
    {
     "chapter": "52",
     "itc_hscode": "521212",
     "description": "OTHR BLCHD WOVEN FBRCS WGHNG <=200 G\/M2"
    },
    {
     "chapter": "52",
     "itc_hscode": "521213",
     "description": "OTHR DYED WOVEN FBRCS WGHNG <=200 G\/M2"
    },
    {
     "chapter": "52",
     "itc_hscode": "521215",
     "description": "OTHR PRNTD WOVEN FBRCS WGHNG <=200 G\/M2"
    },
    {
     "chapter": "52",
     "itc_hscode": "521221",
     "description": "OTHR UNBLCHD WOVN FBRCS WGHNG >200 G\/M2"
    },
    {
     "chapter": "52",
     "itc_hscode": "521222",
     "description": "OTHR BLCHD WOVN FBRCS WGHNG >200 G\/M2"
    },
    {
     "chapter": "52",
     "itc_hscode": "521223",
     "description": "OTHR DYED WOVN FBRCS WGHNG >200 G\/M2"
    },
    {
     "chapter": "52",
     "itc_hscode": "521224",
     "description": "OTHR WOVN FBRCS OF COTN OF YRNS OF DIFF COLOURS WGHNG MORE THAN 200 GSM"
    },
    {
     "chapter": "52",
     "itc_hscode": "521225",
     "description": "OTHR PRINTED WOVEN FBRCS WGHNG >200 G\/M2"
    },
    {
     "chapter": "53",
     "itc_hscode": "530110",
     "description": "FLAX RAW OR RETTED"
    },
    {
     "chapter": "53",
     "itc_hscode": "530121",
     "description": "FLAX,BROKN OR SCUTCHD BUT NT SPUN"
    },
    {
     "chapter": "53",
     "itc_hscode": "530129",
     "description": "OTHER FLAX (EXCL BRKN\/SCUTCHED,NOT SPUN"
    },
    {
     "chapter": "53",
     "itc_hscode": "530130",
     "description": "FLAX TOW & WASTE"
    },
    {
     "chapter": "53",
     "itc_hscode": "530210",
     "description": "TRUE HEMP RAW OR RETTED"
    },
    {
     "chapter": "53",
     "itc_hscode": "530290",
     "description": "OTHERS(EXCL TRUE HEMP)"
    },
    {
     "chapter": "53",
     "itc_hscode": "530310",
     "description": "OTHER BAST FIBRES"
    },
    {
     "chapter": "53",
     "itc_hscode": "530390",
     "description": "TOW & WASTE OF JUTE & OTHER TXTL BAST FBRS"
    },
    {
     "chapter": "53",
     "itc_hscode": "530500",
     "description": "TEXTILE FIBRES, NOT ELSEWHERE SPECIFIED OR"
    },
    {
     "chapter": "53",
     "itc_hscode": "530519",
     "description": "OTHER(EXCL RAW)COCONUT FIBRE"
    },
    {
     "chapter": "53",
     "itc_hscode": "530521",
     "description": "ABACA,RAW"
    },
    {
     "chapter": "53",
     "itc_hscode": "530529",
     "description": "OTHER(EXCL RAW)ABACA FIBRE"
    },
    {
     "chapter": "53",
     "itc_hscode": "530590",
     "description": "OTHER FIBRE OF COCCONUT ( COIR )"
    },
    {
     "chapter": "53",
     "itc_hscode": "530610",
     "description": "FLAX YARN,SINGLE"
    },
    {
     "chapter": "53",
     "itc_hscode": "530620",
     "description": "FLAX YARN, MULTIPLE (FOLDED) OR CABLED"
    },
    {
     "chapter": "53",
     "itc_hscode": "530710",
     "description": "YARN OFJUT & OTHR TXTL BAST FIBRS,SINGLE"
    },
    {
     "chapter": "53",
     "itc_hscode": "530720",
     "description": "MULTIPLE FOLDED OR CABLED YARN OF JUTE"
    },
    {
     "chapter": "53",
     "itc_hscode": "530810",
     "description": "COIR YARN"
    },
    {
     "chapter": "53",
     "itc_hscode": "530820",
     "description": "TRUE HEMP YARN"
    },
    {
     "chapter": "53",
     "itc_hscode": "530890",
     "description": "OTHER VEG TEXTL YARN"
    },
    {
     "chapter": "53",
     "itc_hscode": "530911",
     "description": "FLAX WOVN FABRCS CONTNG 85% OR MORE BY WT OF FLAX UNBLECHD OR BLECHD"
    },
    {
     "chapter": "53",
     "itc_hscode": "530919",
     "description": "OTHR FLAX WOVN FABRCS CONTNG FLAX>=85%"
    },
    {
     "chapter": "53",
     "itc_hscode": "530921",
     "description": "FLAX WOVN FABRCS CONTNG LESS THAN 85% BY WT OF FLAX,UNBLEACHED OR BLEACHED"
    },
    {
     "chapter": "53",
     "itc_hscode": "530929",
     "description": "OTHR WOVN FABRCS CONTNG<85%BY WT OF FLAX"
    },
    {
     "chapter": "53",
     "itc_hscode": "531010",
     "description": "UNBLECHD WOVEN FABRICS OF JUTE\/OTHER TEXTILE BAST FIBRES"
    },
    {
     "chapter": "53",
     "itc_hscode": "531090",
     "description": "OTHR WOVN FABRCS(EXCL UNBLECHD)OF JUTE ETC"
    },
    {
     "chapter": "53",
     "itc_hscode": "531100",
     "description": "WOVEN FABRICS OF OTHER VEGETABLE TEXTILE FIBRES;WOVEN FABRICS OF PAPER YARN"
    },
    {
     "chapter": "54",
     "itc_hscode": "540110",
     "description": "SEWING THRED OF SYNTHETIC FILAMENTS"
    },
    {
     "chapter": "54",
     "itc_hscode": "540120",
     "description": "SEWING THREAD OF ARTIFICIAL FILAMENTS"
    },
    {
     "chapter": "54",
     "itc_hscode": "540211",
     "description": "OF ARAMIDS"
    },
    {
     "chapter": "54",
     "itc_hscode": "540219",
     "description": "OTHER;"
    },
    {
     "chapter": "54",
     "itc_hscode": "540220",
     "description": "HIGH TENACITY YARN OF POLYESTERS"
    },
    {
     "chapter": "54",
     "itc_hscode": "540233",
     "description": "TEXTURED YARN OF POLYESTERS"
    },
    {
     "chapter": "54",
     "itc_hscode": "540234",
     "description": "OF POLYPROPYLENE"
    },
    {
     "chapter": "54",
     "itc_hscode": "540239",
     "description": "OTHER TEXTURED YARN"
    },
    {
     "chapter": "54",
     "itc_hscode": "540244",
     "description": "ELASTOMERIC"
    },
    {
     "chapter": "54",
     "itc_hscode": "540245",
     "description": "OTHER, OF NYLON OR OTHER POLYAMIDES"
    },
    {
     "chapter": "54",
     "itc_hscode": "540246",
     "description": "OTHER, OF POLYESTERS, PARTIALLY ORIENTED"
    },
    {
     "chapter": "54",
     "itc_hscode": "540247",
     "description": "OTHER, OF POLYESTERS"
    },
    {
     "chapter": "54",
     "itc_hscode": "540248",
     "description": "OTHER, OF POLYPROPYLENE"
    },
    {
     "chapter": "54",
     "itc_hscode": "540249",
     "description": "OTHER YARN,SINGLE,UNTWISTED OR WITH A TWIST NOT EXCDNG 50 TURNS PER METRE"
    },
    {
     "chapter": "54",
     "itc_hscode": "540252",
     "description": "OTHR YARN OF POLYESTERS,SINGLE,WITH A TWIST EXCEEDING 50 TURNS\/PER METRE"
    },
    {
     "chapter": "54",
     "itc_hscode": "540259",
     "description": "OTHER YARN,SNGLE,WITH A TWIST EXCEEDING 50 TURNS PER METRE"
    },
    {
     "chapter": "54",
     "itc_hscode": "540261",
     "description": "OTHR YARN OF NYLON OR OTHER POLYMDS, MULTIPLE(FOLDED)OR CABLED"
    },
    {
     "chapter": "54",
     "itc_hscode": "540262",
     "description": "OTHR YARN OF POLYSTRS,MULTPL OR CABLD"
    },
    {
     "chapter": "54",
     "itc_hscode": "540269",
     "description": "OTHER YARN,MULTIPLE(FOLDED)OR CABLED"
    },
    {
     "chapter": "54",
     "itc_hscode": "540310",
     "description": "HIGH TENACITY YARN OF VISCOSE RAYON"
    },
    {
     "chapter": "54",
     "itc_hscode": "540332",
     "description": "OTHR YARN OF VISCOSE RAYON,SINGLE,WITH A TWIST EXCEEDING 120 TURNS PER METRE"
    },
    {
     "chapter": "54",
     "itc_hscode": "540333",
     "description": "OTHR YARN OF CELLULOSE ACETATE,SINGLE"
    },
    {
     "chapter": "54",
     "itc_hscode": "540339",
     "description": "OTHER YARN,SINGLE"
    },
    {
     "chapter": "54",
     "itc_hscode": "540341",
     "description": "OTHR YRN OF VISCOS RAYN MULTIPL\/CABLED"
    },
    {
     "chapter": "54",
     "itc_hscode": "540342",
     "description": "OTHR YARN OF CELULS ACTAT MULTPL\/CABLD"
    },
    {
     "chapter": "54",
     "itc_hscode": "540349",
     "description": "OTHR YRN MULTPL(FOLDD)OR CABLD (EXCLD VISCOS RAYN & CELULOS ACTATE)"
    },
    {
     "chapter": "54",
     "itc_hscode": "540411",
     "description": "ELASTOMERIC"
    },
    {
     "chapter": "54",
     "itc_hscode": "540412",
     "description": "OTHER, OF POLYPROPYLENE"
    },
    {
     "chapter": "54",
     "itc_hscode": "540419",
     "description": "OTHER:"
    },
    {
     "chapter": "54",
     "itc_hscode": "540490",
     "description": "STRIP & THE LIKE OF SYN TXTL MTRLS"
    },
    {
     "chapter": "54",
     "itc_hscode": "540500",
     "description": "STRW)OF ARTFCL TXTL MTRLS OF WDTH <=5MM"
    },
    {
     "chapter": "54",
     "itc_hscode": "540600",
     "description": "MAN‐MADE FILAMENT YARN (OTHER THAN SEWING THREAD), PUT FOR RETAIL SALE"
    },
    {
     "chapter": "54",
     "itc_hscode": "540720",
     "description": "WOVEN FABRICS OBTAINED FROM STRIP\/THE LIKE"
    },
    {
     "chapter": "54",
     "itc_hscode": "540730",
     "description": "FABRICS CONSISTNG OF LAYERS OF PARALLEL TEXTILE YARNS"
    },
    {
     "chapter": "54",
     "itc_hscode": "540743",
     "description": "OTHR WOVEN FABRICS CONTNG >85% POLYAMADE OF YARNS OF DIFFERENT COLOURS"
    },
    {
     "chapter": "54",
     "itc_hscode": "540744",
     "description": "WOVEN FABRICS,PRINTED,CNTNG FLMNTS OF NYLON\/OTHER POLYAMIDES>=85% BY WT"
    },
    {
     "chapter": "54",
     "itc_hscode": "540751",
     "description": "WOVN FBRCS,UNBLEACHED\/BLEACHD,CNTNG>=85% BY WT OF TEXTURED PLYESTER FILAMENTS"
    },
    {
     "chapter": "54",
     "itc_hscode": "540752",
     "description": "WOVEN FABRICS,DYED,CNTNG BY WT>=85% TEXTURED POLYESTER FILAMENTS"
    },
    {
     "chapter": "54",
     "itc_hscode": "540754",
     "description": "WOVN FABRCS,PRINTED,CNTNG BY WT>=85% TEXTURED POLYESTER FILAMENTS"
    },
    {
     "chapter": "54",
     "itc_hscode": "540761",
     "description": "WOVEN FABRICS,CONTAINING 85% OR MORE BY WT OF NON‐TEXTURED POLYESTER FILAMENTS"
    },
    {
     "chapter": "54",
     "itc_hscode": "540769",
     "description": "WOVN FBRCS CONTNNG 85% OR MORE BY WT OF OTHR THN NN‐TXTRD POLYSTR FLMNTS"
    },
    {
     "chapter": "54",
     "itc_hscode": "540772",
     "description": "WOVEN FABRICS,CNTNG 85% OR MORE BY WT OF OTHR SYNTHETIC FILAMENTS, DYED"
    },
    {
     "chapter": "54",
     "itc_hscode": "540774",
     "description": "WOVEN FABRICS CNTNG 85% OR MORE BY WT OF OTHR SYNTHETIC FILAMENTS, PRINTED"
    },
    {
     "chapter": "54",
     "itc_hscode": "540781",
     "description": "COTN,UNBLCHD\/BLCHD"
    },
    {
     "chapter": "54",
     "itc_hscode": "540782",
     "description": "COTTON"
    },
    {
     "chapter": "54",
     "itc_hscode": "540784",
     "description": "COTON"
    },
    {
     "chapter": "54",
     "itc_hscode": "540791",
     "description": "OTHR SYNTHETIC WOVEN FABRICS UNBLCHD\/BLCHD"
    },
    {
     "chapter": "54",
     "itc_hscode": "540792",
     "description": "OTHER SYNTHTIC WOVEN FABRICS,DYED"
    },
    {
     "chapter": "54",
     "itc_hscode": "540793",
     "description": "OTHR SYNTHTIC WOVN FABRCS OF YARNS OF DIFFERENT COLOURS"
    },
    {
     "chapter": "54",
     "itc_hscode": "540794",
     "description": "OTHER WOVEN SYNTHETIC FABRICS,PRINTED"
    },
    {
     "chapter": "54",
     "itc_hscode": "540810",
     "description": "WOVEN FABRICS,OBTAINED FROM HIGH TENACITY YARN OF VISCOSE RAYON"
    },
    {
     "chapter": "54",
     "itc_hscode": "540822",
     "description": "OTHER WOVEN FABRICS CNTNG BY WT>=85% OF ARTIFICIAL FILAMENT\/STRIP\/LIKE,DYED"
    },
    {
     "chapter": "54",
     "itc_hscode": "540823",
     "description": "WOVN FABRICS OF YARNS OF DIFRNT COLORS CNTNG>=85% OF ARTIFICL FILMNTS\/STRP\/LIKE"
    },
    {
     "chapter": "54",
     "itc_hscode": "540824",
     "description": "WOVN FBRICS,PRINTED,CONTAINING 85% OR MOREARTIFICIAL FILAMENTS\/STRIP\/LIKE"
    },
    {
     "chapter": "54",
     "itc_hscode": "540831",
     "description": "OTHR ARTFCL WOVEN FABRICS,UNBLCHD\/BLCHD"
    },
    {
     "chapter": "54",
     "itc_hscode": "540832",
     "description": "OTHER ARTFICL WOVEN FABRICS,DYED"
    },
    {
     "chapter": "54",
     "itc_hscode": "540833",
     "description": "OTHR ARTIFICIAL WOVEN FABRICS OF YARN OF DIFFERENT COLOURS"
    },
    {
     "chapter": "54",
     "itc_hscode": "540834",
     "description": "OTHR ARTIFCL WOVEN FABRICS, PRINTED"
    },
    {
     "chapter": "55",
     "itc_hscode": "550110",
     "description": "SYNTHTC FILAMNT TOW OF NYLON\/OTHR PLYAMDS"
    },
    {
     "chapter": "55",
     "itc_hscode": "550120",
     "description": "SYNTHTC FILAMNT TOW OF POLYESTR"
    },
    {
     "chapter": "55",
     "itc_hscode": "550130",
     "description": "SYNTHTC FILAMNT TOW,ACRYLIC\/MODACRYLIC"
    },
    {
     "chapter": "55",
     "itc_hscode": "550140",
     "description": "OF POLYPROPYLENE"
    },
    {
     "chapter": "55",
     "itc_hscode": "550190",
     "description": "OTHER SYNTHETIC FILAMENT TOW"
    },
    {
     "chapter": "55",
     "itc_hscode": "550200",
     "description": "ARTIFICIAL FILAMENT TOW"
    },
    {
     "chapter": "55",
     "itc_hscode": "550311",
     "description": "OF ARAMIDS"
    },
    {
     "chapter": "55",
     "itc_hscode": "550319",
     "description": "OTHER"
    },
    {
     "chapter": "55",
     "itc_hscode": "550320",
     "description": "STAPLE FIBRES OF POLYESTER NT CRD\/CMBD"
    },
    {
     "chapter": "55",
     "itc_hscode": "550330",
     "description": "STAPLE FIBRS OF ACRLC\/MODACRLC NT CRD\/CMBD"
    },
    {
     "chapter": "55",
     "itc_hscode": "550340",
     "description": "STAPLE FIBRS OF POLYPROPYLENE NT CRD\/CMBD"
    },
    {
     "chapter": "55",
     "itc_hscode": "550390",
     "description": "OTHER STAPLE FIBRES,NOT CARDED OR COMBED"
    },
    {
     "chapter": "55",
     "itc_hscode": "550410",
     "description": "VISCOSE RAYON STAPLE FIBRES NT CRD\/COMBD"
    },
    {
     "chapter": "55",
     "itc_hscode": "550490",
     "description": "OTHER ARTIFICIAL STAPLE FIBRS NT CRD\/COMBD"
    },
    {
     "chapter": "55",
     "itc_hscode": "550510",
     "description": "WASTE ETC.OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "550520",
     "description": "WASTE OF ARTIFICIAL FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "550610",
     "description": "STAPLE FIBRES ETC OF NYLON\/OTHR POLYAMIDESCARDED, COMBED"
    },
    {
     "chapter": "55",
     "itc_hscode": "550620",
     "description": "STAPLE FIBRS OF POLYESTERS,CARDED\/COMBED"
    },
    {
     "chapter": "55",
     "itc_hscode": "550630",
     "description": "STAPLE FIBRES OF ACRYLC\/MODACRYLC,CRD\/CMBD"
    },
    {
     "chapter": "55",
     "itc_hscode": "550690",
     "description": "OTHR SYNTHTC STAPLE FIBRES,CARDED\/COMBED"
    },
    {
     "chapter": "55",
     "itc_hscode": "550700",
     "description": "ARTIFICIAL STAPLE FIBRES,CARDED,CMBED\/ OTHERWISE PROCESSED FOR SPINNING"
    },
    {
     "chapter": "55",
     "itc_hscode": "550810",
     "description": "SEWING THREAD OF SYNTHTC STAPLE FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "550820",
     "description": "SEWING THREAD OF ARTFCL STAPLE FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "550911",
     "description": "SINGLE YARN CONTNG 85% OR MORE BY WT OF STAPLE FIBRES OF NYLON\/OTHR POLYAMDS"
    },
    {
     "chapter": "55",
     "itc_hscode": "550912",
     "description": "MULTIPLE(FOLDED)\/CABLED YRN CNTNG>=85% STAPLE FIBRES OF NYLON\/OTHR POLYAMIDES"
    },
    {
     "chapter": "55",
     "itc_hscode": "550921",
     "description": "SINGLE YRN CNTNG 85% OR MORE BY WT OF POLYSTER STAPLE FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "550922",
     "description": "MULTIPLE(FOLDED)\/CABLED YRN CNTNG 85% OR MORE BY WT OF POLYESTR STAPLE FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "550931",
     "description": "SINGLE YRN CNTNG 85% OR MORE BY WT OF ACRYLIC\/MODACRYLIC STAPLE FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "550932",
     "description": "MULTIPLE(FOLDED)\/CABLED YRN CNTNG>=85% OF ACRYLIC\/MODACRYLIC STAPLE FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "550941",
     "description": "SINGLE YRN CNTNG 85% OR MORE BY WT OF OTHER SYNTHETIC STAPPLE FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "550942",
     "description": "MULTIPLE(FOLDED)\/CABLED YARN CONTNG >= 85% OF OTHER SYNTHETIC STAPPLE FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "550951",
     "description": "OTHR YARN OF POLYSTR STPL FIBRS MIXED MAINLY\/SOLELY WITH ARTIFICIAL STAPLE FIBRS"
    },
    {
     "chapter": "55",
     "itc_hscode": "550952",
     "description": "OTHER YARN OF POLYSTR STPLE FIBRS MIXED MAINLY\/SOLELY WITH WOOL\/FINE ANIMAL HAIR"
    },
    {
     "chapter": "55",
     "itc_hscode": "550953",
     "description": "OTHER YARN OF POLYSTER STAPLE FIBRS MIXED MAINLY\/SOLELY WITH COTTON"
    },
    {
     "chapter": "55",
     "itc_hscode": "550959",
     "description": "OTHER YARN OF POLYESTER STAPLE FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "550962",
     "description": "OTHR YRN OF ACRYLC\/MODACRYLC STAPLE FIBRESMIXED MAINLY\/SOLELY WITH COTTON"
    },
    {
     "chapter": "55",
     "itc_hscode": "550969",
     "description": "OTHR YRN OF ACRYLC\/MODACRYLC STAPLE FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "550991",
     "description": "OTHER SYNTHETIC YARN,MIXED MAINLY OR SOLELY WITH WOOL OR FINE ANIMAL HAIR"
    },
    {
     "chapter": "55",
     "itc_hscode": "550992",
     "description": "OTHER SYNTHETIC YARN MIXED MAINLY\/SOLELY WITH COTTON"
    },
    {
     "chapter": "55",
     "itc_hscode": "551011",
     "description": "SINGLE YARN CNTNG 85% OR MORE BY WT OF ARTIFICIAL STAPLE FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "551012",
     "description": "MULTIPLE(FOLDED)\/CABLED YRN CNTNG 85% OR MORE BY WT OF ARTFCL STAPLE FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "551020",
     "description": "OTHER YARN, MIXED MAINLY OR SOLELY WITH WOOL OR FINE ANIMAL HAIR :"
    },
    {
     "chapter": "55",
     "itc_hscode": "551030",
     "description": "OTHER YARN, MIXED MAINLY OR SOLELY WITH COTTON :"
    },
    {
     "chapter": "55",
     "itc_hscode": "551090",
     "description": "OTHER YARN :"
    },
    {
     "chapter": "55",
     "itc_hscode": "551110",
     "description": "YRN OF SYNTHTC STAPLE FIBRES CNTNG 85% OR MORE BY WEIGHT OF SUCH FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "551120",
     "description": "YRN OF SYNTHTC STAPLE FIBRES CNTNG LESS THN 85% BY WEIGHT OF SUCH FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "551130",
     "description": "YARN OF ARTIFICIAL STAPLE FIBRES PUT UP FOR RETAIL SALE"
    },
    {
     "chapter": "55",
     "itc_hscode": "551211",
     "description": "WOVEN FABRICS,UNBLCHD\/BLCHD,CNTNG 85% OR MORE BY WT OF POLYESTR STAPLE FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "551219",
     "description": "OTHER WOVEN FABRICS, CNTNG 85% OR MORE BY WT OF POLYESTR STAPLE FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "551221",
     "description": "FBRS"
    },
    {
     "chapter": "55",
     "itc_hscode": "551311",
     "description": "WOVEN FABRICS OF POLYESTER STAPLE FIBRES, PLAIN WEAVE,UNBLECHED OR BLEACHED"
    },
    {
     "chapter": "55",
     "itc_hscode": "551313",
     "description": "OTHER WOVEN FABRICS OF POLYESTER STAPLE FIBRES :"
    },
    {
     "chapter": "55",
     "itc_hscode": "551319",
     "description": "OTHER WOVEN FABRICS :"
    },
    {
     "chapter": "55",
     "itc_hscode": "551321",
     "description": "WOVEN FABRICS OF POLYESTER STAPLE FIBRES, PLAIN WEAVE,DYED"
    },
    {
     "chapter": "55",
     "itc_hscode": "551323",
     "description": "WOVN FBRCS OF OTHR POLYESTR STPL FBRS,DYED"
    },
    {
     "chapter": "55",
     "itc_hscode": "551329",
     "description": "OTHER WOVEN FABRICS WHICHEVER IS HIGHER"
    },
    {
     "chapter": "55",
     "itc_hscode": "551331",
     "description": "WOVN FABRICS OF YARNS OF DIFFERENT COLOURSOF POLYESTER STAPLE FIBRES,PLAIN WEAVE"
    },
    {
     "chapter": "55",
     "itc_hscode": "551339",
     "description": "WOVEN FABRICS OF OTHR SYNTHETIC STAPLE FIBRES YRN OF DIFFERENT COLOURS"
    },
    {
     "chapter": "55",
     "itc_hscode": "551341",
     "description": "WOVEN FABRICS OF POLYSTER STAPLE FIBRES, PLAIN WEAVE,PRINTED"
    },
    {
     "chapter": "55",
     "itc_hscode": "551349",
     "description": "WVN FBRCS OF OTHR SYNTHTC STPL FIBRS,PRNTD"
    },
    {
     "chapter": "55",
     "itc_hscode": "551411",
     "description": "WOVEN FABRICS OF POLYESTER STAPLE FIBRES, PLAIN WEAVE,UNBLEACHED OR BLEACHED"
    },
    {
     "chapter": "55",
     "itc_hscode": "551419",
     "description": "WOVEN FBRCS OF OTHR SYN FIBRS,BLCD\/UNBLCD"
    },
    {
     "chapter": "55",
     "itc_hscode": "551421",
     "description": "WOVEN FABRICS OF POLYESTR STAPLE FIBRES, PLAIN WEAVE,DYED"
    },
    {
     "chapter": "55",
     "itc_hscode": "551422",
     "description": "WOVEN FABRICS,DYED,3\/4‐THRD TWILL INCL CROSS TWILL OF POLYESTR STAPLE FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "551423",
     "description": "OTHER WOVEN FABRICS OF POLYESTER STAPLE FIBRES WHICHEVER IS HIGHER"
    },
    {
     "chapter": "55",
     "itc_hscode": "551429",
     "description": "OTHER WOVEN FABRICS WHICHEVER IS HIGHER"
    },
    {
     "chapter": "55",
     "itc_hscode": "551430",
     "description": "OF YARNS OF DIFFERENT COLOURS :"
    },
    {
     "chapter": "55",
     "itc_hscode": "551441",
     "description": "WOVEN FABRICS OF POLYESTER STAPLE FIBRES, PLAIN WEAVE,PRINTED"
    },
    {
     "chapter": "55",
     "itc_hscode": "551442",
     "description": "WOVEN FABRICS,3\/4‐THRD TWLL INCL CROSS TWLL OF POLYESTR STAPLE FIBRES,PRINTED"
    },
    {
     "chapter": "55",
     "itc_hscode": "551443",
     "description": "OTHER WOVEN FABRICS OF POLYESTER STAPLE FIBRES METRE, WHICHEVER IS HIGHER"
    },
    {
     "chapter": "55",
     "itc_hscode": "551449",
     "description": "OTHER WOVEN FABRICS WHICHEVER IS HIGHER"
    },
    {
     "chapter": "55",
     "itc_hscode": "551511",
     "description": "FBRCS OF POLYESTR STPL FBRS,MXD MAINLY OR SOLELY WTH VISCOSE RAYON STPL FBRS"
    },
    {
     "chapter": "55",
     "itc_hscode": "551512",
     "description": "FBRCS OF POLYESTR STPL FABRS MXD MAINLY\/ SOLELY WTH MAN‐MADE FILAMENTS"
    },
    {
     "chapter": "55",
     "itc_hscode": "551513",
     "description": "FBRCS OF POLYESTR STPL FBRS MXD MAINLY\/ SOLELY WTH WOOL\/FINE ANIML HAIR"
    },
    {
     "chapter": "55",
     "itc_hscode": "551519",
     "description": "FABRICS OF POLYESTR STPL FBRS MIXD MAINLY OR SOLELY WITH OTHR FIBRS"
    },
    {
     "chapter": "55",
     "itc_hscode": "551521",
     "description": "FBRCS OF ACRYLC\/MODACRYLC STPL FBR MXD MAINLY\/SOLELY WITH MAN‐MADE FILAMENTS"
    },
    {
     "chapter": "55",
     "itc_hscode": "551522",
     "description": "FBRCS OF ACRYLC\/MODACRYLC STPL FBR MXD MAINLY\/SOLELY WITH WOOL\/FINE ANML HAIR"
    },
    {
     "chapter": "55",
     "itc_hscode": "551529",
     "description": "FBRCS OF ACRYCL\/MODACRYLC STPL FBRS MXD MAINLY\/SOLELY WITH OTHR FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "551591",
     "description": "OTHR WOVN FABRCS OF SYN FIBRS MIXD MAINLY OR SOLELY WITH NAM‐MADE FILAMENTS"
    },
    {
     "chapter": "55",
     "itc_hscode": "551599",
     "description": "OTHER SYNTHETIC MIXD WOVEN FABRICS"
    },
    {
     "chapter": "55",
     "itc_hscode": "551611",
     "description": "WVN FBRCS CNTNG 85% OR MORE BY WT OF ARTFCL STPL FBRS,UNBLCHD\/BLCHD"
    },
    {
     "chapter": "55",
     "itc_hscode": "551612",
     "description": "WVN FBRCS,DYD,CNTNG 85% OR MORE BY WT OF ARTIFICIAL STAPLE FBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "551613",
     "description": "WVN FBRCS OF YRN OF DIFFERENT COLRS CNTNG 85% OR MORE BY WT OFARTFCL STPL FBRS"
    },
    {
     "chapter": "55",
     "itc_hscode": "551614",
     "description": "PRNTD WVN FBRCS,CNTNG 85% OR MORE BY WT OF ARTIFICIAL STAPLE FIBRES"
    },
    {
     "chapter": "55",
     "itc_hscode": "551621",
     "description": "MADE FILAMENT,UNBLCHD\/BLCHD"
    },
    {
     "chapter": "55",
     "itc_hscode": "551622",
     "description": "MADE FILAMENT,DYED"
    },
    {
     "chapter": "55",
     "itc_hscode": "551623",
     "description": "MADE FLAMENTS,OF YRN OF DIFFRNT COLR"
    },
    {
     "chapter": "55",
     "itc_hscode": "551624",
     "description": "MADE FILAMENTS,PRINTED"
    },
    {
     "chapter": "55",
     "itc_hscode": "551631",
     "description": "WOOL\/FINE ANIMAL HAIR,BLECHD\/UNBLCHD"
    },
    {
     "chapter": "55",
     "itc_hscode": "551632",
     "description": "FNE ANIMAL HAIR,DYED"
    },
    {
     "chapter": "55",
     "itc_hscode": "551633",
     "description": "ANML HAIR,OF YRNS OF DIFFRNT COLOURS"
    },
    {
     "chapter": "55",
     "itc_hscode": "551634",
     "description": "ANIMAL HAIR,PRINTED"
    },
    {
     "chapter": "55",
     "itc_hscode": "551641",
     "description": "COTTON,UNBLCHD\/BLCHD"
    },
    {
     "chapter": "55",
     "itc_hscode": "551643",
     "description": "YARNS OF DIFFERENT COLOURS"
    },
    {
     "chapter": "55",
     "itc_hscode": "551691",
     "description": "OTHER MXD WOVEN FABRICS OF ARTFCL STAPLE FIBRES UNBLEACHED OR BLEACHED"
    },
    {
     "chapter": "55",
     "itc_hscode": "551692",
     "description": "OTHR MXD WVN FBRCS OF ARTFCL STPL FBRS,DYD"
    },
    {
     "chapter": "55",
     "itc_hscode": "551693",
     "description": "OTHER MXD WOVEN FBRCS OF ARTFCL STPL FBRS,OF YARNS OF DIFFRNT COLOURS"
    },
    {
     "chapter": "55",
     "itc_hscode": "551694",
     "description": "OTHR MIXED WOVEN FABRICS OF ARTIFICIAL STPALE FIBRES,PRINTED"
    },
    {
     "chapter": "56",
     "itc_hscode": "560121",
     "description": "WADDING;OTHR ARTICLES OF WADDING OF COTTON"
    },
    {
     "chapter": "56",
     "itc_hscode": "560122",
     "description": "WADDING OF MAN‐MADE FIBRES"
    },
    {
     "chapter": "56",
     "itc_hscode": "560129",
     "description": "WADDING & ARTCLS OF WADDING NES"
    },
    {
     "chapter": "56",
     "itc_hscode": "560130",
     "description": "TEXTILE FLOCK AND DUST AND MILL NEPS"
    },
    {
     "chapter": "56",
     "itc_hscode": "560210",
     "description": "NEEDLELOOM FELT & STITCH‐BONDED FIBR FBRCS"
    },
    {
     "chapter": "56",
     "itc_hscode": "560221",
     "description": "FELT,NOT IMPREGNATED,COATED,COVERED\/ LAMINATED,OF WOOL\/FINE ANIMAL HAIR"
    },
    {
     "chapter": "56",
     "itc_hscode": "560229",
     "description": "FELT OF OTHR TEXTILE MATERIALS"
    },
    {
     "chapter": "56",
     "itc_hscode": "560290",
     "description": "FELT,IMPRGNATED,COATED,COVERED ORLAMINATED"
    },
    {
     "chapter": "56",
     "itc_hscode": "560311",
     "description": "MAN‐MADE FILMNT WGHNG<25G\/SQM"
    },
    {
     "chapter": "56",
     "itc_hscode": "560312",
     "description": "MAN‐MADE FILMNT WGHNG>25G \/SQM"
    },
    {
     "chapter": "56",
     "itc_hscode": "560313",
     "description": "MAN‐MADE FILMNT WGHNG BETWN 70G\/SQM AND 150G\/SQM"
    },
    {
     "chapter": "56",
     "itc_hscode": "560314",
     "description": "MAN‐MADE FILMNT WGHNG >150G\/SQM"
    },
    {
     "chapter": "56",
     "itc_hscode": "560391",
     "description": "OTHER FILMNT WGHNG <25G\/SQM"
    },
    {
     "chapter": "56",
     "itc_hscode": "560392",
     "description": "OTHER FILMNT WGHNG BETWN 25G\/SQM AND 70G\/SQM"
    },
    {
     "chapter": "56",
     "itc_hscode": "560393",
     "description": "OTHER FILMNT WGHNG BETWN 70G\/SQM AND 150G\/SQM"
    },
    {
     "chapter": "56",
     "itc_hscode": "560394",
     "description": "OTHER FILMNT WGHNG >150G\/SQM"
    },
    {
     "chapter": "56",
     "itc_hscode": "560410",
     "description": "RUBBER THREAD ANDCORD,TEXTILE COVERED"
    },
    {
     "chapter": "56",
     "itc_hscode": "560490",
     "description": "OTHER RUBBER THREAD,CORD ETC"
    },
    {
     "chapter": "56",
     "itc_hscode": "560500",
     "description": "THE FORM OF THRED,STRP\/PWDR\/COVRD WTH METL"
    },
    {
     "chapter": "56",
     "itc_hscode": "560600",
     "description": "FLOCK CHENL YRN);LOOP WALE‐YRN"
    },
    {
     "chapter": "56",
     "itc_hscode": "560721",
     "description": "BINDER OR BALER\/TWINE OF SISAL OR OTHER TEXTILE FIBRES OF THE GENUS AGAVE"
    },
    {
     "chapter": "56",
     "itc_hscode": "560729",
     "description": "OTHR TWINE,ROPE ETC OF SISAL OR OTHER TEXTILE FIBRES OF THE GENUS AGAVE"
    },
    {
     "chapter": "56",
     "itc_hscode": "560741",
     "description": "BINDR\/BALR TWNE OF POLYETHLN\/POLYPROPYLN"
    },
    {
     "chapter": "56",
     "itc_hscode": "560749",
     "description": "OTHR CORDGE ETC OF POLYETHLN\/POLYPROPYLN"
    },
    {
     "chapter": "56",
     "itc_hscode": "560750",
     "description": "TWNE,CORDGE,CBLS ETC OF OTHR SYNTHTC FIBRS"
    },
    {
     "chapter": "56",
     "itc_hscode": "560790",
     "description": "OTHER TWINE,CORDAGE,ROPE AND CABLES"
    },
    {
     "chapter": "56",
     "itc_hscode": "560811",
     "description": "MADE UP FSHNG NETS OF MAN‐MADE TXTL MATRLS"
    },
    {
     "chapter": "56",
     "itc_hscode": "560819",
     "description": "OTHER KNOTTED NETTING OF TWINE,CORDAGE OR ROPE OF MAN‐MADE TEXTILE MATERIALS"
    },
    {
     "chapter": "56",
     "itc_hscode": "560890",
     "description": "KNOTTED NETTING OF TWINE CORDAGE\/ROPE ETC OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "56",
     "itc_hscode": "560900",
     "description": "ARTCLS OF YRN STRP\/THE LKE OF HDNG NO. 5404\/5405 TWINE CORDGE‐ROP\/CBLS N.E.S."
    },
    {
     "chapter": "57",
     "itc_hscode": "570110",
     "description": "CARPETS & OTHER TEXTILE FLOOR COVERINGS OF WOOL OR FINE ANIMAL HAIR, KNOTTED"
    },
    {
     "chapter": "57",
     "itc_hscode": "570190",
     "description": "CRPTS & FLR CVRNGS KNOTTD OF OTR TXTL MTRL"
    },
    {
     "chapter": "57",
     "itc_hscode": "570210",
     "description": "KLM,\"SCHMCKS\",\"KRMNE\" & SMLR HNDWVN RUGS"
    },
    {
     "chapter": "57",
     "itc_hscode": "570220",
     "description": "FLR CVRNGS OF COCONUT FIBRES(COIR)"
    },
    {
     "chapter": "57",
     "itc_hscode": "570231",
     "description": "OTHR CRPTS & FLR CVRNGS OF WOOL\/FINE ANML HAIR OF PILE CNSTRCTN,NOT MADE UP"
    },
    {
     "chapter": "57",
     "itc_hscode": "570241",
     "description": "OTHR CRPTS & FLOOR CVRNGS OF WOOL\/FINE ANIMAL HAIR OF PILE CNSTRCTN,MADE UP"
    },
    {
     "chapter": "57",
     "itc_hscode": "570249",
     "description": "CRPTS & TXTL FLR CVRNGS,WVN,OF OTHR TXTL MATRLS,OF PILE CNSTRCTN,MADE‐UP"
    },
    {
     "chapter": "57",
     "itc_hscode": "570250",
     "description": "OTHER, NOT OF PILE CONSTRUCTION, NOT MADE UP:"
    },
    {
     "chapter": "57",
     "itc_hscode": "570291",
     "description": "CRPTS & OTHR TXTL FLR CVRNGS OF WOOL\/FINE ANML HAIR,NT OF PILE CONSTRCTN,MADE UP"
    },
    {
     "chapter": "57",
     "itc_hscode": "570299",
     "description": "CRPTS & OTHR TXTL FLR CVRNGS OF OTHR TXTL MATRLS,NT OF PILE CONSTRCTN,MADE UP"
    },
    {
     "chapter": "57",
     "itc_hscode": "570410",
     "description": "TILES HVNG A MAXIMUM SURFACE AREA OF 0.3M2"
    },
    {
     "chapter": "57",
     "itc_hscode": "570490",
     "description": "OTHER CARPETS AND TEXTILE FLOOR COVERINGS OFFELT,NT TUFTED\/FLOCKED,W\/N MADE UP"
    },
    {
     "chapter": "57",
     "itc_hscode": "570500",
     "description": "OTHER CARPETS AND OTHER TEXTILE FLOOR COVERINGS, WHETHER OR NOT MADE UP:"
    },
    {
     "chapter": "58",
     "itc_hscode": "580110",
     "description": "WOVEN PILE FABRICS & CHENILLE FABRICS OF WOOL\/FINE ANIMAL HAIR"
    },
    {
     "chapter": "58",
     "itc_hscode": "580121",
     "description": "UNCUT WEFT PILE FABRICS OF COTTON"
    },
    {
     "chapter": "58",
     "itc_hscode": "580122",
     "description": "CUT CORDUROY OF COTTON"
    },
    {
     "chapter": "58",
     "itc_hscode": "580123",
     "description": "OTHER WEFT PILE FABRICS"
    },
    {
     "chapter": "58",
     "itc_hscode": "580124",
     "description": "WARP PILE FABRICS,EPINGLE(UNCUT),OF COTTON"
    },
    {
     "chapter": "58",
     "itc_hscode": "580125",
     "description": "WARP PILE FABRICS,CUT OF COTTON"
    },
    {
     "chapter": "58",
     "itc_hscode": "580126",
     "description": "CHENILLE FABRICS OF COTTON"
    },
    {
     "chapter": "58",
     "itc_hscode": "580131",
     "description": "UNCUT WEFT PILE FBRCS OF MAN‐MADE FBRS"
    },
    {
     "chapter": "58",
     "itc_hscode": "580132",
     "description": "CUT CORDUROY OF MAN‐MADE FIBRES"
    },
    {
     "chapter": "58",
     "itc_hscode": "580133",
     "description": "OTHER WEFT PILE FABRICS"
    },
    {
     "chapter": "58",
     "itc_hscode": "580134",
     "description": "WRP PILE FBRCS EPNGL(UNCUT),OF MAN‐MD FBRS"
    },
    {
     "chapter": "58",
     "itc_hscode": "580135",
     "description": "WRP PILE FBRCS,CUT OF MAN‐MADE FIBRES"
    },
    {
     "chapter": "58",
     "itc_hscode": "580136",
     "description": "CHENILLE FBRCS OF MAN‐MADE FIBRES"
    },
    {
     "chapter": "58",
     "itc_hscode": "580190",
     "description": "WOVEN PILE FABRICS & CHENILLE FABRICS OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "58",
     "itc_hscode": "580211",
     "description": "TERRY TOWELLING & SMLR WVN TERRY FABRICS OF COTTON UNBLEACHED"
    },
    {
     "chapter": "58",
     "itc_hscode": "580219",
     "description": "OTHR TERRY TOWELNG & SMLR TERRY FBRCS,COTN"
    },
    {
     "chapter": "58",
     "itc_hscode": "580220",
     "description": "TERRY TOWELLING & SIMILAR WOVEN TERRY FABRICS OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "58",
     "itc_hscode": "580230",
     "description": "TUFTED TEXTILE FABRICS"
    },
    {
     "chapter": "58",
     "itc_hscode": "580300",
     "description": "GAUZE, OTHER THAN NARROW FABRICS OF HEADING 5806:"
    },
    {
     "chapter": "58",
     "itc_hscode": "580410",
     "description": "TULLES AND OTHER NET FABRICS"
    },
    {
     "chapter": "58",
     "itc_hscode": "580421",
     "description": "MECHANICALLY MADE LACE OF MAN‐MADE FBRS"
    },
    {
     "chapter": "58",
     "itc_hscode": "580429",
     "description": "MECHANICALLY MADE LACE OF OTHR TEXTL MTRLS"
    },
    {
     "chapter": "58",
     "itc_hscode": "580430",
     "description": "HAND MADE LACE"
    },
    {
     "chapter": "58",
     "itc_hscode": "580500",
     "description": "POINT CROSS STITCH),W\/N MADE UP"
    },
    {
     "chapter": "58",
     "itc_hscode": "580610",
     "description": "NARROW WVN PILE FBRCS(INCL TERRY TWLLNG & SMLR TERRY FBRCS)AND CHENILLE FABRICS"
    },
    {
     "chapter": "58",
     "itc_hscode": "580620",
     "description": "THREAD"
    },
    {
     "chapter": "58",
     "itc_hscode": "580631",
     "description": "OTHER NARROW WOVEN FABRICS OF COTTON"
    },
    {
     "chapter": "58",
     "itc_hscode": "580632",
     "description": "OTHER NARROW WOVEN FBRCS OF MAN‐MADE FIBRE"
    },
    {
     "chapter": "58",
     "itc_hscode": "580639",
     "description": "OTHR NARROW WVN FBRCS OF OTHR TXTL MATRLS"
    },
    {
     "chapter": "58",
     "itc_hscode": "580640",
     "description": "FBRCS CNSISTNG OF WRP WTHOUT WEFT ASSMBLD BY MEANS OF AN ADHESIVE(BOLDUCS)"
    },
    {
     "chapter": "58",
     "itc_hscode": "580710",
     "description": "LABELS BADGES & THE LIKE,WOVEN"
    },
    {
     "chapter": "58",
     "itc_hscode": "580790",
     "description": "OTHR LABELS BADGES & SMLR ARTCLS OF TXTL MATRLS (EXCL WOVEN)"
    },
    {
     "chapter": "58",
     "itc_hscode": "580810",
     "description": "BRAIDS IN THE PIECE"
    },
    {
     "chapter": "58",
     "itc_hscode": "580890",
     "description": "ORNMNTL TRMMNGS, TASELS,POMPONS & THE LIKE"
    },
    {
     "chapter": "58",
     "itc_hscode": "580900",
     "description": "FBRCS\/FOR SMLR PURPOSES N.E.S.\/INCLUDED"
    },
    {
     "chapter": "58",
     "itc_hscode": "581010",
     "description": "EMBROIDERY WITHOUT VISIBLE GROUND"
    },
    {
     "chapter": "58",
     "itc_hscode": "581091",
     "description": "OTHER EMBROIDERY OF COTTON"
    },
    {
     "chapter": "58",
     "itc_hscode": "581092",
     "description": "EMBROIDERY OF MAN‐MADE FIBRE"
    },
    {
     "chapter": "58",
     "itc_hscode": "581099",
     "description": "EMBRDRY OF OTHR TXTL MATRLS"
    },
    {
     "chapter": "58",
     "itc_hscode": "581100",
     "description": "WTHPDDNG BY STICHING ETC EXCPT HDG 5810"
    },
    {
     "chapter": "59",
     "itc_hscode": "590190",
     "description": "FOR HAT FOUNDATIONS ETC"
    },
    {
     "chapter": "59",
     "itc_hscode": "590210",
     "description": "TYRE CORD FABRIC OF NYLON\/OTHR POLYAMIDES"
    },
    {
     "chapter": "59",
     "itc_hscode": "590220",
     "description": "TYRE CORD FABRIC OF POLYESTERS"
    },
    {
     "chapter": "59",
     "itc_hscode": "590290",
     "description": "TYRE CORD FABRICS OF VISCOSE RAYON"
    },
    {
     "chapter": "59",
     "itc_hscode": "590310",
     "description": "FBRCS,IMPRGNTD,COATD,CVRD\/LAMNTD WITH PVC"
    },
    {
     "chapter": "59",
     "itc_hscode": "590320",
     "description": "FBRCS IMPRGNTD,COATD ETC WITH POLYURETHANE"
    },
    {
     "chapter": "59",
     "itc_hscode": "590390",
     "description": "FBRCS IMPRGNTD,COATED ETC WTH OTHR PLASTCS"
    },
    {
     "chapter": "59",
     "itc_hscode": "590410",
     "description": "LINOLEUMS"
    },
    {
     "chapter": "59",
     "itc_hscode": "590490",
     "description": "OTHR FLR COVRNG CONSISTNG OF COATNG OR COVRNG APPLID ON TXTL BACKING"
    },
    {
     "chapter": "59",
     "itc_hscode": "590510",
     "description": "TEXTILE WALL COVERINGS"
    },
    {
     "chapter": "59",
     "itc_hscode": "590610",
     "description": "ADHESIVE TAPE OF A WIDTH NOT EXCDG 20 CM."
    },
    {
     "chapter": "59",
     "itc_hscode": "590691",
     "description": "RUBBERISED TEXTILE FABRICS,KNTTD\/CROCHETED"
    },
    {
     "chapter": "59",
     "itc_hscode": "590699",
     "description": "OTHER RUBBERISED TEXTILE FABRICS"
    },
    {
     "chapter": "59",
     "itc_hscode": "590700",
     "description": "STUDIO BACK‐CLOTHS OR THE LIKE"
    },
    {
     "chapter": "59",
     "itc_hscode": "590800",
     "description": "GAS MANTLES ETC,W\/N IMPREGNATED"
    },
    {
     "chapter": "59",
     "itc_hscode": "591000",
     "description": "PLSTCOR RINFRCD WTH MTL\/OTHR MATRL"
    },
    {
     "chapter": "59",
     "itc_hscode": "591110",
     "description": "FBRCS FR OTHR TECHNCL PRPS INCL NARO FBRCS"
    },
    {
     "chapter": "59",
     "itc_hscode": "591120",
     "description": "BOLTING CLOTH,W\/N MADE UP"
    },
    {
     "chapter": "59",
     "itc_hscode": "591132",
     "description": "WEITHING 650 G\/M2 OR MORE"
    },
    {
     "chapter": "59",
     "itc_hscode": "591140",
     "description": "STRAINNG CLTH OF A KIND USD IN OIL PRESSESOR THE LIKE INCLUDING THAT OF HUMAN HAIR"
    },
    {
     "chapter": "59",
     "itc_hscode": "591190",
     "description": "OTHR TXTL PRDCTS & ARTCLS FOR TECHNCL USE"
    },
    {
     "chapter": "60",
     "itc_hscode": "600110",
     "description": "LONG PILE FABRICS"
    },
    {
     "chapter": "60",
     "itc_hscode": "600121",
     "description": "LOOPED PILE FABRICS OF COTTON"
    },
    {
     "chapter": "60",
     "itc_hscode": "600122",
     "description": "LOOPED PILE FBRCS OF MAN‐MADE FIBRES"
    },
    {
     "chapter": "60",
     "itc_hscode": "600129",
     "description": "LOOPED PILE FABRICS OF OTHR TXTL MATERIALS"
    },
    {
     "chapter": "60",
     "itc_hscode": "600191",
     "description": "OTHER PILE FABRICS OF COTTON"
    },
    {
     "chapter": "60",
     "itc_hscode": "600192",
     "description": "OTHER PILE FABRICS OF MAN‐MADE FIBRES"
    },
    {
     "chapter": "60",
     "itc_hscode": "600199",
     "description": "OTHER PILE FABRICS OF OTHR TXTL MATERIALS"
    },
    {
     "chapter": "60",
     "itc_hscode": "600240",
     "description": "THREAD"
    },
    {
     "chapter": "60",
     "itc_hscode": "600290",
     "description": "OTHR KNITDOR CROCHETED FBRCS OF WIDTH<30CM"
    },
    {
     "chapter": "60",
     "itc_hscode": "600310",
     "description": "FBRCS OF WOOL OR FINE ANIMAL HAIR"
    },
    {
     "chapter": "60",
     "itc_hscode": "600320",
     "description": "FBRCS OF COTTON"
    },
    {
     "chapter": "60",
     "itc_hscode": "600330",
     "description": "FBRCS OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "60",
     "itc_hscode": "600340",
     "description": "FBRCS OF ARTFICAL FIBRES"
    },
    {
     "chapter": "60",
     "itc_hscode": "600390",
     "description": "FBRCS OF OTHR FIBRES"
    },
    {
     "chapter": "60",
     "itc_hscode": "600410",
     "description": "RUBER THREAD"
    },
    {
     "chapter": "60",
     "itc_hscode": "600490",
     "description": "OTHR FBRCS OF WIDTH>30CM"
    },
    {
     "chapter": "60",
     "itc_hscode": "600521",
     "description": "WARP KNIT FBRCS OF COTTON, NBLCHD OR BLCHD"
    },
    {
     "chapter": "60",
     "itc_hscode": "600522",
     "description": "WARP KNIT FBRCS OF COTTON, DYED"
    },
    {
     "chapter": "60",
     "itc_hscode": "600523",
     "description": "WARP KNIT FBRCS OF COTTON YARN OF DIFFRNT COLR"
    },
    {
     "chapter": "60",
     "itc_hscode": "600524",
     "description": "WARP KNIT FBRCS OF COTTON, PRINTD"
    },
    {
     "chapter": "60",
     "itc_hscode": "600531",
     "description": "WARP KNIT FBRCS OF SYN FIBRES, UNBLCHD OR BLCHD"
    },
    {
     "chapter": "60",
     "itc_hscode": "600532",
     "description": "WARP KNIT FBRCS OF SYN FIBRES, DYED"
    },
    {
     "chapter": "60",
     "itc_hscode": "600533",
     "description": "WARP KNIT FBRCS OF SYN FIBRES OF DIFFRNT COLR"
    },
    {
     "chapter": "60",
     "itc_hscode": "600534",
     "description": "WARP KNIT FBRCS OF SYN FIBRES, PRINTD"
    },
    {
     "chapter": "60",
     "itc_hscode": "600541",
     "description": "WARP KNIT FBRCS OF ARTIFICIAL FIBRES, UNBLCHD OR BLCHD"
    },
    {
     "chapter": "60",
     "itc_hscode": "600542",
     "description": "WARP KNIT FBRCS OF ARTIFICIAL FIBRES, DYED"
    },
    {
     "chapter": "60",
     "itc_hscode": "600543",
     "description": "WARP KNIT FBRCS OF ARTIFICIAL FIBRES OF DIFFRNT COLR"
    },
    {
     "chapter": "60",
     "itc_hscode": "600544",
     "description": "WARP KNIT FBRCS OF ARTIFICIAL FIBRES, PRINTD"
    },
    {
     "chapter": "60",
     "itc_hscode": "600590",
     "description": "WARP KNIT FBRCS OF OTHER FIBRES"
    },
    {
     "chapter": "60",
     "itc_hscode": "600610",
     "description": "OTHR KNITED OR CROCHETD FBRCS OF WOOL OR FINE ANIML HAIR"
    },
    {
     "chapter": "60",
     "itc_hscode": "600621",
     "description": "OTHR KNITED OR CROCHETD FBRCS OF COTTON , UNBLCHD OR BLCHD"
    },
    {
     "chapter": "60",
     "itc_hscode": "600622",
     "description": "OTHR KNITED OR CROCHETD FBRCS OF COTTON , DYED"
    },
    {
     "chapter": "60",
     "itc_hscode": "600623",
     "description": "OTHR KNITED OR CROCHETD FBRCS OF COTTON YARN OF DIFFRNT COLR"
    },
    {
     "chapter": "60",
     "itc_hscode": "600624",
     "description": "OTHR KNITED OR CROCHETD FBRCS OF COTTON , PRINTD"
    },
    {
     "chapter": "60",
     "itc_hscode": "600631",
     "description": "OTHR KNITD OR CROCHETD FBRCS OF SYN FIBRES, UNBLCHD OR BLCHD"
    },
    {
     "chapter": "60",
     "itc_hscode": "600632",
     "description": "OTHR KNITD OR CROCHETD FBRCS OF SYN FIBRS, DYED"
    },
    {
     "chapter": "60",
     "itc_hscode": "600633",
     "description": "OTHR KNITD OR CROCHETD FBRCS OF SYN FIBRESOF DIFFRNT COLR"
    },
    {
     "chapter": "60",
     "itc_hscode": "600634",
     "description": "OTHR KNITD OR CROCHETD FBRCS OF SYN FIBRES,PRINTD"
    },
    {
     "chapter": "60",
     "itc_hscode": "600641",
     "description": "OTHR KNITD OR CROCHETD FBRCS OF ARTIFCL FIBRES, UNBLCHD OR BLCHD"
    },
    {
     "chapter": "60",
     "itc_hscode": "600642",
     "description": "OTHR KNITD OR CROCHETD FBRCS OF ARTIFCL FIBRES , DYED"
    },
    {
     "chapter": "60",
     "itc_hscode": "600643",
     "description": "OTHR KNITD OR CROCHETD FBRCS OF ARTIFCL FIBRES OF DIFFRNT COLR"
    },
    {
     "chapter": "60",
     "itc_hscode": "600644",
     "description": "OTHR KNITD OR CROCHETD FBRCS OF ARTIFCL FIBRES , PRINTD"
    },
    {
     "chapter": "60",
     "itc_hscode": "600690",
     "description": "OTHR KNITD OR CROCHETD FBRCS OF OTHER FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610120",
     "description": "OVRCOAT,CAPES,CLOAKS,ANORAKS ETC OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "610130",
     "description": "OVRCOAT,CAR‐COATS,ETC OF MAN‐MADE FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610190",
     "description": "OVERCOAT ETC OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610210",
     "description": "OVRCOAT ETC OF WOOL\/FINE ANML HAIR"
    },
    {
     "chapter": "61",
     "itc_hscode": "610220",
     "description": "OVRCOAT,CAR‐COATS,CAPES ETC OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "610230",
     "description": "OVRCOAT ETC OF MANMADE FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610290",
     "description": "OVRCOAT ETC OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610310",
     "description": "SUITS :"
    },
    {
     "chapter": "61",
     "itc_hscode": "610322",
     "description": "ENSEMBLES OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "610323",
     "description": "ENSEMBLES OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610329",
     "description": "ENSEMBLES OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610331",
     "description": "JACKETS & BLAZERS OF WOOL\/FINE ANIMAL HAIR"
    },
    {
     "chapter": "61",
     "itc_hscode": "610332",
     "description": "JACKETS & BLAZERS OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "610333",
     "description": "JACKETS & BLAZERS OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610339",
     "description": "JACKETS & BLAZERS OF OTHER TXTL MATERIALS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610341",
     "description": "TROUSERS,SHORTS ETC OF WOOL\/FINE ANML HAIR"
    },
    {
     "chapter": "61",
     "itc_hscode": "610342",
     "description": "TROUSERS,SHORTS ETC OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "610343",
     "description": "TROUSERS,SHORTS ETC OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610349",
     "description": "TROUSERS,SHORTS ETC OF OTHR TXTL MATRLS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610413",
     "description": "SUITS OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610419",
     "description": "SUITS OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610422",
     "description": "ENSEMBLES OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "610423",
     "description": "ENSEMBLES OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610429",
     "description": "ENSEMBLES OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610431",
     "description": "JACKETS OF WOOL OR FINE ANIMAL HAIR"
    },
    {
     "chapter": "61",
     "itc_hscode": "610432",
     "description": "JACKETS OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "610433",
     "description": "JACKETS OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610439",
     "description": "JACKETS OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610441",
     "description": "DRESSES OF WOOL OR FINE ANIMAL HAIR"
    },
    {
     "chapter": "61",
     "itc_hscode": "610442",
     "description": "DRESSES OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "610443",
     "description": "DRESSES OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610444",
     "description": "DRESSES OF ARTIFICIAL FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610449",
     "description": "DRESSES OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610451",
     "description": "SKIRTS & DIVIDED SKIRTS OF WOOL OR FINE ANIMAL HAIR"
    },
    {
     "chapter": "61",
     "itc_hscode": "610452",
     "description": "SKIRTS & DIVIDED SKIRTS OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "610453",
     "description": "SKIRTS & DIVIDED SKIRTS OF SYNTHTC FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610459",
     "description": "SKRTS & DIVIDED SKRTS OF OTHER TXTL MATRLS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610461",
     "description": "TROUSERS,BIB & BRACE OVERALLS,BREECHES AND SHORTS OF WOOL\/FNE ANIMAL HAIR"
    },
    {
     "chapter": "61",
     "itc_hscode": "610462",
     "description": "TRSRS,BIBS,BRC OVRLLS,BRCHS,SHRTS OF COTN"
    },
    {
     "chapter": "61",
     "itc_hscode": "610463",
     "description": "TROUSERS,BIB & BRACE OVERALLS,BREECHES AND SHORTS OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610469",
     "description": "TROUSERS,BIB & BRACE OVERALLS,BREECHES AND SHORTS OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610510",
     "description": "MEN'S\/BOYS' SHIRTS OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "610520",
     "description": "MEN'S\/BOYS' SHIRTS OF MAN‐MADE FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610590",
     "description": "SHIRTS OF OTHR TEXTILE MATERIAL"
    },
    {
     "chapter": "61",
     "itc_hscode": "610610",
     "description": "BLOUSE ETC OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "610620",
     "description": "BLOUSE ETC OF MAN‐MADE FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610690",
     "description": "BLOUSES ETC OF OTHR TEXTILE MATERIALS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610711",
     "description": "UNDERPANTS & BRIEFS OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "610712",
     "description": "UNDERPANTS & BRIEFS OF MANMADE FBRS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610719",
     "description": "UNDRPNTS & BRIEFS OF OTHR TEXTILE MATRLS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610721",
     "description": "NIGHTSHIRTS & PYJAMAS OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "610722",
     "description": "NIGHTSHIRTS & PYJAMAS OF MANMADE FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610729",
     "description": "NIGHTSHIRTS & PYJAMAS OF OTHR TXTL MATRLS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610791",
     "description": "BATHROBS DRESSING GOWN ETC.OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "610799",
     "description": "BATHROBS ETC.OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610811",
     "description": "SLIPS & PETTICOATS OF MAN‐MADE FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610819",
     "description": "SLIPS & PETTICOATS OF OTHER TXTL MATRLS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610821",
     "description": "BRIEFS AND PANTIES OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "610822",
     "description": "BRIEFS AND PANTIES OF MAN‐MADE FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610829",
     "description": "BRIEFS & PANTIES OF OTHER TEXTLE MATRLS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610831",
     "description": "NIGHTDRESSES AND PYJAMAS OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "610832",
     "description": "NIGHTDRESSES & PYJAMAS OF MAN‐MADE FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610839",
     "description": "NIGHTDRESSES & PYJAMAS OF OTHR TXTL MATRLS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610891",
     "description": "NEGLIGES,BATHROBES ETC OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "610892",
     "description": "NEGLIGES,BATHROBES ETC OF MAN‐MADE FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "610899",
     "description": "NEGLIGES BATHROBES ETC OF OTHR TXTL MATRLS"
    },
    {
     "chapter": "61",
     "itc_hscode": "610910",
     "description": "T‐SHIRTS ETC OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "610990",
     "description": "T‐SHIRT ETC OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "61",
     "itc_hscode": "611011",
     "description": "JERSEYS, PULLOVERS, CARDIGANS ETC OF WOOL"
    },
    {
     "chapter": "61",
     "itc_hscode": "611012",
     "description": "JERSEYS ETC OF KASHMIRI GOATS"
    },
    {
     "chapter": "61",
     "itc_hscode": "611019",
     "description": "OTHER WHICHEVER IS HIGHER"
    },
    {
     "chapter": "61",
     "itc_hscode": "611020",
     "description": "JERSEYS ETC OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "611030",
     "description": "JERSEYS ETC OF MAN‐MADE FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "611090",
     "description": "JERSEY ETC OF OTHER TXTL MATRLS"
    },
    {
     "chapter": "61",
     "itc_hscode": "611120",
     "description": "BABIES'GARMENTS ETC OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "611130",
     "description": "BABIES'GARMENTS ETC OF SYNTHIC FBRS"
    },
    {
     "chapter": "61",
     "itc_hscode": "611190",
     "description": "BABIES'GRMNTS ETC OF OTHR TXTL MATRLS"
    },
    {
     "chapter": "61",
     "itc_hscode": "611211",
     "description": "TRACK SUITS OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "611212",
     "description": "TRACK SUITS OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "611219",
     "description": "TRACK SUITS OF OTHR TXTL MATRLS"
    },
    {
     "chapter": "61",
     "itc_hscode": "611220",
     "description": "SKI SUITS"
    },
    {
     "chapter": "61",
     "itc_hscode": "611231",
     "description": "MEN'S\/BOY'S SWIMWEAR OF SYNTHTC FBRS"
    },
    {
     "chapter": "61",
     "itc_hscode": "611239",
     "description": "MEN'S\/BOY'S SWIMWEAR OF OTHR TXTL MATRLS"
    },
    {
     "chapter": "61",
     "itc_hscode": "611241",
     "description": "WOMEN'S\/GIRLS'SWIMWEAR OF SYNTHTC FBRS"
    },
    {
     "chapter": "61",
     "itc_hscode": "611249",
     "description": "WOMEN'S\/GIRLS'SWMWEAR OF OTHR TXTL MATRLS"
    },
    {
     "chapter": "61",
     "itc_hscode": "611300",
     "description": "GRMNTS,MADE UP OF KNTTD\/CRCHTD FABRICS OF HDNG NO. 5903 5906 OR 5907"
    },
    {
     "chapter": "61",
     "itc_hscode": "611420",
     "description": "OTHER GARMENTS OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "611430",
     "description": "OTHER GARMENTS OF MAN‐MADE FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "611490",
     "description": "OTHR GRMNTS OF OTHR TEXTILE MATERIALS"
    },
    {
     "chapter": "61",
     "itc_hscode": "611510",
     "description": "GRADUATED COMPRESSION HOSIERY FOR EXAMPLE, (STOCKINGS FOR VARICOSE VEINS)"
    },
    {
     "chapter": "61",
     "itc_hscode": "611521",
     "description": "OF SYNTHETIC FIBRES, MEASURING PER SINGLE YARN LESS THAN 67 DECITEX"
    },
    {
     "chapter": "61",
     "itc_hscode": "611522",
     "description": "OF SYNTHETIC FIBRES, MEASURING PER SINGLE YARN LESS THAN 67 DECITEX OR MORE"
    },
    {
     "chapter": "61",
     "itc_hscode": "611529",
     "description": "OF OTHER TEXTILE MATERIALS:"
    },
    {
     "chapter": "61",
     "itc_hscode": "611530",
     "description": "THAN 67 DECITEX"
    },
    {
     "chapter": "61",
     "itc_hscode": "611594",
     "description": "OF WOOL OR FINE ANIMAL HAIR"
    },
    {
     "chapter": "61",
     "itc_hscode": "611595",
     "description": "OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "611596",
     "description": "OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "611599",
     "description": "OTHER HOSIERY OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "61",
     "itc_hscode": "611610",
     "description": "GLOVES MITTENS & MITTS IMPREGNATED COTD\/ COVRD WTH PLSTC\/RUBR, KNITD\/CROCHTD"
    },
    {
     "chapter": "61",
     "itc_hscode": "611691",
     "description": "OTHER GLOVES,MITTENS AND MITTS OF WOOL OR FINE ANIMAL HAIR"
    },
    {
     "chapter": "61",
     "itc_hscode": "611692",
     "description": "OTHER GLOVES ETC OF COTTON"
    },
    {
     "chapter": "61",
     "itc_hscode": "611693",
     "description": "OTHER GLOVES ETC OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "61",
     "itc_hscode": "611699",
     "description": "OTHR GLOVES ETC OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "61",
     "itc_hscode": "611710",
     "description": "SHWL,SCRV,MUFLR,MANTLAS,VEILS & THE LIKE"
    },
    {
     "chapter": "61",
     "itc_hscode": "611780",
     "description": "OTHER CLOTHNG ACCESSORIES,KNITD\/CRCHTD"
    },
    {
     "chapter": "61",
     "itc_hscode": "611790",
     "description": "PARTS OF GARMENTS,KNITD\/CRCHTD"
    },
    {
     "chapter": "62",
     "itc_hscode": "620112",
     "description": "OVRCOTS,RNCOTS ETC AND SMLR ARTCLS OF COTN"
    },
    {
     "chapter": "62",
     "itc_hscode": "620191",
     "description": "OTHR SMLR ARTCLS OF WOOL\/FINE ANIMAL HAIR"
    },
    {
     "chapter": "62",
     "itc_hscode": "620192",
     "description": "OTHER SMLR ARTCLS OF COTTON"
    },
    {
     "chapter": "62",
     "itc_hscode": "620193",
     "description": "OTHER SMLR ARTCLS OF MAN‐MDE FBRS"
    },
    {
     "chapter": "62",
     "itc_hscode": "620199",
     "description": "OTHR SMLR ARTCLS OF OTHR TEXTL MATERLS"
    },
    {
     "chapter": "62",
     "itc_hscode": "620212",
     "description": "OVERCOATS,RNCOTS ETC &SMLR ARTCLS OF COTN"
    },
    {
     "chapter": "62",
     "itc_hscode": "620291",
     "description": "OTHER GARMENTS OF WOOL OR FINE ANIMAL HAIROF HEADING 6202"
    },
    {
     "chapter": "62",
     "itc_hscode": "620292",
     "description": "OTHER GARMENTS OF COTTON OF HD 6202"
    },
    {
     "chapter": "62",
     "itc_hscode": "620293",
     "description": "OTHER GARMENTS OF MAN‐MADE FIBRES OF HEADING NO. 6202"
    },
    {
     "chapter": "62",
     "itc_hscode": "620299",
     "description": "OTHR GRMNTS OF OTHR TXTL MTRLS OF HDG6202"
    },
    {
     "chapter": "62",
     "itc_hscode": "620311",
     "description": "SUITS OF WOOL OR FINE ANIMAL HAIR"
    },
    {
     "chapter": "62",
     "itc_hscode": "620312",
     "description": "SUITS OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "62",
     "itc_hscode": "620319",
     "description": "SUITS OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "62",
     "itc_hscode": "620322",
     "description": "ENSEMBLES OF COTTON"
    },
    {
     "chapter": "62",
     "itc_hscode": "620323",
     "description": "ENSEMBLES OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "62",
     "itc_hscode": "620329",
     "description": "ENSEMBLES OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "62",
     "itc_hscode": "620331",
     "description": "JAKETS & BLAZRS OF WOOL\/FINE ANML HAIR"
    },
    {
     "chapter": "62",
     "itc_hscode": "620332",
     "description": "JACKETS & BLAZERS OF COTTON"
    },
    {
     "chapter": "62",
     "itc_hscode": "620333",
     "description": "JACKTS & BLAZERS OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "62",
     "itc_hscode": "620339",
     "description": "JACKETS & BLAZERS OF OTHER TEXTILE MATRLS"
    },
    {
     "chapter": "62",
     "itc_hscode": "620342",
     "description": "TROUSERS BIB & BRACE OVERALLS BREECHES & SHORTS OF COTTON FOR MEN'S & BOYS'"
    },
    {
     "chapter": "62",
     "itc_hscode": "620343",
     "description": "TROUSERS,BIB & BRACE,OVERALLS,BREECHES & SHORTS OF SYNTHETIC FIBRS,MEN'S OR BOYS'"
    },
    {
     "chapter": "62",
     "itc_hscode": "620411",
     "description": "SUITS OF WOOL OR FINE ANIMAL HAIR"
    },
    {
     "chapter": "62",
     "itc_hscode": "620412",
     "description": "SUITS OF COTTON"
    },
    {
     "chapter": "62",
     "itc_hscode": "620413",
     "description": "SUITS OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "62",
     "itc_hscode": "620419",
     "description": "SUITS OF OTHER TIXTILE MATERIALS"
    },
    {
     "chapter": "62",
     "itc_hscode": "620421",
     "description": "ENSEMBLES OF WOOL OR FINE ANIMAL HAIR"
    },
    {
     "chapter": "62",
     "itc_hscode": "620422",
     "description": "ENSEMBLES OF COTTON"
    },
    {
     "chapter": "62",
     "itc_hscode": "620423",
     "description": "ENSEMBLES OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "62",
     "itc_hscode": "620429",
     "description": "ENSEMBLES OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "62",
     "itc_hscode": "620431",
     "description": "JACKETS OF WOOL OR FINE ANIMAL HAIR"
    },
    {
     "chapter": "62",
     "itc_hscode": "620432",
     "description": "JACKETS OF COTTON"
    },
    {
     "chapter": "62",
     "itc_hscode": "620433",
     "description": "JACKETS OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "62",
     "itc_hscode": "620439",
     "description": "JACKETS OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "62",
     "itc_hscode": "620441",
     "description": "DRESSES OF WOOL OR FINE ANIMAL HAIR"
    },
    {
     "chapter": "62",
     "itc_hscode": "620442",
     "description": "DRESSES OF COTTON"
    },
    {
     "chapter": "62",
     "itc_hscode": "620443",
     "description": "DRESSES OF SYNTHETIC FIBRES"
    },
    {
     "chapter": "62",
     "itc_hscode": "620444",
     "description": "DRESSES OF ARTIFICIAL FIBRES"
    },
    {
     "chapter": "62",
     "itc_hscode": "620449",
     "description": "DRESSES OF OTHER TEXTILE MATERIALS"
    },
    {
     "chapter": "62",
     "itc_hscode": "620451",
     "description": "SKRTS & DVDED SKRTS OF WOOL\/FINE ANML HAIR"
    },
    {
     "chapter": "62",
     "itc_hscode": "620452",
     "description": "SKIRTS AND DIVIDED SKIRTS OF
