import { Schema, model } from 'mongoose';

const articleSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
});

const Article = model('Article', articleSchema);

export default Article;
