window.TEXT_SEARCH_DATA={
  {%- for _collection in site.collections -%}
    {%- unless forloop.first -%},{%- endunless -%}
    '{{ _collection.label }}':[
      {%- for _article in _collection.docs -%}
      {%- unless forloop.first -%},{%- endunless -%}
      {'title':{{ _article.title | jsonify }},
      {%- include snippets/prepend-baseurl.html path=_article.url -%}
      {%- assign _url = __return -%}
      'url':{{ _url | jsonify }},
      {%- if _article.excerpt -%}
      'excerpt':{{ _article.excerpt | strip_html | truncatewords: 50 | jsonify }},
      {%- else -%}
      'excerpt': '',
      {%- endif -%}
      {%- if _article.date -%}
      'date':{{ _article.date | date: '%Y-%m-%d' | jsonify }},
      {%- else -%}
      'date': '',
      {%- endif -%}
      {%- if _article.tags -%}
      'tags':{{ _article.tags | jsonify }},
      {%- else -%}
      'tags': [],
      {%- endif -%}
      {%- if _article.categories -%}
      'categories':{{ _article.categories | jsonify }},
      {%- else -%}
      'categories': [],
      {%- endif -%}
      {%- if _article.author -%}
      'author':{{ _article.author | jsonify }},
      {%- else -%}
      'author': '',
      {%- endif -%}
      'search_text':{{ _article.content | strip_html | truncatewords: 100 | jsonify }}}
      {%- endfor -%}
    ]
  {%- endfor -%}
};
