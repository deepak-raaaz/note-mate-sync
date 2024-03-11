import mongoose, { Document, Model, ObjectId, Schema } from "mongoose";

interface IComment extends Document {
  user: object;
  post: object;
  comment: string;
  likes: Array<{ likes: ObjectId }>;
  commentReplies?: Array<{ commentReply: ObjectId }>;
}

interface ICommentReplies extends Document {
  user: object;
  commentId: object;
  comment: string;
  likes: Array<{ likes: ObjectId }>;
}

interface IShare extends Document {
  user: object;
  post: object;
  targetType: string;
}

interface IDownload extends Document {
  user: object;
  post: object;
  targetType: string;
}

interface ISave extends Document {
  user: object;
  post: object;
  targetType: string;
}

interface IRepost extends Document {
  user: object;
  post: object;
  targetType: string;
}

// interface ITags extends Document {
//   posts: object;
//   tagName: object;
// }

interface IDocument extends Document {
  user: object;
  public_id: string;
  url: string;
  title: string;
  pageCount: number;
  size: number;
  format: string;
}

interface IPosts extends Document {
  user: object;
  captions: string;
  likes: Array<{ likes: ObjectId }>;
  comments: Array<{
    commentReplies(commentReplies: any): any[];
    _id(_id: any): unknown; comments: ObjectId 
}>;
  shares: object;
  saves: object;
  downloads: object;
  document: object;
  reposts: object;
  tags: Array<{ tags: String }>;
}

const commentSchema = new Schema<IComment>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Posts",
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Likes",
      },
    ],
    comment: {
      type: String,
      required: true,
    },
    commentReplies: [
      {
        type: Schema.Types.ObjectId,
        ref: "CommentReplies",
      },
    ],
  },
  { timestamps: true }
);

const commentRepliesSchema = new Schema<ICommentReplies>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    commentId: {
      type: Schema.Types.ObjectId,
      ref: "Comments",
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Likes",
      },
    ],
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const sharesSchema = new Schema<IShare>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Posts",
      required: true,
    },
    targetType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const downloadsSchema = new Schema<IDownload>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Posts",
      required: true,
    },
    targetType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const saveSchema = new Schema<ISave>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Posts",
      required: true,
    },
    targetType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const repostsSchema = new Schema<IRepost>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Posts",
      required: true,
    },
    targetType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const documentsSchema = new Schema<IDocument>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    pageCount: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    format: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const postsSchema = new Schema<IPosts>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    captions: {
      type: String,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comments",
      },
    ],
    shares: [
      {
        type: Schema.Types.ObjectId,
        ref: "Shares",
      },
    ],
    saves: [
      {
        type: Schema.Types.ObjectId,
        ref: "Saves",
      },
    ],
    downloads: [
      {
        type: Schema.Types.ObjectId,
        ref: "Downloads",
      },
    ],
    document: {
      type: Schema.Types.ObjectId,
      ref: "Documents",
      required: true,
    },
    reposts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reposts",
      },
    ],
    tags: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const CommentsModel: Model<IComment> = mongoose.model(
  "Comments",
  commentSchema
);
const commentRepliesModel: Model<ICommentReplies> = mongoose.model(
  "CommentReplies",
  commentRepliesSchema
);
const sharesModel: Model<IShare> = mongoose.model("Shares", sharesSchema);
const downloadsModel: Model<IDownload> = mongoose.model(
  "Downloads",
  downloadsSchema
);
const saveModel: Model<ISave> = mongoose.model("Saves", saveSchema);
const repostsModel: Model<IRepost> = mongoose.model("Reposts", repostsSchema);
const documentsModel: Model<IDocument> = mongoose.model(
  "Documents",
  documentsSchema
);
const postsModel: Model<IPosts> = mongoose.model("Posts", postsSchema);

export { postsModel, documentsModel, CommentsModel, commentRepliesModel };
