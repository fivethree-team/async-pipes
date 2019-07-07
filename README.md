# Async Pipes

### `empty`
```html
<div *ngIf="numbers$ | empty | async">
    Empty State - Source Observable emitted an empty value
</div>
```

### `error`
```html
 <div *ngIf="numbers$ | error | async as error">
    {{error}}
</div>
```

### `pending`

```html
<div *ngIf="numbers$ | pending | async">
    Pending State - Source Observable has not emitted yet
</div>
```