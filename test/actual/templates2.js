{ 
  '0': { a: { content: 'b', path: 'a' } }, 
  '1': { a: { content: 'b', path: 'a', locals: { a: 'a' } } }, 
  '2': { a: { content: 'b', path: 'a', locals: { a: 'a' } } }, 
  '3': { a: { path: 'a', locals: { a: 'b' }, content: null } }, 
  '4': { a: { path: 'a', content: null } }, 
  '5': { a: { locals: { a: 'a' }, path: 'a', content: null } }, 
  '6': { a: { locals: { a: 'a' }, path: 'a', content: null } }, 
  '7': { a: { content: 'A above\n{{body}}\nA below', locals: { layout: 'b' }, path: 'a' } }, 
  '8': { a: { content: 'This is content.', options: { ext: '.foo' }, ext: '.foo', path: 'a' } }, 
  '9': { a: { content: 'This is content.', ext: '.foo', path: 'a' } }, 
  '10': { a: { content: 'this is content', locals: { layout: 'b' }, path: 'a' } }, 
  '11': { 'a.md': { content: 'b', path: 'a.md', ext: '.md' } }, 
  '12': { 'a.md': { content: 'c', path: 'a.md', ext: '.md' } }, 
  '13': { 'a.md': { path: 'a.md', ext: '.md', content: null } }, 
  '14': { 'a/b/c.md': { options: { y: 'z' }, content: 'this is content.', path: 'a/b/c.md', locals: { a: 'b' }, ext: '.md' } }, 
  '15': { 'a/b/c.md': { content: 'this is content.', path: 'a/b/c.md', options: { y: 'z' }, locals: { a: 'b' }, ext: '.md' } }, 
  '16': { 'a/b/c.md': { content: 'this is content.', path: 'a/b/c.md', locals: { a: 'b' }, ext: '.md' } }, 
  '17': { 'a/b/c.md': { locals: { a: 'b' }, options: { y: 'z' }, content: 'this is content.', path: 'a/b/c.md', ext: '.md' } }, 
  '18': { 'a/b/c.md': { locals: { a: 'b' }, content: 'this is content.', path: 'a/b/c.md', ext: '.md' } }, 
  '19': { 'a/b/c.md': { content: 'this is content.', path: 'a/b/c.md', ext: '.md' } }, 
  '20': { 'a/b/c.md': { content: 'this is baz', options: { bar: 'baz', foo: 'bar' }, locals: { a: 'b' }, path: 'a/b/c.md', ext: '.md' } }, 
  '21': { 'a/b/c.md': { content: 'this is content.', options: { y: 'z' }, locals: { a: 'b' }, path: 'a/b/c.md', ext: '.md' } }, 
  '22': { 'a/b/c.md': { content: 'this is content.', options: { y: 'z' }, locals: { a: 'b' }, path: 'a/b/c.md', ext: '.md' } }, 
  '23': { 'a/b/c.md': { content: 'this is content.', locals: { a: 'b' }, options: { y: 'z' }, path: 'a/b/c.md', ext: '.md' } }, 
  '24': { 'a/b/c.md': { content: 'this is content.', locals: { a: 'b' }, path: 'a/b/c.md', ext: '.md' } }, 
  '25': { 'a/b/c.md': { content: 'this is content.', locals: { a: 'b' }, options: { y: 'z' }, path: 'a/b/c.md', ext: '.md' } }, 
  '26': { 'a/b/c.md': { content: 'this is content.', locals: { a: 'b' }, path: 'a/b/c.md', ext: '.md' } }, 
  '27': { 'a/b/c.md': { content: 'this is content.', path: 'a/b/c.md', ext: '.md' } }, 
  '28': { abc: { content: '<%= wrap(include("content.tmpl")) %> This is a page!', path: 'abc' } }, 
  '29': { 'abc.md': { content: 'This is content.', path: 'abc.md', options: { c: 'd' }, locals: { a: 'b' }, ext: '.md' } }, 
  '30': { 'abc.md': { content: 'This is content.', path: 'abc.md', locals: { a: 'b' }, ext: '.md' } }, 
  '31': { 'abc.md': { content: 'This is content.', path: 'abc.md', locals: { name: 'Jon Schlinkert' }, ext: '.md' } }, 
  '32': { 'abc.md': { content: 'This is content.', path: 'abc.md', ext: '.md' } }, 
  '33': { 'fixtures/two/*.md': { locals: { name: 'Brian Woodward' }, path: 'fixtures/two/*.md', ext: '.md', content: null } }, 
  '34': { foo: { content: 'this is content.', locals: { a: 'b' }, options: { fez: 'foo' }, path: 'foo' } }, 
  '35': { foo: { content: 'this is content.', path: 'foo' } }, 
  '36': { 'foo/bar/abc.md': { content: 'This is content.', path: 'foo/bar/abc.md', options: { c: 'd' }, locals: { a: 'b' }, ext: '.md' } }, 
  '37': { 'foo/bar/abc.md': { content: 'This is content.', path: 'foo/bar/abc.md', locals: { a: 'b' }, ext: '.md' } }, 
  '38': { 'foo/bar/abc.md': { content: 'This is content.', path: 'foo/bar/abc.md', ext: '.md' } }, 
  '39': { 'foo1.md': { content: 'This is content', path: 'foo1.md', locals: { name: 'Jon Schlinkert' }, ext: '.md' } }, 
  '40': { 'layouts/*.txt': { content: 'flflflfl', path: 'layouts/*.txt', locals: { name: 'Brian Woodward' }, ext: '.txt' } }, 
  '41': { 'layouts/*.txt': { locals: { name: 'Brian Woodward' }, path: 'layouts/*.txt', ext: '.txt', content: null } }, 
  '42': { 'pages/a.md': { content: 'This is content.', path: 'pages/a.md', locals: { name: 'Jon Schlinkert' }, ext: '.md' } }, 
  '43': { 'test/fixtures/*.md': { content: 'flflflfl', path: 'test/fixtures/*.md', locals: { name: 'Brian Woodward' }, ext: '.md' } }, 
  '44': { 'test/fixtures/a.md': { data: { title: 'AAA' }, content: 'This is fixture a.md', orig: '---\ntitle: AAA\n---\nThis is fixture a.md', path: 'test/fixtures/a.md', options: { engine: 'hbs' }, locals: { a: 'b' }, ext: '.md' }, 'test/fixtures/b.md': { data: { title: 'BBB' }, content: 'This is fixture b.md', orig: '---\ntitle: BBB\n---\nThis is fixture b.md', path: 'test/fixtures/b.md', options: { engine: 'hbs' }, locals: { a: 'b' }, ext: '.md' }, 'test/fixtures/c.md': { data: { title: 'CCC' }, content: 'This is fixture c.md', orig: '---\ntitle: CCC\n---\nThis is fixture c.md', path: 'test/fixtures/c.md', options: { engine: 'hbs' }, locals: { a: 'b' }, ext: '.md' } }, 
  '45': { 'test/fixtures/a.txt': { data: { title: 'AAA' }, content: 'This is from a.txt.', orig: '---\ntitle: AAA\n---\nThis is from a.txt.', path: 'test/fixtures/a.txt', options: { c: true, b: 'b' }, locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/b.txt': { data: { title: 'BBB' }, content: 'This is from b.txt.', orig: '---\ntitle: BBB\n---\nThis is from b.txt.', path: 'test/fixtures/b.txt', options: { c: true, b: 'b' }, locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/c.txt': { data: { title: 'CCC' }, content: 'This is from c.txt.', orig: '---\ntitle: CCC\n---\nThis is from c.txt.', path: 'test/fixtures/c.txt', options: { c: true, b: 'b' }, locals: { a: 'b' }, ext: '.txt' } }, 
  '46': { 'test/fixtures/a.txt': { data: { title: 'AAA' }, content: 'This is from a.txt.', orig: '---\ntitle: AAA\n---\nThis is from a.txt.', path: 'test/fixtures/a.txt', options: { c: true }, locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/b.txt': { data: { title: 'BBB' }, content: 'This is from b.txt.', orig: '---\ntitle: BBB\n---\nThis is from b.txt.', path: 'test/fixtures/b.txt', options: { c: true }, locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/c.txt': { data: { title: 'CCC' }, content: 'This is from c.txt.', orig: '---\ntitle: CCC\n---\nThis is from c.txt.', path: 'test/fixtures/c.txt', options: { c: true }, locals: { a: 'b' }, ext: '.txt' } }, 
  '47': { 'test/fixtures/a.txt': { data: { title: 'AAA' }, content: 'This is from a.txt.', orig: '---\ntitle: AAA\n---\nThis is from a.txt.', path: 'test/fixtures/a.txt', options: { foo: true }, locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/b.txt': { data: { title: 'BBB' }, content: 'This is from b.txt.', orig: '---\ntitle: BBB\n---\nThis is from b.txt.', path: 'test/fixtures/b.txt', options: { foo: true }, locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/c.txt': { data: { title: 'CCC' }, content: 'This is from c.txt.', orig: '---\ntitle: CCC\n---\nThis is from c.txt.', path: 'test/fixtures/c.txt', options: { foo: true }, locals: { a: 'b' }, ext: '.txt' } }, 
  '48': { 'test/fixtures/a.txt': { data: { title: 'AAA' }, content: 'This is from a.txt.', orig: '---\ntitle: AAA\n---\nThis is from a.txt.', path: 'test/fixtures/a.txt', locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/b.txt': { data: { title: 'BBB' }, content: 'This is from b.txt.', orig: '---\ntitle: BBB\n---\nThis is from b.txt.', path: 'test/fixtures/b.txt', locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/c.txt': { data: { title: 'CCC' }, content: 'This is from c.txt.', orig: '---\ntitle: CCC\n---\nThis is from c.txt.', path: 'test/fixtures/c.txt', locals: { a: 'b' }, ext: '.txt' } }, 
  '49': { 'test/fixtures/a.txt': { data: { title: 'AAA' }, content: 'This is from a.txt.', orig: '---\ntitle: AAA\n---\nThis is from a.txt.', path: 'test/fixtures/a.txt', locals: { name: 'Brian Woodward' }, ext: '.txt' }, 'test/fixtures/b.txt': { data: { title: 'BBB' }, content: 'This is from b.txt.', orig: '---\ntitle: BBB\n---\nThis is from b.txt.', path: 'test/fixtures/b.txt', locals: { name: 'Brian Woodward' }, ext: '.txt' }, 'test/fixtures/c.txt': { data: { title: 'CCC' }, content: 'This is from c.txt.', orig: '---\ntitle: CCC\n---\nThis is from c.txt.', path: 'test/fixtures/c.txt', locals: { name: 'Brian Woodward' }, ext: '.txt' } }, 
  '50': { 'test/fixtures/a.txt': { data: { title: 'AAA' }, content: 'This is from a.txt.', orig: '---\ntitle: AAA\n---\nThis is from a.txt.', path: 'test/fixtures/a.txt', ext: '.txt' }, 'test/fixtures/b.txt': { data: { title: 'BBB' }, content: 'This is from b.txt.', orig: '---\ntitle: BBB\n---\nThis is from b.txt.', path: 'test/fixtures/b.txt', ext: '.txt' }, 'test/fixtures/c.txt': { data: { title: 'CCC' }, content: 'This is from c.txt.', orig: '---\ntitle: CCC\n---\nThis is from c.txt.', path: 'test/fixtures/c.txt', ext: '.txt' } }, 
  '51': { 'test/fixtures/a.md': { data: { title: 'AAA' }, content: 'This is fixture a.md', orig: '---\ntitle: AAA\n---\nThis is fixture a.md', path: 'test/fixtures/a.md', options: { something: true }, locals: { a: 'b' }, ext: '.md' } }, 
  '52': { 'test/fixtures/a.md': { data: { title: 'AAA' }, content: 'This is fixture a.md', orig: '---\ntitle: AAA\n---\nThis is fixture a.md', path: 'test/fixtures/a.md', locals: { a: 'b' }, ext: '.md' } }, 
  '53': { 'test/fixtures/a.md': { data: { title: 'AAA' }, content: 'This is fixture a.md', orig: '---\ntitle: AAA\n---\nThis is fixture a.md', path: 'test/fixtures/a.md', locals: { foo: 'bar' }, ext: '.md' } }, 
  '54': { 'test/fixtures/a.md': { data: { title: 'AAA' }, content: 'This is fixture a.md', orig: '---\ntitle: AAA\n---\nThis is fixture a.md', path: 'test/fixtures/a.md', ext: '.md' } }, 
  '55': { 'test/fixtures/a.txt': { data: { title: 'AAA' }, content: 'This is from a.txt.', orig: '---\ntitle: AAA\n---\nThis is from a.txt.', path: 'test/fixtures/a.txt', options: { foo: true }, locals: { a: 'b' }, ext: '.txt' } }, 
  '56': { 'test/fixtures/one/a.md': { data: { title: 'A' }, content: 'This is {{title}}', orig: '---\ntitle: A\n---\n\nThis is {{title}}\n', path: 'test/fixtures/one/a.md', locals: { name: 'Brian Woodward' }, ext: '.md' } }, 
  '57': { 'test/fixtures/one/a.md': { data: { title: 'A' }, content: 'This is {{title}}', orig: '---\ntitle: A\n---\n\nThis is {{title}}\n', path: 'test/fixtures/one/a.md', ext: '.md' } }, 
  '58': { 'test/fixtures/three/g.md': { data: { title: 'G' }, content: 'This is {{title}}', orig: '---\ntitle: G\n---\n\nThis is {{title}}\n', path: 'test/fixtures/three/g.md', locals: { name: 'Brian Woodward' }, ext: '.md' }, 'test/fixtures/three/h.md': { data: { title: 'H' }, content: 'This is {{title}}', orig: '---\ntitle: H\n---\n\nThis is {{title}}\n', path: 'test/fixtures/three/h.md', locals: { name: 'Brian Woodward' }, ext: '.md' }, 'test/fixtures/three/i.md': { data: { title: 'I' }, content: 'This is {{title}}', orig: '---\ntitle: I\n---\n\nThis is {{title}}\n', path: 'test/fixtures/three/i.md', locals: { name: 'Brian Woodward' }, ext: '.md' } }, 
  '59': { whatever: { locals: { name: 'Brian Woodward' }, path: 'whatever', content: null } }, 
  '60': { 'test/fixtures/a.md': { data: { title: 'AAA' }, content: 'This is fixture a.md', orig: '---\ntitle: AAA\n---\nThis is fixture a.md', path: 'test/fixtures/a.md', locals: { a: 'b' }, ext: '.md' }, 'test/fixtures/b.md': { data: { title: 'BBB' }, content: 'This is fixture b.md', orig: '---\ntitle: BBB\n---\nThis is fixture b.md', path: 'test/fixtures/b.md', locals: { a: 'b' }, ext: '.md' }, 'test/fixtures/c.md': { data: { title: 'CCC' }, content: 'This is fixture c.md', orig: '---\ntitle: CCC\n---\nThis is fixture c.md', path: 'test/fixtures/c.md', locals: { a: 'b' }, ext: '.md' }, 'test/fixtures/a.txt': { data: { title: 'AAA' }, content: 'This is from a.txt.', orig: '---\ntitle: AAA\n---\nThis is from a.txt.', path: 'test/fixtures/a.txt', locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/b.txt': { data: { title: 'BBB' }, content: 'This is from b.txt.', orig: '---\ntitle: BBB\n---\nThis is from b.txt.', path: 'test/fixtures/b.txt', locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/c.txt': { data: { title: 'CCC' }, content: 'This is from c.txt.', orig: '---\ntitle: CCC\n---\nThis is from c.txt.', path: 'test/fixtures/c.txt', locals: { a: 'b' }, ext: '.txt' } }, 
  '61': { 'test/fixtures/a.txt': { data: { title: 'AAA' }, content: 'This is from a.txt.', orig: '---\ntitle: AAA\n---\nThis is from a.txt.', path: 'test/fixtures/a.txt', options: { c: true, b: 'b' }, locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/b.txt': { data: { title: 'BBB' }, content: 'This is from b.txt.', orig: '---\ntitle: BBB\n---\nThis is from b.txt.', path: 'test/fixtures/b.txt', options: { c: true, b: 'b' }, locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/c.txt': { data: { title: 'CCC' }, content: 'This is from c.txt.', orig: '---\ntitle: CCC\n---\nThis is from c.txt.', path: 'test/fixtures/c.txt', options: { c: true, b: 'b' }, locals: { a: 'b' }, ext: '.txt' } }, 
  '62': { 'test/fixtures/a.txt': { data: { title: 'AAA' }, content: 'This is from a.txt.', orig: '---\ntitle: AAA\n---\nThis is from a.txt.', path: 'test/fixtures/a.txt', options: { foo: true }, locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/b.txt': { data: { title: 'BBB' }, content: 'This is from b.txt.', orig: '---\ntitle: BBB\n---\nThis is from b.txt.', path: 'test/fixtures/b.txt', options: { foo: true }, locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/c.txt': { data: { title: 'CCC' }, content: 'This is from c.txt.', orig: '---\ntitle: CCC\n---\nThis is from c.txt.', path: 'test/fixtures/c.txt', options: { foo: true }, locals: { a: 'b' }, ext: '.txt' } }, 
  '63': { 'test/fixtures/a.txt': { data: { title: 'AAA' }, content: 'This is from a.txt.', orig: '---\ntitle: AAA\n---\nThis is from a.txt.', path: 'test/fixtures/a.txt', options: { c: true }, locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/b.txt': { data: { title: 'BBB' }, content: 'This is from b.txt.', orig: '---\ntitle: BBB\n---\nThis is from b.txt.', path: 'test/fixtures/b.txt', options: { c: true }, locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/c.txt': { data: { title: 'CCC' }, content: 'This is from c.txt.', orig: '---\ntitle: CCC\n---\nThis is from c.txt.', path: 'test/fixtures/c.txt', options: { c: true }, locals: { a: 'b' }, ext: '.txt' } }, 
  '64': { 'test/fixtures/a.txt': { data: { title: 'AAA' }, content: 'This is from a.txt.', orig: '---\ntitle: AAA\n---\nThis is from a.txt.', path: 'test/fixtures/a.txt', options: { foo: true }, locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/b.txt': { data: { title: 'BBB' }, content: 'This is from b.txt.', orig: '---\ntitle: BBB\n---\nThis is from b.txt.', path: 'test/fixtures/b.txt', options: { foo: true }, locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/c.txt': { data: { title: 'CCC' }, content: 'This is from c.txt.', orig: '---\ntitle: CCC\n---\nThis is from c.txt.', path: 'test/fixtures/c.txt', options: { foo: true }, locals: { a: 'b' }, ext: '.txt' } }, 
  '65': { 'test/fixtures/a.txt': { data: { title: 'AAA' }, content: 'This is from a.txt.', orig: '---\ntitle: AAA\n---\nThis is from a.txt.', path: 'test/fixtures/a.txt', locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/b.txt': { data: { title: 'BBB' }, content: 'This is from b.txt.', orig: '---\ntitle: BBB\n---\nThis is from b.txt.', path: 'test/fixtures/b.txt', locals: { a: 'b' }, ext: '.txt' }, 'test/fixtures/c.txt': { data: { title: 'CCC' }, content: 'This is from c.txt.', orig: '---\ntitle: CCC\n---\nThis is from c.txt.', path: 'test/fixtures/c.txt', locals: { a: 'b' }, ext: '.txt' } }, 
  '66': { 'test/fixtures/a.txt': { data: { title: 'AAA' }, content: 'This is from a.txt.', orig: '---\ntitle: AAA\n---\nThis is from a.txt.', path: 'test/fixtures/a.txt', locals: { name: 'Brian Woodward' }, ext: '.txt' }, 'test/fixtures/b.txt': { data: { title: 'BBB' }, content: 'This is from b.txt.', orig: '---\ntitle: BBB\n---\nThis is from b.txt.', path: 'test/fixtures/b.txt', locals: { name: 'Brian Woodward' }, ext: '.txt' }, 'test/fixtures/c.txt': { data: { title: 'CCC' }, content: 'This is from c.txt.', orig: '---\ntitle: CCC\n---\nThis is from c.txt.', path: 'test/fixtures/c.txt', locals: { name: 'Brian Woodward' }, ext: '.txt' } }, 
  '67': { 'test/fixtures/a.txt': { data: { title: 'AAA' }, content: 'This is from a.txt.', orig: '---\ntitle: AAA\n---\nThis is from a.txt.', path: 'test/fixtures/a.txt', ext: '.txt' }, 'test/fixtures/b.txt': { data: { title: 'BBB' }, content: 'This is from b.txt.', orig: '---\ntitle: BBB\n---\nThis is from b.txt.', path: 'test/fixtures/b.txt', ext: '.txt' }, 'test/fixtures/c.txt': { data: { title: 'CCC' }, content: 'This is from c.txt.', orig: '---\ntitle: CCC\n---\nThis is from c.txt.', path: 'test/fixtures/c.txt', ext: '.txt' } }, 
  '68': { 'test/fixtures/a.txt': { data: { title: 'AAA' }, content: 'This is from a.txt.', orig: '---\ntitle: AAA\n---\nThis is from a.txt.', path: 'test/fixtures/a.txt', locals: { name: 'Brian Woodward' }, ext: '.txt' } }, 
  '69': {}, 
  '70': { 'a/b/c.md': { content: 'this is content.', options: { y: 'z' }, locals: { a: 'b' }, path: 'a/b/c.md', ext: '.md' } }, 
  '71': { 'a/b/c.md': { content: 'this is content.', locals: { a: 'b' }, path: 'a/b/c.md', ext: '.md' } }, 
  '72': { 'a/b/c.md': { content: 'this is content.', locals: { a: 'b' }, options: { y: 'z' }, path: 'a/b/c.md', ext: '.md' } }, 
  '73': { 'a/b/c.md': { content: 'this is content.', locals: { a: 'b' }, path: 'a/b/c.md', ext: '.md' } }, 
  '74': { 'a/b/c.md': { content: 'this is content.', path: 'a/b/c.md', ext: '.md' } }, 
  '75': { 'bar1.md': { path: 'a/b/c.md', locals: { name: 'Jon Schlinkert' }, ext: '.md', content: null } }, 
  '76': { 'baz.md': { path: 'a/b/c.md', locals: { go: true, name: 'Jon Schlinkert' }, ext: '.md', content: null } }, 
  '77': { foo: { content: 'this is content.', locals: { fez: 'foo', a: 'b' }, path: 'foo' } }, 
  '78': { 'foo/bar.md': { content: 'this is content.', data: { a: 'a' }, path: 'foo/bar.md', ext: '.md' } }, 
  '79': { 'foo/bar.md': { content: 'this is content.', locals: { foo: 'bar' }, path: 'foo/bar.md', ext: '.md' } }, 
  '80': { 'foo/bar.md': { content: 'this is content.', path: 'foo/bar.md', ext: '.md' } }, 
  '81': { a: { content: 'A above\n{{body}}\nA below', locals: { layout: 'b' }, path: 'a' } }, 
  '82': { a: { content: 'A above\n{{body}}\nA below', locals: { layout: 'b' }, path: 'a' } }, 
  '83': { b: { content: 'B above\n{{body}}\nB below', locals: { layout: 'c' }, path: 'b' } }, 
  '84': { c: { content: 'C above\n{{body}}\nC below', locals: { layout: 'd' }, path: 'c' } }, 
  '85': { 'a/b/c.md': { path: 'a/b/c.md', content: 'this is content.', options: { e: 'f', y: 'z' }, locals: { c: 'd', a: 'b' }, ext: '.md' } }, 
  '86': { 'a/b/c.md': { path: 'a/b/c.md', content: 'this is content.', options: { y: 'z' }, locals: { a: 'b' }, ext: '.md' } }, 
  '87': { 'a/b/c.md': { path: 'a/b/c.md', content: 'this is content.', locals: { a: 'b' }, ext: '.md' } }, 
  '88': { 'a/b/c.md': { path: 'a/b/c.md', content: 'this is content.', locals: { a: 'b' }, options: { y: 'z' }, ext: '.md' } }, 
  '89': { 'a/b/c.md': { path: 'a/b/c.md', content: 'this is content.', locals: { a: 'b' }, ext: '.md' } }, 
  '90': { 'a/b/c.md': { path: 'a/b/c.md', content: 'this is content.', ext: '.md' } }, 
  '91': { 'a/b/c.md': { path: 'a/b/c.md', content: 'this is foo', locals: { foo: 'bar' }, ext: '.md' } }, 
  '92': { 'one/two.md': { path: 'one/two.md', content: 'this is content.', data: { b: 'b' }, ext: '.md' } } 
}