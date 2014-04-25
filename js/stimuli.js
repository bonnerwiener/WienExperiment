var anagrams = [
    [ 'erkl', 'zwit', 'ietg', 'aosj', 'lamz', 'gets', 'nfse', 'fast', 'hmru', 'adjg', 'kion', 'nhso', 'hrre', 'elhd', 'geri', 'ptul', 'itax', 'ecph', 'egld', 'kcoh', 'gfra', 'rpaa', 'tirp', 'dnki', 'kssu', 'ybab', 'fgol', 'tlsoz', 'puml', 'gadm', 'ruug', 'tasa', 'sobt', 'rsei', 'sbso', 'bbeu', 'brag', 'nrar', 'trob', 'lanc', 'gtsa', 'iehm', 'ujde', 'afkf', 'yurj', 'aisv', 'apkt', 'udbe', 'alsz', 'tmzi', 'otfu', 'kkes', 'eskt', 'eexh', 'ilmo', 'ehfe', 'lozl', 'isnn', 'iodl', 'ottg', 'utlk', 'gaoy', 'saps', 'eebil', 'hoetl', 'uesap', 'atats', 'nolwc', 'uugnf', 'umsiv', 'fueat', 'htnor' ],

    [ 'adlw', 'nwdi', 'ilpz', 'eaflp', 'omor', 'somo', 'ndsa', 'imas', 'zalm', 'fles', 'lzho', 'govel', 'ogld', 'ihmlc', 'ultg', 'ubam', 'lefd', 'beeb', 'ohec', 'beei', 'uefe', 'honeb', 'asmr', 'ostr', 'eautb', 'wfol', 'urmw', 'ezlp', 'sosr', 'afef', 'itre', 'dnri', 'ssro', 'muap', 'tepu', 'aglu', 'alma', 'nyop', 'faau', 'albk', 'seel', 'sgan', 'nuhh', 'seha', 'ublem', 'lgei', 'ihect', 'ueel', 'lmua', 'flle', 'ucshf', 'bobre', 'thehc', 'hnnee', 'etazk', 'akoal', 'srekb', 'gerit', 'slhuc', 'rezab', 'ndaap', 'pdefr', 'kelwo', 'nneos', 'ahsfc', 'ehiec', 'wleep', 'haucl', 'buceh', 'rhise', 'lwlee', 'enbho' 
    ],

    
    [ 'tlze', 'cska', 'avse', 'beut', 'rlede', 'ftop', 'osaf', 'itip', 'hrro', 'gsäe', 'ilse', 'nuza', 'ooeb', 'otua', 'ckor', 'medh', 'renz', 'katn', 'nkra', 'uhbc', 'emli', 'tobo', 'rank', 'grut', 'efht', 'etbt', 'nbad', 'eohs', 'phue', 'mmak', 'naku', 'okln', 'kcal', 'dmam', 'omaf', 'eter', 'cphi', 'lmif', 'lbeeh', 'ukak', 'pepap', 'monr', 'tumr', 'lalw', 'nwad', 'ikol', 'shuhc', 'sala', 'amrt', 'gnog', 'ohrn', 'kcer', 'tahdr', 'dnyah', 'lroab', 'oedmm', 'ortmo', 'ylnno', 'drara', 'ridao', 'igmum', 'ansua', 'isfee', 'hruac', 'qluma', 'ednfa', 'ekett', 'einel', 'ipkoe', 'fewfa', 'talxe', 'dpmfa'
    ]
];

var solutions = [
    [ 'kerl', 'witz', 'teig', 'soja', 'malz', 'steg', 'senf', 'saft', 'ruhm', 'jagd', 'kino', 'sohn', 'herr', 'held', 'gier', 'pult', 'taxi', 'pech', 'geld', 'koch', 'graf', 'paar', 'trip', 'kind', 'kuss', 'baby', 'golf', 'stolz', 'lump', 'magd', 'guru', 'saat', 'obst', 'reis', 'boss', 'bube', 'grab', 'narr', 'brot', 'clan', 'gast', 'heim', 'jude', 'kaff', 'jury', 'visa', 'pakt', 'bude', 'salz', 'zimt', 'tofu', 'keks', 'sekt', 'hexe', 'limo', 'hefe', 'zoll', 'sinn', 'idol', 'gott', 'kult', 'yoga', 'pass', 'liebe', 'hotel', 'pause', 'staat', 'clown', 'unfug', 'visum', 'taufe', 'thron' 
    ],

    [ 'wald', 'wind', 'pilz', 'apfel', 'moor', 'moos', 'sand', 'mais', 'malz', 'fels', 'holz', 'vogel', 'gold', 'milch', 'glut', 'baum', 'feld', 'ebbe', 'echo', 'eibe', 'efeu', 'bohne', 'mars', 'rost', 'taube', 'wolf', 'wurm', 'pelz', 'ross', 'affe', 'tier', 'rind', 'ross', 'puma', 'pute', 'gaul', 'lama', 'pony', 'pfau', 'kalb', 'esel', 'gans', 'huhn', 'hase', 'blume', 'igel', 'teich', 'eule', 'maul', 'fell', 'fuchs', 'robbe', 'hecht', 'henne', 'katze', 'koala', 'krebs', 'tiger', 'luchs', 'zebra', 'panda', 'pferd', 'wolke', 'sonne', 'schaf', 'eiche', 'welpe', 'lauch', 'buche', 'hirse', 'welle', 'bohne'
    ],

    [ 'zelt', 'sack', 'vase', 'tube', 'leder', 'topf', 'sofa', 'tipi', 'rohr', 'säge', 'seil', 'zaun', 'oboe', 'auto', 'rock', 'hemd', 'nerz', 'tank', 'kran', 'buch', 'leim', 'boot', 'kran', 'gurt', 'heft', 'bett', 'band', 'hose', 'hupe', 'kamm', 'kanu', 'klon', 'lack', 'damm', 'mofa', 'teer', 'chip', 'film', 'hebel', 'akku', 'pappe', 'norm', 'turm', 'wall', 'wand', 'kilo', 'schuh', 'saal', 'tram', 'gong', 'horn', 'reck', 'draht', 'handy', 'labor', 'modem', 'motor', 'nylon', 'radar', 'radio', 'gummi', 'sauna', 'seife', 'rauch', 'qualm', 'faden', 'kette', 'leine', 'kopie', 'waffe', 'latex', 'dampf'
    ]
];



// If using error_feedback, you need to define the possible codes, and 
// the correct response for each.
var list_of_codes = new Array('common_word', 'rare_word','pseudo_word', 'consonants');
var correct_responses = new Array(1, 1, 2, 2);
