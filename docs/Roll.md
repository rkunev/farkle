A Player Total Points
B Saved points for current turn (starts at 0 and incremented with selection points if player rolls again)
C Selection points (all checked dice during this roll)
D Points in the rolled dice (0 if no combinations, 1s or 5s)
E Current Player Can Roll
F Current Player Can End Turn
G Next Player Can Piggyback

---

After every roll:
1. D > 0 (normal roll with points)
1.1. E = C > 0 to allow rolling again
1.2. F = C >= 300 to allow end turn
1.3. G = false

2. D == 0 (zilch)
2.1. B = 0 (player loses turn points)
2.2. C = 0
2.3. D = 0
2.4. E = false
2.5. F = false
2.6. G = false
2.7. Lock all dice
2.8. Move first player index as last -> changeTurn()

Actions:
1. Roll
1.1. B += C
1.2. Promote all checked dice to saved
1.3. If all dice are saved && checked -> rollAll()
1.4. Else -> rollAvailable()

2. Complete turn
2.1. A += B + C
2.2. B = 0
2.3. C = 0
2.4. D = 0
2.5. G = true
2.6. Lock all dice -> changeTurn()

3. Piggyback
3.1. B = (last saved player points)
3.2. E = true

---

Rolls scenarios:
1. First roll
2. Next roll with a saved die
3. Next roll with 6 dice

---

A die has:
value
isSaved
isSelected

---

Specs:
Points of the rolled dice will be a getter which will be updated by an action triggered after every roll
scoreService will be used by the getter to calculate the score
All functions in scoreService will be pure and it will not contain private functions

Selection points will follow the same logic. A getter, updated by an action triggered on every click of a single die
scoreService will be used by the getter to calculate the score

Dice/Roll combinations will be determined by a separate service, maybe?
scoreService's methods receive array of dice and will return a number
comboService's methods receive array of dice and will return Bool whether there is a match
