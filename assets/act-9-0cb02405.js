const r=`#section Акт 9\r
{waypoint|2_9_town} #Македы\r
➞ {enter|2_9_2} #Спуск\r
➞ {arena|Подъёмник}\r
➞ {arena|Подъёмник}\r
➞ {enter|2_9_3} #Пустыня Вастири\r
Возьми {waypoint_get}\r
    #sub Иди {dir|90}\r
Возьми {crafting}\r
Найди и подбери {quest_text|Клинок бури}\r
➞ {enter|2_9_5} #Предгорье\r
    #sub Иди {dir|315}\r
Возьми {waypoint_get}\r
    #sub Иди {dir|45} пока не найдешь скалу\r
    #sub Иди {dir|315}\r
➞ {enter|2_9_6} #Кипящее озеро\r
Найди и убей {kill|Василиска}, подбери {quest_text|Кислоту василиска}\r
    #sub Иди {dir|45} и ищи окаменевших солдат\r
Возьми {crafting}\r
{logout}\r
Поговори с {generic|Грехом}\r
Сдай квест {quest|a9q3} #Клинок бури\r
Сдай квест {quest|a9q5|a9q5_offer}, подбери {quest_text|Закупоренная буря} #Царица песков\r
{waypoint|2_9_3} #Пустыня Вастири\r
➞ {enter|2_9_4} #Оазис\r
    #sub Иди {dir|45}\r
➞ {arena|Песчаная яма}, убей {kill|Шакари, Царица песков}\r
{logout}\r
Сдай квест {quest|a9q5|a9q5} #Царица песков\r
{waypoint|2_9_5} #Предгорье\r
➞ {enter|2_9_7} #Тоннель\r
    #sub Иди {dir|315}\r
#ifdef LEAGUE_START\r
    До {waypoint}, выполни {trial}\r
    Возьми {crafting}\r
#endif\r
➞ {enter|2_9_8} #Каменоломня\r
Возьми {waypoint_get}\r
    #sub Иди {dir|315}\r
Возьми {crafting}\r
➞ {arena|Алтарь ветров}, убей {kill|Гарухану, Царицу ветров}, подбери {quest_text|Перо сехемы}\r
    #sub {dir|45} или {dir|225}\r
{logout}\r
Сдай квест {quest|a9q2} #Правитель Македы\r
{waypoint|2_9_8} #Каменоломня\r
➞ {enter|2_9_9} #Фабрика\r
    #sub {dir|315} или {dir|45}\r
Найди и убей {kill|Стратега Адаса}, подбери {quest_text|Тератновую пыль}\r
    #sub Иди {dir|45} следуя по следам тележки\r
{logout}\r
{waypoint|2_9_8} #Каменоломня\r
Поговори с {generic|Грехом}\r
➞ {enter|2_9_10_1} #Брюхо зверя\r
➞ {enter|2_9_10_2} #Гниющее нутро\r
➞ {arena|Средоточие тьмы}\r
Поговори с {generic|Грехом}\r
➞ {arena|Отчаяние Доэдры}, убей {kill|Дэрию, Тёмную душу}\r
➞ {arena|Страдание Малигаро}, убей {kill|Мелави., Изломанную}\r
➞ {arena|Горе Шавронн}, убей {kill|Шавронн, Освобождённую}\r
Поговори с {generic|Грехом} ➞ {arena|Черное сердце}, убей {kill|Порочную троицу}\r
{portal|use}\r
`;export{r as default};
