
const token = '544858820:AAHEDHeEqRu15boYGdeBTmdwj_zX0hVMioY';

const  TelegramBot  =  require ( ' node-telegram-bot-api ' )

const  TOKEN  =  '544858820:AAHEDHeEqRu15boYGdeBTmdwj_zX0hVMioY';

const  bot  =  new  TelegramBot ( TOKEN , {polling :  true })

бот . onText ( / \ / start / , ( msg ) => {
    
бот . SendMessage ( сообщ . чат . ID , ` Добро пожаловать $ { сообщ . с . first_name } ✌ ` {
" reply_markup " : {
    " клавиатура " : [[ " 1 текст " ], [ " 2 текста " ], [ " 3 текста " ]]
    }
});
    


});
