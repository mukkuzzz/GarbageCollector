# Garbage collertor

## Elements
Playing charcters:-
    The collector

NPC's:-
    <!-- Pedestriansts
    Their pets
    Bacterias -->
    The boss

Goals:-
    To collect as much garbage as possible and to clean as much area as possible in a short time

Rules:-
    Three lives
    Should dispose the garbage in the right bin to avoid losing lives
    <!-- Spreading the message after cleaning any area will have more garbage thrown there -->

Balance:- pending
    Upgradable equipment on reaching certain score.
    After certain challanges player will be granted with score boost.

Adaptivity:- pending
    After certain point the number of garbages spwaning will increase
    Multiple areas will increase the difficulty

Chance-vs-Skill-Feedback:-
    After certain point player will get a speed for a short time
    Player should collect the garbage before it is too much
    Feedback is provided through points when collecting the garbage

Story:- 
    A Garbage collector who is trying to clean up a neibourhood.
    Once he clens it the grabage get thrown again and again. He wanted to clean the neighbouthood but failed doing that.

Goal(game):-
    Create awareness about throwing garbage in the right place.\

Rules:-
    WSAD to move.
    Create Player using sprites
    Obstacles Sprites(Garbage)
    framecount to display obstacles
    For every garbage collected the player will recive 10 points
    If the garbage hits the bottom the game ends.

Layout:-
    Score and Number of garbages collected in top right corner
    Number of garbage currently in hand top left corner 
    Dustbins Bottom right
    Number of Garbages Spwaning will increase by time
    Capacity of holdable garbage increase by time
    When players enter the left biodegrable wate is collected
    to the Right The other wastes are collected
    



    1. Creating garbage evry 200 frames - spawndegradable
    2. created array to store all garbage - degradable
    3. check for condition if degradable item is touching ground