import * as PIXI from 'pixi.js';
import { JMTween, JMEasing } from '../../lib/JMTween';
import { InlineImgText } from './InlineImgText';

const WORD_LIST = [ 'act', 'air', 'all', 'and', 'ant', 'any', 'arm', 'art', 'bad', 'bag', 'bed', 'bee', 'bit', 'box', 'boy', 'but', 'cat', 'cow', 'cry', 'cup', 'cup', 'day', 'dog', 'dry', 'ear', 'egg', 'end', 'eye', 'far', 'fat', 'fly', 'for', 'get', 'gun', 'hat', 'how', 'ice', 'ill', 'ink', 'key', 'law', 'leg', 'let', 'lip', 'low', 'man', 'map', 'may', 'net', 'new', 'not', 'now', 'nut', 'off', 'oil', 'old', 'out', 'pen', 'pig', 'pin', 'pot', 'put', 'rat', 'ray', 'red', 'rod', 'rub', 'run', 'sad', 'say', 'sea', 'see', 'sky', 'son', 'sun', 'tax', 'the', 'tin', 'toe', 'top', 'use', 'war', 'wax', 'way', 'wet', 'who', 'why', 'yes', 'you', 'able', 'acid', 'arch', 'army', 'baby', 'back', 'ball', 'band', 'base', 'bath', 'bell', 'bent', 'bird', 'bite', 'blow', 'blue', 'boat', 'body', 'bone', 'book', 'boot', 'bulb', 'burn', 'cake', 'card', 'care', 'cart', 'chin', 'coal', 'coat', 'cold', 'comb', 'come', 'cook', 'copy', 'cord', 'cork', 'dark', 'dead', 'dear', 'debt', 'deep', 'door', 'down', 'drop', 'dust', 'east', 'edge', 'even', 'ever', 'face', 'fact', 'fall', 'farm', 'fear', 'fire', 'fish', 'flag', 'flat', 'fold', 'food', 'foot', 'fork', 'form', 'fowl', 'free', 'from', 'full', 'girl', 'give', 'goat', 'gold', 'good', 'grey', 'grip', 'hair', 'hand', 'hard', 'hate', 'have', 'head', 'hear', 'heat', 'help', 'high', 'hole', 'hook', 'hope', 'horn', 'hose', 'hour', 'idea', 'iron', 'join', 'jump', 'keep', 'kick', 'kind', 'kiss', 'knee', 'knot', 'land', 'last', 'late', 'lead', 'leaf', 'left', 'lift', 'like', 'line', 'list', 'lock', 'long', 'look', 'loss', 'loud', 'love', 'make', 'male', 'mark', 'mass', 'meal', 'meat', 'milk', 'mind', 'mine', 'mist', 'moon', 'move', 'much', 'nail', 'name', 'near', 'neck', 'need', 'news', 'nose', 'note', 'only', 'open', 'oven', 'over', 'page', 'pain', 'part', 'past', 'pipe', 'play', 'poor', 'pull', 'pump', 'push', 'rail', 'rain', 'rate', 'rest', 'rice', 'ring', 'road', 'roll', 'roof', 'room', 'root', 'rule', 'safe', 'sail', 'salt', 'same', 'sand', 'seat', 'seed', 'seem', 'self', 'send', 'ship', 'shoe', 'shut', 'side', 'sign', 'silk', 'size', 'skin', 'slip', 'slow', 'snow', 'soap', 'sock', 'soft', 'some', 'song', 'sort', 'soup', 'star', 'stem', 'step', 'stop', 'such', 'swim', 'tail', 'take', 'talk', 'tall', 'test', 'than', 'that', 'then', 'thin', 'this', 'till', 'time', 'town', 'tray', 'tree', 'true', 'turn', 'unit', 'very', 'view', 'walk', 'wall', 'warm', 'wash', 'wave', 'week', 'well', 'west', 'when', 'whip', 'wide', 'will', 'wind', 'wine', 'wing', 'wire', 'wise', 'with', 'wood', 'wool', 'word', 'work', 'worm', 'year', 'about', 'after', 'again', 'among', 'angle', 'angry', 'apple', 'awake', 'basin', 'berry', 'birth', 'black', 'blade', 'blood', 'board', 'brain', 'brake', 'brass', 'bread', 'brick', 'brown', 'brush', 'burst', 'cause', 'chain', 'chalk', 'cheap', 'chest', 'chief', 'clean', 'clear', 'clock', 'cloth', 'cloud', 'cough', 'cover', 'crack', 'crime', 'cruel', 'crush', 'curve', 'death', 'dirty', 'doubt', 'drain', 'dress', 'drink', 'early', 'earth', 'equal', 'error', 'event', 'every', 'false', 'field', 'fight', 'first', 'fixed', 'flame', 'floor', 'force', 'frame', 'front', 'fruit', 'glass', 'glove', 'grain', 'grass', 'great', 'green', 'group', 'guide', 'happy', 'heart', 'horse', 'house', 'jelly', 'jewel', 'judge', 'knife', 'laugh', 'level', 'light', 'limit', 'linen', 'loose', 'match', 'metal', 'mixed', 'money', 'month', 'mouth', 'music', 'nerve', 'night', 'noise', 'north', 'offer', 'order', 'other', 'owner', 'paint', 'paper', 'paste', 'peace', 'place', 'plane', 'plant', 'plate', 'point', 'power', 'price', 'print', 'prose', 'quick', 'quiet', 'quite', 'range', 'ready', 'right', 'river', 'rough', 'round', 'scale', 'screw', 'sense', 'shade', 'shake', 'shame', 'sharp', 'sheep', 'shelf', 'shirt', 'shock', 'short', 'skirt', 'sleep', 'slope', 'small', 'smash', 'smell', 'smile', 'smoke', 'snake', 'solid', 'sound', 'south', 'space', 'spade', 'spoon', 'stage', 'stamp', 'start', 'steam', 'steel', 'stick', 'stiff', 'still', 'stone', 'store', 'story', 'sugar', 'sweet', 'table', 'taste', 'there', 'thick', 'thing', 'thumb', 'tight', 'tired', 'tooth', 'touch', 'trade', 'train', 'trick', 'twist', 'under', 'value', 'verse', 'voice', 'waste', 'watch', 'water', 'wheel', 'where', 'while', 'white', 'woman', 'wound', 'wrong', 'young', 'across', 'almost', 'amount', 'animal', 'answer', 'attack', 'basket', 'before', 'belief', 'bitter', 'bottle', 'branch', 'breath', 'bridge', 'bright', 'broken', 'bucket', 'butter', 'button', 'camera', 'canvas', 'chance', 'change', 'cheese', 'church', 'circle', 'collar', 'colour', 'common', 'copper', 'cotton', 'credit', 'damage', 'danger', 'degree', 'design', 'desire', 'detail', 'drawer', 'effect', 'engine', 'enough', 'expert', 'family', 'father', 'feeble', 'female', 'finger', 'flight', 'flower', 'friend', 'future', 'garden', 'growth', 'hammer', 'hollow', 'humour', 'insect', 'island', 'kettle', 'letter', 'liquid', 'little', 'living', 'market', 'memory', 'middle', 'minute', 'monkey', 'mother', 'motion', 'muscle', 'narrow', 'nation', 'needle', 'normal', 'number', 'office', 'orange', 'parcel', 'pencil', 'person', 'please', 'plough', 'pocket', 'poison', 'polish', 'porter', 'potato', 'powder', 'prison', 'profit', 'public', 'reason', 'record', 'regret', 'reward', 'rhythm', 'school', 'second', 'secret', 'silver', 'simple', 'sister', 'smooth', 'sneeze', 'sponge', 'spring', 'square', 'sticky', 'stitch', 'street', 'strong', 'sudden', 'summer', 'system', 'theory', 'thread', 'throat', 'ticket', 'tongue', 'vessel', 'weight', 'window', 'winter', 'yellow', 'account', 'against', 'attempt', 'balance', 'because', 'between', 'boiling', 'brother', 'certain', 'comfort', 'company', 'complex', 'control', 'country', 'current', 'curtain', 'cushion', 'disease', 'disgust', 'driving', 'elastic', 'example', 'feather', 'feeling', 'fertile', 'fiction', 'foolish', 'forward', 'general', 'hanging', 'harbour', 'harmony', 'healthy', 'hearing', 'history', 'impulse', 'journey', 'leather', 'library', 'machine', 'manager', 'married', 'measure', 'medical', 'meeting', 'morning', 'natural', 'opinion', 'payment', 'picture', 'present', 'private', 'process', 'produce', 'protest', 'purpose', 'quality', 'reading', 'receipt', 'regular', 'request', 'respect', 'science', 'serious', 'servant', 'society', 'special', 'station', 'stomach', 'strange', 'stretch', 'support', 'thought', 'through', 'through', 'thunder', 'trouble', 'violent', 'waiting', 'weather', 'whistle', 'writing', 'addition', 'approval', 'argument', 'building', 'business', 'carriage', 'chemical', 'complete', 'daughter', 'decision', 'delicate', 'distance', 'division', 'electric', 'exchange', 'frequent', 'hospital', 'increase', 'industry', 'interest', 'language', 'learning', 'material', 'military', 'mountain', 'opposite', 'ornament', 'parallel', 'physical', 'pleasure', 'position', 'possible', 'probable', 'property', 'question', 'reaction', 'relation', 'religion', 'scissors', 'separate', 'stocking', 'straight', 'surprise', 'teaching', 'tendency', 'together', 'tomorrow', 'trousers', 'umbrella', 'agreement', 'amusement', 'apparatus', 'attention', 'authority', 'automatic', 'beautiful', 'behaviour', 'committee', 'condition', 'conscious', 'dependent', 'different', 'digestion', 'direction', 'discovery', 'education', 'existence', 'expansion', 'important', 'insurance', 'invention', 'knowledge', 'necessary', 'operation', 'political', 'secretary', 'selection', 'statement', 'structure', 'substance', 'transport', 'yesterday', 'adjustment', 'attraction', 'comparison', 'connection', 'discussion', 'experience', 'government', 'instrument', 'punishment', 'suggestion', 'competition', 'destruction', 'development', 'observation', 'responsible', 'distribution', 'organization'];

export class RandomTriImgText extends PIXI.Container {
  private running = true;

  private currentText: InlineImgText;

  constructor() {
    super();

    this.onTick();
  }

  public end() {
    this.running = false;
  }

  private makeNewText = () => {
    if (this.currentText) {
      // let toDestroy = this.currentText;
      new JMTween(this.currentText, 1000).onComplete(obj => {
        obj.destroy();
      }).to({alpha: 0.01, y: this.currentText.y - 100}).start();
      this.currentText = null;
    }

    let text = '';

    for (let i = 0; i < 3; i++) {
      if (Math.random() < 0.5) {
        text += WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
      } else {
        text += '@' + Math.floor(Math.random() * 6);
      }
      if (i < 2) {
        text += ' ';
      }
    }

    let fontSize = 10 + Math.random() * 50;

    this.currentText = new InlineImgText(text, { fontSize });
    this.addChild(this.currentText);

    new JMTween(this.currentText, 1000).from({alpha: 0.01, y: this.currentText.y + 100}).start();
  }

  private onTick = () => {
    if (!this.running) return;

    this.makeNewText();

    new JMTween(this, 2000).onComplete(this.onTick).start();
  }
}
