// Inter Trial Interval
var ITI = 500 
var number_of_trials = 9

// pages to send results to
var user_data_address = '../save_demographic.php' 
var data_address = '../save_data.php' 

// hidden box with forms which gets filled with data
var logging_box_ids = new Array('paradigmBox', 'timeBox', 'subjectBox', 'trialBox', 'stimuliBox', 'probeBox', 'codeBox', 'responseBox', 'rtBox');
var variables_to_log = new Array('paradigm', 'experiment_start_time', 'subject_nr', 'trial_number', 'stimuli_number', 'probe', 'code', 'response', 'rt');

// DEBUG stuff
var debug_mode = true // Set as true to show extra information, false to run experiment normally.
var error_feedback = false

// variables to log
var paradigm = 'press_key';
var experiment_start_time = Date();
var subject_nr 
var trial_number = 0;
var stimuli_number
var anagram
var solution
var response
var rt

// Do not change
var random_order = generate_random_list(number_of_trials);
//var stim_number = random_order[trial_number];

// Experiment logic - Adjust this as needed
if(debug_mode){
    document.getElementById('hidden_div').style.display = 'Inline'
};

// add event listener to buttons
document.getElementById("btnStart").addEventListener("click", 
        // clicking the button executes the following anonymus function 
        function() {
            document.getElementById('divDemographic').style.display = 'None';
            document.getElementById('divInstructions').style.display = 'Inline';
            sendData(user_data_address, "#frmDemographic")
        },
        false)
document.getElementById("btnContinue2").addEventListener("click", 
        // clicking the button executes the following anonymus function
        function() {
            document.getElementById('divInstructions').style.display = 'None';
            document.getElementById('divExamples').style.display = 'Inline';
        },
        false);
document.getElementById("btnContinue3").addEventListener("click", 
        // clicking the button executes the following anonymus function
        function() {
            document.getElementById('divExamples').style.display = 'None';
            document.getElementById('divQuestionnaire').style.display = 'Inline';
        },
        false);
document.getElementById("btnContinue4").addEventListener("click", 
        // clicking the button executes the following anonymus function
        function() {
            document.getElementById('divQuestionnaire').style.display = 'None';
            document.getElementById('divInstructions2').style.display = 'Inline';
        },
        false);
document.getElementById("btnContinue5").addEventListener("click", 
        // clicking the button executes the following anonymus function
        function() {
            document.getElementById('divInstructions2').style.display = 'None';
            document.getElementById('divIntrinsic').style.display = 'Inline';
        },
        false);
document.getElementById("btnContinue6").addEventListener("click", 
        // clicking the button executes the following anonymus function
        function() {
            document.getElementById('divInstructions2').style.display = 'None';
            document.getElementById('divExtrinsic').style.display = 'Inline';
        },
        false);
document.getElementById("btnContinue7").addEventListener("click", 
        // clicking the button executes the following anonymus function
        function() {
            document.getElementById('divIntrinsic').style.display = 'None';
            document.getElementById('divToGo').style.display = 'Inline';
        },
        false);
document.getElementById("btnContinue8").addEventListener("click", 
        // clicking the button executes the following anonymus function
        function() {
            document.getElementById('divIntrinsic').style.display = 'None';
            document.getElementById('divToDate').style.display = 'Inline';
        },
        false);
document.getElementById("btnContinue9").addEventListener("click", 
        // clicking the button executes the following anonymus function
        function() {
            document.getElementById('divToGo').style.display = 'None';
            document.getElementById('divInstructions3').style.display = 'Inline';
        },
        false);
document.getElementById("btnContinue10").addEventListener("click", 
        // clicking the button executes the following anonymus function
        function() {
            document.getElementById('divInstructions3').style.display = 'None';
            document.getElementById('divExperiment').style.display = 'Inline';
        },
        false);
document.getElementById("btnContinue11").addEventListener("click", 
        // clicking the button executes the following anonymus function
        function() {
            document.getElementById('divExperiment').style.display = 'None';
            document.getElementById('divManipulation').style.display = 'Inline';
        },
        false);

    
function trial_stage0() {
    stimuli_number = random_order[trial_number];
    anagram = anagrams[stimuli_number];
    solution = solutions[stimuli_number];
    show_fixation(ITI);
    setTimeout("trial_stage1()", ITI);
};

function trial_stage1() {
    start_time = (Date.now());
    show_text(anagram);
    get_keyboard_response('YN');
};
