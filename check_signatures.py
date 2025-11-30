import os
import re

def extract_ts_signature(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'export\s+function\s+(\w+)\s*\((.*?)\)\s*:\s*(\w+(?:\[\])?)', content, re.DOTALL)
    if match:
        func_name = match.group(1)
        params = match.group(2).strip()
        return_type = match.group(3)
        return (func_name, params, return_type)
    return None

def extract_md_signature(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Ищем блок с сигнатурой
    match = re.search(r'```typescript\s*\nfunction\s+(\w+)\s*\((.*?)\)\s*:\s*(\w+(?:\[\])?)', content, re.DOTALL)
    if match:
        func_name = match.group(1)
        params = match.group(2).strip()
        return_type = match.group(3)
        return (func_name, params, return_type)
    return None

def normalize_params(params):
    if not params:
        return ""
    params = re.sub(r'\s+', ' ', params)
    return params.strip()

mismatches = []

for ts_file in os.listdir('src/core'):
    if not ts_file.endswith('.ts'):
        continue
    
    func_name = ts_file.replace('.ts', '')
    ts_path = f'src/core/{ts_file}'
    md_path = f'docs/api/{func_name}.md'
    
    if not os.path.exists(md_path):
        continue
    
    ts_sig = extract_ts_signature(ts_path)
    md_sig = extract_md_signature(md_path)
    
    if ts_sig and md_sig:
        ts_name, ts_params, ts_return = ts_sig
        md_name, md_params, md_return = md_sig
        
        # Нормализуем
        ts_params_norm = normalize_params(ts_params)
        md_params_norm = normalize_params(md_params)
        
        # Сравниваем
        if ts_params_norm != md_params_norm or ts_return != md_return:
            mismatches.append({
                'function': func_name,
                'ts_params': ts_params_norm,
                'md_params': md_params_norm,
                'ts_return': ts_return,
                'md_return': md_return
            })

if mismatches:
    print("❌ НАЙДЕНЫ НЕСООТВЕТСТВИЯ:\n")
    for m in mismatches:
        print(f"📝 {m['function']}:")
        if m['ts_params'] != m['md_params']:
            print(f"  Параметры в коде:  ({m['ts_params']})")
            print(f"  Параметры в docs:  ({m['md_params']})")
        if m['ts_return'] != m['md_return']:
            print(f"  Возврат в коде:  {m['ts_return']}")
            print(f"  Возврат в docs:  {m['md_return']}")
        print()
else:
    print("✅ Все сигнатуры совпадают!")

print(f"\nПроверено функций: {len(os.listdir('src/core'))}")
print(f"Найдено несоответствий: {len(mismatches)}")
