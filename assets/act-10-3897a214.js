const n=`#section Акт 10\r
{waypoint|2_10_town} #Доки Ориата\r
➞ {enter|2_10_1} #Крыша собора\r
➞ {arena|Вершина собора}, убей {kill|Чумокрыла}\r
    #sub Иди {dir|0}\r
➞ {enter|2_10_2} #Разорённая площадь\r
Поставь {portal|set} на площади\r
➞ {enter|2_10_7} #Изолятор\r
    #sub Иди {dir|180}\r
{waypoint|2_10_town} #Доки Ориата\r
Сдай квест {quest|a10q1} #Безопасный путь\r
Вернись через {portal|use}\r
Возьми {waypoint_get}\r
    #sub Иди {dir|45}\r
#ifdef LEAGUE_START\r
    ➞ {enter|2_10_9} #Костница\r
    Возьми {crafting}\r
    Выполни {trial}\r
#endif\r
{logout}\r
{waypoint|Labyrinth_Airlock}\r
{ascend|merciless}\r
Возьми {crafting|3_Labyrinth_boss_3}\r
{waypoint|2_10_7} #Изолятор\r
Найди и убей {kill|Виленту}\r
{logout}\r
Сдай квест {quest|a10q6} #Месть Виленты\r
{waypoint|2_10_2} #Разорённая площадь\r
➞ {enter|2_10_3} #Подожжённые суды\r
    #sub Иди {dir|135}\r
➞ {enter|2_10_4} #Осквернённая обитель\r
    #sub Круг по часовой стрелке\r
Возьми {crafting}\r
➞ {arena|Святилище Невинности}, убей {kill|Верховного жреца Аварии}, подбери {quest_text|Посох Чистоты}\r
    #sub Иди {dir|315} по спирали против часовой стрелки\r
{logout}\r
Поговори с {generic|Бэнноном}\r
Сдай квест {quest|a10q2} #Смерть и перерождение\r
{waypoint|2_10_2} #Разорённая площадь\r
Поговори с {generic|Невинностью}\r
    #sub Иди {dir|45}\r
➞ {enter|2_10_5} #Каналы\r
➞ {enter|2_10_6} #Кормушка\r
Возьми {crafting}\r
Поговори с {generic|Грехом}\r
➞ {arena|Алтарь голода}, убей {kill|Китавой, Ненасытный}\r
Поговори с {generic|Грехом} ➞ {enter|2_10_town} #Доки Ориата\r
Поговори с {generic|Лилией Рот}, отплыть из Ориата\r
➞ {enter|2_11_endgame_town} #Берега Каруи\r
Возьми {crafting}\r
#ifdef BANDIT_KILL\r
    Сдай квест {quest|a10q3} #Конец голоду\r
        #sub Введи {generic|/passives} в чате, чтобы подтвердить, что у тебя есть все 24 пассивки от квестов\r
#endif\r
#ifndef BANDIT_KILL\r
    Сдай квест {quest|a10q3} #Конец голоду\r
        #sub Введи {generic|/passives} в чате, чтобы подтвердить, что у тебя есть все 22 пассивки от квестов\r
#endif`;export{n as default};
