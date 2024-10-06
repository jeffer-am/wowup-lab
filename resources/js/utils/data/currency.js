const currencyData = {
    "1inch": "1inch Network",
    "aave": "Aave",
    "ada": "Cardano",
    "aed": "United Arab Emirates Dirham",
    "afn": "Afghan afghani",
    "algo": "Algorand",
    "all": "Albanian lek",
    "amd": "Armenian dram",
    "amp": "Synereo",
    "ang": "Netherlands Antillean Guilder",
    "aoa": "Angolan kwanza",
    "ar": "Arweave",
    "ars": "Argentine peso",
    "atom": "Atomic Coin",
    "aud": "Australian dollar",
    "avax": "Avalanche",
    "awg": "Aruban florin",
    "axs": "AXS",
    "azn": "Azerbaijani manat",
    "bake": "BakeryToken",
    "bam": "Bosnia-Herzegovina Convertible Mark",
    "bat": "Basic Attention Token",
    "bbd": "Bajan dollar",
    "bch": "Bitcoin Cash",
    "bdt": "Bangladeshi taka",
    "bgn": "Bulgarian lev",
    "bhd": "Bahraini dinar",
    "bif": "Burundian Franc",
    "bmd": "Bermudan dollar",
    "bnb": "Binance Coin",
    "bnd": "Brunei dollar",
    "bob": "Bolivian boliviano",
    "brl": "Brazilian real",
    "bsd": "Bahamian dollar",
    "bsv": "Bitcoin SV",
    "bsw": "Biswap",
    "btc": "Bitcoin",
    "btcb": "Bitcoin BEP2",
    "btg": "Bitcoin Gold",
    "btn": "Bhutan currency",
    "busd": "Binance USD",
    "bwp": "Botswanan Pula",
    "byn": "New Belarusian Ruble",
    "byr": "Belarusian Ruble",
    "bzd": "Belize dollar",
    "cad": "Canadian dollar",
    "cake": "PancakeSwap",
    "cdf": "Congolese franc",
    "celo": "Celo",
    "chf": "Swiss franc",
    "chz": "Chiliz",
    "clp": "Chilean peso",
    "cny": "Chinese Yuan",
    "comp": "Compound Coin",
    "cop": "Colombian peso",
    "crc": "Costa Rican Colón",
    "cro": "Crypto.com Chain Token",
    "crv": "Cravy",
    "cuc": "Cuban peso",
    "cup": "Cuban Peso",
    "cve": "Cape Verdean escudo",
    "cvx": "Convex Finance",
    "czk": "Czech koruna",
    "dai": "Dai",
    "dash": "Dash",
    "dcr": "Decred",
    "dfi": "DfiStarter",
    "djf": "Djiboutian franc",
    "dkk": "Danish krone",
    "doge": "Dogecoin",
    "dop": "Dominican peso",
    "dot": "Dotcoin",
    "dzd": "Algerian dinar",
    "egld": "Elrond",
    "egp": "Egyptian pound",
    "enj": "Enjin Coin",
    "eos": "EOS",
    "ern": "Eritrean nakfa",
    "etb": "Ethiopian birr",
    "etc": "Ethereum Classic",
    "eth": "Ether",
    "eur": "Euro",
    "fei": "Fei USD",
    "fil": "FileCoin",
    "fjd": "Fijian dollar",
    "fkp": "Falkland Islands pound",
    "flow": "Flow",
    "frax": "Frax",
    "ftm": "Fantom",
    "ftt": "FarmaTrust",
    "gala": "Gala",
    "gbp": "Pound sterling",
    "gel": "Georgian lari",
    "ggp": "GGPro",
    "ghs": "Ghanaian cedi",
    "gip": "Gibraltar pound",
    "gmd": "Gambian dalasi",
    "gnf": "Guinean franc",
    "gno": "Gnosis",
    "grt": "Golden Ratio Token",
    "gt": "GateToken",
    "gtq": "Guatemalan quetzal",
    "gyd": "Guyanaese Dollar",
    "hbar": "Hedera",
    "hkd": "Hong Kong dollar",
    "hnl": "Honduran lempira",
    "hnt": "Helium",
    "hot": "Hydro Protocol",
    "hrk": "Croatian kuna",
    "ht": "Huobi Token",
    "htg": "Haitian gourde",
    "huf": "Hungarian forint",
    "icp": "Internet Computer",
    "idr": "Indonesian rupiah",
    "ils": "Israeli New Shekel",
    "imp": "CoinIMP",
    "inj": "Injective",
    "inr": "Indian rupee",
    "iqd": "Iraqi dinar",
    "irr": "Iranian rial",
    "isk": "Icelandic króna",
    "jep": "Jersey Pound",
    "jmd": "Jamaican dollar",
    "jod": "Jordanian dinar",
    "jpy": "Japanese yen",
    "kava": "Kava",
    "kcs": "Kucoin",
    "kda": "Kadena",
    "kes": "Kenyan shilling",
    "kgs": "Kyrgystani Som",
    "khr": "Cambodian riel",
    "klay": "Klaytn",
    "kmf": "Comorian franc",
    "knc": "Kyber Network",
    "kpw": "North Korean won",
    "krw": "South Korean won",
    "ksm": "Kusama",
    "kwd": "Kuwaiti dinar",
    "kyd": "Cayman Islands dollar",
    "kzt": "Kazakhstani tenge",
    "lak": "Laotian Kip",
    "lbp": "Lebanese pound",
    "leo": "LEOcoin",
    "link": "ChainLink",
    "lkr": "Sri Lankan rupee",
    "lrc": "Loopring",
    "lrd": "Liberian dollar",
    "lsl": "Lesotho loti",
    "ltc": "Litecoin",
    "ltl": "Lithuanian litas",
    "luna": "Luna Coin",
    "lvl": "Latvian lats",
    "lyd": "Libyan dinar",
    "mad": "Moroccan dirham",
    "mana": "Decentraland",
    "matic": "Polygon",
    "mdl": "Moldovan leu",
    "mga": "Malagasy ariary",
    "mina": "Mina",
    "miota": "IOTA",
    "mkd": "Macedonian denar",
    "mkr": "Maker",
    "mmk": "Myanmar Kyat",
    "mnt": "Mongolian tugrik",
    "mop": "Macanese pataca",
    "mro": "Mauritanian ouguiya",
    "mur": "Mauritian rupee",
    "mvr": "Maldivian rufiyaa",
    "mwk": "Malawian kwacha",
    "mxn": "Mexican peso",
    "myr": "Malaysian ringgit",
    "mzn": "Mozambican Metical",
    "nad": "Namibian dollar",
    "near": "NEAR Protocol",
    "neo": "NEO",
    "nexo": "NEXO",
    "ngn": "Nigerian naira",
    "nio": "Nicaraguan córdoba",
    "nok": "Norwegian krone",
    "npr": "Nepalese rupee",
    "nzd": "New Zealand dollar",
    "okb": "Okex",
    "omr": "Omani rial",
    "one": "Menlo One",
    "pab": "Panamanian balboa",
    "paxg": "PAX Gold",
    "pen": "Sol",
    "pgk": "Papua New Guinean kina",
    "php": "Philippine peso",
    "pkr": "Pakistani rupee",
    "pln": "Poland złoty",
    "pyg": "Paraguayan guarani",
    "qar": "Qatari Rial",
    "qnt": "Quant",
    "qtum": "QTUM",
    "ron": "Romanian leu",
    "rsd": "Serbian dinar",
    "rub": "Russian ruble",
    "rune": "THORChain (ERC20)",
    "rwf": "Rwandan Franc",
    "sand": "BeachCoin",
    "sar": "Saudi riyal",
    "sbd": "Solomon Islands dollar",
    "scr": "Seychellois rupee",
    "sdg": "Sudanese pound",
    "sek": "Swedish krona",
    "sgd": "Singapore dollar",
    "shib": "Shiba Inu",
    "shp": "Saint Helena pound",
    "sle": "",
    "sll": "Sierra Leonean leone",
    "sol": "Sola",
    "sos": "Somali shilling",
    "srd": "Surinamese dollar",
    "std": "São Tomé and Príncipe Dobra (pre-2018)",
    "stx": "Stox",
    "svc": "Salvadoran Colón",
    "syp": "Syrian pound",
    "szl": "Swazi lilangeni",
    "thb": "Thai baht",
    "theta": "Theta",
    "tjs": "Tajikistani somoni",
    "tmt": "Turkmenistani manat",
    "tnd": "Tunisian dinar",
    "top": "Tongan Paʻanga",
    "trx": "TRON",
    "try": "Turkish lira",
    "ttd": "Trinidad & Tobago Dollar",
    "ttt": "Tap Project",
    "tusd": "True USD",
    "twd": "New Taiwan dollar",
    "tzs": "Tanzanian shilling",
    "uah": "Ukrainian hryvnia",
    "ugx": "Ugandan shilling",
    "uni": "Universe",
    "usd": "United States dollar",
    "usdc": "USD Coin",
    "usdp": "USDP Stablecoin",
    "usdt": "Tether",
    "uyu": "Uruguayan peso",
    "uzs": "Uzbekistani som",
    "vef": "Sovereign Bolivar",
    "ves": "",
    "vet": "Vechain",
    "vnd": "Vietnamese dong",
    "vuv": "Vanuatu vatu",
    "waves": "Waves",
    "wbtc": "Wrapped Bitcoin",
    "wemix": "WEMIX",
    "wst": "Samoan tala",
    "xaf": "Central African CFA franc",
    "xag": "Silver Ounce",
    "xau": "XauCoin",
    "xcd": "East Caribbean dollar",
    "xch": "Chia",
    "xdc": "XDC Network",
    "xdr": "Special Drawing Rights",
    "xec": "Eternal Coin",
    "xem": "NEM",
    "xlm": "Stellar",
    "xmr": "Monero",
    "xof": "West African CFA franc",
    "xpf": "CFP franc",
    "xrp": "XRP",
    "xtz": "Tezos",
    "yer": "Yemeni rial",
    "zar": "South African rand",
    "zec": "ZCash",
    "zil": "Zilliqa",
    "zmk": "Zambian kwacha",
    "zmw": "Zambian Kwacha",
    "zwl": "Zimbabwean Dollar"
}