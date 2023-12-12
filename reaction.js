//collection of quotes
var arrQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    }
    ,
    {'auther': 'Mahatma Gandhi',
     'quote' : 'Live as if you were to die tomorrow. Learn as if you were to live forever.'
    }
    ,
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    }
    ,
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    }
    ,
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    }
    ,
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    }
    ,
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    }
    ,
    {'author': 'Stephen Chbosky, The Perks of Being a Wallflower',
     'quote': 'We accept the love we think we deserve.'
    }
    ,
    {'author': 'Friedrich Nietzsche, Twilight of the Idols',
     'quote': 'Without music, life would be a mistake.'
    }
    ,
    {'author': 'Oscar Wilde, The Happy Prince and Other Stories',
     'quote': 'I am so clever that sometimes I do not understand a single word of what I am saying.'
    }
];

function generateOfQoutes()
{
    var random  = Number.parseInt(Math.random()*arrQuotes.length + 1);
    document.querySelector('#outputQoute').textContent = `\"${arrQuotes[random].quote}\"`;
    document.querySelector('#outputAuther').textContent = `--${arrQuotes[random].author}`;
}

