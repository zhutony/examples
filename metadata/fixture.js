var makeFixture = function(tx) {
  var body = tx.get('body');

  tx.create({
    id: 'h1',
    type: 'heading',
    level: 1,
    content: 'The Golden Bird'
  });
  body.show('h1');

  tx.create({
    id: 'p1',
    type: 'paragraph',
    content: "A certain king had a beautiful garden, and in the garden stood a tree which bore golden apples. These apples were always counted, and about the time when they began to grow ripe it was found that every night one of them was gone. The king became very angry at this, and ordered the gardener to keep watch all night under the tree. The gardener set his eldest son to watch; but about twelve o'clock he fell asleep, and in the morning another of the apples was missing. Then the second son was ordered to watch; and at midnight he too fell asleep, and in the morning another apple was gone. Then the third son offered to keep watch; but the gardener at first would not let him, for fear some harm should come to him: however, at last he consented, and the young man laid himself under the tree to watch. As the clock struck twelve he heard a rustling noise in the air, and a bird came flying that was of pure gold; and as it was snapping at one of the apples with its beak, the gardener's son jumped up and shot an arrow at it. But the arrow did the bird no harm; only it dropped a golden feather from its tail, and then flew away. The golden feather was brought to the king in the morning, and all the council was called together. Everyone agreed that it was worth more than all the wealth of the kingdom: but the king said, 'One feather is of no use to me, I must have the whole bird.'"
  });
  body.show('p1');

  tx.create({
    id: 'p2',
    type: 'paragraph',
    content: "Then the gardener's eldest son set out and thought to find the golden bird very easily; and when he had gone but a little way, he came to a wood, and by the side of the wood he saw a fox sitting; so he took his bow and made ready to shoot at it. Then the fox said, 'Do not shoot me, for I will give you good counsel; I know what your business is, and that you want to find the golden bird. You will reach a village in the evening; and when you get there, you will see two inns opposite to each other, one of which is very pleasant and beautiful to look at: go not in there, but rest for the night in the other, though it may appear to you to be very poor and mean.' But the son thought to himself, 'What can such a beast as this know about the matter?' So he shot his arrow at the fox; but he missed it, and it set up its tail above its back and ran into the wood. Then he went his way, and in the evening came to the village where the two inns were; and in one of these were people singing, and dancing, and feasting; but the other looked very dirty, and poor. 'I should be very silly,' said he, 'if I went to that shabby house, and left this charming place'; so he went into the smart house, and ate and drank at his ease, and forgot the bird, and his country too."
  });
  body.show('p2');

  tx.create({
    id: 'p3',
    type: 'paragraph',
    content: "Time passed on; and as the eldest son did not come back, and no tidings were heard of him, the second son set out, and the same thing happened to him. He met the fox, who gave him the good advice: but when he came to the two inns, his eldest brother was standing at the window where the merrymaking was, and called to him to come in; and he could not withstand the temptation, but went in, and forgot the golden bird and his country in the same manner."
  });
  body.show('p3');

  tx.create({
    id: 'p4',
    type: 'paragraph',
    content: "Time passed on again, and the youngest son too wished to set out into the wide world to seek for the golden bird; but his father would not listen to it for a long while, for he was very fond of his son, and was afraid that some ill luck might happen to him also, and prevent his coming back. However, at last it was agreed he should go, for he would not rest at home; and as he came to the wood, he met the fox, and heard the same good counsel. But he was thankful to the fox, and did not attempt his life as his brothers had done; so the fox said, 'Sit upon my tail, and you will travel faster.' So he sat down, and the fox began to run, and away they went over stock and stone so quick that their hair whistled in the wind."
  });
  body.show('p4');

  tx.create({
    id: 'p5',
    type: 'paragraph',
    content: "When they came to the village, the son followed the fox's counsel, and without looking about him went to the shabby inn and rested there all night at his ease. In the morning came the fox again and met him as he was beginning his journey, and said, 'Go straight forward, till you come to a castle, before which lie a whole troop of soldiers fast asleep and snoring: take no notice of them, but go into the castle and pass on and on till you come to a room, where the golden bird sits in a wooden cage; close by it stands a beautiful golden cage; but do not try to take the bird out of the shabby cage and put it into the handsome one, otherwise you will repent it.' Then the fox stretched out his tail again, and the young man sat himself down, and away they went over stock and stone till their hair whistled in the wind."
  });
  body.show('p5');

  tx.create({
    id: 'p6',
    type: 'paragraph',
    content: "Before the castle gate all was as the fox had said: so the son went in and found the chamber where the golden bird hung in a wooden cage, and below stood the golden cage, and the three golden apples that had been lost were lying close by it. Then thought he to himself, 'It will be a very droll thing to bring away such a fine bird in this shabby cage'; so he opened the door and took hold of it and put it into the golden cage. But the bird set up such a loud scream that all the soldiers awoke, and they took him prisoner and carried him before the king. The next morning the court sat to judge him; and when all was heard, it sentenced him to die, unless he should bring the king the golden horse which could run as swiftly as the wind; and if he did this, he was to have the golden bird given him for his own."
  });
  body.show('p6');

  tx.create({
    id: 'p7',
    type: 'paragraph',
    content: "So he set out once more on his journey, sighing, and in great despair, when on a sudden his friend the fox met him, and said, 'You see now what has happened on account of your not listening to my counsel. I will still, however, tell you how to find the golden horse, if you will do as I bid you. You must go straight on till you come to the castle where the horse stands in his stall: by his side will lie the groom fast asleep and snoring: take away the horse quietly, but be sure to put the old leathern saddle upon him, and not the golden one that is close by it.' Then the son sat down on the fox's tail, and away they went over stock and stone till their hair whistled in the wind."
  });
  body.show('p7');

  tx.create({
    id: 'p8',
    type: 'paragraph',
    content: "All went right, and the groom lay snoring with his hand upon the golden saddle. But when the son looked at the horse, he thought it a great pity to put the leathern saddle upon it. 'I will give him the good one,' said he; 'I am sure he deserves it.' As he took up the golden saddle the groom awoke and cried out so loud, that all the guards ran in and took him prisoner, and in the morning he was again brought before the court to be judged, and was sentenced to die. But it was agreed, that, if he could bring thither the beautiful princess, he should live, and have the bird and the horse given him for his own."
  });
  body.show('p8');

  tx.create({
    id: 'p9',
    type: 'paragraph',
    content: "Then he went his way very sorrowful; but the old fox came and said, 'Why did not you listen to me? If you had, you would have carried away both the bird and the horse; yet will I once more give you counsel. Go straight on, and in the evening you will arrive at a castle. At twelve o'clock at night the princess goes to the bathing-house: go up to her and give her a kiss, and she will let you lead her away; but take care you do not suffer her to go and take leave of her father and mother.' Then the fox stretched out his tail, and so away they went over stock and stone till their hair whistled again."
  });
  body.show('p9');

  tx.create({
    id: 'p10',
    type: 'paragraph',
    content: "As they came to the castle, all was as the fox had said, and at twelve o'clock the young man met the princess going to the bath and gave her the kiss, and she agreed to run away with him, but begged with many tears that he would let her take leave of her father. At first he refused, but she wept still more and more, and fell at his feet, till at last he consented; but the moment she came to her father's house the guards awoke and he was taken prisoner again."
  });
  body.show('p10');

  tx.create({
    id: 'p11',
    type: 'paragraph',
    content: "Then he was brought before the king, and the king said, 'You shall never have my daughter unless in eight days you dig away the hill that stops the view from my window.' Now this hill was so big that the whole world could not take it away: and when he had worked for seven days, and had done very little, the fox came and said. 'Lie down and go to sleep; I will work for you.' And in the morning he awoke and the hill was gone; so he went merrily to the king, and told him that now that it was removed he must give him the princess."
  });
  body.show('p11');

  tx.create({
    id: 'p12',
    type: 'paragraph',
    content: "Then the king was obliged to keep his word, and away went the young man and the princess; and the fox came and said to him, 'We will have all three, the princess, the horse, and the bird.' 'Ah!' said the young man, 'that would be a great thing, but how can you contrive it?'"
  });
  body.show('p12');

  tx.create({
    id: 'p13',
    type: 'paragraph',
    content: "'If you will only listen,' said the fox, 'it can be done. When you come to the king, and he asks for the beautiful princess, you must say, "Here she is!" Then he will be very joyful; and you will mount the golden horse that they are to give you, and put out your hand to take leave of them; but shake hands with the princess last. Then lift her quickly on to the horse behind you; clap your spurs to his side, and gallop away as fast as you can.'"
  });
  body.show('p13');

  tx.create({
    id: 'p14',
    type: 'paragraph',
    content: "All went right: then the fox said, 'When you come to the castle where the bird is, I will stay with the princess at the door, and you will ride in and speak to the king; and when he sees that it is the right horse, he will bring out the bird; but you must sit still, and say that you want to look at it, to see whether it is the true golden bird; and when you get it into your hand, ride away.'"
  });
  body.show('p14');

  tx.create({
    id: 'p15',
    type: 'paragraph',
    content: "This, too, happened as the fox said; they carried off the bird, the princess mounted again, and they rode on to a great wood. Then the fox came, and said, 'Pray kill me, and cut off my head and my feet.' But the young man refused to do it: so the fox said, 'I will at any rate give you good counsel: beware of two things; ransom no one from the gallows, and sit down by the side of no river.' Then away he went. 'Well,' thought the young man, 'it is no hard matter to keep that advice.'"
  });
  body.show('p15');

  tx.create({
    id: 'p16',
    type: 'paragraph',
    content: "He rode on with the princess, till at last he came to the village where he had left his two brothers. And there he heard a great noise and uproar; and when he asked what was the matter, the people said, 'Two men are going to be hanged.' As he came nearer, he saw that the two men were his brothers, who had turned robbers; so he said, 'Cannot they in any way be saved?' But the people said 'No,' unless he would bestow all his money upon the rascals and buy their liberty. Then he did not stay to think about the matter, but paid what was asked, and his brothers were given up, and went on with him towards their home."
  });
  body.show('p16');

  tx.create({
    id: 'p17',
    type: 'paragraph',
    content: "And as they came to the wood where the fox first met them, it was so cool and pleasant that the two brothers said, 'Let us sit down by the side of the river, and rest a while, to eat and drink.' So he said, 'Yes,' and forgot the fox's counsel, and sat down on the side of the river; and while he suspected nothing, they came behind, and threw him down the bank, and took the princess, the horse, and the bird, and went home to the king their master, and said. 'All this have we won by our labour.' Then there was great rejoicing made; but the horse would not eat, the bird would not sing, and the princess wept."
  });
  body.show('p17');

  tx.create({
    id: 'p18',
    type: 'paragraph',
    content: "The youngest son fell to the bottom of the river's bed: luckily it was nearly dry, but his bones were almost broken, and the bank was so steep that he could find no way to get out. Then the old fox came once more, and scolded him for not following his advice; otherwise no evil would have befallen him: 'Yet,' said he, 'I cannot leave you here, so lay hold of my tail and hold fast.' Then he pulled him out of the river, and said to him, as he got upon the bank, 'Your brothers have set watch to kill you, if they find you in the kingdom.' So he dressed himself as a poor man, and came secretly to the king's court, and was scarcely within the doors when the horse began to eat, and the bird to sing, and the princess left off weeping. Then he went to the king, and told him all his brothers' roguery; and they were seized and punished, and he had the princess given to him again; and after the king's death he was heir to his kingdom."
  });
  body.show('p18');

  tx.create({
    id: 'p19',
    type: 'paragraph',
    content: "A long while after, he went to walk one day in the wood, and the old fox met him, and besought him with tears in his eyes to kill him, and cut off his head and feet. And at last he did so, and in a moment the fox was changed into a man, and turned out to be the brother of the princess, who had been lost a great many many years."
  });
  body.show('p19');
};

module.exports = makeFixture;