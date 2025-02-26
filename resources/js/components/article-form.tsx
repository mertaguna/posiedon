import { usePage } from '@inertiajs/react';
import clsx from 'clsx';
import Editor from './editor';
import ErrorField from './error-field';
import MSelect from './m-select';
import MultiSelect from './multi-select';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

interface ArticleFormProps {
  data: { [key: string]: any };
  setData: (field: string, value: any) => void;
}

export default function ArticleForm({ data, setData }: ArticleFormProps) {
  const { errors, categories, tags } = usePage().props;
  const onchange = (e: any) => setData(e.target.name, e.target.value);
  return (
    <>
      <div className="flex gap-4 pb-4">
        <div className="w-2/3">
          <Label htmlFor="title">Judul</Label>
          <Input
            name="title"
            id="title"
            onChange={onchange}
            value={data.title}
            className={clsx(
              'block w-full rounded-md border-gray-200',
              errors.title && 'border-red-500',
            )}
          />
          {errors.title ? <ErrorField value={errors.title} /> : null}
        </div>
        <div className="w-1/3">
          <Label htmlFor="picture">Picture</Label>
          <Input
            name="picture"
            id="picture"
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={(e: any) => setData('picture', e.target.files[0])}
            className={clsx(
              'block w-full rounded-md border-gray-200',
              errors.picture && 'border-red-500',
            )}
          />
          {errors.picture ? <ErrorField value={errors.picture} /> : null}
        </div>
      </div>

      <div className="w-full pb-4">
        <Label htmlFor="teaser">Teaser</Label>
        <Textarea
          name="teaser"
          id="teaser"
          onChange={onchange}
          value={data.teaser}
          className={clsx(
            'block w-full rounded-md border-gray-200',
            errors.teaser && 'border-red-500',
          )}
        />
        {errors.teaser ? <ErrorField value={errors.teaser} /> : null}
      </div>

      <div className="flex gap-4 pb-8">
        <div className="w-1/2">
          <Label htmlFor="category_id">Kategori</Label>
          <MSelect
            buttonClassName={clsx(
              'block w-full rounded-md border-gray-200',
              errors.category_id && 'border-red-500',
            )}
            value={data.category_id}
            data={categories}
            onChange={(e) => setData('category_id', e)}
          />
          {errors.category_id ? (
            <ErrorField value={errors.category_id} />
          ) : null}
        </div>

        <div className="w-1/2">
          <Label htmlFor="tags">Tags</Label>
          <MultiSelect
            buttonClassName={clsx(
              'block w-full rounded-md border-gray-200',
              errors.tags && 'border-red-500',
            )}
            data={tags}
            selectedItems={data.tags}
            onChange={(e: any) => setData('tags', e)}
          />
          {errors.tags ? <ErrorField value={errors.tags} /> : null}
        </div>
      </div>

      <div className="w-full pb-4">
        <Editor
          name="body"
          id="body"
          onChange={onchange}
          value={data.body}
          className={clsx(
            'block h-[240px] w-full rounded-md border-gray-200',
            errors.body && 'border-red-500',
          )}
        />
        {errors.body ? <ErrorField value={errors.body} /> : null}
      </div>
    </>
  );
}
