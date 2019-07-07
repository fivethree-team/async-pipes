# Async Pipes

RxJS async pipes for Angular

## 📦 Installation
To get started, install the package from npm. The latest version supports Angular 7 and above.

You can use either npm or yarn to install `@fivethree/async-pipes` from npm.

```console
npm install @fivethree/async-pipes --save

# or if you are using yarn
yarn add @fivethree/async-pipes
```

## 🔨 Usage
Import the pipe module you like to use into your page or components module:

```typescript
import { NgModule } from '@angular/core';
import { PendingPipeModule } from '@fivethree/async-pipes';

@NgModule({
    imports: [
        PendingPipeModule
    ]
})
export class HomePageModule {}
```

## Pipes

### EmptyPipe -> `empty`
```html
<div *ngIf="numbers$ | empty | async">
    Empty State - Source Observable emitted an empty array
</div>
```

### ErrorPipe -> `error`
```html
 <div *ngIf="numbers$ | error | async as error">
    {{error}}
</div>
```

### PendingPipe -> `pending`

```html
<div *ngIf="numbers$ | pending | async">
    Pending State - Source Observable has not emitted yet
</div>
```